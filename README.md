
# ReactNativeBrews

A very simple demonstration of a React Native iOS app for viewing and adding tasty brews. Uses [brewhapi](https://github.com/angelodipaolo/brewhapi) as a mock API for fetching and inserting data. brewhapi is freely hosted at [https://brewhapi.herokuapp.com/brews](https://brewhapi.herokuapp.com/brews). The app was built as an exercise in learning React Native on iOS.

## Requirements 

- Xcode 6.3 or newer
- Node.js 4.0.0 or newer
- React Native 0.11.0 or newer

## Setup

See [React Native - Getting Started](https://facebook.github.io/react-native/docs/getting-started.html#content) for general information on setting up React Native.

Get started by cloning this repo and running `npm install` in the cloned directory.

```
git clone git@github.com:angelodipaolo/ReactNativeBrews.git
cd ReactNativeBrews
npm install
```

Open `/ios/ReactNativeBrews.xcodeproj` and run the simulator.

## Overview

All of the app JavaScript source code is located in the [`src`]() directory. The app only uses modules that are packaged with React Native and does not install any external or custom native modules.

### Source Files

- [`/src/ReactNativeBrewsApp.js`](/src/ReactNativeBrewsApp.js) - A react component that declares a navigator with brew index as the initial route. 
- `/src/views` - React components representing each view in the app. Each component is basically analogous with `UIViewController`.
  - [`BrewIndexView.js`](/src/views/BrewIndexView.js) - Renders a list of brews that can be tapped to view details. 
  - [`BrewDetailView.js`](/src/views/BrewDetailView.js) - Renders the details of a brew.
  - [`BrewAddView.js`](/src/views/BrewAddView.js) - Renders text fields and buttons for inserting a brew.
- [`/src/http/BrewClient`](/src/http/BrewClient.js) - HTTP client for fetching and inserting brew data with brew API server.

