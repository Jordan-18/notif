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

// menampilkan berdasarkan id
exports.getallnotifbyid = function(req,res){
    let id = req.params.id;
    connection.query('SELECT * FROM notif WHERE id = ?',[id],
        function(error,rows,fileds){
            if (error) {
                console.log(error);
            }else{
                respone.ok(rows,res);
            }
        });
};