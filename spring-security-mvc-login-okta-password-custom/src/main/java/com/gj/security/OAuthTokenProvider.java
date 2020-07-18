package com.gj.security;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.time.Duration;
import java.util.ArrayList;
import java.util.Base64;
import java.util.List;

import org.apache.http.HttpHeaders;
import org.apache.http.HttpStatus;
import org.apache.http.NameValuePair;
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.client.utils.URIBuilder;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import org.apache.http.message.BasicNameValuePair;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.PropertySource;
import org.springframework.stereotype.Service;

import com.okta.jwt.AccessTokenVerifier;
import com.okta.jwt.Jwt;
import com.okta.jwt.JwtVerifiers;




@Service
@PropertySource("classpath:webapp.properties")
public class OAuthTokenProvider {
    
        
	@Value( "${okta.issuer.token.url}" )
	private String ISSUER_TOKEN_URL;
    
	@Value( "${okta.issuer.url}" )
	private String ISSUER_URL;
	
	@Value( "${okta.issuer.audience}" )
	private String AUDIENCE;
    
	@Value( "${okta.client.id}" )
	private String CLIENT_ID;
    
	
	@Value( "${okta.client.passkey}" )
	private String CLIENT_PASS_KEY;
    
    //private String ISSUER_TOKEN_URL="https://dev-630584.okta.com/oauth2/default/v1/token";
    
    public static void main(String[] args) throws Exception{
    }
    	
    public Jwt getToken(String username,String password) throws Exception{
    	System.out.println("tokenurl :" +ISSUER_TOKEN_URL);
    	String jwtString =getAccessToken(username,password);
       // 1. build the parser
        AccessTokenVerifier jwtVerifier = JwtVerifiers.accessTokenVerifierBuilder()
                                    .setIssuer(ISSUER_URL)
                                    .setAudience(AUDIENCE)
                                    .setConnectionTimeout(Duration.ofSeconds(5)) // defaults to 1000ms
                                    .setReadTimeout(Duration.ofSeconds(5))       // defaults to 1000ms
                                    .build();
    	 Jwt jwt = jwtVerifier.decode(jwtString);

         // 3. Do something with the token
         System.out.println(jwt.getTokenValue()); // print the token
         System.out.println(jwt.getClaims().get("invalidKey")); // an invalid key just returns null
         System.out.println(jwt.getClaims().get("groups")); // handle an array value
         System.out.println(jwt.getExpiresAt()); 
          return jwt;
    }

    public  String getAccessToken(String username, String password) {
       
    	 CloseableHttpClient httpClient =null;
         BufferedReader reader = null;
    	try {   
        	
        	 //add the http parameters you wish to pass
            List<NameValuePair> postParameters = new ArrayList<NameValuePair>();
           // postParameters.add(new BasicNameValuePair("client_id", ""));
           // postParameters.add(new BasicNameValuePair("client_secret", ""));
            postParameters.add(new BasicNameValuePair("grant_type", "password"));
            postParameters.add(new BasicNameValuePair("scope", "zol"));
            postParameters.add(new BasicNameValuePair("username", username));
            postParameters.add(new BasicNameValuePair("password", password));
              
              
            //scope=customScope
            //Build the server URI together with the parameters you wish to pass
            URIBuilder uriBuilder = new URIBuilder(ISSUER_TOKEN_URL);
            uriBuilder.addParameters(postParameters);
            //String encoding = Base64.getEncoder().encodeToString(("test1:test1").getBytes(​));
           String httpBasic=CLIENT_ID+":"+CLIENT_PASS_KEY;
            String encoding=Base64.getEncoder().encodeToString(httpBasic.getBytes("UTF-8"));
            httpClient = HttpClients.createDefault();
            //System.out.println("Encoding :" +encoding);
            HttpPost postRequest = new HttpPost(uriBuilder.build());
            postRequest.addHeader(HttpHeaders.CONTENT_TYPE,"application/x-www-form-urlencoded");
            postRequest.setHeader(HttpHeaders.AUTHORIZATION, "Basic " + encoding);
            postRequest.addHeader(HttpHeaders.ACCEPT,"application/json");
            postRequest.addHeader(HttpHeaders.CACHE_CONTROL,"no-cache");
            CloseableHttpResponse httpResponse = httpClient.execute(postRequest);
            
            JSONParser parser = new JSONParser();
            if (httpResponse.getStatusLine().getStatusCode() == HttpStatus.SC_OK) {
                System.out.println("Successful return from API");
                reader = new BufferedReader(new InputStreamReader(httpResponse.getEntity().getContent()));
                JSONObject node = (JSONObject) parser.parse(reader);
                Object accessToken=node.get("access_token");
                return  accessToken!=null?accessToken.toString():null;
            }
           
           
            return null;
            
        }catch (Exception ex){
            throw  new RuntimeException("Error while get Access Token" + ex);
        }finally {
        	try {
        		if(httpClient!=null)
        			httpClient.close();
        		if(reader!=null)
        			reader.close();
        	}catch(Exception e) {
        		
        	}
        }
    }
}
