import { HttpInterceptor } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class CustomInterceptor implements HttpInterceptor {
    intercept(req: import("@angular/common/http").HttpRequest<any>, next: import("@angular/common/http").HttpHandler): import("rxjs").Observable<import("@angular/common/http").HttpEvent<any>> {
        const key = localStorage.getItem("key");

        if (key) {
            const cloned = req.clone({
                headers: req.headers.append("Authorization", "Token " + key)
            })

            return next.handle(cloned);

        } else {
            return next.handle(req);
        }
    }

}