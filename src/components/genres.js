import React from 'react'
import Results from './interpreter'
import Toggle from 'material-ui/Switch'
import Menu from '../ui/drop-down-menu'
import Panels from '../ui/expansion-panels'

class Data extends React.Component {

    state = {
        genres: [],
        results: []
    }

    setResults = (res) => {
        this.setState({results: res})
    }

     handleDelete = (genre_id) => {
         const genres = this.state.genres
         const deleted = genres.filter(a => a !== genre_id)
         this.setState({genres: deleted})
     }

     handleGenres = (value, genre_id, ...genre_ids) => {
         if (!value)
             this.handleDelete(genre_id)
         else {
             const genres = this.state.genres
             if(genres.filter(a => a === genre_id).length === 0)
             this.setState({genres: [...genres, ...genre_ids]})
         }
     }

    renderResults = () => {
        if (this.state.results.length > 0) {
            return (
                <div>
                    <br/>
                    <Panels props={this.state.results}/>
                </div>
            )
        }
    }

    handleChange = event => {
        const target = event.target
        const value = target.checked
        const name = target.name
            switch (name) {
                case 'point-and-click':
                    this.handleGenres(value, 2, 2)
                    break
                case 'fighting':
                    this.handleGenres(value, 4, 4)
                    break
                case 'shooter':
                    this.handleGenres(value, 5, 5)
                    break
                case 'music':
                    this.handleGenres(value, 7, 7)
                    break
                case 'platformer':
                    this.handleGenres(value, 8, 8)
                    break
                case 'racing':
                    this.handleGenres(value, 10, 10)
                    break
                case 'rts':
                    this.handleGenres(value, 11, 11)
                    break
                case 'rpg':
                    this.handleGenres(value, 12, 12)
                    break
                case 'simulator':
                    this.handleGenres(value, 13, 13)
                    break
                case 'sports':
                    this.handleGenres(value, 14, 14)
                    break
                case 'strategy':
                    this.handleGenres(value, 15, 15)
                    break
                case 'tbs':
                    this.handleGenres(value, 16, 16)
                    break
                case 'tactical':
                    this.handleGenres(value, 24, 24)
                    break
                case 'hack-and-slash':
                    this.handleGenres(value, 25, 25)
                    break
                case 'pinball':
                    this.handleGenres(value, 30, 30)
                    break
                case 'adventure':
                    this.handleGenres(value, 31, 31)
                    break
                case 'indie':
                    this.handleGenres(value, 32, 32)
                    break
                case 'arcade':
                    this.handleGenres(value, 34, 34)
                    break
            }
        }

    render() {
        return (
            <div>
                <form>
                    <h1 style={{textAlign: 'center'}}> Search Video Games</h1>
                    <hr/>
                    <div style={{textAlign: 'center'}}>
                        <h3 style={{textAlign: 'center'}}>Genres</h3>

                        Rpg <Toggle name="rpg" color="primary" onChange={this.handleChange}/>

                        Adventure <Toggle name="adventure" color="primary" onChange={this.handleChange}/>

                        Shooter <Toggle name="shooter" color="primary" onChange={this.handleChange}/>

                        Platformer <Toggle name="platformer" color="primary" onChange={this.handleChange}/>

                        Rts <Toggle name="rts" color="primary" onChange={this.handleChange}/>

                        Point and Click <Toggle name="point-and-click" color="primary" onChange={this.handleChange}/>

                        Fighting <Toggle name="fighting" color="primary" onChange={this.handleChange}/>

                        Hack n Slash <Toggle name="hack-and-slash" color="primary" onChange={this.handleChange}/>

                        Tactical <Toggle name="tactical" color="primary" onChange={this.handleChange}/>

                        Sports <Toggle name="sports" color="primary" onChange={this.handleChange}/>

                        Racing <Toggle name="racing" color="primary" onChange={this.handleChange}/>
                    </div>
                </form>
                    <main>
                    <br/>
                    <hr/>
                    <br/>
                        <Results genres={this.state.genres} results={this.setResults.bind(this)}/>
                        {this.renderResults()}
                    </main>
            </div>
        )
    }
}
export default Data

