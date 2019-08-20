const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const patientSchema = new Schema({
  id: {
    type: Schema.Types.ObjectId
  },
  name: {
    type: String
  },
  age: {
    type: String
  },
  gender: {
    type: String
  },
  history: {
    type: String
  },
  visits: [
    {
      date: {
        type: String
      },
      type: {
        type: String
      },
      details: {
        type: String
      }
    }
  ]
});

module.exports = mongoose.model("Patient", patientSchema);
