import { Component, OnInit } from "@angular/core";
import { NewsService } from "src/app/services/news.service";
import { Article } from "src/app/models/Article";
import { Res } from "src/app/models/Res";

@Component({
  selector: "app-landing-page",
  templateUrl: "./landing-page.component.html",
  styleUrls: ["./landing-page.component.css"],
})
export class LandingPageComponent implements OnInit {
  articles: Article[];
  articlesLeftUpFront: Article[];
  articlesRight: Article[];
  articlesLast4: Article[];
  constructor(private newsServ: NewsService) {}

  ngOnInit(): void {
    this.newsServ.getNews().subscribe(
      (res: Res) => {
        this.articles = res.articles;
        this.articlesLeftUpFront = this.articles.slice(0, 3);
        this.articlesRight = this.articles.slice(3, 6);
        this.articlesLast4 = this.articles.slice(6);
        console.log(this.articles);
        console.log(this.articlesRight);
      },
      (err) => {}
    );
  }
}
