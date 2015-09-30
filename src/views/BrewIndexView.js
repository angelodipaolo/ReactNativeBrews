"use strict";

var React = require('react-native');
var {
  Text,
  View,
  ListView,
  TouchableHighlight
} = React;

var styles = require("../styles").styleSheet;

/// A view for rendering a list of brews
class BrewIndexView extends React.Component {

  // MARK: Initialization

  constructor(props) {
    super(props);

    this.state = {
      brewClient: props.brewClient,
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      }),
      loaded: false,
    };
  }

  componentDidMount() {
    this.fetchBrews();
  }

  // MARK: Fetching Data

  fetchBrews() {
    var brewClient = this.state.brewClient

    brewClient.fetchBrews((brews) => {
      this.setState({
          dataSource: this
                        .state
                        .dataSource
                        .cloneWithRows(brews),
          loaded: true,
          brews: brews
        });
    })
  }

  // MARK: Actions

  onBrewTapped(brew) {
    this.props.navigator.push({
        title: brew.name,
        component: require("./BrewDetailView"),
        passProps: {brew: brew}
    });
  }

  // MARK: Render View

  render() {
    if (!this.state.loaded) {
      return (
        <View>
          <Text style={styles.welcome, styles.text}>
            Fetching brews...
          </Text>
        </View>
      );    
    }

    return (
      <View>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this.renderBrewRow.bind(this)}
          style={styles.listView} />
      </View>
    )
  }

  renderBrewRow(brew) {
    return (
      <TouchableHighlight onPress={this.onBrewTapped.bind(this, brew)}>
        <View style={styles.brewRow}>
          <Text style={styles.brewName}>{brew.name}</Text>
          <Text style={styles.brewStyle}>{brew.style}</Text>
        </View>
      </TouchableHighlight>
    );
  }
}

module.exports = BrewIndexView
