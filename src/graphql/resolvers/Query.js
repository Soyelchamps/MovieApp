import { emit } from "nodemon";
import Note from "../../models/Note";
import User from "../../models/Users";
import movies_catalog from "../../models/movies_catalog";
const Query = {
  ping() {
    return "pong";
  },
  async getNotes() {
    const note = await Note.find();
    return note;
  },
  async getMovies() {
    const Movie = await movies_catalog.find();
    return Movie;
  },
  // async getNoteById(_, { id }) {
  //   return await Note.findById(id);
  // },
  async getMovieById(_, { _id }) {
    return await movies_catalog.findById(_id);
  },
  async login(_, { email, passowrd }) {
    const verifyUser = await User.find({ email: email, passowrd: passowrd });
    console.log(verifyUser);
    return verifyUser;
  },
};
export default Query;
