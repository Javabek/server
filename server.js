
const http = require("http");
const mongodb = require("mongodb");
const { log } = require("console");

let db;
const connectionString = "mongodb+srv://cluster0.lsnpk4r.mongodb.net" 

mongodb.connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true
},
    (err, client) => {
        if (err) {
            console.log("Error on connection to MongoDb");
        } else {
            console.log("Database ga muvaffa1iyatli ulandi");
            module.exports = client;
            const app = require("./app");
            const server = http.createServer(app);
            let PORT = 3000;
            server.listen(PORT, function () {
                console.log(`The server is running successfully on port ${PORT}, http://localhost:${PORT}`);
            })
        }
    })
 module.exports