import axios from 'axios';
import qs from 'qs';
import * as Constants from '../../config/config';
let authUser = null;
let accessToken=null;
let refreshToken=null;
class AuthService {

    static get token(){
        return accessToken;
    }
    static login(val) {
        //http call
       // AuthService.isLoggedIn = true;
       console.log("i am called login", val);
        accessToken=val.access_token;
        refreshToken=val.refresh_token; 
        localStorage.setItem('accessToken', accessToken);
        localStorage.setItem('refreshToken', refreshToken);

    }
    static logout() {
        console.log("i am called logout");
        accessToken=null;
        refreshToken=null;
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');
    }

    static get isUserLoggedIn() {
        if(!accessToken)
        accessToken=localStorage.getItem('accessToken');
        console.log("accessToken",accessToken);
        if(accessToken)
        return true;
       
        return false;
    }

    static async authenticate(userName, password) {

       
        var encodedString = btoa("myApp_123456:myApp_123456");
        
    

        console.log('userName', userName);
        console.log('password', password);

        var authlogin = "Basic " + encodedString;
        console.log("encde", authlogin);
        var loginData = { grant_type: "password", username: userName, password: password, client_id: "myApp_123456" };
        let axiosConfig = {
            headers: {
                "Content-type": "application/x-www-form-urlencoded",
                "Authorization": authlogin
            }
        };

     
        authUser = await axios.post('http://localhost:9999/oauth2-jwt-server-service/oauth/token', qs.stringify(loginData), axiosConfig);
        const myToken=await axios.post('/api/getToken',loginData);
        console.log('mytoken', myToken);
        
        return authUser;
    }


    static async secureAuthenticate(userName, password) {
        var loginData = { grant_type: "password", username: userName, password: password };
        const retData=await axios.post('/api/getToken',loginData);
       console.log('mytoken', retData);
        
        return retData;
    }
}

export default AuthService;