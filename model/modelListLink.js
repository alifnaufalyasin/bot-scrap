const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const listLinkSchema = new Schema({
  id_link: {type: Number, required: true},
  text: {type: String, required: true},
  pengirim: {type: String, required: true},
  user_id: {type: String, required: true},
  waktu: {type: String, required: true},
}, { collection: 'grup_ai' })

const listLink = mongoose.model('listLink',listLinkSchema)

module.exports = {
  listLink
}