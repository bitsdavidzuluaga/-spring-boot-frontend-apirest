// import { User } from "../user/user";

export interface ILogin {
    email: string;
    password: string;
    token?: string;
    // user?: User;
}

export class Login implements ILogin {
    public email: string;
    public password: string;
    public token?: string;
    // public user?: User;
    constructor(login: ILogin) {
        this.email = login.email;
        this.password = login.password;
        this.token = login.token
        // this.user = login.user;
    }
}
