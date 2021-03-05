import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

import ProjectImg from '../../css/find-a-friend.png'

const useStyles = makeStyles({
	root: {
		maxWidth: 600,
		maxHeight: 'inherit',
		margin: '60px',
		border: '2px solid #5DE6FF',
	},
	media: {
		height: 140,
	},
})

const ProjectThree = () => {
const classes = useStyles()

let w = window.innerWidth

return (
	<Card className={classes.root} style={{margin: w > 1000 ? "60px" : "40px"}}>
		<CardActionArea>
			<CardMedia
			className={classes.media}
			image={ProjectImg}
			style={{height: w > 1000 ? 140 : 160}}
			title="Find A Friend"
			/>
			<CardContent>
				<Typography gutterBottom variant="h5" component="h3">
					Find A Friend
				</Typography>
				<Typography variant="body2" color="textSecondary" component="p">
					This is a website that helps animals find a forever home. With it you can adopt animals from shelters in your area.
				</Typography>
			</CardContent>
		</CardActionArea>
		<CardActions>
			<Button size="small" color="primary">
				<a href="https://gitlab.com/hdoss99/idb">GitLab</a>
			</Button>
		</CardActions>
	</Card>
)
}

export default ProjectThree