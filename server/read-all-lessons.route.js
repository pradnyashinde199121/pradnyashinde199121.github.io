"use strict";
exports.__esModule = true;
var database_1 = require("./database");
function readAllLessons(req, res) {
    res.status(200).json({ lessons: database_1.db.readAllLessons() });
}
exports.readAllLessons = readAllLessons;
function readCurrentLesson(req, res) {
    console.log(req.params);
    res.status(200).json({ lessons: database_1.db.readCurrentLesson(req.params.id) });
}
exports.readCurrentLesson = readCurrentLesson;
