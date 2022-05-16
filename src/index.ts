import { Observable } from 'rxjs';

//S3.23
const observable$ = new Observable<string>(subscriber => {  
  console.log('Observable executed');
  subscriber.next('Alice');
});
console.log('Before subscrible');
observable$.subscribe((value) => { console.log('Subscription executed', value); });
console.log('After subscrible');
