
# ReactNativeBrews

A ridiculously simple React Native demo app for viewing and adding tasty brews. Uses [https://github.com/angelodipaolo/brewhapi](brewhapi) as a mock API for fetching and inserting data. brewhapi is freely hosted at [https://brewhapi.herokuapp.com/brews](https://brewhapi.herokuapp.com/brews).


## Project Overview

- `/src/ReactNativeBrewsApp.js` - A react component that declares a navigator with brew index as the initial route. 
- `/src/views` - React components representing each view in the app. Each component is basically analogous with `UIViewController`.
  - `BrewIndexView.js` - Renders a list of brews that can be tapped to view details. 
  - `BrewDetailView.js` - Renders the details of a brew.
  - `BrewAddView.js` - Renders text fields and buttons for inserting a brew.
- `/src/http/` - HTTP client for fetching and inserting brew data with brew API server.


