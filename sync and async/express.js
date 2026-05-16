const express = require('express')
const app = express()
const port = 3000

app.get('/userData', (req, res) => {
  res.json({
  "userId": 1,
  "id": 1,
  "title": "Mern stack developer",
  "skill":"Javascript",
  "completed": false
})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})



// npm i express
// node express.js
