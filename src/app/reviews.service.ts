import {Injectable} from '@angular/core';
import {Review} from './review/review';


@Injectable({
  providedIn: 'root'
})
export class ReviewsService {

  constructor() {
  }


  saveReviews(reviews: Review[]): void {
    localStorage.setItem('Reviews', JSON.stringify(reviews));
  }

  getReviews(): Review[] {
    return localStorage.getItem('Reviews')
      ? JSON.parse(localStorage.getItem('Reviews'))
      : [];
  }
}
