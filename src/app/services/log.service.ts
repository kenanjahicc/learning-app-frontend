import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {Log} from '../models/log.model';

@Injectable()
export class LogService {

  constructor() {
  }

  getLogs(habitId: number): Observable<Log[]> {
    return of([
      {
        time: 256,
        reason: 'I was strong',
      },
      {
        time: 3000,
        reason: 'null',
      }
    ]);
  }

  createLog(log: Log): Observable<Log> {
    console.log('Reached logService with intention to create log:', log);
    return of({
      reason: 'Ate chocolate',
    });
  }
}
