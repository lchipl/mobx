import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
  icon: {
    width: 22,
    height: 22,
    borderRadius: 30,
  },
});

export const TableKripto = ({ Allcoins }) => {
  console.log("d", Allcoins);
  const classes = useStyles();
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="left">Icon</StyledTableCell>
            <StyledTableCell align="left">Name</StyledTableCell>
            <StyledTableCell align="left">Short Name </StyledTableCell>
            <StyledTableCell align="left">Value </StyledTableCell>
            <StyledTableCell align="left">Value 24h</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {Allcoins.map((Coin) => (
            <StyledTableRow>
              <StyledTableCell component="th" scope="row">
                <img className={classes.icon} src={Coin.imageURL} />
              </StyledTableCell>
              <StyledTableCell component="th" scope="row">
                {Coin.fullName}
              </StyledTableCell>
              <StyledTableCell align="left">{Coin.name}</StyledTableCell>
              <StyledTableCell align="left">{Coin.price}</StyledTableCell>
              <StyledTableCell align="left">{Coin.volue24hour}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
