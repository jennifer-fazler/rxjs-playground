import { filter, map, of, tap } from "rxjs";

of(1,7,3,6,2).pipe(
  filter(value => value > 5),
  tap(value => console.log('Spy:', value)),
  map(value => value * 2),
  tap({
    complete: () => console.log('Completed')
  }),
).subscribe(value => console.log('Output:', value));


