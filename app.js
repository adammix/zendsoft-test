
// const {readFile, writeFile} = require('fs').promises;

// const run = async () => {
//     try {
//         const firstFile = await readFile('./content/test.txt', 'utf8');
//         const secondFile = await readFile('./content/test2.txt', 'utf8');
//         await writeFile('./content/result.txt', `This is awesome: ${firstFile} _____  ${secondFile}`, {flag: 'a'})
//         console.log('finish')
//     } catch (error) {
//         console.log(error)
//     }
// }

// run()

// const eventEmitter = new (require('events'))

// eventEmitter.on('response', () => {
//     console.log('event catched')
// })

// eventEmitter.emit('response')
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// const http = require('http')
// const { readFileSync } = require('fs') 

// const indexPage = readFileSync('./index.html')
// //const homeStyles = readFileSync('./styles.css')

// const server = http.createServer((req, res) => {
//     res.writeHead(200, {'content-type': 'text/html'})

//     const url = req.url

//     if (url === '/') {
//         res.write(indexPage)
//     } else if (url.match(/\.([^.]*?)(?=\?|#|$)/)) {
//         try {
//             console.log(url)
//             console.log(`.${url}`)
//             res.writeHead(200, {'content-type': 'text/css'})
//             res.write(readFileSync(`.${url}`))
//             console.log(readFileSync(`.${url}`))
//             res.end()
//         } catch (error) {
//             console.log(error)
//             res.writeHead(405, {'content-type': 'text/plain'})
//         }
//     }
   
//     res.end()
// })

// server.listen(5000)

///////////////////////////////////////////////////////////////////////////////////////////////////

// const express = require('express')
// const app = express()
// const path = require('path')

// app.use(express.static('./public'))

// app.get('/', (req, res) => {
//     res.send('HOme Page')
// })

// app.get('/contact', (req,res) => {
//     res.sendDate
//     // res.sendFile(path.resolve(__dirname, 'index.html'))
// })

// app.listen(5000, () => {
//     console.log('Server is listening on port 5000...')
// })

const path = require('path')
const express = require('express')
const app = express()

const fs = require('fs')

app.get('/', (req, res)=>{
    res.sendFile(path.resolve(__dirname, './public/data.js'))
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, err => {
    if(err) throw err;
    console.log(`%c Server running on port ${PORT}`, "color: green");
});
