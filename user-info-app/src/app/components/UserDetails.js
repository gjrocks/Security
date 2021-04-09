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


class UserDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: {}
    }
  }
  continue = () => {
    this.props.nextStep();
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
                <div className={styles.headLabel}>
                  <label className={styles.textFieldStyle2}>Personal Details</label>
                </div>


                <div className={styles.ele}><label className={styles.label}>First Name:</label>
                  <TextField id="firstName" variant="outlined" label="First Name"
                    size="medium" defaultValue={values.firstName} onChange={handleChange('firstName')} /></div>
                <div className={styles.ele}>
                  <label className={styles.label}>Last Name:</label>
                  <TextField id="lasttName" variant="outlined" label="Last Name" size="medium" defaultValue={values.lastName} onChange={handleChange('lastName')} /></div>
                <div className={styles.ele}>
                  <label className={styles.label}>Email:</label>
                  <TextField id="email" variant="outlined" label="Email" size="medium" defaultValue={values.email} onChange={handleChange('email')} /></div>

              </div>
              <div className={styles.btn}>
                <Button variant="contained" title="Continue" color="primary" onClick={this.continue}>Continue</Button></div>



            </Paper>


          </Grid>
        </Grid>

      </div>




    );
  }
}

export default withStyles(useStyles)(UserDetails);
