import axios from "axios";

export default {
  // Gets all questions
  getQuestions: function() {
    return axios.get("/api/questions");
  },
  //Gets all decks
  getDecks: function() {
    console.log("getdecks");
    return axios.get("/api/decks");
  }
  
};
