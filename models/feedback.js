import mongoose from "mongoose";

const feedbackSchema = new mongoose.Schema({
  name : {
    type:String
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String
  },
  message: {
    type: String,
    required: true
  },
  hits: {
    type: Number,
    default: 1
  }
})

const Feedback = mongoose.model('feedback',feedbackSchema);

export {Feedback};
