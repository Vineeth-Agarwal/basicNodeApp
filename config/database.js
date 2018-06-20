const mongoose = require("mongoose")

// module.exports = mongoose.connect("mongodb+srv://vineeth:Reset@89cluster0-zlyhn.mongodb.net/test?retryWrites=true", 
// success => {
//     console.log("DB connected")
// }, err => {
//     console.log("error")
// }).catch(err =>{

// })

module.exports = mongoose.connect("mongodb+srv://vineeth:fAzlIxXTBGrEHUBD@cluster0-zlyhn.mongodb.net/test?retryWrites=true")
    .then(() => {
        console.log("DB connected")
    }, err => {
        console.log("DB error"+  err)
    }
    )



