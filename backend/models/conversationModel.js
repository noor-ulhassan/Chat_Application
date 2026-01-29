import mongoose from "mongoose";
const conversationModel = new mongoose.Schema(
  {
    participants: [
      {
        type: mongoose.Schema.types.ObjectId,
        ref: "User",
        required: true,
      },
    ],
    messages: [
      {
        type: mongoose.Schema.types.ObjectId,
        ref: "Message",
      },
    ],
  },
  { timestamps: true },
);

export const Conversation = mongoose.model("Conversation", conversationModel);
