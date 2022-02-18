import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-review',
  templateUrl: './book-review.component.html',
  styleUrls: ['./book-review.component.scss']
})
export class BookReviewComponent implements OnInit {

  @Input() reviewContent: any;

  fullStars:number[];
  emptyStars: number[];

  constructor() {
    this.fullStars = [];
    this.emptyStars = [];
  }

  ngOnInit(): void {
    var i;
    for( i=0; i<this.reviewContent.rating; i++) {
      this.fullStars.push(i);
    }
    for( i; i<5; i++) {
      this.emptyStars.push(i);
    }
  }

  getAuthorString(): string {
    let authors = 'By ';
    this.reviewContent.authors.forEach( (author:string, index:number) => {
      if(index>0) authors += ', ';
      authors += author;
    });
    return authors;
  }

}
