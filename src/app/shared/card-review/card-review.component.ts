import { Component, Input } from '@angular/core';
import { IReview } from 'src/app/core/types/type';

@Component({
  selector: 'app-card-review',
  templateUrl: './card-review.component.html',
  styleUrls: ['./card-review.component.scss'],
})
export class CardReviewComponent {
  @Input() review!: IReview;
}
