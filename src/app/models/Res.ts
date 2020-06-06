import {Article} from './Article'
export class Res {
  constructor(
    public status?: string,
    public totalResults?: number,
    public articles?: Article[]
  ) {}
}

