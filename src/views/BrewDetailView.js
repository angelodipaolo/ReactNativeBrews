"use strict";

var React = require("react-native");
var {
  Text,
  View,
  Navigator,
} = React;

var styles = require("../styles").styleSheet;

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
