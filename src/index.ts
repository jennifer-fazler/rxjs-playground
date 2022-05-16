import { Observable } from "rxjs";

//S3.29
const interval$ = new Observable<number>((subscriber) => {
  let counter = 1;
  const intervalId = setInterval(() => {
    console.log('emit value: ', counter);
    subscriber.next(counter++);
  }, 2000);

  return () => {
    clearInterval(intervalId);
    console.log("Teardown");
  };
});

const subscription = interval$.subscribe((value) => console.log('received value: ', value));
setTimeout(() => {
  console.log('Unsubscribe');
  subscription.unsubscribe();
}, 7000);
