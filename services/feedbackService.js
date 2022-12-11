import { Feedback } from "../models/feedback.js";

export async function createFeedback(feedback) {
  const feedbacks = [];
  feedbacks.push(feedback);
  const createdFeedback = await Feedback.insertMany(feedbacks);
  return createdFeedback;
}