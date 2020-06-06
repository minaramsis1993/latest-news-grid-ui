import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { NewsService } from "src/app/services/news.service";
import { Res } from "src/app/models/Res";
import { Article } from "src/app/models/Article";

@Component({
  selector: "app-details",
  templateUrl: "./details.component.html",
  styleUrls: ["./details.component.css"],
})
export class DetailsComponent implements OnInit {
  articles: Article[];
  article: Article;
  comments = [
    {
      userName: "Mina",
      date: "2020-02-21T19:59:00+00:00",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam distinctio corporis rerum, asperiores provident nulla sintsit, adipisci expedita numquam iste possimus aspernatureveniet quod.",
    },
  ];
  obj: {
    name: string;
    email: string;
    message: string;
  } = {
    name: null,
    email: null,
    message: null,
  };
  constructor(private newsServ: NewsService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.newsServ.getNews().subscribe(
      (res: Res) => {
        this.articles = res.articles;
        this.article = this.articles[+this.route.snapshot.params["id"]];
      },
      (err) => {}
    );
  }

  addToComments() {
    const { name, message, email } = this.obj;
    if (name && message && email) {
      this.comments.push({
        userName: name,
        description: message,
        date: new Date().toDateString(),
      });
      this.obj.name = null;
      this.obj.email = null;
      this.obj.message = null;
    } else {
      // DO NOTHING
    }
  }
}
