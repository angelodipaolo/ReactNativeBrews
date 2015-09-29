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
      <View style={styles.container}>
        <Text>Brew Details</Text>
      </View>
    );
  }
}

module.exports = BrewDetailView
