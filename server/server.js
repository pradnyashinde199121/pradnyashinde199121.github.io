"use strict";
exports.__esModule = true;
var express = require("express");
var read_all_lessons_route_1 = require("./read-all-lessons.route");
var add_push_subscriber_route_1 = require("./add-push-subscriber.route");
var send_newsletter_route_1 = require("./send-newsletter.route");
var bodyParser = require('body-parser');
var cors = require('cors');
var webpush = require('web-push');
var vapidKeys = {
    "publicKey": "BPeYfGjnNtasoHB4UvTSAe9AvxFot3hfrG2yAO-IjkekTD6W-1rwNq01iWoU7uOSP1xSAEMFI2WsIR-GaJa4reA",
    "privateKey": "m39qHf_OwbVfyvsLnVP74KD7Pf6TlvhmKIrzNHV7-cM"
};
webpush.setVapidDetails('mailto:shindepp1991@gmail.com', vapidKeys.publicKey, vapidKeys.privateKey);
var app = express();
app.use(bodyParser.json());
app.use(cors());
// REST API
app.route('/api/lessons')
    .get(read_all_lessons_route_1.readAllLessons);
app.route('/api/lessons/:id')
    .get(read_all_lessons_route_1.readCurrentLesson);
app.route('/api/notifications')
    .post(add_push_subscriber_route_1.addPushSubscriber);
app.route('/api/newsletter')
    .post(send_newsletter_route_1.sendNewsletter);
app.route('/api/selectednewsletter')
    .post(send_newsletter_route_1.sendSelectedNewsletter);
// launch an HTTP Server
var httpServer = app.listen(9000, function () {
    console.log("HTTP Server running at http://localhost:" + httpServer.address().port);
});
