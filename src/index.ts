import { Observable } from 'rxjs';

const observable$ = new Observable<string>(subscriber => {
  console.log('Observable executed');
  subscriber.next('Alice');
  // subscriber.next('Ben');
  // subscriber.next('Charlie');
  setTimeout(() => subscriber.next('Ben'), 2000);
  setTimeout(() => subscriber.next('Charlie'), 4000);
});

// const observer = {
//   next: (value:string) => console.log(value)
// };

// observable$.subscribe(observer);

// this combined version is the one normally used instead of separate pieces as above
const subscription = observable$.subscribe((value:string) => console.log(value));

// This closes the subscription before we get the 3rd value. (in actual app, you'd want to also stop action that is emitting the values)
setTimeout(() => {
  console.log('Unsubscribe');
  subscription.unsubscribe();
}, 3000);