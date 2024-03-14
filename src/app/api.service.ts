import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({providedIn:'root'})
export class BackendApi {
    public url:string = 'https://api.ascyt.com:5000/game/';

    constructor(private httpClient:HttpClient) {
    }

    apiGet(route:string, params:any=undefined):Observable<any> {
        if (!params) params = { };

        let paramsObject:HttpParams = new HttpParams();
        for (const key in params) {
            paramsObject = paramsObject.append(key, params[key]);
        }

        return this.httpClient.get<any>(this.url + route, { params: paramsObject })
    }

    apiPost(route:string, body:any):Observable<any> {
        return this.httpClient.post<any>(this.url + route, body)
    }

    apiPut(route:string, body:any):Observable<any> {
        return this.httpClient.put<any>(this.url + route, body)
    }

    apiDelete(route:string):Observable<any> {
        return this.httpClient.delete<any>(this.url + route)
    }
}