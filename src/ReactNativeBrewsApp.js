"use strict";

var React = require("react-native");
var {
  NavigatorIOS,
  StyleSheet
} = React;

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    marginTop: 15
  },
});

var BrewClient = require("./http/BrewClient")

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

module.exports = ReactNativeBrewsApp
