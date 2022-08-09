const mongoose = require('mongoose');
const projectSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    title: String,
    camera: String,
    lens: String,
    film: String,
    notes: String,
    creator: String,
    tags: [String],
    selectedFile: String,
    createdAt: {
      type: Date,
      default: new Date(),
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Project', projectSchema);
