'use strict';

module.exports = function(app){
    var jsonku = require('./controller');

    app.route('/')
        .get(jsonku.index);

//  getall data
    app.route('/notif')
        .get(jsonku.getallnotif);

//  getdata by id
    app.route('/notif/:id')
        .get(jsonku.getallnotifbyid);

//  post data
    app.route('/tambah')
        .get(jsonku.postnotif);
}