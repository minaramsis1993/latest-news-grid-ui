import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LandingPageComponent } from "./components/landing-page/landing-page.component";
import { DetailsComponent } from "./components/details/details.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { FooterComponent } from "./components/footer/footer.component";
import { CardComponent } from "./components/card/card.component";
import { HttpClientModule } from "@angular/common/http";
import { MostPopularComponent } from "./components/most-popular/most-popular.component";
import { NewsLetterComponent } from "./components/news-letter/news-letter.component";
import { SocialComponent } from "./components/social/social.component";
import { CardWithDetailsComponent } from "./components/card-with-details/card-with-details.component";

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    DetailsComponent,
    NavbarComponent,
    FooterComponent,
    CardComponent,
    MostPopularComponent,
    NewsLetterComponent,
    SocialComponent,
    CardWithDetailsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
