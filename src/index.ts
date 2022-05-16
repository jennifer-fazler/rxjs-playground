import { Observable } from 'rxjs';

//S3.25
const observable$ = new Observable<string>(subscriber => {  
  console.log('Observable executed');
  subscriber.next('Alice');
  subscriber.next('Ben');
  setTimeout(() => {
    subscriber.next('Charlie');
    console.log('setting complete event');
    subscriber.complete();
}, 2000);

return () => {
  console.log('Teardown');
};
});
console.log('Before subscribe');
observable$.subscribe({
  next: (value) => console.log('Subscription executed', value),
  complete: () => console.log('Subscription completed')
});
console.log('After subscribe');
