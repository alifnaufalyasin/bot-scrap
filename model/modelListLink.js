const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const listLink = new Schema({
  id_link: {type: Number, required: true},
  text: {type: String, required: true},
  pengirim: {type: String, required: true},
  user_id: {type: String, required: true},
  waktu: {type: String, required: true},
}, { collection: 'grup_ai' })

const listLink = await mongoose.model('listLink',userSchema)

module.exports = {
  listLink
}