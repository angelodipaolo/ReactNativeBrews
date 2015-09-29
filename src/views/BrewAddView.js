"use strict";

var React = require("react-native");
var {
  Text,
  View,
  TextInput,
  TouchableHighlight,
  Navigator,
} = React;

var styles = require("../styles").styleSheet;

/// A view for inserting a brew
class BrewAddView extends React.Component {

  // MARK: Initialization

  constructor(props) {
    super(props);

    this.state = {
      brewClient: props.brewClient
    };
  }

  // MARK: - Text Field Events

  onBrewNameChange(event) {
    this.setState({ brewName: event.nativeEvent.text });
  }

  onBrewStyleChange(event) {
    this.setState({ brewStyle: event.nativeEvent.text });
  }

  onBreweryChange(event) {
    this.setState({ brewery: event.nativeEvent.text });
  }

  // MARK: - Actions

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

  // MARK: - Render View

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
}

module.exports = BrewAddView
