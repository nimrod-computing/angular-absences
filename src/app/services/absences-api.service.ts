import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Http, RequestOptions, RequestOptionsArgs, Headers } from '@angular/http';

// const UrlRoot: string = "http://localhost:56485/api/";
const UrlRoot: string = "http://nimrodcomputing.somee.com/api/";

@Injectable()
export class AbsencesApiService {

  constructor(private http: Http) { }

  public getAll(urlSegment: string): Observable<any[]> {
    return this.http.get(UrlRoot + urlSegment)
      .map(response => response.json())
      .catch(this.handleError);
  }

  public get(urlSegment: string, id?: number): Observable<any> {
    let url = UrlRoot + urlSegment;
    if (id && id > 0)
      url += "/" + id;
    return this.http.get(url)
      .map(response => {
        return response.json();
      })
      .catch(this.handleError);
  }

  public post(urlSegment: string, entity: any, options: RequestOptionsArgs = {}): Observable<any> {
    let url = UrlRoot + urlSegment;
    let jsonContentType = new Headers({ 'Content-Type': 'application/json' });

    if (options == null)
      options = {};
    if (options.headers == null)
      options.headers = new Headers();
    Object.assign(options.headers, jsonContentType);

    let body = JSON.stringify(entity);
    return this.http.post(url, body, options)
      .map(response => response.json())
      .catch(this.handleError);
  }

  public delete(urlSegment: string, id: number, options: RequestOptionsArgs = {}): Observable<any> {
    let url = UrlRoot + urlSegment + "/" + id;
    return this.http.delete(url, options)
      .map(response => response.json())
      .catch(this.handleError);
  }

  private handleError(error: Response) {
    console.log(error);
    return Observable.throw(error.json());
  }
}
