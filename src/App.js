import React, { Component } from 'react'
import './App.css'
import Toggles from './components/simple-searches'
import Texts from './components/text-search'
import Panels from './ui/expansion-panels'
import Button from 'material-ui/Button'
import Search from './components/interpreter'
import Title from './ui/title-bar'

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
        limit: 0,
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
            <header>
                <Title/>
                <hr/>
                <Texts setResults={this.setResults}/>
                <br/>
                <hr/>
                <Toggles setResults={this.setResults}/>
            </header>
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
