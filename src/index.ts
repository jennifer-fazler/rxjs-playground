import { catchError, EMPTY, Observable, of } from "rxjs";

const failingHttpRequest$ = new Observable(subscriber => {
  setTimeout(() => {
    subscriber.error(new Error('Timeout'));
  }, 3000);
});

console.log('App started');

failingHttpRequest$.pipe(
  // catchError(error => of('Fallback value'))
  catchError(() => EMPTY)
).subscribe({
  next: value => console.log(value),
  complete: () => console.log('Completed')
});