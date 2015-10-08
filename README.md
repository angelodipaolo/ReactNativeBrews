
# ReactNativeBrews

A very simple demonstration of a React Native iOS app for viewing and adding tasty brews. The project uses [brewhapi](https://github.com/angelodipaolo/brewhapi) as a mock API for fetching and inserting data. brewhapi is freely hosted at [https://brewhapi.herokuapp.com/brews](https://brewhapi.herokuapp.com/brews). The app was built as an exercise in learning React Native on iOS.

The demo app is a port of the [example app](https://github.com/TheHolyGrail/Swallow#example) from [Swallow](https://github.com/TheHolyGrail/Swallow). View the Swallow example app to see how a React Native app compares to a purely native iOS app written in Swift.

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

All of the app JavaScript source code is located in the [`src`](/src) directory. The app only uses modules that are packaged with React Native and does not install any external or custom native modules.

### Source Files

- [`/src/ReactNativeBrewsApp.js`](/src/ReactNativeBrewsApp.js) - A react component that declares a navigator with brew index as the initial route. 
- `/src/views` - React components representing each view in the app. Each component is basically analogous with `UIViewController`.
  - [`BrewIndexView.js`](/src/views/BrewIndexView.js) - Renders a list of brews that can be tapped to view details. 
  - [`BrewDetailView.js`](/src/views/BrewDetailView.js) - Renders the details of a brew.
  - [`BrewAddView.js`](/src/views/BrewAddView.js) - Renders text fields and buttons for inserting a brew.
- [`/src/http/BrewClient`](/src/http/BrewClient.js) - HTTP client for fetching and inserting brew data with brew API server.


### JavaScript Classes

[JavaScript classes](https://facebook.github.io/react/docs/reusable-components.html#es6-classes), introduced in ECMAScript 6, are used in this project to define React component classes.

### Viewing Brews

The entry point of the app kicks off in the `ReactNativeBrewsApp` component. This component declares a navigator object with its initial route set to load the `BrewIndexView` component.

```
class ReactNativeBrewsApp extends React.Component {
  
  // MARK: App Initialization

  constructor(props) {
    super(props);
    this.state = {
      brewClient: new BrewClient()
    };
  }

  // MARK: Render View

  render() {
    return (
      <NavigatorIOS
        ref="mainNavigation"
        style={styles.container}
        initialRoute={{
          title: "Tasty Brews", 
          component: require("./views/BrewIndexView"),
          passProps: {brewClient: this.state.brewClient},
          rightButtonTitle: "Add Brew",
          onRightButtonPress: () => {
            this.refs.mainNavigation.navigator.push({
              title: "Add Brew",
              component: require("./views/BrewAddView"),
              passProps: {brewClient: this.state.brewClient}
            });
          }
        }

      }/>
    );
  }
}
```


When the `BrewIndexView` component mounts it fetches brew data from the API server by making a request through the `BrewClient` object. The `componentDidMount` event of a React component is similiar to `UIViewController`'s `viewDidLoad` method. After the request completes the brew JSON data is used to set ListView's dataSource.

```
  componentDidMount() {
    this.fetchBrews();
  }

  fetchBrews() {
    var brewClient = this.state.brewClient

    brewClient.fetchBrews((brews) => {
      this.setState({
          dataSource: this.state.dataSource.cloneWithRows(brews),
          loaded: true,
          brews: brews
        });
    })
  }
```

The ListView renders a list of rows by calling `renderRow` for each item contained in the data source. The `BrewIndexView` declares a `renderBrewRow()` function that is responsible for rendering a single row in the list.

```
render() {
  if (!this.state.loaded) {
    return (
      <View>
        <Text style={styles.welcome, styles.text}>
          Fetching brews...
        </Text>
      </View>
    );    
  }

  return (
    <View>
      <ListView
        dataSource={this.state.dataSource}
        renderRow={this.renderBrewRow.bind(this)}
        style={styles.listView} />
    </View>
  )
}

renderBrewRow(brew) {
  return (
    <TouchableHighlight onPress={this.onBrewTapped.bind(this, brew)}>
      <View style={styles.brewRow}>
        <Text style={styles.brewName}>{brew.name}</Text>
        <Text style={styles.brewStyle}>{brew.style}</Text>
      </View>
    </TouchableHighlight>
  );
}
```

The `renderBrewRow()` function sets an `onPress` handler to respond to user taps which allows the user to tap on a row to view the details of a brew. The handler function uses the navigator to push a new instance of the `BrewDetailView` component on to the navigation stack. The brew data is passed as a prop to the detail component so the component can render the brew details.

```
onBrewTapped(brew) {
  this.props.navigator.push({
      title: brew.name,
      component: require("./BrewDetailView"),
      passProps: {brew: brew}
  });
}
```

The `BrewDetailView` component renders the brew data after having been mounted from a push on to the navigation stack.

```
class BrewDetailView extends React.Component {

  render() {
    return (
      <View style={styles.brewDetails}>
        <Text style={styles.brewStyle}>{this.props.brew.style}</Text>
        <Text>Brewed by: {this.props.brew.brewery.name}</Text>
        <Text>{this.props.brew.brewery.location}</Text>
      </View>
    );
  }
}
```


### Adding Brews

The `BrewAddView` component renders a basic UI with text fields for adding a brew.

```
render() {
  return (
    <View style={styles.brewAddView}>
      <TextInput
        style={styles.textInput}
        onChange={this.onBrewNameChange.bind(this)}
        placeholder="brew name"/>
      <TextInput
        style={styles.textInput}
        onChange={this.onBrewStyleChange.bind(this)}
        placeholder="style"/>
      <TextInput
        style={styles.textInput}
        onChange={this.onBreweryChange.bind(this)}
        placeholder="brewery"/>
        <TouchableHighlight 
          style={styles.button}
          onPress={this.saveTapped.bind(this)}
          >
          <Text style={styles.buttonText}>Save</Text>
        </TouchableHighlight>
    </View>
  );
}
```

The `onChange` event handlers of each `TextInput` component are used to set brew data upon changes in text field values.

```
onBrewNameChange(event) {
  this.setState({ brewName: event.nativeEvent.text });
}

onBrewStyleChange(event) {
  this.setState({ brewStyle: event.nativeEvent.text });
}

onBreweryChange(event) {
  this.setState({ brewery: event.nativeEvent.text });
}
```


The `onPress` handler of the `TouchableHighlight` component is used to kick off a request to insert the new brew.

```
saveTapped() {
  var brew = {
    name: this.state.brewName,
    style: this.state.brewStyle,
    brewery: {
      name: this.state.brewery
    }
  }

  var brewClient = this.state.brewClient

  brewClient.insertBrew(brew, () => {
    this.props.navigator.pop();
  })
}
```

