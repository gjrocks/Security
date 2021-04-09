import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import SvgIcon from '@material-ui/core/SvgIcon';

import Link from '@material-ui/core/Link';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Registration from './Registration';
import Home from './Home';
import Admin from './Admin';
import LoginSuccess from './LoginSuccess';
import AuthService from '../services/auth/AuthService'
import { withRouter } from 'react-router-dom'
import '../css/App.css';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import {Config} from '../config/config';

import {
  Root,
  Header,
  Content,
  Sidebar,
  CollapseBtn,
  CollapseIcon,
  standardLayoutPreset,
} from '@mui-treasury/layout';
import Login from './Login';

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
      backgroundColor: "#3f51b5",
      color: "white"
    }
  },

  menuItemRoot: {

    backgroundColor: "#eff1f3",
    marginTop: 1



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


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 1,
      selection: 1,
      sideMenuSelected: "",
      open:false
    }
    this.handleSelection = this.handleSelection.bind(this);
    this.handleClickOpen=this.handleClickOpen.bind(this);
  //  this.getText = this.getText.bind(this);
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
  
  handleSelection(event, index, value) {
    this.setState({ selection: value });
  }
  handleChange = (input) => (e) => {

    this.setState({ [input]: e.target.value });
  }
  logout=()=>{
    AuthService.logout();
    console.log("i am logged out");
    this.setState({open:false});
    //this.setState({isLoggedIn:true});
  }
  handleClickOpen(){
    this.setState({open:true});
  }

  render() {

    const { classes } = this.props;
    const { match, location, history } = this.props;
    const layout2 = { ...standardLayoutPreset };

    console.log("is logged in :", AuthService.isUserLoggedIn);
    console.log("Config :", Config.authServer);
 


    return (


      <Root config={layout2}>
        <Header>
          <AppBar position="static" title="My App">
            <Toolbar >
              <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                <MenuIcon />
              </IconButton>

              <Typography variant="h6" className={classes.title}>
                My App
          </Typography>


              <div className="mybtn1">   <Button color="inherit" onClick={this.handleClickOpen}>Logout</Button></div>




            </Toolbar>

          </AppBar>

        </Header>
        <Sidebar>

          <CollapseBtn>
            <CollapseIcon />
          </CollapseBtn>

          <MenuItem onClick={(e) => {
            e.preventDefault();
            history.push('/');
            this.setState({ sideMenuSelected: "Home" });
          }} selected={this.state.sideMenuSelected === "Home"} classes={{
            root: classes.menuItemRoot,
            selected: classes.menuItemSelected
          }} >&nbsp;&nbsp;&nbsp;Home</MenuItem>

          <MenuItem onClick={(e) => {
            e.preventDefault();
            history.push('/registration');
            this.setState({ sideMenuSelected: "PersonDetails" });
          }} selected={this.state.sideMenuSelected === "PersonDetails"} classes={{
            root: classes.menuItemRoot,
            selected: classes.menuItemSelected
          }} >&nbsp;&nbsp;&nbsp;Registration</MenuItem>

      

         

        </Sidebar>
        <Content>



          <Switch>
            <Route path={"/registration"} exact component={Registration} />
            <Route path={"/"} exact component={Home} />
        

          </Switch>
          
          <Dialog
                open={this.state.open}
                onClose={this.handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
           >
        <DialogTitle id="alert-dialog-title">{"Do you want to logout?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
           If you logout, you will loose your data. Please save all the activities. Do you want to logout?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={this.logout} color="primary">
            Disagree
          </Button>
          <Button onClick={this.logout} color="primary" autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
        </Content>
        

      </Root>


    );
  }
}
App = withStyles(useStyles)(App);
App = withRouter(App);
export default App;


