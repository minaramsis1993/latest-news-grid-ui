import { Component, OnInit, Input } from "@angular/core";
import { Article } from "src/app/models/Article";
import { Router } from "@angular/router";

@Component({
  selector: "app-card-with-details",
  templateUrl: "./card-with-details.component.html",
  styleUrls: ["./card-with-details.component.css"],
})
export class CardWithDetailsComponent implements OnInit {
  @Input() article: Article;
  @Input() articles: Article[];
  @Input() isWithDate: boolean;
  @Input() isMain: boolean;
  constructor(private router: Router) {}

  ngOnInit(): void {}

  navigateToDetails(art: Article) {
    const foundIndex = this.articles.findIndex(
      (article: Article) => article.author === art.author
    );
    this.router.navigate([`/details/${foundIndex}`]);
  }
}
