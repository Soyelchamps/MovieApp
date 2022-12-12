import movies_catalog from "../../models/movies_catalog";
import Note from "../../models/Note";
const Mutation = {
  async createNote(_, { input }) {
    // {title: test, description: destest ...... }
    return await Note.create(input);
  },
  async updateNote(_, { input, id }) {
    return await Note.findByIdAndUpdate(id, input, { new: true });
  },
  async removeNote(_, { id }) {
    await Note.findByIdAndDelete(id);
    return await Note.find();
  },
  async createMovie(_, { input }) {
    return await movies_catalog.create(input);
  },
};
export default Mutation;
