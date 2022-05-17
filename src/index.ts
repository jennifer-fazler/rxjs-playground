import { combineLatest, combineLatestWith, fromEvent, Observable } from "rxjs";

const temperatureInput = document.getElementById('temperature-input');
const conversionDropdown = document.getElementById('conversion-dropdown');
const resultText = document.getElementById('result-text');

// const a$ = new Observable<number>();

const tempInputEvent$ = fromEvent<InputEvent>(temperatureInput, 'input');
const conversionInputEvent$ = fromEvent<InputEvent>(conversionDropdown, 'input');

combineLatest([tempInputEvent$, conversionInputEvent$]).subscribe(
  ([tempEvent, convEvent]) => {
    // console.log((tempEvent.target as HTMLInputElement).value, 
    // (convEvent.target as HTMLInputElement).value);

    const temperature = Number((tempEvent.target as HTMLInputElement).value);
    const conversion = (convEvent.target as HTMLInputElement).value;

    let result: number;

    if (conversion === 'f-to-c') {
      result = (temperature - 32) * 5/9;
    } else if (conversion === 'c-to-f') {
      result = temperature * 9/5 + 32;
    }

    resultText.innerText = String(result);
  }
);