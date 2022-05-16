import { Observable } from "rxjs";
import { ajax } from "rxjs/ajax";

//S4.33

const helloButton = document.querySelector("button#hello");

const helloClick$ = new Observable<MouseEvent>((subscriber) => {
  helloButton.addEventListener("click", (event) => {
    subscriber.next(event as MouseEvent);
  });
});

helloClick$.subscribe((event: MouseEvent) => console.log('Sub 1:', event.type, event.x, event.y));

setTimeout(() => {
  console.log('Subscription 2 starts');
  helloClick$.subscribe((event: MouseEvent) => console.log('Sub 2:', event.type, event.x, event.y));
}, 5000);
