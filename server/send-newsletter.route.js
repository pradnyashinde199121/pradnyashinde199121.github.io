"use strict";
exports.__esModule = true;
var in_memory_db_1 = require("./in-memory-db");
var webpush = require('web-push');
function sendNewsletter(req, res) {
    console.log('Total subscriptions', in_memory_db_1.USER_SUBSCRIPTIONS.length);
    // sample notification payload
    var notificationPayload = {
        "notification": {
            "title": "Angular News",
            "body": "Notification Available!",
            "icon": "assets/main-page-logo-small-hat.png",
            "vibrate": [100, 50, 100],
            "data": {
                "dateOfArrival": Date.now(),
                "primaryKey": 1
            },
            "actions": [{
                    "action": "explore",
                    "title": "Go to the site"
                }]
        }
    };
    Promise.all(in_memory_db_1.USER_SUBSCRIPTIONS.map(function (sub) { return webpush.sendNotification(sub, JSON.stringify(notificationPayload)); }))
        .then(function () { return res.status(200).json({ message: 'Newsletter sent successfully.' }); })["catch"](function (err) {
        console.error("Error sending notification, reason: ", err);
        res.sendStatus(500);
    });
}
exports.sendNewsletter = sendNewsletter;
function sendSelectedNewsletter(req, res) {
    var data = req.body;
    console.log('Selected subscriptions', data);
    // sample notification payload
    var notificationPayload = {
        "notification": {
            "title": data.description,
            "body": data.longDescription,
            "icon": "assets/main-page-logo-small-hat.png",
            "vibrate": [100, 50, 100],
            "data": {
                "dateOfArrival": Date.now(),
                "primaryKey": 1
            },
            "actions": [{
                    "action": "explore",
                    "title": "Go to the site"
                }]
        }
    };
    Promise.all(in_memory_db_1.USER_SUBSCRIPTIONS.map(function (sub) { return webpush.sendNotification(sub, JSON.stringify(notificationPayload)); }))
        .then(function () { return res.status(200).json({ message: 'Newsletter sent successfully.' }); })["catch"](function (err) {
        console.error("Error sending notification, reason: ", err);
        res.sendStatus(500);
    });
}
exports.sendSelectedNewsletter = sendSelectedNewsletter;
