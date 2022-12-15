
console.log(`Welcome to my book-shop!`);

const common_dal = require('./common_dal')
const { db_file_loc } = require('./common_dal')
const books_dal = require('./books_dal')
const orders_dal = require('./orders_dal')

async function main() {
    try {
        // this is demo code
        // this shows how to call functions from different modules
        // here we have book module and order module
        const db = await common_dal.open_db(db_file_loc)
        console.log(db);
        await books_dal.insert_book_async(db, [15, 'DAN12', 18, 'MEXICO', 32000])
        await books_dal.update_books_by_id_async(db, 8, (new Date()).getUTCMilliseconds() * 489)
        const result = await orders_dal.select_async(db, "SELECT * from company");
        console.log(result);
        await orders_dal.delete_company_by_id_async(db, 12)
        await common_dal.close_db_async(db)
    }
    catch (err) {
        console.log(`ERROR: ${err}`);
    }
}

main()
