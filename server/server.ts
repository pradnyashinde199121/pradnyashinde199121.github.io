
import * as express from 'express';
import { Application } from "express";
import { readAllLessons, readCurrentLesson } from "./read-all-lessons.route";
import { addPushSubscriber } from "./add-push-subscriber.route";
import { sendNewsletter, sendSelectedNewsletter } from "./send-newsletter.route";
const bodyParser = require('body-parser');
var cors = require('cors');

const webpush = require('web-push');

const vapidKeys = {
    "publicKey": "BPeYfGjnNtasoHB4UvTSAe9AvxFot3hfrG2yAO-IjkekTD6W-1rwNq01iWoU7uOSP1xSAEMFI2WsIR-GaJa4reA",
    "privateKey": "m39qHf_OwbVfyvsLnVP74KD7Pf6TlvhmKIrzNHV7-cM"

};


webpush.setVapidDetails(
    'mailto:shindepp1991@gmail.com',
    vapidKeys.publicKey,
    vapidKeys.privateKey
);




const app: Application = express();


app.use(bodyParser.json());
app.use(cors());

// REST API
app.route('/api/lessons')
    .get(readAllLessons);
app.route('/api/lessons/:id')
    .get(readCurrentLesson);

app.route('/api/notifications')
    .post(addPushSubscriber);

app.route('/api/newsletter')
    .post(sendNewsletter);

app.route('/api/selectednewsletter')
    .post(sendSelectedNewsletter);


// launch an HTTP Server
const httpServer: any = app.listen(9000, () => {
    console.log("HTTP Server running at http://localhost:" + httpServer.address().port);
});









