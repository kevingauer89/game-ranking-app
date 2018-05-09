import React from 'react'
import Igdb from 'igdb-api-node'
import Button from 'material-ui/Button'

class Results extends React.Component {

    state = {
        filters: {},
    }

    updateFilters = () => {
        if (this.props.platforms.length > 0)
            this.setState({filters: this.state.filters['platforms-in'] = this.props.platforms})
        if (this.props.genres.length > 0)
            this.setState({filters: this.state.filters['genres-in'] = this.props.genres})
    }

    setSecondaryFilters = (res) => {
        console.log(res)
    }

    componentDidMount () {
        console.log('mounted')
        this.props.props()
    }

    search = () => {
        Igdb(this.state.API).games({
                filters: this.state.filters,
                limit: 10,
                search: this.props.text
            },
            [
                'name',
                'summary',
            ]).then(res => this.props.results(res.body))
        this.setState({filters: {}})
    }

    setResults = () => {
        if(this.props.franchises !== '')
        this.secondarySearch()
        this.updateFilters()
        this.search()
        }

        render () {
        return null
    }
}

export default Results
