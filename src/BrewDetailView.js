var React = require('react-native');
var {
  StyleSheet,
  Text,
  View,
  Navigator,
} = React;

var styles = require('./styles').styleSheet;

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
