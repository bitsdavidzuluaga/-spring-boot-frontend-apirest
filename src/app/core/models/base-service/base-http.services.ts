import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

export abstract class BaseHttpService<TModel> {
    public headers: HttpHeaders = new HttpHeaders;

    constructor(protected http: HttpClient, protected apiRoot: string) {

    }

    private applicationAuth(isAut: boolean) {
        if (isAut) {
            let token = 'bearer ' + localStorage.getItem('token');
            this.headers = new HttpHeaders({
                'Access-Control-Aow-Origin': '*',
                'Authotization': token
            });
        } else {
            this.headers = new HttpHeaders({
                'Access-Control-Aow-Origin': '*'
            });
        }
    }

    public get(endPoint: string, isAut: boolean = false): Observable<TModel[]> {
        const apiUrl = `${this.apiRoot}${endPoint}`;
        this.applicationAuth(isAut);
        return this.http.get<TModel[]>(apiUrl, { headers: this.headers });
    }

    public getId(endPoint: string, isAut: boolean = false): Observable<TModel> {
        const apiUrl = `${this.apiRoot}${endPoint}`;
        this.applicationAuth(isAut);
        return this.http.get<TModel>(apiUrl, { headers: this.headers });
    }

    public post(endPoint: string, object: TModel, isAut: boolean = false): Observable<TModel> {
            const apiUrl = `${this.apiRoot}${endPoint}`;
            this.applicationAuth(isAut);
            return this.http.post<TModel>(apiUrl, object, { headers: this.headers });
    }

    public put(endPoint: string, object: TModel, isAut: boolean = false): Observable<TModel> {
            const apiUrl = `${this.apiRoot}${endPoint}`;
            this.applicationAuth(isAut);
            return this.http.put<TModel>(apiUrl, object, { headers: this.headers });
    }

    public delete(endPoint: string, isAut: boolean = false): Observable<TModel> {
            const apiUrl = `${this.apiRoot}${endPoint}`;
            this.applicationAuth(isAut);
            return this.http.delete<TModel>(apiUrl, { headers: this.headers });
    }

}
