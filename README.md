
# ReactNativeBrews

A ridiculously simple React Native demo app for viewing and adding tasty brews. Uses [brewhapi](https://github.com/angelodipaolo/brewhapi) as a mock API for fetching and inserting data. brewhapi is freely hosted at [https://brewhapi.herokuapp.com/brews](https://brewhapi.herokuapp.com/brews).


## Project Overview

- [`/src/ReactNativeBrewsApp.js`](/src/ReactNativeBrewsApp.js) - A react component that declares a navigator with brew index as the initial route. 
- `/src/views` - React components representing each view in the app. Each component is basically analogous with `UIViewController`.
  - [`BrewIndexView.js`](/src/views/BrewIndexView.js) - Renders a list of brews that can be tapped to view details. 
  - [`BrewDetailView.js`](/src/views/BrewDetailView.js) - Renders the details of a brew.
  - [`BrewAddView.js`](/src/views/BrewAddView.js) - Renders text fields and buttons for inserting a brew.
- [`/src/http/BrewClient`](/src/http/BrewClient.js) - HTTP client for fetching and inserting brew data with brew API server.
