//const { createServer } = require('http')
//const { parse } = require('url')
//const next = require('next')
//const fs = require('fs')

//const dev = process.env.NODE_ENV !== 'production'
//const hostname = 'localhost'
//const port = 3000
//const app = next({ dev, hostname, port })
//const handle = app.getRequestHandler()

//const httpsOptions = {
//    key: fs.readFileSync('./https_cert/rootCA-key.pem'),
//    cert: fs.readFileSync('./https_cert/rootCA.pem')
//}

//app.prepare().then(() => {
//    createServer(httpsOptions, (req, resp) => {
//        try {
//            const parsedUrl = parse(req.url, true)
//            handle(req, res, parsedUrl);
//        } catch (err) {
//            console.error('Error occurred', req.rl, err)
//            res.statusCode = 500
//            res.end('Internal Server Error')
//        }
//    }).listen(port, () => {
//            console.log(`> Ready on http://${hostname}:${port}`)
//        })
//})
