import {Component, OnInit} from '@angular/core';
import {Review} from '../review/review';
import {ReviewsService} from '../reviews.service';


@Component({
  selector: 'app-user-reviews',
  templateUrl: './user-reviews.component.html',
  styleUrls: ['./user-reviews.component.scss']
})
export class UserReviewsComponent implements OnInit {
  public AllUserReviews: Review[];
  public newReviews: Review = {name: '', comment: ''};

  constructor(private reviewsService: ReviewsService) {
  }


  ngOnInit() {

    this.AllUserReviews = this.reviewsService.getReviews();

  }

  saveReview($event): void {
    debugger;
    this.AllUserReviews.push($event);
    this.reviewsService.saveReviews(this.AllUserReviews);
    this.AllUserReviews = this.reviewsService.getReviews();

  }


}

