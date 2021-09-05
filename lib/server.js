const express = require('express')
const cors = require('cors')
const multer = require('multer')
const bodyParser = require('body-parser')
const { generateFile } = require('../utils/generateFile')
const { executeCpp } = require('../bin/executeCpp')
const { executePy } = require('../bin/excecutePy')
const { detectText } = require('../utils/htr')
const { createAPIKeyFile } = require('../utils/createAPIKeyFile')
const database = require('../database/db')

const port = process.env.PORT || 8080

// middlewares
const app = express()
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors())
createAPIKeyFile()

// controller
var questionRoutes = require('../controller/questionController')
app.use('/api/questions', questionRoutes)

// routes
app.get('/', (req, res, next) => {
    return res.json({ fname: 'Aniket' })
})

const fileName = __dirname + '/code.jpeg'
console.log(fileName)

app.get('/code', (req, res, next) => {
    async function valued() {
        const value = await detectText(fileName)
        return res.json({ code: value })
    }
    valued()
})

app.post('/run', async (req, res, next) => {
    // using lang as acro for language and setting default as cpp
    const lang = req.body.lang
    const code = req.body.code

    console.log(lang)
    console.log(code)
    // incase req.body.code was empty
    if (code === undefined) {
        return res.status(400).json({ success: false, error: 'empty file submitted' })
    }

    try {
        // generate a cpp file with the code
        const filepath = await generateFile(lang, code)

        let output
        // run the file and send the response
        if (lang === 'cpp') {
            output = await executeCpp(filepath)
        }
        if (lang === 'py') {
            output = await executePy(filepath)
        }

        // sending language and code to the server
        return res.json({ filepath, output })
    } catch (error) {
        res.status(500).json({ error: error })
    }
})

//callbacks for storing to Disk Storage
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'lib/')
    },
    filename: function (req, file, cb) {
        cb(null, 'code.jpeg')
    },
})

//Checking if file is of the allowed types
const fileFilter = (req, file, cb) => {
    const allowedFileTypes = ['image/jpeg', 'image/jpg', 'image/png']
    if (allowedFileTypes.includes(file.mimetype)) {
        cb(null, true)
    } else {
        cb(null, false)
    }
}

//saving single file to Disk Storage
let upload = multer({ storage, fileFilter })

app.post('/add', upload.single('myFile'), function (req, res, next) {
    // req.file is the `myFile` file
    // req.body will hold the text fields, if there were any
})

// server
app.listen(port, () => {
    console.log('Server running at 8080')
})
