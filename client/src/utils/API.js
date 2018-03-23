import axios from "axios";

export default {
  // Gets all questions
  getQuestions: function() {
    return axios.get("/api/questions");
  },
  //Gets all decks
  getDecks: function() {
    return axios.get("/api/decks");
  }
  // // Gets the book with the given id
  // getBook: function(id) {
  //   return axios.get("/api/books/" + id);
  // },
  // // Deletes the book with the given id
  // deleteBook: function(id) {
  //   return axios.delete("/api/books/" + id);
  // },
  // // Saves a book to the database
  // saveBook: function(bookData) {
  //   return axios.post("/api/books", bookData);
  // }
};
