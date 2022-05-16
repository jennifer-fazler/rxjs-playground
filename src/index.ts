import { interval, Observable, timer } from "rxjs";

console.log('App started');

// our implementation of interval
const interval$ = new Observable<number>(subscriber => {
  let counter = 0;
  
  const intervalId = setInterval(() => {
    console.log('Timeout!');
    subscriber.next(counter++);
  }, 1000);

  return () => clearInterval(intervalId);
})

// const subscription = timer(2000).subscribe({
// const subscription = interval(1000).subscribe({
const subscription = interval$.subscribe({
  next: value => console.log(value),
  complete: () => console.log('Completed!')
});

setTimeout(() => {
  subscription.unsubscribe();
  console.log('Unsubscribe');
}, 5000);