import React from 'react'
import clsx from 'clsx'
import { makeStyles } from '@material-ui/core/styles'
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer'
import Button from '@material-ui/core/Button'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import { withStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
    list: {
        width: 250,
        backgroundColor: '#313131',
        border: '2px solid #5DE6FF',
        height: '100vh',
    },
    fullList: {
        width: 'auto',
    },
    links: {
        textDecoration: 'none', 
        color: '#5DE6FF',
    },
    button: {
        fontSize: '32px',
        color: '#5DE6FF',
    },
})
  
const SwipeableTemporaryDrawer = () => {
    const classes = useStyles()
    const [state, setState] = React.useState({
        right: false,
    })

    const toggleDrawer = (anchor, open) => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
        return
    }

    setState({ ...state, [anchor]: open })
    }

    const list = (anchor) => (
    <div
        className={clsx(classes.list,{
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
        })}
        role="presentation"
        onClick={toggleDrawer(anchor, false)}
        onKeyDown={toggleDrawer(anchor, false)}
    >
        <List>
        {['Projects', 'Resume', 'About'].map((text, index) => (
            <ListItem button key={text}>
                <a href={"#screen" + (2+index)} className={classes.links}>
                    <ListItemText primary={text} />
                </a>
            </ListItem>
        ))}
        </List>
    </div>
    )
  
    return (
        <div class="small-nav">
            {['right'].map((anchor) => (
            <React.Fragment key={anchor}>
                <Button className={classes.button} onClick={toggleDrawer(anchor, true)}>&#9776;</Button>
                <SwipeableDrawer
                
                anchor={anchor}
                open={state[anchor]}
                onClose={toggleDrawer(anchor, false)}
                onOpen={toggleDrawer(anchor, true)}
                >
                {list(anchor)}
                </SwipeableDrawer>
            </React.Fragment>
            ))}
        </div>
    )
}

export default withStyles(useStyles)(SwipeableTemporaryDrawer)