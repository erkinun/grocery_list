# Grocery List App

This is a simple grocery list application created for educational purposes (id 5b8d0fd276b6d288905ed2f63a934e057e8feca2).

## How to run

### Using nvm and script provided

If you have nvm (node version manager) installed on your device, you can open a terminal, change the directory to this project and just run `./run.sh`. It will spin up the client and server. You can download nvm [here](https://github.com/nvm-sh/nvm#installing-and-updating).

### Using Node

This project relies on Node version 16.13.2. You can download Node [here](https://nodejs.org/en/download/). Once you installed Node on your system, you have to change your terminal directory to `./server` and run

`npm i && npm start`

Once you do that, you now have to change your terminal directory to `./client` and run

` npm i && npm start`

Installation requires an internet connection, but running the application does not.

## Things to improve

- We can add ordering functionality to the list.
- We can utilise some animations on css to make the application look smoother.
- At the moment we are using the data availability to make decisions on the API interactions. These can be better refactored to be using HTTP result codes.
- As we grow the application, state logic can get complicated and we can use a library such as Redux to encapsulate state. At the moment we update servers with every change on the product.
- We can attach a real database to our server. Currently, we are only using a file to serialise and deserialise our data. This can not scale at all.
- Configuration is only done for local development at the moment, deployment and api proxying must be thought through when we deploy this application to production.
