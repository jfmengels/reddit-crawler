# reddit-crawler
Reddit crawler using ES2015 and JSPM.
Based on the talk by Glen Maddern http://glenmaddern.com/articles/javascript-in-2015

# Installation

1. Clone this repository

2. Run
Install npm and jspm dependencies (jspm should be done automatically).
	```
	npm install
	```

3. (Recommended) Install JSPM globally
	```
	npm install jspm -g
	```

# Launching
Use npm start to run locally
```
npm start
```
or simply launch index.html in your browser.

# "Production" use
To run in a "production" environment:

1. Compile the JavaScript files
	```
	npm run build
	```

2. Change the index.html
  1. Comment out the DEV MODE section
  2. Uncomment the PRODUCTION MODE section
