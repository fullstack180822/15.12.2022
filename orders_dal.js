

//
// DEMO CODE
// NEED TO FIX EVERYTHING TO MATCH THE ORDERS TABLE
//

// THIS IS DEMO CODE
// NEED TO MODIFY THE FUNCTIONS

function update_orders_by_id_async(db, id, new_salary) {
    return new Promise(function (resolve, reject) {
        const sql_update = `UPDATE COMPANY 
                        SET SALARY = ?
                        WHERE id = ?`
        db.run(sql_update, [new_salary, id], err => {
            if (err) {
                console.log(`ERROR: ${err}`);
                reject(err)
            }
            else {
                console.log(`Salary updated to ${new_salary}`);
                resolve(new_salary)
            }
        })
    })
}

function delete_order_by_id_async(db, id) {
    return new Promise(function (resolve, reject) {
        const sql_update = `DELETE FROM COMPANY 
                        WHERE id = ?`
        db.run(sql_update, [id], err => {
            if (err) {
                console.log(`ERROR: ${err}`);
                reject(err)
            }
            else {
                console.log(`Deleted record id ${id}`);
                resolve()
            }
        })
    })
}

function select_async(db, query) {
    return new Promise(function (resolve, reject) {
        db.all(query, function (err, rows) {
            if (err) { return reject(err); }
            resolve(rows);
        });
    });
}

function insert_order_async(db, data) {
    return new Promise(function (resolve, reject) {
        const sql_insert = `INSERT INTO COMPANY (ID,NAME,AGE,ADDRESS,SALARY)
                            VALUES (?, ?, ? ,?, ?);` // [7, 'DAN', 18, 'MEXICO', 32000] == data
        db.run(sql_insert, data, err => {
            if (err) {
                reject(err)
            }
            else {
                console.log(`INSERTED ${data}`);
                resolve()
            }
        })
    });
}

// THIS IS DEMO CODE
// NEED TO MODIFY THE FUNCTIONS
module.exports.update_orders_by_id_async = update_orders_by_id_async
module.exports.delete_order_by_id_async = delete_order_by_id_async
module.exports.select_async = select_async
module.exports.insert_order_async = insert_order_async



