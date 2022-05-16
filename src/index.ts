import { Observable, of } from "rxjs";

//S5.37
// of('Alice', 'Ben', 'Charlie').subscribe({
ourOwnOf("Alice", "Ben", "Charlie").subscribe({
  next: (value) => console.log(value),
  complete: () => console.log("Completed"),
});

// create a function which operates just like the 'of' creator function
function ourOwnOf(...args: string[]): Observable<string> {
  return new Observable<string>((subscriber) => {
    for (let index = 0; index < args.length; index++) {
      subscriber.next(args[index]);
    }
    subscriber.complete();
  });
}
