
import {db} from "./database";


export function readAllLessons(req, res) {

    res.status(200).json({lessons:db.readAllLessons()});

}
export function readCurrentLesson(req, res) {
    console.log(req.params); 
    
    res.status(200).json({lessons:db.readCurrentLesson(req.params.id)});

}