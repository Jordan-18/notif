'use strict';

module.exports = function(app){
    var jsonku = require('./controller');

    app.route('/')
        .get(jsonku.index);

    app.route('/notif')
        .get(jsonku.getallnotif);
    app.route('/notif/:id')
        .get(jsonku.getallnotifbyid);
}