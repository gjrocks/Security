var path = require('path');
var express = require('express');
var args = require('yargs').argv;

const axios = require('axios');
const btoa = require('btoa');
const qs = require('qs');

var bodyParser = require("body-parser");


var app = express();
console.log("Environment :", args.env);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var propertiesReader = require('properties-reader');
var propertiesPath = path.join(__dirname, '\\dist\\properties\\', args.env + '.properties');
console.log(propertiesPath);
var properties = propertiesReader(propertiesPath);

console.log('server.port', properties.get('server.port'));
app.use(express.static(path.join(__dirname, '\\dist\\app')));
// An api endpoint that returns a short list of items
app.get('/api/getList', (req, res) => {
  var list = ["item1", "item2", "item3"];
  res.json(list);
  console.log('Sent list of items');
});

app.post('/api/getToken', async (req, res) => {

  var userName = req.body.username;
  var password = req.body.password;
  console.log('userName', userName);
  console.log('password', password);
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

  /*  axios.post('http://localhost:8981/spring-security-oauth-server/oauth/token',qs.stringify(loginData),axiosConfig).then((res)=>{
   console.log('res', res);
   AuthService.isLoggedIn=true;        
  },(error)=>{
      console.log("error" ,error);
      AuthService.isLoggedIn=false;
  })*/
  var resData = await axios.post('http://localhost:9999/oauth2-jwt-server-service/oauth/token', qs.stringify(loginData), axiosConfig);
  //console.log("authUser", resData);
  var retData = {};

  if (resData.status === 200) {

    retData.access_token = resData.data.access_token;
    retData.refresh_token=resData.data.refresh_token;
    retData.status = 200;
    retData.message = "success";
  } else {

    console.log('error', v);

    retData.access_token = "";
    retData.refresh_token="";
    retData.status = 500;
    retData.message = v;
  }
  res.json({ "retData": retData });
  console.log('Sent token');
});


app.get('/*', function (req, res) {
  res.sendFile("index.html", { root: path.join(__dirname, '\\dist') });
});

app.listen(8089, function () {
  console.log("App is running at localhost: 8089")
});