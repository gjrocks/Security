import axios from 'axios';
import qs from 'qs';
export default function authenticate(){

    var encodedString = btoa("fooClientIdPassword:secret");
  
    var authlogin="Basic "+encodedString;
    console.log("encde",authlogin);
    var loginData = {grant_type:"password", username: "tom", password: "111", client_id: "fooClientIdPassword"};
    let axiosConfig = {
        headers : {
            "Content-type": "application/x-www-form-urlencoded",
            "Authorization" : authlogin
        }
      };

 
    axios.post('http://localhost:9999/spring-security-oauth-server/oauth/token',qs.stringify(loginData),axiosConfig).then((res)=>{
     console.log('res', res);

    },(error)=>{
        console.log("error" ,error);
    })

}

