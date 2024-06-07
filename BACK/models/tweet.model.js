import mongoose from "mongoose"

const Tweet = mongoose.Schema({
  name: { type: String, required: true},
  content: {type: String, require: true}
})

export default mongoose.model("Tweet", Tweet)