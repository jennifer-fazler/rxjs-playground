import { Observable } from 'rxjs';

//S3.24
const observable$ = new Observable<string>(subscriber => {  
  console.log('Observable executed');
  subscriber.next('Alice');
  subscriber.next('Ben');
  setTimeout(() => subscriber.next('Charlie'), 2000);
});
console.log('Before subscribe');
observable$.subscribe((value) => { console.log('Subscription executed', value); });
console.log('After subscribe');
