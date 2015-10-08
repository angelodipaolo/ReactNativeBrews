"use strict";

var React = require("react-native");
var {
  Text,
  View,
  StyleSheet
} = React;

var styles = StyleSheet.create({
  brewDetails: {
    padding: 15,
    marginTop: 80,
    fontSize:20
  },
  brewStyle: {
    textAlign: 'left',
    paddingTop: 2,
    color: "#696969"
  },
});

/// Renders the detail of a brew
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

module.exports = BrewDetailView
