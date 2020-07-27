"use strict";
exports.__esModule = true;
var _ = require("lodash");
var database_data_1 = require("./database-data");
var InMemoryDatabase = /** @class */ (function () {
    function InMemoryDatabase() {
    }
    InMemoryDatabase.prototype.readAllLessons = function () {
        return _.values(database_data_1.LESSONS);
    };
    InMemoryDatabase.prototype.readCurrentLesson = function (id) {
        return _.values(database_data_1.LESSONS[id]);
    };
    return InMemoryDatabase;
}());
exports.db = new InMemoryDatabase();
