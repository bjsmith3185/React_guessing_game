import axios from "axios";

// const GetBreeds = "https://dog.ceo/api/breeds/list/all";
const GetBreeds = "https://dog.ceo/api/breeds/list";
const BASEURL = "https://dog.ceo/api/breed/";
const restOfUrl = "/images";
const RandomDog = "https://dog.ceo/api/breeds/image/random";

export default {
  breedList: function() {
    return axios.get(GetBreeds);
  },

  search: function(query) {
   
    return axios.get(BASEURL + query + restOfUrl);
  },

  randomDog: function() {
    return axios.get(RandomDog);
  }
};
