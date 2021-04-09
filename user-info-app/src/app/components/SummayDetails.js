import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';

import Button from '@material-ui/core/Button';


import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import green from '@material-ui/core/colors/green';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from 'react-loader-spinner';




const useStyles = theme => ({
  root: {
    flexGrow: 1,
  },
  table: {
    minWidth: 500,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  paperStyle: {

    marginTop: 30,
    marginLeft: 30,
    textAlign: 'center',
    display: 'inline-block',
  },
  textFieldStyle: {
    padding: 20
  },
  divStyle: {
    padding: 5,
    margin: 5
  }
});

const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: "#3f51b5",
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);



class SummaryDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      loading: false
    }
  }
  continue = () => {
    this.props.nextStep();
  }
  previous = () => {
    this.props.prevStep();
  }

  handleClickOpen =  () => {
  // await authenticate();
    this.setState({ open: true });
    setTimeout(() => {
      this.setState({ loading: false, open: false });
    }, 3000);
  };

  handleClose = () => {
    this.setState({ open: false });

  };  

  handleCloseWithLoading = () => {
    this.setState({ loading: true, open: false });
    setTimeout(() => {
      this.setState({ loading: false, open: false });
    }, 3000);
  }

  render() {
    const { classes } = this.props;
    const { values } = this.props;
 
    return (

      <div>


        <Paper elevation={3} className={classes.paperStyle} label="Personal ">
          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell>Name</StyledTableCell>
                  <StyledTableCell align="right">Details</StyledTableCell>

                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <StyledTableCell>Name</StyledTableCell>
                  <StyledTableCell align="right">{values.firstName} {values.lastName}</StyledTableCell>
                </TableRow>
                <TableRow>
                  <StyledTableCell></StyledTableCell>
                  <StyledTableCell align="right"><Button variant="contained" title="Continue" color="primary" onClick={this.previous}>Previous</Button></StyledTableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
          <br></br>
          <div className={classes.divStyle}><Button variant="contained" title="Continue" color="primary" onClick={this.handleClickOpen}>Submit</Button></div>
          <div className={classes.divStyle}></div>


        </Paper>

     
        <div>

          <Dialog
            open={this.state.open}
            onClose={this.handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">{"Saving data"}</DialogTitle>
            <DialogContent align="center">
             
                <Loader
                  type="Puff"
                  color="#3f51b5"
                  height={100}
                  width={100}
                  timeout={0} //3 secs 

                />
              
            </DialogContent>
            <DialogActions>

            </DialogActions>
          </Dialog>
        </div>

      </div>

    );
  }
}

export default withStyles(useStyles)(SummaryDetails);
