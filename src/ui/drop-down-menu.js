import React from 'react'
import Button from 'material-ui/Button'
import Menu, { MenuItem } from 'material-ui/Menu'

class SimpleMenu extends React.Component {

    state = {
        anchorEl: null,
        selected: '',
    }

    handleClick = event => {
        this.setState({ anchorEl: event.currentTarget })
    }

    handleClose = (event) => {
        const target = event.target
        const split = target.id.split('/*#?&!')
        const value = split.length === 2 ? split[1] : target.value
        const id = split.length === 2 ? split[0] : target.id
        this.props.setResults(this.props.type, value)
        this.setState({anchorEl: null})
        this.setState({selected: `- ${id}`})
    }

    createMenu = () => {
        return this.props.items.map(item => {
            return (
                <MenuItem key={item.value + item.name} value={item.value} id={typeof item.value === 'string' ? item.name + '/*#?&!' + item.value : item.name}
                          onClick={this.handleClose}>{item.name}
                          </MenuItem>
            )
            }
        )
    }

    render() {
        const { anchorEl } = this.state
       return (
            <div>
                <Button
                    aria-owns={anchorEl ? 'simple-menu' : null}
                    aria-haspopup="true"
                    onClick={this.handleClick}
                >{this.props.title} {this.state.selected}
                </Button>
                <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}>
                {this.createMenu()}
                </Menu>
            </div>
        )
    }
}

export default SimpleMenu

