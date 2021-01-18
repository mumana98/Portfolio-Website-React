import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

import ProjectImg from '../../css/todo.png'

const useStyles = makeStyles({
  root: {
    maxWidth: 600,
    margin: '60px',
  },
  media: {
    height: 140,
  },
})

const ProjectOne = () => {
  const classes = useStyles()

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={ProjectImg}
          title="Todo List"
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            This todo list was made following the Udemey course Web Programming.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          <a href="">View</a>
        </Button>
        <Button size="small" color="primary">
        <a href="">GitHub</a>
        </Button>
      </CardActions>
    </Card>
  )
}

export default ProjectOne