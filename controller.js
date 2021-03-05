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

// mengubah data berdasarkan id
exports.notifterbaca = function(req,res){
    let id = req.params.id;

    connection.query('UPDATE notif SET sudah_terbaca = 1 WHERE notif.id=?',[id],
    function(error,rows,fileds){
        if (error) {
            console.log(error)
        }else{
            respone.ok("Data Telah Terbaca",res)
        }
    });
};

// mengubah data terbaca secara seluruh
exports.Setreadall = function(req,res){
    connection.query('UPDATE notif SET sudah_terbaca = 1',
    function(error,rows,fileds){
        if (error) {
            console.log(error)
        }else{
            respone.ok("Data Telah Terbaca Semua",res)
        }
    });
};

// mengubah data belum terbaca secara seluruh
exports.Setunreadall = function(req,res){
    connection.query('UPDATE notif SET sudah_terbaca = 0',
    function(error,rows,fileds){
        if (error) {
            console.log(error)
        } else {
            respone.ok("Data Belum Terbaca",res)
        }
    })
}

// menghapus data 
exports.hapusnotif = function(req,res){
    let id = req.params.id;
    connection.query('DELETE FROM notif WHERE notif.id=?',[id],
    function(error, rows, fileds){
        if (error) {
            console.log(error)
        } else {
            respone.ok("Data Telah Terhapus",res)
        }
    });
};