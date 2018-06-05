import React from 'react'
import Igdb from 'igdb-api-node'

const API = process.env.REACT_APP_API_KEY

class Results extends React.Component {

    state = {
        filter: {}
    }

    componentDidMount() {
        console.log(process.env)
        this.setFilters()
        this.checkSearches()
    }

    setFilters = () => {
        const filter = this.state.filter
        if (this.props.data.genres.length > 0) {
            filter[`genres-in`] = this.props.data.genres
            this.setState({filter: filter})
        }
        if (this.props.data.platforms.length > 0) {
            filter[`platforms-in`] = this.props.data.platforms
            this.setState({filter: filter})
        }
        if (this.props.data.game_modes > 0) {
            filter[`game_modes-in`] = this.props.data.game_modes
            this.setState({filter: filter})
        }
        if (this.props.data.esrb > 0) {
            filter[`esrb.rating-in`] = this.props.data.esrb
            this.setState({filter: filter})
        }
        if (this.props.data.rating > 0) {
            filter[`total_rating-gte`] = this.props.data.rating
            this.setState({filter: filter})
        }
    }

    checkSearches = () => {
        if (!('franchises-in' in this.state.filter) && this.props.data.franchises !== '')
            this.search('franchises')
        else if (!('publishers-eq' in this.state.filter) && this.props.data.companies !== '')
            this.search('companies')
        else if (!('characters-in' in this.state.filter) && this.props.data.characters !== '')
            this.search('characters', 'games')
        else this.mainSearch()
    }

    updateFilters = (type, id) => {
        const filter = this.state.filter
        if (type === 'companies') {
            filter['publishers-eq'] = id
            this.setState({filter: filter})
            this.checkSearches()
        }
        else {
            filter[`${type}-in`] = id
            this.setState({filter: filter})
            this.checkSearches()
        }
    }

    search = (type, ret ='id' ) => {
        Igdb(API)[type]({
                limit: 1,
                search: this.props.data[type]
            },
            [ret]
            ).then(res => {
                if (type === 'characters')
                     this.mainSearch(res.body[0][ret])
                else
                     this.updateFilters(type, res.body[0][ret])
        })
    }

    setSearch = (games) => {
        let search = {
            filters: this.state.filter,
            limit: 10,
            search: this.props.data.title
        }
        if (this.props.data.limit > 10)
            search.limit = this.props.data.limit
        if (this.props.data.order.length > 0)
            search.order = this.props.data.order
        if (Object.keys(this.state.filter).length === 0 && this.props.data.title === '' && this.props.data.characters !== '')
            search.ids = games
        else search.search = this.props.data.title
        return search
    }

    mainSearch = (games) => {
        const search = this.setSearch(games)
        console.log(search)
        Igdb(API).games(
               search,
            [
                'name',
                'summary',
                'total_rating',
                'genres',
                'platforms',
                'game_modes'
            ]).then(res => {
            if ('ids' in search)
                this.props.setData(res.body)
            else
                this.props.setData(res.body, games)
        })
        this.props.stop()
    }

    render() {
        return null
    }
}
export default Results
