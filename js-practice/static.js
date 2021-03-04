class AuthService{
    
    
    static login(){
        //http call
        AuthService.isLoggedIn=true;
        
    }
    static logout(){
        AuthService.isLoggedIn=false;
        
    }
    static getLoggedIn(){
        return AuthService.isLoggedIn; 
    }
}
AuthService.isLoggedIn=false;

console.log(AuthService.getLoggedIn());
AuthService.login();
console.log(AuthService.getLoggedIn());
AuthService.logout();
console.log(AuthService.getLoggedIn());