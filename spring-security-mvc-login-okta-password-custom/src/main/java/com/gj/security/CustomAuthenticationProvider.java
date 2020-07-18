package com.gj.security;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;

import com.okta.jwt.Jwt;
//@Component
public class CustomAuthenticationProvider implements AuthenticationProvider {

    public CustomAuthenticationProvider() {
        super();
    }

    // API
    @Autowired
    OAuthTokenProvider oAuthTokenProvider;

    @Override
    public Authentication authenticate(final Authentication authentication) throws AuthenticationException {
    	System.out.println("oAuthTokenProvider :" +oAuthTokenProvider);
        final String name = authentication.getName();
        final String password = authentication.getCredentials().toString();
        final List<GrantedAuthority> grantedAuths = new ArrayList<>();
        try {
		Jwt token=	oAuthTokenProvider.getToken(name, password);
		System.out.println("token :" + token);
		
		 System.out.println(token.getTokenValue()); // print the token
         System.out.println(token.getClaims().get("invalidKey"));
         
         
         if(token.getClaims().get("ADMIN")!=null){
        	  grantedAuths.add(new SimpleGrantedAuthority("ROLE_ADMIN"));
         }
         
         if(token.getClaims().get("USER")!=null){
       	  grantedAuths.add(new SimpleGrantedAuthority("ROLE_USER"));
        }
         final UserDetails principal = new User(name, password, grantedAuths);
         final Authentication auth = new UsernamePasswordAuthenticationToken(principal, password, grantedAuths);
         return auth;
		} catch (Exception e) {
			
			e.printStackTrace();
		}
       // if (name.equals("admin") && password.equals("system")) {
           // final List<GrantedAuthority> grantedAuths = new ArrayList<>();
           // grantedAuths.add(new SimpleGrantedAuthority("ROLE_ADMIN"));
            //final UserDetails principal = new User(name, password, grantedAuths);
            
			/*
			 * final UserDetails principal = User.withDefaultPasswordEncoder()
			 * .username("admin") .password("system") .roles("ADMIN") .build();
			 */
           // final Authentication auth = new UsernamePasswordAuthenticationToken(principal, password, grantedAuths);
           // return auth;
       // } else {
            return null;
       // }
    }

    @Override
    public boolean supports(final Class<?> authentication) {
        return authentication.equals(UsernamePasswordAuthenticationToken.class);
    }

}
