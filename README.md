# Burger
Uses MySQL, Node, Express and Handlebars

![Alt text](public/assets/img/eatdaburger.JPG?raw=true "EatDaBurger")

I was unable to host on heroku. The instructions (Heroku Deployment Process
For MySQL Projects) are for Mac version MySQL Workbench so I walked through it but never figured it out.

![Alt text](public/assets/img/heroku_table.JPG?raw=true "HerokuTable")

What does this app do? 
A user type in a description of a burger and hit submit to create a burger on the left side of the screen. When the burger's "Devour It!" button is clicked to be devoured, the burger disappears on the left column and appears in the right side of the web page. There are three burgers that are already in the database. 

How is this app useful? 
This is the first 'full-stack' application which incorporates REST (REpresentational State Transfer), an important aspect of contemporary web applications. We have also followed the MVC format (Model, Views, Controller) for design. 

Challenges:
Keeping straight about which files are what portion of the MVC design and when it was loading was hard. The debugger functionality in VSCode was a great tool to figure out what each variable held and revealing each of the steps. I never figured out the heroku portion!

Future directions: 
I think it would be visually appealing to have an image of a burger that closely resembles the description show up instead of just the description. I wonder if it'll be possible to get a google image of a real "cheeseburger" to be inserted in the left side. 
