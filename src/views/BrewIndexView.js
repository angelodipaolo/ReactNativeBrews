"use strict";

var React = require('react-native');
var {
  Text,
  View,
  ListView,
  TouchableHighlight,
  StyleSheet
} = React;

var globalStyles = require("../styles").styleSheet;

var styles = StyleSheet.create({
  brewRow: {
    height: 54,
    borderBottomWidth: 0.5,
    marginLeft: 15
  },
  brewStyle: {
    textAlign: 'left',
    paddingTop: 2,
    color: "#696969"
  },
  brewName: {
    fontSize: 18,
    textAlign: 'left',
    color: "#000000",
    paddingTop: 8,
  },
});

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
          dataSource: this.state.dataSource.cloneWithRows(brews),
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
          <Text style={globalStyles.text}>
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
          style={globalStyles.listView} />
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
