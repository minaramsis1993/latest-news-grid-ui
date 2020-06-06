export class Article {
  constructor(
    public id?: number,
    public source?: any,
    public author?: string,
    public title?: string,
    public description?: string,
    public url?: string,
    public urlToImage?: string,
    public publishedAt?: string,
    public content?: string
  ) {}
}

