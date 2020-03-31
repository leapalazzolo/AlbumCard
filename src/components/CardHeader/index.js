import React from "react";
import PropTypes from "prop-types";
import urlPropType from "url-prop-type";
import LoveButton from "../LoveButton";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
  image: {
    width: 120,
    height: 120,
    float: "left"
  },
  itemSpace: {
    padding: theme.spacing(2)
  }
}));

export default function CardHeader(props) {
  const classes = useStyles();

  return (
    <>
      <img className={classes.image} src={props.img} alt={props.name}/>
      <Grid item sm container className={classes.itemSpace}>
        <Grid
          item
          xs
          container
          direction="column"
          justify="flex-start"
          alignItems="flex-start"
        >
          <Typography gutterBottom variant="h5">
            {props.name}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            {props.artist}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            {props.year}
          </Typography>
        </Grid>
        <Grid item>
          <LoveButton liked={props.liked} />
        </Grid>
      </Grid>
    </>
  );
}

CardHeader.propTypes = {
  name: PropTypes.string.isRequired,
  artist: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  img: urlPropType.isRequired,
  liked: PropTypes.bool
};

CardHeader.defaultProps = {
  liked: false
};
