import React from 'react'
import Toggle from 'material-ui/Switch'
import Checkbox from 'material-ui/Checkbox'

class Data extends React.Component {

    state = {
        genres: [],
        platforms: []
    }

    handleDelete = (type, id) => {
        const array = this.state[type]
        const deleted = array.filter(a => a !== id)
        this.setState({[type]: deleted})
        this.props.setResults(type, deleted)
    }

    handleState = (type, value, id, ...ids) => {
        if (!value)
            this.handleDelete(type, id)
        else {
            const array = this.state[type]
            if (array.filter(a => a === id).length === 0) {
                let res = [...array, ...ids]
                this.setState({[type]: [...array, ...ids]})
                this.props.setResults(type, res)
            }
        }
    }

    handleChecked = event => {
        const target = event.target
        const type = target.id
        const value = target.checked
        const id = Number.parseInt(target.name)
        this.handleState(type, value, id, id)
    }

    render() {
        return (
            <div>
                <div style={{textAlign: 'center'}}>
                    <h3 style={{textAlign: 'center'}}>Genres</h3>

                    Rpg <Toggle name="12" id="genres" color="primary" onChange={this.handleChecked}/>

                    Adventure <Toggle name="31" id="genres" color="primary" onChange={this.handleChecked}/>

                    Shooter <Toggle name="5" id="genres" color="primary" onChange={this.handleChecked}/>

                    Platformer <Toggle name="8" id="genres" color="primary" onChange={this.handleChecked}/>

                    Rts <Toggle name="11" id="genres" color="primary" onChange={this.handleChecked}/>

                    Point and Click <Toggle name="2" id="genres" color="primary" onChange={this.handleChecked}/>

                    Fighting <Toggle name="4" id="genres" color="primary" onChange={this.handleChecked}/>

                    Hack n Slash <Toggle name="25" id="genres" color="primary" onChange={this.handleChecked}/>

                    Tactical <Toggle name="24" id="genres" color="primary" onChange={this.handleChecked}/>

                    Sports <Toggle name="14" id="genres" color="primary" onChange={this.handleChecked}/>

                    Racing <Toggle name="10" id="genres" color="primary" onChange={this.handleChecked}/>

                </div>
                <br/>
                <hr/>
                <div style={{textAlign: 'center'}}>
                    <h3>Platforms</h3>

                    Ps2 <Checkbox name="8" id="platforms" color="primary" onChange={this.handleChecked}/>

                    Xbox <Checkbox name="11" id="platforms" color="primary" onChange={this.handleChecked}/>

                    Gamecube <Checkbox name="21" id="platforms" color="primary" onChange={this.handleChecked}/>

                    Ps3 <Checkbox name="9" id="platforms" color="primary" onChange={this.handleChecked}/>

                    Xbox 360 <Checkbox name="12" id="platforms" color="primary" onChange={this.handleChecked}/>

                    Wii <Checkbox name="5" id="platforms" color="primary" onChange={this.handleChecked}/>

                    Wii U<Checkbox name="41" id="platforms" color="primary" onChange={this.handleChecked}/>

                    Ps4 <Checkbox name="48" id="platforms" color="primary" onChange={this.handleChecked}/>

                    Xbox one <Checkbox name="49" id="platforms" color="primary" onChange={this.handleChecked}/>

                    Switch <Checkbox name="130" id="platforms" color="primary" onChange={this.handleChecked}/>

                    Pc <Checkbox name="6" id="platforms" color="primary" onChange={this.handleChecked}/>

                </div>
            </div>
        )
    }
}
export default Data

