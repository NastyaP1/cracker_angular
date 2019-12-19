export class SearchWay {
  constructor(
    public id: number,
    public finance: number,
    public time: string,
    public transportTypes: Array<any>,
    public wayTypes: Array<any>,
    public searchPlace: string,
    public author: string
  ) {  }
}
