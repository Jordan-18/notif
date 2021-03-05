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

// menambahkan data dengan post
exports.postnotif = function(req,res){
    var id = req.body.id;
    var nim = req.body.nim;
    var penerima = req.body.penerima;
    var pesan = req.body.pesan;
    var waktu = new Date()
    var sudah_terbaca = req.body.sudah_terbaca;

    connection.query('INSERT INTO notif (id,nim,penerima,pesan,waktu,sudah_terbaca) VALUES(?,?,?,?,?,?)',[id,nim,penerima,pesan,waktu,sudah_terbaca],
    function (error,rows,fileds){
        if (error) {
            console.log(error);
        }else{
            respone.ok("Berhasil Menambahkan data",res)
        }
    });
};