
import * as _ from 'lodash';
import {LESSONS} from "./database-data";


class InMemoryDatabase {

    readAllLessons() {
        return _.values(LESSONS);
    }

    readCurrentLesson(id:number) {
        return _.values(LESSONS[id])
    }

}




export const db = new InMemoryDatabase();


