export class Login {
  email: string;
  password: string;

  constructor(email: string, password: string) {
    this.email = email;
    this.password = password;
  }

  public getEmail() {
    return this.email;
  }

  public getPassword() {
    return this.password;
  }
}
