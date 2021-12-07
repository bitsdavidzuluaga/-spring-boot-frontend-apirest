export interface IResultData <T> {
  body: T;
  code: string;
  message: string;
}

export class ResultData <T> implements IResultData<T> {
  body: T;
  code: string;
  message: string;
  constructor(result: IResultData<T>) {
    this.body = result.body;
    this.code = result.code;
    this.message = result.message;
  }
}
