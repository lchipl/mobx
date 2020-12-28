import React, { useState, useEffect } from "react";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Grid, Paper } from "@material-ui/core";
import { observer } from "mobx-react";
import { TableKripto } from "./components/TableKripto/tableKripto";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(10),
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

export const App = observer(() => {
  const classes = useStyles();

  const [Allcoins, setCoins] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://min-api.cryptocompare.com/data/top/totalvolfull?limit=10&tsym=USD"
      )
      .then(({ data }) => {
        const coins = data.Data;
        setCoins(coins);
      });
  }, []);

  return (
    <Container className={classes.root} maxWidth="lg">
      <Grid container spacing={3}>
        <Grid item xs={8}>
          <Paper>
            <TableKripto Allcoins={Allcoins} />
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper>xs=6</Paper>
        </Grid>
      </Grid>
    </Container>
  );
});
