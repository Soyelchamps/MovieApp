import movies_catalog from "../../models/movies_catalog";
import Note from "../../models/Note";
const Mutation = {
  async createMovie(_, { input }) {
    return await movies_catalog.create(input);
  },
  async updateMovie(_, { input, id }) {
    return await movies_catalog.findByIdAndUpdate(id, input, { new: true });
  },
  async removeMovie(_, { id }) {
    await movies_catalog.findByIdAndDelete(id);
    return await movies_catalog.find();
  },
};
export default Mutation;
