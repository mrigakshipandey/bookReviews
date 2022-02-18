import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { ReviewPageComponent } from './pages/review-page/review-page.component';
import { BookReviewComponent } from './pages/book-review/book-review.component';
import {MatIconModule} from '@angular/material/icon';
import { ParallaxDirective } from './directives/parallax.directive';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    ReviewPageComponent,
    BookReviewComponent,
    ParallaxDirective,
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
