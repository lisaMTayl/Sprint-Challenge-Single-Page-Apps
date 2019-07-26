import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  card: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function CharacterCard ({ image, name, status, species, origin, location, episodes }) {
  const classes = useStyles();
  return (

    <Card className={classes.card}>
      <CardContent
        className={classes.media}
          image={image}
          title={name}
    />
    </Card>

  )
}
