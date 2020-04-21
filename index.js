const { postback } = require("./handler/postback")
const { handleMessage } = require("./handler/message");
const { dbinit } = require("./module/db");

module.exports = async function App(context) {
  dbinit()
  
  if (context.event.isPosback){
    // return postback(context);
  }else{
    return handleMessage(context);
  }
}