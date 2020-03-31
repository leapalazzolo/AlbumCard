import React from "react";
import PropTypes from "prop-types";
import Rating from "@material-ui/lab/Rating";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteIconBorder from "@material-ui/icons/FavoriteBorder";
import { withStyles } from "@material-ui/core/styles";

export default function LoveButton(props) {
  const StyledRating = withStyles({
    iconFilled: {
      color: "#ff6d75"
    },
    iconHover: {
      color: "#ff3d47"
    }
  })(Rating);

  return (
    <StyledRating
      name="customized-color"
      defaultValue={false}
      value={props.liked}
      max={1}
      icon={<FavoriteIcon fontSize="inherit" />}
      emptyIcon={<FavoriteIconBorder />}
    />
  );
}

LoveButton.propTypes = {
  liked: PropTypes.bool
};

LoveButton.defaultProps = {
  liked: false
};
