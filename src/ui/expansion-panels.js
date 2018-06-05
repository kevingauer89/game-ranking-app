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
    return res.map(result => {
        return (
            <ExpansionPanel key={result.id}>
                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography> {result.name} <br/> Platforms:{result.platforms}
                    <br/> Genres: {result.genres}
                    </Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <Typography>{result.summary}</Typography>
                </ExpansionPanelDetails>
            </ExpansionPanel>
        )
    })
}

const genreNames = id => {
    switch (id) {
        default: return null
        case 12: return ' Rpg'
        case 31: return ' Adventure'
        case 5: return ' Shooter'
        case 8: return '  Platformer'
        case 11: return ' Rts'
        case 2: return ' Point and Click'
        case 4: return ' Fighting'
        case 25: return ' Hack n Slash'
        case 24: return ' Tactical'
        case 14: return ' Sports'
        case 10: return ' Racing'
    }
}

const gameModes = id => {
    switch(id) {
        default: return null
        case 1: return 'Single Player'
        case 2: return 'MultiPlayer'
        case 3: return 'Co-op'
        case 4: return 'Split Screen'
        case 5: return 'MMO'
    }
}

const platformNames = id => {
    switch (id) {
        default: return null
        case 8: return '  Ps2'
        case 11: return '  Xbox'
        case 21: return '  Gamecube'
        case 9: return '  Ps3'
        case 12: return '  Xbox 360'
        case 5: return '  Wii'
        case 41: return '  Wii U'
        case 48: return '  Ps4'
        case 49: return '  Xbox One'
        case 130: return '  Switch'
        case 6: return '  Pc'
    }
}

function SimpleExpansionPanel (props) {
    const { classes } = props
    const genres = props.props.map(res => {
        if(res.genres)
        return res.genres.map(id => genreNames(id))
        return 'N/A'
    })
    const platforms = props.props.map(res => {
        if(res.platforms)
        return res.platforms.map(id => platformNames(id))
        return 'N/A'
})
    const modes = props.props.map(res => {
        if(res.game_modes)
        return res.game_modes.map(id => gameModes(id))
        return 'N/A'
    })
    const results = props.props.map((res, index) => {
        res.genres = genres[index]
        res.platforms = platforms[index]
        res.game_modes = modes[index]
        return res
    })
    return (
        <div className={classes.root}>
            {mapResults(results)}
        </div>
    )
}

export default withStyles(styles)(SimpleExpansionPanel)
