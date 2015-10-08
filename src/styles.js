"use strict";

var React = require('react-native');

exports.styleSheet = React.StyleSheet.create({
  text: {
    color: "#FFFFFF",
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
