import { Component, OnInit, Input } from "@angular/core";
import { Article } from "src/app/models/Article";
import { Router } from "@angular/router";

@Component({
  selector: "app-card",
  templateUrl: "./card.component.html",
  styleUrls: ["./card.component.css"],
})
export class CardComponent implements OnInit {
  @Input() article: Article;
  @Input() articles: Article[];
  constructor(private router: Router) {}

  ngOnInit(): void {}

  navigateToDetails(art: Article) {
    const foundIndex = this.articles.findIndex(
      (article: Article) => article.author === art.author
    );
    this.router.navigate([`/details/${foundIndex}`]);
  }
}
