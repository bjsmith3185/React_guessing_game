import React, { Component } from "react";
import SearchForm from "../components/SearchForm/SearchForm";
import ResultList from "../components/ResultList/ResultList";
import API from "../utils/API";
import "../styles/Style.css";


class Search extends Component {
  state = {
    search: "",
    breeds: [],
    results: []
  };

  // When this component mounts, search the Giphy API for pictures of kittens
  componentDidMount() {
    // this.searchDogs("hound");
    this.findBreeds();
  };

  findBreeds = () => {
    API.breedList()
      .then(res => {
        console.log(res.data.message)
        const data = res.data.message;
        // const breedsList = Object.keys(data);
        // console.log(breedsList); // this is an array of breeds

        this.setState({ breeds: data })
      })
      .catch(err => console.log(err));
  }

  searchDogs = query => {
    API.search(query)
      .then(res => this.setState({ results: res.data.message }))
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    // const name = event.target.name;
    // const value = event.target.value;
    // this.setState({
    //   [name]: value
    // });
    this.setState({ search: event.target.value });
  };

  // When the form is submitted, search the Giphy API for `this.state.search`
  handleFormSubmit = event => {
    event.preventDefault();
    console.log(this.state.search);
    this.searchDogs(this.state.search);
  };

  render() {
    // console.log(this.state.breeds);
    // {console.log(this.state.results)}
    return (

      <div className="search-area">
        <h1 className="search-title text-center">Search Page</h1>
        
        <div className="search-box">
          <SearchForm
            list={this.state.breeds}
            search={this.state.search}
            handleFormSubmit={this.handleFormSubmit}
            handleInputChange={this.handleInputChange}
          />
        </div>
        <ResultList results={this.state.results} />

      </div>
    );
  }
}

export default Search;
