# Netflicks (the netflix-clone)
This project is to showcase how to create a basic React app.
The appearance and use of Netflix is purely for education purposes and is not meant to infringe on any copyright.

# How to setup
1. Copy this repo into your local system
2. Copy the .env.example into a .env file at the root of the project
3. Head over to [The Movie Database](https://themoviedb.org/settings/api) and apply for an API key
4. Copy the API Key (v4 auth) into the .env file
5. run `npm install` -- this will install all the node_modules required and create the package-lock.json
6. run `npm start` -- a browser should open automatically with the react project, if not go to http://localhost:3000

# Take Aways
- Movies from the moviedb api may have either `.title` or `.name` property, we use this property to obtain the movie trailer url
- This project is meant for development only and has some fairly large security risks that shouldn't be used in production, for example we should be using a backend service to query the moviedb

# Resources and Credits
- [clever programmer tutorial](https://www.youtube.com/watch?v=XtMThy8QKqU&t=10474s)
- [themoviedb.org documentation](https://developers.themoviedb.org/3/)
- [Using environment variables in react](https://create-react-app.dev/docs/adding-custom-environment-variables/)

![screen-gif](./netflicks.gif)
