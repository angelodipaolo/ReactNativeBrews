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
  brewRow: {
    height: 54,
    borderBottomWidth: 0.5,
    marginLeft: 15
  },
  brewName: {
    fontSize: 18,
    textAlign: 'left',
    color: "#000000",
    paddingTop: 8,
  },
  brewStyle: {
    textAlign: 'left',
    paddingTop: 2,
    color: "#696969"
  },
  brewDetails: {
    padding: 15,
    marginTop: 80,
    fontSize:20
  },
  brewAddView: {
    marginTop: 80
  },
  textInput: {
    marginRight: 5,
    marginLeft: 5,
    marginBottom: 20,
    padding: 5,
    height: 44,
    fontSize: 18,
    borderWidth: 1,
    borderColor: '#696969',
    borderRadius: 8,
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center'
  },
  button: {
    height: 36,
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#696969',
    borderColor: '#696969',
    marginBottom: 10,
    alignSelf: 'stretch',
    justifyContent: 'center',
    marginRight: 5,
    marginLeft: 5,
  }
})
