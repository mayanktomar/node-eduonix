import { createFeedback } from "../services/feedbackService.js";

export async function createFeedbackController (req,res) {
  const feedback = req.body;
  try {
    const createdFeedback = await createFeedback(feedback);
    return res.status(200).json(createdFeedback);
  } catch (err) {
    return res.status(500).send('Error while creating feedback');
  }
}