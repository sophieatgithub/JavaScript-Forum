# JavaScript-Forum
Vanilla JavaScript demonstrating a forum, utilising the fetch() method to show the comments stored on the 'server' (json-server to mimic a back-end).

- window.onload sends a fetch request and we receive a json object of all the comments posted.
- This is then iterated over using a for loop.
- This loop creates elements, assigns them their apporpriate class, content and passes the time the comment was created to the date difference function.
- The date difference function then passes the results to a function which decideds the appropriate sting of the results, using an if else statement.


### Reflection

- I would like to look into the efficiency of this structure. Currently the new Date() function is called, and then the properites are assigned to a currDate object, for each iteration over the json object. This is unnecessary, and I would like to look into ways to only do this once, such as creating a global new Date() object.

- My next step for this project is to create the form, allowing next comments to be posted.

### Built with

- Semantic HTML
- CSS
- JavaScript
- fetch()
- npm
- json-server


## Installation

### Prerequisites

- npm

```sh
$ npm install npm@latest -g
```


- node.js

```sh
$ npm install node@lts
```


- live-server

```sh
$ npm install -g live-server
```


- JSON server
```sh
$ npm install -g json-server
```

### Install

1. Clone the repo

```sh
$ git clone https://github.com/sophieatgithub/JavaScript-REST-API.git
```


2. Install NPM packages

```sh
$ npm install
```


3. Start JSON server

```sh
$ json-server --watch db.json
```


4. Start live-server

```sh
$ live-server --watch db.json --port 8080
```


7. Open brower at http://localhost:8080/





[Portfolio](https://sophieatgithub.github.io/)

