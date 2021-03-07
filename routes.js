'use strict';

module.exports = function(app){
    var jsonku = require('./controller');

    app.route('/')
        .get(jsonku.index);

//  getall data
    app.route('/notif')
        .get(jsonku.getallnotif);

//  getdata by id
    app.route('/notif/get')
        .get(jsonku.getallnotifbyid);

//  post data
    app.route('/tambah')
        .post(jsonku.postnotif);

//  ubah terbaca
    app.route('/read/:id')
        .put(jsonku.notifterbaca);
        
//  ubah terbaca semua
    app.route('/readall')
        .put(jsonku.Setreadall);

//  set belum terbaca semua
    app.route('/unreadall')
        .put(jsonku.Setunreadall);

//  hapus notif
    app.route('/hapus')
        .delete(jsonku.hapusnotif)
}