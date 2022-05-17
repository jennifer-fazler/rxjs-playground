import { ajax } from "rxjs/ajax";
import { forkJoin } from "rxjs";

const randomName$ = ajax<any>('https://random-data-api.com/api/name/random_name');
const randomNation$ = ajax<any>('https://random-data-api.com/api/nation/random_nation');
const randomFood$ = ajax<any>('https://random-data-api.com/api/food/random_food');

// randomName$.subscribe(ajaxResponse => console.log(ajaxResponse));
// randomNation$.subscribe(ajaxResponse => console.log(ajaxResponse));
// randomFood$.subscribe(ajaxResponse => console.log(ajaxResponse));

randomName$.subscribe(ajaxResponse => console.log(ajaxResponse.response.first_name));
randomNation$.subscribe(ajaxResponse => console.log(ajaxResponse.response.capital));
randomFood$.subscribe(ajaxResponse => console.log(ajaxResponse.response.dish));

forkJoin([randomName$, randomNation$, randomFood$]).subscribe(
  // (ajaxReponses) => console.log(ajaxResponses)
  ([nameAjax, nationAjax, foodAjax]) => 
  console.log(`${nameAjax.response.first_name} is from ${nationAjax.response.capital} and likes to eat ${foodAjax.response.dish}`)
);