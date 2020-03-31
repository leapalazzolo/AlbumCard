import React from "react";
import PropTypes from "prop-types";
import Rating from "@material-ui/lab/Rating";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
  itemSpace: {
    padding: theme.spacing(2)
  }
}));

export default function CardFooter(props) {
  const classes = useStyles();

  return (
    <>
      <Grid
        item
        xs={6}
        className={classes.itemSpace}
        container
        alignItems="flex-start"
      >
        <Typography variant="body2" color="textSecondary">
          {props.legend}
        </Typography>
      </Grid>
      <Grid
        item
        xs={6}
        className={classes.itemSpace}
        container
        direction="column"
        justify="flex-end"
        alignItems="flex-end"
      >
        <Rating
          name="half-rating"
          precision={0.5}
          value={props.rating}
          emptyIcon={<StarBorderIcon fontSize="inherit" />}
        />
      </Grid>
    </>
  );
}

CardFooter.propTypes = {
  legend: PropTypes.string.isRequired,
  rating: PropTypes.number
};

CardFooter.defaultProps = {
  rating: 0,
};
