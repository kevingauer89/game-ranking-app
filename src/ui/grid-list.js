import React from 'react'
import { withStyles } from 'material-ui/styles'
import GridList, { GridListTile, GridListTileBar } from 'material-ui/GridList'
import IconButton from 'material-ui/IconButton'
import StarBorderIcon from 'material-ui/Icon'
import Image from '../logo.svg'

const styles = theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.blue
    },
    gridList: {
        width: 1080,
        height: 400,
        // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
        transform: 'translateZ(0)',
    },
    titleBar: {
        background:
        'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
        'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
    },
    icon: {
        color: 'white',
    },
});

/**
 * The example data is structured as follows:
 *
 * import image from 'path/to/image.jpg';
 * [etc...]
 *
 * const tileData = [
 *   {
 *     img: image,
 *     title: 'Image',
 *     author: 'author',
 *     featured: true,
 *   },
 *   {
 *     [etc...]
 *   },
 * ];
 */
function AdvancedGridList(props) {
    const { classes } = props
    const tileData = [
        {
            img: Image,
            title: 'Image',
            author: 'author',
            featured: true
        },
        {
            img: Image,
            title: 'Stuff',
            author: 'Guy',
            featured: true
        }
    ]

    return (
        <div className={classes.root}>
            <GridList cellHeight={200} spacing={1} className={classes.gridList}>
                {tileData.map(tile => (
                    <GridListTile key={tile.img} cols={tile.featured ? 2 : 1} rows={tile.featured ? 2 : 1}>
                        <img src={tile.img} alt={tile.title} />
                        <GridListTileBar
                            title={tile.title}
                            titlePosition="top"
                            actionIcon={
                                <IconButton className={classes.icon}>
                                    <StarBorderIcon />
                                </IconButton>
                            }
                            actionPosition="left"
                            className={classes.titleBar}
                        />
                    </GridListTile>
                ))}
            </GridList>
        </div>
    )
}

export default withStyles(styles)(AdvancedGridList);
