import movies_catalog from "../../models/movies_catalog";

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
  async updateLikesMovieById(_, { id }) {
    const Movie = await movies_catalog.findById(id);
    const likes = Movie.likes;
    Movie.likes = likes + 1;

    const res = await movies_catalog.findByIdAndUpdate(
      id,
      { likes: Movie.likes },
      { new: true }
    );
    return res;
  },
};
export default Mutation;
