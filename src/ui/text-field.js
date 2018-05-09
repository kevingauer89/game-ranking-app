import React from 'react';
import { withStyles } from 'material-ui/styles';
import TextField from 'material-ui/TextField';

const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 200,
    },
})

const TextFieldMargins = props => {
    const { classes } = props

    return (
        <div className={classes.container}>
            <TextField
                id="margin-none"
                className={classes.textField}
                helperText="Search by game name"
            />
        </div>
    )
}

export default withStyles(styles)(TextFieldMargins);
