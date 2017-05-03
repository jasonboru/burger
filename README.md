# Burger - Node Express Handlebars

## UCF Coding Bootcamp Week 14 Project

---

### Overview

In this assignment, I was asked to create a burger logger with MySQL, Node, Express, Handlebars and a homemade ORM. I followed the MVC design pattern; using Node and MySQL to query and route data in the app, and Handlebars to generate the HTML.

Check out the app running on heroku here:

## Installation Instructions

1. Fork this repo and clone the forked repo to your computer. You will need node.js installed on your system.
2. At the command line navigate to the apps folder and run `npm install`, this will install the npm dependencies from the package.json file.
3. Install mysql on your machine, if necessary -> https://www.mysql.com/
4. Set up your own localhost connection. In the /config/connection.js file in this repo, update the connection settings as follows:

```javascript
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : <enter your user information>,
  password : <enter your password>,
  database : 'burgers_db'
});
```
5. In mysql Workbench, import `schema.sql` and `seeds.sql` from the db directory in this repo and run them to upload the db onto your localhost.
6. Then run `node server.js` the console should log the port number the app will be on (currently 3000).
7. Go to your browser and type http://localhost:3000/ into the address bar to bring up the app.

---
## Screenshots

1. Initially the page will have the data from the schema seeds that were importerted in; three records in the burger list and 1 in the devoured list.

![Screenshot-01](/public/assets/img/screenshot1.jpg)

2. New records can be added to the Burgers list by typing a name into the bottom form field and clicking the _Save Burger!_ button.

![Screenshot-02](/public/assets/img/screenshot2.jpg)
...After saving the burger it is added to the list.
![Screenshot-03](/public/assets/img/screenshot3.jpg)

3. If a user clicks the _I'll Eat it!_ button the burger status is changed to devoured and it will now appear in the devoured list to the right.

![Screenshot-04](/public/assets/img/screenshot4.jpg)

4. If the user is felling fat and does not want to broadcast all the burgers they devaoured they can click the delete button next to the burger record they want to erase.

![Screenshot-05](/public/assets/img/screenshot5.jpg)


- - -
## Known Issues & TODO Items

  * Id like to split the background into elements that would present better on different screen sizes.

- - -

## Copyright

Jason O'Brien (C) 2017.
