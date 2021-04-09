import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import { TextField } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import styles from '../css/myStyle.module.css';
import Grid from '@material-ui/core/Grid';


const useStyles = theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  paperStyle: {

    //height: 500,
    // width: 600,
    marginTop: 30,
    marginLeft: 30,
    textAlign: 'center',
    display: 'inline-block',
  },
  textFieldStyle: {
    textAlign: 'center'
  },
  appbarstyle: {
    primary: {
      light: "#7986cb",
      main: "rgba(85, 160, 5, 1)",
      dark: "#303f9f",
      contrastText: "#fff"
    }
  },
  navBar: { 'top': AppBar.height }

});


class ContactDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: {}
    }
  }
  continue = () => {
    this.props.nextStep();
  }
  previous = () => {
    this.props.prevStep();
  }
  render() {
    const { classes } = this.props;
    const { values, handleChange } = this.props;

    return (


   
      <div>

        <Grid container spacing={3}>
          <Grid item xs={12} >
          <Paper elevation={3} className={classes.paperStyle} label="Personal ">
          <div className={styles.content}>
            <div className={styles.headLabel}><label className={styles.textFieldStyle2}>Contact Details</label></div>


            <div className={styles.ele}> <label className={styles.label}>Mobile Number:</label>
            <TextField id="mobileNumber" variant="outlined" label="Mobile Number"
              size="medium" defaultValue={values.mobileNumber} onChange={handleChange('mobileNumber')} />
            </div>
            <div className={styles.ele}>  <label className={styles.label}>National Id:</label>
            <TextField id="nationalId" variant="outlined" label="National Id" size="medium" defaultValue={values.nationalId}
              onChange={handleChange('nationalId')} />
           </div>
            <div className={styles.ele}> <label className={styles.label}>Emp Id:</label>
            <TextField id="empId" variant="outlined" label="Emp Id" size="medium"
              defaultValue={values.empId} onChange={handleChange('empId')} />
              </div>
            <br>
            </br>
            <br>
            </br>
           
            <div className={styles.ele}><Button variant="contained" title="Continue" color="primary" onClick={this.continue}>Continue</Button>
            <Button variant="contained" title="Continue" color="primary" onClick={this.previous}>Previous</Button></div>

          </div>

        </Paper>


          </Grid>
        </Grid>

      </div>




    );
  }
}

export default withStyles(useStyles)(ContactDetails);
