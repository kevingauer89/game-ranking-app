import React, { Component } from 'react'
import './App.css'
import Toggles from './components/genres-platforms'
import Texts from './components/text-search'
import Panels from './ui/expansion-panels'
import Button from 'material-ui/Button'
import Search from './components/interpreter'

class App extends Component {

    state = {
        search: false,
        genres: [],
        platforms: [],
        franchise: '',
        character: '',
        title: '',
        company: '',
        results: []
    }

    setResults = (type, value) => {
        this.setState({[type]: value})
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
            return (<Search props={this.stopSearch}/>)
        }
        else return null
    }

  render() {
    return (
        <div>
            <header>
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
