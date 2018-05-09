import React from 'react'
import Igdb from "igdb-api-node"

export default class extends React.Component {

    componentDidMount () {
        console.log('mounted')
        Igdb.franchises({
                limit: 1,
                search: 'star wars'
            },
            [
                'name'
            ]).then(res => this.props.set(res))
    }

    render() {
        return (
            <div>

            </div>
        )
    }
}