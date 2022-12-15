const sqlite3 = require('sqlite3').verbose();
const db_file_loc = './db/db1.db'

function open_db(file_name) {
    return new Promise((resolve, reject) => {
        const db = new sqlite3.Database(file_name, (err) => {
            if (err) {
                console.log(`Failed to connect to ${file_name}`);
                reject(err)
            }
            else {
                console.log(`Successfully connected to ${file_name}`);
                resolve(db)
            }
        })
    })
}

function close_db_async(db) {
    return new Promise((resolve, reject) => {
        db.close(err => {
            if (err) {
                console.log(err.message);
                reject(err.message)
            }
            else {
                console.log('Database connection closed!');
                resolve()
            }
        })
    })
}


//module.exports.sqlite3 = sqlite3
module.exports.db_file_loc = db_file_loc
module.exports.open_db = open_db
module.exports.close_db_async = close_db_async

