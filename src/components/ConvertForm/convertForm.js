import React from "react";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Select from "@material-ui/core/Select";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      padding: theme.spacing(10),
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: "center",
      color: theme.palette.text.secondary,
    },
    cryptoInputBox: {
      marginBottom: 20,
      marginTop: 20,
    },
    currencyInput: {
      minWidth: "calc(70% - 10px)",
      marginRight: 10,
    },
    currencyType: {
      minWidth: "30%",
    },
    table: {
      minWidth: 650,
    },
    currencyIcon: {
      width: 18,
      height: 18,
      borderRadius: 30,
    },
    redColumn: {
      backgroundColor: "#d8ffc4",
    },
    greenColumn: {
      backgroundColor: "#ffdada",
    },
    rowCurrency: {
      cursor: "pointer",
    },
  })
);

export const ConvertForm = () => {
  const classes = useStyles();
  return (
    <Paper className={classes.paper}>
      <div className={classes.cryptoInputBox}>
        <FormControl className={classes.currencyInput}>
          <TextField type="number" label="Сумма" />
        </FormControl>
        <FormControl className={classes.currencyType}>
          <InputLabel shrink id="demo-simple-select-placeholder-label-label">
            Валюта
          </InputLabel>
          <Select></Select>
        </FormControl>
      </div>
      <div className={classes.cryptoInputBox}>
        <FormControl className={classes.currencyInput}>
          <TextField type="number" label="Сумма" />
        </FormControl>
        <FormControl className={classes.currencyType}>
          <InputLabel shrink id="demo-simple-select-placeholder-label-label">
            Валюта
          </InputLabel>
          <Select></Select>
        </FormControl>
      </div>
      77шт
    </Paper>
  );
};
