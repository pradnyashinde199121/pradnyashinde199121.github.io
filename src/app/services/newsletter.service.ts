

import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import { Observable } from "rxjs";



@Injectable()
export class NewsletterService {
   // url:"http://localhost:9000";

    constructor(private http: HttpClient) {

    }

    addPushSubscriber(sub:any) {
        
        return this.http.post('http://localhost:9000/api/notifications', sub);
    }
 
    send():Observable<any> {
        return this.http.post<any>('http://localhost:9000/api/newsletter', null);
    }
    sendselectedLession(selectedLession: Observable<any>):Observable<any> {
        return this.http.post<any>('http://localhost:9000/api/selectednewsletter', selectedLession);
    }


}


