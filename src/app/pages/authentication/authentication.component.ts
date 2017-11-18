import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../shared/http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.sass'],
  providers: [HttpService]
})
export class AuthenticationComponent implements OnInit {
  private auth: any = {
    'username': 'Nicholas',
    'password': '123456',
    'rememberMe': '1'
  };
  constructor(private httpService: HttpService, private router: Router) { }

  ngOnInit() {
  }

  saveForm(data) {
    console.log(data.form._value);
    this.httpService.Http(this.auth, 'auth')
      .subscribe(res => {
        if (res.success) {
          //localStorage.setItem('auth', JSON.stringify({'user':'1'}));
          localStorage.setItem('auth', '1');
          this.router.navigate(['/']);
        } else {
        }
      });
  }
}
