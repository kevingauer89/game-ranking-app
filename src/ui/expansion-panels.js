import React from 'react'
import { withStyles } from 'material-ui/styles'
import ExpansionPanel, {
    ExpansionPanelSummary,
    ExpansionPanelDetails,
} from 'material-ui/ExpansionPanel'
import Typography from 'material-ui/Typography'
import ExpandMoreIcon from 'material-ui/Icon'

const styles = theme => ({
    root: {
        width: '100%',
                         },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
    },
})

const mapResults = res => {
    return res.map((result) => {
        return (
            <ExpansionPanel>
                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>{result.name}</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <Typography>{result.summary}</Typography>
                </ExpansionPanelDetails>
            </ExpansionPanel>
        )
    })
}

function SimpleExpansionPanel(props) {
    const { classes } = props;
    console.log(props.props)
    return (
        <div className={classes.root}>
            {mapResults(props.props)}
        </div>
    )
}

export default withStyles(styles)(SimpleExpansionPanel)
