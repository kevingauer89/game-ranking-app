import React from 'react'
import Text from 'material-ui/TextField'
import Paper from 'material-ui/Paper'

class Texts extends React.Component {

    handleText = (event) => {
        const target = event.target
        this.props.setResults(target.id, target.value)
    }

    render() {
        return (
            <div>
                <Paper elevation={10} style={{padding: 12, margin: 32, paddingBottom: 52, backgroundColor: 'light blue'}}>
                <div style={{textAlign: 'center'}}>
                    <h3>Text Search</h3>

                    <Text helperText="Game Title" type="text" id="title" onChange={this.handleText}/>

                    <Text style={{marginLeft: '20px'}} helperText="Character name (e.g. Kratos)" type="text" id="characters" onChange={this.handleText}/>

                    <Text style={{marginLeft: '20px'}} helperText="Franchise (e.g. Star Wars)" type="type" id="franchises" onChange={this.handleText}/>

                    <Text style={{marginLeft: '20px'}} helperText="Company (e.g. Capcom)" type="type" id="companies" onChange={this.handleText}/>

                </div>
                </Paper>
            </div>
        )
    }
}
export default Texts