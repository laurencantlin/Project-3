import axios from "axios";

export default {

  //Gets all decks
  getDecks: function () {
    console.log("getdecks");
    return axios.get("/api/decks");
  },
  // Gets all questions
  getAllQuestions: function () {
    return axios.get("/api/questions");
  },
  // Gets all questions from deck
  getDeckQuestions: function (deckname) {
    return axios.get("/api/questions/" + deckname);
  },
};
