import { emit } from "nodemon";
import Note from "../../models/Note";
import User from "../../models/Users";
const Query = {
  ping() {
    return "pong";
  },
  async getNotes() {
    const note = await Note.find();
    return note;
  },
  async getNoteById(_, { id }) {
    return await Note.findById(id);
  },
  async login(_, { email, passowrd }) {
    const verifyUser = await User.find({ email: email, passowrd: passowrd });
    console.log(verifyUser);
    return verifyUser;
  },
};
export default Query;
