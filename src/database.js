//Connect to Mongo Atlas
import mongoose from "mongoose";
const uri =
  "mongodb+srv://admin:wURQ18zaXRzKAQvh@cluster0.rm24jwp.mongodb.net/?retryWrites=true&w=majority";
mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedtopology: true,
  })
  .then((db) => console.log(" DB is Connected :) !!"))
  .catch((err) => console.log(err));
