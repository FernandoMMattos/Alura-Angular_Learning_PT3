import { Component, OnInit } from '@angular/core';
import { ReviewService } from 'src/app/core/services/review.service';
import { IReview } from 'src/app/core/types/type';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss'],
})
export class ReviewsComponent implements OnInit {
  reviews: IReview[] = [];
  constructor(private service: ReviewService) {}

  ngOnInit(): void {
    this.service.list().subscribe((data) => {
      this.reviews = data;
    });
  }
}
