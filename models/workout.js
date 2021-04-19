const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now
  },
  exercises: [
    {
      name: {
        type: String,
        trim: true,
        required: true
      },
      type: {
        type: String,
        required: true
      },
      weight: {
        type: Number,
      },
      reps: {
        type: Number
      },
      sets: {
        type: Number,
      },
      distance: {
        type: Number,
      },
      duration: {
        type: Number,
      }
    }
  ],
  

  

});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
