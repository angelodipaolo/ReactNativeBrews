'use strict';

var React = require('react-native');
var {
  AppRegistry,
  NavigatorIOS,
} = React;

var styles = require('./src/styles').styleSheet;
var BrewIndexView = require('./src/BrewIndexView')

class ReactNativeBrewsApp extends React.Component {

  // MARK: Render UI

  render() {
    return (
      <NavigatorIOS
        style={styles.container}
        initialRoute={{title: 'Tasty Brews', component: BrewIndexView}}/>
    );
  }
}

AppRegistry.registerComponent('ReactNativeBrews', () => ReactNativeBrewsApp);
