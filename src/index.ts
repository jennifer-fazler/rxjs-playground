import { filter, Observable } from "rxjs";

interface NewsItem {
  category: 'Business' | 'Sports';
  content: string;
}

const newsFeed$ = new Observable<NewsItem>(subscriber => {
  setTimeout(() => subscriber.next({ category: 'Business', content: 'A' }), 1000);
  setTimeout(() => subscriber.next({ category: 'Sports', content: 'B' }), 3000);
  setTimeout(() => subscriber.next({ category: 'Business', content: 'C' }), 4000);
  setTimeout(() => subscriber.next({ category: 'Sports', content: 'D' }), 6000);
  setTimeout(() => subscriber.next({ category: 'Business', content: 'E' }), 7000);
});

// newsFeed$.subscribe(item => console.log(item));

// newsFeed$.pipe(
//   //... allows us to provide the pipeable operators
//   filter(item => item.category === 'Sports')
// ).subscribe(item => console.log(item));

// this method allows the original feed to exist in case we also want all of the newsfeed items somewhere else
const sportsNewsFeed$ = newsFeed$.pipe(
  filter(item => item.category === 'Sports')
);
sportsNewsFeed$.subscribe(item => console.log(item)); 

