
import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Lesson} from "../model/lesson";
import {Observable} from "rxjs";
import {map} from 'rxjs/operators';


@Injectable()
export class LessonsService {
  //url:"http://localhost:9000";

    constructor(private http: HttpClient) {

    }

    loadAllLessons() : Observable<Lesson[]> {
        return this.http.get<any>('http://localhost:9000/api/lessons')
          .pipe(
            map(res => res.lessons)
          )
    }

    findLessonById(id:number): Observable<Lesson> {
        return this.http.get<Lesson>('http://localhost:9000/api/lessons/' + id);
    }

}

