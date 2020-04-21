async function handleMessage(Context) {
  const message = Context.event.message;
  let profileUser = await Context.getUserProfile()
  let userId = profileUser.userId;
  // console.log(profileUser);
  if (message.type !== "text") {
    Context.reply([{
      type: "text",
      text: "Kakak ngirim apa? aku gabisa liat :( "
    }]);
  } else {
    // console.log(userId);
    const kalimat = message.text.toLowerCase()
    const kata = kalimat.match(/http/g)
    if(kata){
      Context.reply('Ada')
    }
  }
}

module.exports = {
  handleMessage
};