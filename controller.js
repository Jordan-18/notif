'use strict';

var respone = require('./res');
var connection = require('./koneksi');

exports.index = function(req,res){
    respone.ok("Aplikasi Res Api Bejalan",res)
}

// menampilkan semua data 
exports.getallnotif = function(req,res){
    connection.query('SELECT * FROM notif', function(error, rows, fileds){
        if(error){
            connection.log(error);
        }else{
            respone.ok(rows, res)
        }
    });
};