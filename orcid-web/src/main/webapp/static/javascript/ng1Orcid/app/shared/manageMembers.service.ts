import { Injectable } 
    from '@angular/core';

import { HttpClient, HttpClientModule, HttpHeaders } 
     from '@angular/common/http';



import { Headers, Http, RequestOptions, Response, URLSearchParams } 
    from '@angular/http';

import { Observable } 
    from 'rxjs/Observable';

import { Subject }
    from 'rxjs/Subject';

import 'rxjs/Rx';

@Injectable()
export class ManageMembersService {
    private headers: HttpHeaders;
    private notify = new Subject<any>();       


    notifyObservable$ = this.notify.asObservable();

    constructor( private http: HttpClient ){
        this.headers = new HttpHeaders(
            {
                'Access-Control-Allow-Origin':'*',
                'Content-Type': 'application/json',
                'X-CSRF-TOKEN': document.querySelector("meta[name='_csrf']").getAttribute("content")
            }
        );     

    }

    updateConsortium( obj ): Observable<any> {
        let encoded_data = JSON.stringify( obj );
        
        return this.http.post( 
            getBaseUri()+'/manage-members/update-consortium.json', 
            encoded_data, 
            { headers: this.headers }
        )
        .share();
    }

    findConsortium( obj ): Observable<any> {
        let encoded_data = JSON.stringify( obj );
        return this.http.get(
            getBaseUri()+'/manage-members/find-consortium.json?id=' + encoded_data
        )
        .share();
    }

    notifyOther(): void {
        this.notify.next();
        console.log('notify');
    }


}
