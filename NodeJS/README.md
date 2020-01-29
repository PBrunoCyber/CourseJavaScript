# Node js introducion 

First you need to type:

``` npm init -y ``` 

This command creates a package.json file that is used to store, 
in addition to the dependencies, the information of the application 
being developed.

###### The first dependency is the express

``` npm install express ``` 

##### For execute the node application you need to type:

``` node <name-file> ``` 

But this command is not recommended because you'll need to cancel and execute for each alteration
For to fix that you'll need of the nodemon:

``` npm install -D nodemon ```

After installation you need to add in package.json inside of the script tag:
``` "dev": "nodemon node-api/server" ```


##### MongoDB connection

``` npm install mongoose ``` It's responsible for doing an ORM (Object Relational Maping)
ORM -> Turns database results into objects (json)

##### RequireDir 

Imports all models at once
``` npm install require-dir ```

##### For to test the routes, uses the insominia on insominia.rest

For to use pagination in your page for to improve your performance you'll need to install this:

``` npm install mongoose-paginate ```

To allow other applications to access the api you need to install this:

``` npm install cors ```


For to execute type:

``` npm run serve ```