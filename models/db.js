const mongoose = require("mongoose")

mongoose.connect(process.env.MONGODB_URI, {useNewUrlParser: true})
const con = mongoose.connection

con.on("open", ()=> {
    console.log("connected...")
})

con.on('error', err => {
    logError(err);
  });

require("./user.model")

