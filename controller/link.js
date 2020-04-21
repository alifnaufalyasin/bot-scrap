const { listLink } = require("../model/modelListLink")

async function add(context) {
  const id = await listLink.countDocuments({})
  let profileUser = await context.getUserProfile()
  const myobj = { 
    id_link: id+1, 
    text: context.event.message.text, 
    pengirim: profileUser.displayName,
    user_id: profileUser.userId,
    waktu: context.event.date, 
  };
  const data = new listLink(myobj)
  data.save()
  context.sendText('Raisa bantu simpan ya link nya :)')
}

module.exports = {
  add
}