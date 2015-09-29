var React = require('react-native');
var {
  StyleSheet,
} = React;

exports.styleSheet = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    marginTop: 15
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  },
  text: {
    color: "#FFFFFF",
  },
  brew: {
    height: 44,
    borderBottomWidth: 0.5
  },
  brewName: {
    fontSize: 18,
    textAlign: 'left',
    color: "#000000",
    marginLeft: 15,
    paddingTop: 8,
  }
});
