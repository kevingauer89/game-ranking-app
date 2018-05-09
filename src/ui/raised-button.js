import React from 'react'
import { withStyles } from 'material-ui/styles'
import Button from 'material-ui/Button'

const styles = theme => ({
    button: {
        margin: theme.spacing.unit,
    },
    input: {
        display: 'none',
    },
})

function RaisedButtons(props) {
    const { classes } = props
    return (
        <div>
            <Button variant="raised" color="default" className={classes.button}>
            </Button>
        </div>
    )
}

export default withStyles(styles)(RaisedButtons);
