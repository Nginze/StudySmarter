const mongoose = require('mongoose')
try
{
  mongoose.connect("mongodb+srv://Jack:jack123@hack0db.nxzfz.mongodb.net/hack0", { useNewUrlParser: true,  useUnifiedTopology: true  })
    .then(() => {
      console.log('connected to db')
    })
}
catch(err)
{
  console.log(err)
}
