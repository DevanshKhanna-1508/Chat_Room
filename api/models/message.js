const mongoose = require ('mongoose');

const messageSchema = new mongoose.Schema ({
  senderid: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  recipent: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  messagetxt: {
    type: String,
    enum: ['text', 'image'],
  },
  message: String,
  imageurl: String,
  timeStamp: {
    type: Date,
    default: Date.now (),
  },
});


const Message = new mongoose.model('Message',messageSchema);
module.exports= Message;