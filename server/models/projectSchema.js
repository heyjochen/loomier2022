const mongoose = require('mongoose');

const projectSchema = mongoose.Schema(
  {
    title: String,
    camera: String,
    lens: String,
    film: String,
    notes: String,
    creator: String,
    // 'file-upload': String,
    // createdAt: {
    //   type: Date,
    //   default: new Date(),
    // },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Project', projectSchema);
