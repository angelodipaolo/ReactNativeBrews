var BREW_API_BASE_URL = "https://brewhapi.herokuapp.com"

class BrewClient {

  // MARK: Initialization

  constructor() {
    this.baseURL = BREW_API_BASE_URL
  }

  // MARK: Fetching Brews
  
  fetchBrews(callback) {
    fetch(this.baseURL+"/brews")
      .then((response) => response.json())
      .then((responseData) => {
        callback(responseData.brews)
      })
      .done();
  }

  // MARK: Inserting Brews

  insertBrew(brew, callback) {
    fetch(BREW_API_BASE_URL+"/brews", {
      method: "post",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(brew)
    })
    .then((response) => {
      callback()
    })
    .done();
  }
}

module.exports = BrewClient
