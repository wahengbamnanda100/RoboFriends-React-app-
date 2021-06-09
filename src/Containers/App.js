import React, { Component } from "react";
import CardList from "../Components/card/CardlList";
import SearchBox from "../Components/SearchBox";
import Scroll from "../Scroll";
import axios from "axios";
import "./App.css";
class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchFields: "",
    };
  }

  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        // handle success
        this.setState({ robots: response.data });
      })
      .catch((error) => {
        // handle error
        console.log(error);
      });
  }

  onSearchChange = (event) => {
    this.setState({ searchFields: event.target.value });
  };
  render() {
    const { robots, searchFields } = this.state;
    const filterRobots = robots.filter((robots) => {
      return robots.name.toLowerCase().includes(searchFields.toLowerCase());
    });
    return !robots.length ? (
      <h2 className="tc white f1">Loading...</h2>
    ) : (
      <div className="tc">
        <h1 className="f1">ROBOFRIENDS</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <Scroll>
          <CardList robots={filterRobots} />
        </Scroll>
      </div>
    );
  }
}

export default App;
