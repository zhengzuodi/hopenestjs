import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class LogginInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {

    const now = Date.now();

    // tslint:disable-next-line:no-console
    console.log('before..');

    return next.handle()
      .pipe(
        // tslint:disable-next-line:no-console
        tap(() => console.log(`after...${Date.now() - now}ms`)),
      );
  }
}
