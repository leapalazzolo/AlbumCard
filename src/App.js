import React from "react";
import "./App.css";
import Card from "./components/Card";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import albums from "./data";

const useStyles = makeStyles(theme => ({
  paper: {
    margin: "auto",
    maxWidth: 400
  },
  root: {
    flexGrow: 1
  }
}));

function App() {
  const classes = useStyles();
  const legend = "Rate this album";
  const listAlbums = albums.map(album => (
    <Grid item xs={4}>
      <Paper className={classes.paper}>
        <Card
          name={album.name}
          artist={album.artist}
          year={album.year}
          img={album.img}
          rating={album.rating}
          liked={album.liked}
          legend={legend}
        />
      </Paper>
    </Grid>
  ));
  return (
    <div className="App">
      <h1>Galeria de albumes</h1>
      <h5>
        El objetivo es tomar el array "albumes" e iterar la coleccion para poder
        construir una galeria de albumes. Para esto deberas crear el componente
        Album y pasar las props necesarias para renderizar dicha pieza.
      </h5>
      <div className={classes.root}>
        <Grid
          container
            spacing={2}
        >
          {listAlbums}
        </Grid>
      </div>
    </div>
  );
}

export default App;
