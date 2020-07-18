FROM maven:3.6.3-jdk-8 as builder

MAINTAINER Ganesh Jadhav, mail.ganesh.jadhav@gmail.com

#WORKDIR /opt/outh2-auth-server

COPY src /opt/outh2-auth-server/src
COPY pom.xml /opt/outh2-auth-server


RUN mvn -f /opt/outh2-auth-server/pom.xml clean package

FROM openjdk:8-jre as runtimeslim
WORKDIR /opt/oauth2-auth-server

COPY --from=builder /opt/outh2-auth-server/target/spring-security-oauth-server.war /opt/oauth2-auth-server/spring-security-oauth-server.war
EXPOSE 8981
ENTRYPOINT ["java","-jar","/opt/oauth2-auth-server/spring-security-oauth-server.war"] 