import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import SvgIcon from '@material-ui/core/SvgIcon';
import UserDetails from './UserDetails';
import ContactDetails from './ContactDetails';
import IdDetails from './IdDetails';
import SummaryDetails from './SummayDetails';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import '../css/App.css';


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
  menuItemSelected: {
    "&$menuItemSelected, &$menuItemSelected:focus, &$menuItemSelected:hover": {
      backgroundColor: "#575555",
      color: "white"
    }
  },

  menuItemRoot: {
   
      backgroundColor: "#bdbdbd",
      marginTop:1
      
     
    
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

function HomeIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  );
}


class Registration extends Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 1,
      firstName: "",
      lastName: "",
      email: "",
      mobileNumber: "",
      NationalId: "",
      empId: "",
      passport: "",
      countryCode: "",
      selection: 1,
      sideMenuSelected: ""
    }
    this.handleSelection = this.handleSelection.bind(this);
    this.getText = this.getText.bind(this);
    this.links = [<Link href="#" onClick={(e) => {
      e.preventDefault();
      this.setState({ step: 1 });
    }} color="inherit" key={1}>
      Personal
  </Link>,
    <Link href="#" onClick={(e) => {
      e.preventDefault();
      this.setState({ step: 2 });
    }} color="inherit" key={2}>
      Contact
</Link>,
    <Link href="#" onClick={(e) => {
      e.preventDefault();
      this.setState({ step: 3 });
    }} color="inherit" key={3}>
      Id Details
  </Link>

    ];
    this.preventDefault = this.preventDefault.bind(this);
  }
  preventDefault(e) {
    e.preventDefault();
    console.log('event', e.target.value);
  }
  getText() {

    var t = [];
    for (var i = 0; i < this.state.step - 1; i++) {
      t.push(this.links[i]);
      t.push(" | ");


    }
    return t;
  }
  handleSelection(event, index, value) {
    this.setState({ selection: value });
  }
  //next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({ step: step + 1 });
  }


  //prev step
  prevStep = () => {
    const { step } = this.state;
    this.setState({ step: step - 1 });
  }

  handleChange = (input) => (e) => {

    this.setState({ [input]: e.target.value });
  }
  continue = () => {
    this.props.nextStep();
  }
  render() {
    const { classes } = this.props;

  


    const { step } = this.state;
    const { firstName,
      lastName,
      email,
      mobileNumber,
      nationalId,
      empId,
      passport,
      countryCode } = this.state;
    const values = {
      firstName,
      lastName,
      email,
      mobileNumber,
      nationalId,
      empId,
      passport,
      countryCode
    };


    return (


     
    
        
        <div>
          <Grid container spacing={1}>
            <Grid item xs={12} >
              <div className="page-navigation-text">
                {this.getText()}

              </div>
            </Grid>
          </Grid>
          {step === 1 &&
            <UserDetails
              nextStep={this.nextStep}
              prevStep={this.prevStep}
              handleChange={this.handleChange}
              values={values}

            />
          }
          {step === 2 &&
            <ContactDetails
              nextStep={this.nextStep}
              prevStep={this.prevStep}
              handleChange={this.handleChange}
              values={values}

            />
          }
         
          {
            step === 3 &&
            <IdDetails
              nextStep={this.nextStep}
              prevStep={this.prevStep}
              handleChange={this.handleChange}
              values={values}

            />
          }
          {
            step === 4 &&
            <SummaryDetails
              nextStep={this.nextStep}
              prevStep={this.prevStep}
              handleChange={this.handleChange}
              values={values}

            />
          }
        </div>


     


    );
  }
}

export default withStyles(useStyles)(Registration);
