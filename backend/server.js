require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const passport = require('passport')
const session = require('express-session')
const MongoStore = require('connect-mongo')
const communityRoutes = require('./routes/communityRoutes')
const postRoutes = require('./routes/postRoutes')
const authRoutes = require('./routes/authRoutes')
const commentRoutes = require('./routes/commentRoutes')
const flashcardsRoute = require('./routes/flashcardsRoute')
const userRoutes = require('./routes/userRoutes')
require('dotenv').config()
const todoRoutes = require("./routes/TodoRoutes")
require('./config/db.js')

app.use(cors({
  origin:'http://localhost:3000',
  credentials: true
}))

app.use(session({

    secret: 'secret',
    resave: false,
    saveUninitialized: true,
    store: MongoStore.create({mongoUrl:"mongodb+srv://Jack:jack123@hack0db.nxzfz.mongodb.net/hack0"}),
    cookie: {maxAge: 180 * 60 * 1000}
  
}))

app.use(passport.initialize())
app.use(passport.session())
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use('/auth', authRoutes)
app.use('/community',communityRoutes)
app.use('/post',postRoutes)
app.use('/comment', commentRoutes)
app.use('/newcard', flashcardsRoute)
app.use('/flashcards', flashcardsRoute)
app.use("/todo",todoRoutes)
app.use('/user', userRoutes)

app.get('/', (req, res) => {

  res.send(`Hack Zero! <p> ${req.isAuthenticated()}</p>` )
})

PORT = 5000

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`)
})