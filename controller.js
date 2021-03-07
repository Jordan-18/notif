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
            console.log(error);
            respone.err(error,res)
        }else{
            respone.ok(rows, res)
        }
    });
};

// menampilkan berdasarkan id
exports.getallnotifbyid = function(req,res){
    let id = req.query.id;
    
    connection.query('SELECT * FROM notif WHERE id = ?',[id],
        function(error,rows,fileds){
            if (error) {
                console.log(error);
                respone.err(error,res)
            }else{
                respone.ok(rows,res);
            }
        });
};

// menambahkan data dengan post
exports.postnotif = function(req,res){
    
    var nim = req.body.nim;
    var penerima = req.body.penerima;
    var pesan = req.body.pesan;

    connection.query('INSERT INTO notif (nim,penerima,pesan) VALUES(?,?,?)',
        [
            nim,penerima,pesan
        ],
    function (error,rows,fileds){
        if (error) {
            console.log(error);
            respone.err(error,res)
        }else{
            respone.ok("Berhasil Menambahkan data",res)
        }
    });
};

// mengubah data berdasarkan id
exports.notifterbaca = function(req,res){
    let id = req.body.id;

    connection.query('UPDATE notif SET sudah_terbaca = 1 WHERE notif.id=?',[id],
    function(error,rows,fileds){
        if (error) {
            console.log(error)
            respone.err(error,res)
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
            respone.err(error,res)
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
            respone.err(error,res)
        } else {
            respone.ok("Data Belum Terbaca",res)
        }
    })
}

// menghapus data 
exports.hapusnotif = function(req,res){
    let id = req.body.id;
    console.log(id)
    connection.query('DELETE FROM notif WHERE notif.id=?',[id],
    function(error, rows, fileds){
        if (error) {
            console.log(error)
            respone.err(error,res)
        } else {
            respone.ok("Data Telah Terhapus",res)
        }
    });
};