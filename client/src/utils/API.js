
import axios from "axios";

export default {

  //Gets all decks
  getDecks: function () {
    console.log("getdecks");
    return axios.get("/api/decks");
  },
  // Creates new deck
  postDeck: function (deckData) {
    return axios.post("/api/decks", deckData);
  },
  // Gets all questions
  getAllQuestions: function () {
    return axios.get("/api/questions");
  },
  // Gets all questions from deck
  getDeckQuestions: function (deckname) {
    return axios.get("/api/questions/" + deckname);
  },
  // Gets all questions from deck
  getQuestion: function (questionid) {
    return axios.get("/api/questions/id/" + questionid);
  },
  // Gets all questions from deck
  newQuestion: function (questionData) {
    return axios.post("/api/questions", questionData);
  },
  updateQuestion: function (questionid, questionData) {
    return axios.put("/api/questions/id/" + questionid, questionData);
  },
  signUp: function (userLoginData) {
    return axios.post("/api/login/signup", userLoginData);
  },
  login: function (userLoginData) {
    return axios.post("/api/login",userLoginData);
  },
};