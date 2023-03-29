import {
  HTTP_INTERCEPTORS,
  HttpClient,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse
} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { delay } from "rxjs/operators";
import { Observable, of } from "rxjs";
import { drivers } from "../../assets/drivers";

@Injectable()
export class FakeBackendHttpInterceptor implements HttpInterceptor {
  // default driver json path

  constructor(private http: HttpClient){
  }

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>>{
    return this.handleRequests(req, next);
  }

  /**
   * Handle request's and support with mock data.
   * @param req
   * @param next
   */
  handleRequests(req: HttpRequest<any>, next: HttpHandler): any{
    const { url, method } = req;
    if ( url.includes("/driver/description") && method === "GET" ) {
      req = req.clone({
        body: [{}, {}],
      });
      return of(new HttpResponse({status: 200, body: [{},{}, {}] })).pipe(delay(500))
    }
    if ( url.includes("/drivers") && method === "GET" ) {

      return of(new HttpResponse({status: 200, body: drivers()})).pipe(delay(500))
    }
    if ( url.endsWith("/driver") && method === "POST" ) {
      const { body } = req.clone();
      // assign a new uuid to new employee
      body.id = Math.trunc(Math.random() * 10);
      return of(new HttpResponse({ status: 200, body })).pipe(delay(500));
    }
    if ( url.match(/\/driver\/.*/) && method === "DELETE" ) {
      const empId = this.getEmployeeId(url);
      return of(new HttpResponse({ status: 200, body: empId })).pipe(
        delay(500)
      );
    }
    // if there is not any matches return default request.
    return next.handle(req);
  }

  /**
   * Get Employee unique uuid from url.
   * @param url
   */
  getEmployeeId(url: any){
    const urlValues = url.split("/");
    return urlValues[ urlValues.length - 1 ];
  }
}

/**
 * Mock backend provider definition for app.module.ts provider.
 */
export const fakeBackendProvider = {
  provide: HTTP_INTERCEPTORS,
  useClass: FakeBackendHttpInterceptor,
  multi: true,
};
