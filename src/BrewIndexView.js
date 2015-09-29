var React = require('react-native');
var {
  Text,
  View,
  ListView,
  Navigator,
} = React;

var styles = require('./styles').styleSheet;
var BREW_API_BASE_URL = "http://localhost:8000"
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
        });
      })
      .done();
  }

  // MARK: Actions

  onBrewTapped() {
    this.props.navigator.push({
        title: 'BrewDetailView',
        component: BrewDetailView
    });
  }

  // MARK: Render View

  render() {
    if (!this.state.loaded) {
      return (
        <View style={styles.container}>
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
          renderRow={this.renderBrew.bind(this)}
          style={styles.listView} />
      </View>
    )
  }

  renderBrew(brew) {
    return (
      <View style={styles.brew}>
        <Text style={styles.brewName} onPress={this.onBrewTapped.bind(this)}>{brew.name}</Text>
      </View>
    );
  }
}

module.exports = BrewIndexView
