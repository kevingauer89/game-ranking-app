import React, { Component } from 'react'
import './App.css'
import Toggles from './components/checkbox-searches'
import Texts from './components/text-search'
import Panels from './ui/expansion-panels'
import Button from 'material-ui/Button'
import Search from './components/interpreter'
import Title from './ui/title-bar'
import Dropdown from './ui/drop-down-menu'
import Slider from './ui/slider'

class App extends Component {

    state = {
        search: false,
        genres: [],
        platforms: [],
        franchises: '',
        characters: '',
        title: '',
        companies: '',
        order: '',
        limit: 10,
        rating: 0,
        game_modes: 0,
        esrb: 0,
        results: []
    }

    setResults = (type, value) => {
        this.setState({[type]: value})
    }

    setData = (data, games) => {
        console.log(data)
        if (games) {
            const filtered = data.filter(game => games.includes(game.id))
            this.setState({results: filtered})
        }
        else
            this.setState({results: data})
    }

    renderResults = () => {
        if(this.state.results.length > 0) {
            return (
                <div>
                    <br/>
                    <Panels props={this.state.results}/>
                </div>
            )
        }
    }

    stopSearch = () => {
        this.setState({search: false})
    }

    setSearch = () => {
        this.setState({search: true})
    }

    search = () => {
        if(this.state.search) {
            return (<Search stop={this.stopSearch} data={this.state} setData={this.setData}/>)
        }
        else return null
    }

  render() {
    return (
            <div>
                <Title/>
                <hr/>
                <Texts setResults={this.setResults}/>
                <br/>
                <hr/>
                <Toggles setResults={this.setResults}/>
                <br/>
                <hr/>
                <div className="Menus">
                    <div className="Right">
                <Dropdown setResults={this.setResults} title="Results Limit" type="limit" items={[
                    {name: '10', value: 10}, {name: '30', value: 30}, {name: '50', value: 50}]}/>
                    </div>
                    <div className="Right">
                <Dropdown setResults={this.setResults} title="Game Mode" type="game_modes" items={[
                    {name: 'Single Player', value: 1}, {name: 'Multiplayer', value: 2}, {name: 'Co-op', value: 3},
                    {name: 'Split Screen', value: 4}, {name: 'MMO', value:5}, {name: 'N/A', value: ''}]}/>
                    </div>
                    <div className="Right">
                <Dropdown setResults={this.setResults} title="Order By" type="order" items={[
                    {name: 'Relevance', value: ''}, {name: 'Release Date', value: 'release_dates.date:desc'},
                    {name: 'Popularity', value: 'popularity:desc'}, {name: 'Rating', value: 'total_rating:desc'}]}/>
                    </div>
                    <div className="Right">
                <Dropdown setResults={this.setResults} title="Esrb Rating" type="esrb" items={[
                    {name: 'Everyone', value: 3}, {name: 'Everyone 10+', value: 4}, {name: 'Teen', value: 5},
                    {name: 'Mature', value: 6}, {name: 'Adults Only', value: 7}, {name: 'N/A', value: ''}]}/>
                    </div>
                </div>
                <hr/>
                <div style={{borderStyle: 'double', marginTop: '2%'}}>
                <Slider setResults={this.setResults}/>
            </div>
            <main>
                <br/>
                <hr/>
                <hr/>
                <Button variant="raised" color="default" onClick={this.setSearch}> Search</Button>
                {this.renderResults()}
                {this.search()}
            </main>
        </div>
    )
  }
}

export default App
