var React = require('react-native');
var {
  Text,
  View,
  ListView,
  Navigator,
  TouchableHighlight
} = React;

var styles = require('./styles').styleSheet;
var BREW_API_BASE_URL = "https://brewhapi.herokuapp.com"
var BrewDetailView = require('./BrewDetailView')

class BrewIndexView extends React.Component {

  // MARK: Initialization

  constructor(props) {
    super(props);

    this.state = {
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
    fetch(BREW_API_BASE_URL+'/brews')
      .then((response) => response.json())
      .then((responseData) => {
        this.setState({
          dataSource: this
                        .state
                        .dataSource
                        .cloneWithRows(responseData.brews),
          loaded: true,
          brews: responseData.brews
        });
      })
      .done();
  }

  // MARK: Actions

  onBrewTapped(brew) {
    this.props.navigator.push({
        title: brew.name,
        component: BrewDetailView,
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

  renderBrewRow(brew, sectionID, rowID) {
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
