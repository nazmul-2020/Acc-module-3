function dbConnect(){
    const uri = "mongodb+srv://AccUser:Q3ZSqIBcgGbitjwq@cluster0.eyieglx.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
console.log("BDConnection");

}
module.exports = dbConnect;


// const { MongoClient, CURSOR_FLAGS } = require("mongodb");
// const connectionString = process.env.ATLAS_URI;
// const client = new MongoClient(connectionString, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// });

// let dbConnection;

// module.exports = {
//     connectToServer: function (callback) {
//         client.connect(function (err, db) {
//             if (err || !db) {
//                 return callback(err);
//             }
//             dbConnection = db.db("users");
//             console.log("Successfully connected to MongoDB");

//             return callback();
//         });
//     },

//     getDb: function () {
//         return dbConnection;
//     },
// };


