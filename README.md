# Intro to ASYNC JS, APIs, Fetch

* Additional Resources:
 - http://latentflip.com/loupe
 - https://medium.com/jspoint/how-javascript-works-in-browser-and-node-ab7d0d09ac2f
 - [MealsDB](https://www.themealdb.com/api.php)
 - [Promises Explained with a Burger Party](https://fullstackjournal.wordpress.com/2018/07/06/the-promise-js-explained-i-burger-party/)


## Key Topics:

* ASYNC JS
  * JS as a non-blocking language, intro the call stack/event loop
  * Why is this functionality important for JavaScript to have?

* APIs
  * Application Programming Interface - BTW, the internet calls lots of things APIs
  - Information stored on web servers that can be used to populate info on applications
  - Web Documentation
  - Built-in functionality to applications that assist users/programmers
  * APIs are essentially back-end applications on servers with routes that receive requests and return information.
  * We will be working with data in JSON format, although there are also others like YAML and XML

* Fetch
  * We use XMLHTTPRequests to receive information living on a server
  * Fetch is the built in method in the browser
  * Making GET requests to an API using the fetch function
  * Introduction to Promises and the .then() chain
  * Exploring the limits of promises, ASYNC JS, taking information from promises and appending them to the DOM