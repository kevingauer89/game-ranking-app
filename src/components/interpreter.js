import React from 'react'
import Igdb from 'igdb-api-node'

class Results extends React.Component {

    setResults = (filter = {}) => {
        if(this.props.genres.length > 0)
            filter = {'genres-in': this.props.genres}
        const API = '72c0ae10589b27ff325dba3c91cb55d7'
        const client = Igdb(API)
        client.games({
            filters: filter,
                limit: 10,
                search: ''
            },
            [
                'name',
                'summary',
            ]).then(res => this.props.results(res.body))
    }

    render() {

        return (
            <div>
                <button onClick={this.setResults.bind(this)}>Search</button>
            </div>
        )
    }
}

export default Results
