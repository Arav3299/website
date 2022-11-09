import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { HeaderComponent } from '../common/header/header.component';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  countForCart = 0;
  countForLoop = 0;

  url = "http://192.168.0.58:8088/api/website";
  // url="http://localhost:8088/api/website"
  // url="http://192.168.173.120:8088/api/website"

  // urlforemail="http://localhost:8088/api/website/sendEmail";
  urlforemail = "http://192.168.0.58:8088/api/website/sendEmail";

  // urlforsavinguser="http://localhost:8088/api/website/saveUser";
  urlforsavinguser = "http://192.168.0.58:8088/api/website/saveUser";

  // urlforgettingallusers="http://localhost:8088/api/website/getAllUsers";
  urlforgettingallusers = "http://192.168.0.58:8088/api/website/getAllUsers";

  // urlforlogin = "http://localhost:8088/api/website/toLogin";
  urlforlogin = "http://192.168.0.58:8088/api/website/toLogin";

  constructor(private http: HttpClient) {

  }

  getAllContents() {
    return this.http.get(this.url + '/getAllData');
  }

  countIncrement() {
    this.countForLoop = this.countForLoop + 1;
  }

  public data = new BehaviorSubject(0);
  public shown = new BehaviorSubject(false);

  shown$ = this.shown.asObservable();
  data$ = this.data.asObservable();

  changeCount(data: number) {
    this.data.next(data);
  }

  changeView(shown: boolean) {
    this.shown.next(shown);
  }

  mail = {};
  toSendEmail(product: any) {

    alert();

    if (localStorage.getItem('user') == null && localStorage.getItem('current')) {
      alert("use")
      var fromLocal = JSON.parse(localStorage.getItem('current') || '{}');
      this.mail = fromLocal;
      console.log(this.mail);
      alert(JSON.stringify(fromLocal))
    } else if (localStorage.getItem('current') == null && localStorage.getItem("user")) {
      var fromLocal = JSON.parse(localStorage.getItem('user') || '{}');
      this.mail = fromLocal;
      console.log(fromLocal);
    }
    return this.http.post(this.urlforemail,[JSON.stringify(product),JSON.stringify(this.mail)]);
  }

  saveUser(user: any) {
    return this.http.post(this.urlforsavinguser, user)
  }

  loginUser(currentuser: any) {
    return this.http.post(this.urlforlogin, currentuser);
  }

}
