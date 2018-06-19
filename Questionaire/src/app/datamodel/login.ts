export class Login {
  emailId: string;
  password: string;

  constructor(emailId: string, password: string) {
    this.emailId = emailId;
    this.password = password;
  }

  public getEmail() {
    return this.emailId;
  }

  public getPassword() {
    return this.password;
  }
}
