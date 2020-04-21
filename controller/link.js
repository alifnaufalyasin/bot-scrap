const { listLink } = require("../model/modelListLink")

async function add(context) {
  const id = await listLink.countDocuments({})
  let profileUser = await context.getUserProfile()
  const date = new Date(context.event.date)
  const dd = String(date.getDate()).padStart(2, "0")
  const mm = String(date.getMonth()).padStart(2, "0")
  const yyyy = date.getFullYear()
  
  const myobj = { 
    id_link: id+1, 
    text: context.event.message.text.split('\n'), 
    pengirim: profileUser.displayName,
    user_id: profileUser.userId,
    waktu: yyyy+'-'+dd+'-'+mm, 
  };
  const data = new listLink(myobj)
  data.save()
  context.sendText('Raisa bantu simpan ya link nya :)')
}

module.exports = {
  add
}