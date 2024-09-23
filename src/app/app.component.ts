import { Component, HostBinding, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {AuthService} from './shared/data-access/auth/auth.service';
import {Login} from './shared/models/auth.class';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public user: Login;
  @HostBinding('class.transparent') transparent = false;

  constructor(
    private readonly router: Router,
    private readonly authService: AuthService,
  ) { }

  ngOnInit() {
    this.authService.login$.subscribe(data => {
      this.user = data;
    });
  }

  logout = () => {
    this.router.navigate(['/login']);
    this.user = null;
  }
}
