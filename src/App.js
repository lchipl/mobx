import React, { useState, useEffect } from "react";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Grid, Paper } from "@material-ui/core";
import { observer } from "mobx-react";
import { TableKripto } from "./components/TableKripto/tableKripto";
import { ConvertForm } from "./components/ConvertForm/convertForm";

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
        console.log("data", data);
        const coins = data.Data.map((coin) => {
          const obj = {
            name: coin.CoinInfo.Name,
            fullName: coin.CoinInfo.FullName,
            imageURL: `https://www.cryptocompare.com${coin.CoinInfo.ImageUrl}`,
            price: coin.DISPLAY.USD.PRICE,
            volue24hour: coin.RAW.USD.CHANGE24HOUR,
          };
          return obj;
        });
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
          <Paper>
            <ConvertForm />
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
});
