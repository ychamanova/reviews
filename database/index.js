const mysql = require('mysql');
const databaseconfig = require('./config.js');

const connection = mysql.createConnection(databaseconfig);

module.exports = {
    getAllReviewsForPage: function(page_id, callback) {
        connection.query(`SELECT * FROM reviews WHERE page_id=${page_id}`, (err, results) => {
            if (err) {
                console.log('error occurred during get reviews from db', err);
                callback(err, results);
            } else {
                callback(err, results);
            }
        });
    }
};
