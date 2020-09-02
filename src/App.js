import React from "react";
import CharacterCard from "./components/CharacterCard";
import SearchBar from "./components/SearchBar";
import axios from "axios";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      persons: [],
    };
  }
  componentDidMount() {
    axios
      .get(
        `https://gateway.marvel.com:443/v1/public/characters?apikey=53496df3cd682930aa9108759e347171`
      )
      .then((res) => {
        console.log(res.data.data.results);
        const persons = res.data.data.results;
        this.state.persons = persons;
      });
  }
  render() {
    return (
      <div className="App text-center">
        <h1>hello</h1>
        hello
        {this.state.persons}
        <SearchBar />
        <CharacterCard />
      </div>
    );
  }
}

export default App;
