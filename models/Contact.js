const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
  contactName: String,
  emailAddress: String,
  subjectText: String,
  postMessage: String,
  createdAt: String
}, { timestamps: true });


const Contact = mongoose.model('Contact', contactSchema);

module.exports = Contact;
