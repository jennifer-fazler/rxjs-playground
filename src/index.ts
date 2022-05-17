import { debounceTime, fromEvent, map } from "rxjs";

const sliderInput = document.querySelector('input#slider');

// fromEvent(sliderInput, 'input').subscribe(value => console.log(value));

fromEvent(sliderInput, 'input').pipe(
  debounceTime(2000),
  map(event => (event.target as HTMLInputElement).value)
).subscribe(value => console.log(value));

