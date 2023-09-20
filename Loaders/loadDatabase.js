const mysql = require("mysql")

module.exports = async () => {

    let db = await mysql.createConnection({
        host: "161.97.78.70:3306",
        user: "u20060_ARBkd1QNY2",
        password: "KyW@^OwPWNw1AWummH^Vkfl5",
        database: "s20060_paradisereminder"
    })

    return db;
}