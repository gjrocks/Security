import React, { Component } from 'react';
import AuthService from '../services/auth/AuthService';

const Admin =(props)=>{
    if(AuthService.isUserLoggedIn){
return(

  <div className="homeBox"><h2 style={{margin:10}}>Admin</h2></div>
);
}else{
    return(

        <div className="homeBox"><h2 style={{margin:10}}>go to login</h2></div>
      );
}
}

export default Admin;