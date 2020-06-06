import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class NewsService {
  apiRoot =
    "https://newsapi.org/v2/top-headlines?sources=google-news&apiKey=33ba70d6367648b49a76910dfad62ad4";
  constructor(private http: HttpClient) {}

  getNews() {
    return this.http.get(this.apiRoot);
  }
}
