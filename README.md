
BackendRepo

PokePlay

Project2:  Pokemon catching simulation environment
Member: Abdellatif Elmansouri, Andes Felipe Cabezas, Howard Tran

Project Proposal : We are making an exciting new addition to Pokemon. A Web based application that will allow Pokemon trainers to CatchThemAll. Our Application will allow users to entire a simulated environment where they can catch multiple Pokemon and view their skills and abilities. Trainers will also be able to communicate with other Trainers and trade/battle their pokemon. We will be pulling all the information from PokeApi: https://pokeapi.co/

Main User Stories
Trainer can Create Account
Trainer can Login in and log out.
Trainer can view pokemon catched
Trainer can view profile information
Trainer can view the pokemon catching simulation(random pokemon pops up each 2minutes)
Trainer can update information
Trainer can catch or deny pokemon
Trainer can check the health of pokemon
Trainer can view the time he catches pokemon
Trainer can see his items inventory

Technologies used:  HTML, CSS, TYPESCRIT, JAVASCRIPT, JAVA 8, POSGRESQL
			ANGULAR FRAMEWORK, SPRING, RUnNing on TOMCAT SERVER
			

Dat Model: SPRING MVC, SPRING ORM, SPRING DATA
for creating the database we used SPRING beans. We used SPRING DATA to add our standard DOA methods to access the database. We also used SPRINGS OBJECT RELATIONAL MODEL to create tables and their constraints in the databse. Spring model view controllor was used to connect Java to the Angular and the front end..


3 tables, Trainer table, Pokemon table and a join table to connect them both
 Trainers table 
- Primary key Trainer Id
 Pokemons table
- Primary key Pokemon Id
 
 
1). In the front end we bulit the html pages and their routing connections first. 
2).we built a page for cathcing pokemon, that popped with in a certain time interval. We made a page conencted to the pokemon api to pull out information about pokemon, and we created a user page, for users to login and view their user info/pokemon
3) connect with our database to get userinformation, and save created accounts for login
4) Then we figured out how to access info in other components using observables and a service. To get API and login information send from different compoents
5) We got user authincaiton and user token so we could display trainer information and their pokemon by user.
6) we created j unit test to test if connection to the database was succesful
