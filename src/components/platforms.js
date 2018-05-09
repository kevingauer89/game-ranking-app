import React from 'react'
import Checkbox from 'material-ui/Checkbox'
import Results from './interpreter'

class Platforms extends React.Component {

    state = {
        name: false
    }

    render() {
        return(
            <div>
                <form>
                <h3 style={{textAlign: 'center'}}>Consoles</h3>
                <Checkbox color="primary" onChange={e => this.setState({name: e.target.checked})}/>
                <Checkbox color="primary"/>
                <Checkbox color="primary"/>
                <Checkbox color="primary"/>
                <Checkbox color="primary"/>
                <Checkbox color="primary"/>
                <Checkbox color="primary"/>
                <Checkbox color="primary"/>
                <Checkbox color="primary"/>
                <Checkbox color="primary"/>
                <Checkbox color="primary"/>
                </form>
            </div>
        )
    }
}
export default Platforms