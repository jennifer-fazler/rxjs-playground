import { Observable } from 'rxjs';

//S3.22
const observable$ = new Observable<string>(subscriber => {
  console.log('Observable executed');
});
console.log('Before subscrible');
observable$.subscribe((value) => { console.log('Subscription executed', value); });
console.log('After subscrible');
