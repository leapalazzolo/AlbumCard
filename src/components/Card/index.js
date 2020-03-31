import React from "react";
import PropTypes from "prop-types";
import urlPropType from "url-prop-type";
import CardHeader from "../CardHeader";
import CardFooter from "../CardFooter";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";

const useStyles = makeStyles(theme => ({
  divider: {
    margin: 0
  }
}));

export default function Card(props) {
  const classes = useStyles();

  return (
      <Grid container>
        <CardHeader
          name={props.name}
          artist={props.artist}
          year={props.year}
          img={props.img}
          liked={props.liked}
        />
        <Grid item xs={12}>
          <Divider className={classes.divider} />
        </Grid>
        <CardFooter 
        legend={props.legend}
        rating={props.rating}/>
      </Grid>
  );
}

Card.propTypes = {
  name: PropTypes.string.isRequired,
  artist: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  img: urlPropType.isRequired,
  rating: PropTypes.number,
  liked: PropTypes.bool,
  legend: PropTypes.string
};

Card.defaultProps = {
  rating: 0,
  liked: false
};
