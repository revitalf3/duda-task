import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Review} from './review';
const imgGen = require('@dudadev/random-img');

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss']
})
export class ReviewComponent implements OnInit {
  @Input() userReviews: Review;
  @Input() editMode: boolean;
  @Output() onSaveReview: EventEmitter<any> = new EventEmitter<any>();


  public name: string;
  public comment: string;
  public avatar: string;

  constructor() {
  }

  ngOnInit() {
    this.getImg();
  }

  onSubmit() {
    this.onSaveReview.emit({name: this.name, comment: this.comment, avatar: this.avatar});
  }

  getImg() {
    imgGen()
      .then(avatarUrl => {
        this.userReviews.avatar = avatarUrl;
      });

  }

}
