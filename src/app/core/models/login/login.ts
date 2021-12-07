// import { User } from "../user/user";

export interface ILogin {
  id?: number;
  user: string;
  password: string;
  token?: string;
  // user?: User;
}

export class Login implements ILogin {
  public id?: number;
  public user: string;
  public password: string;
  public token?: string;
  // public user?: User;
  constructor(login: ILogin) {
    this.user = login.user;
    this.password = login.password;
    this.token = login.token;
    this.id = login.id;
  }
}
