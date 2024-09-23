import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {LoginPayload, Login, SignupResponse, LoginResponse, JwtDecoded} from '../../models/auth.class';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {jwtDecode} from 'jwt-decode';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public isAuthenticated: boolean;
  public user: Login;
  private signupResponse$: BehaviorSubject<SignupResponse> = new BehaviorSubject<SignupResponse>(null);
  public login$: BehaviorSubject<Login> = new BehaviorSubject<Login>(null);

  constructor(
    private http: HttpClient,
    private readonly router: Router
) { }

  signup(signup: LoginPayload): Observable<SignupResponse> {
    this.http.post<SignupResponse>('http://localhost:3000/api/auth/signup', signup).subscribe(
      response => {
        this.signupResponse$.next(response);
      },
      (error: HttpErrorResponse) => {
        this.signupResponse$.error(error.error.error);
      }
    );

    return this.signupResponse$;
  }

  login(login: LoginPayload): Observable<Login> {
    this.http.post<LoginResponse>('http://localhost:8080/api/login_check', login).subscribe(
      response => {
        const tokenDecoded: JwtDecoded = jwtDecode(response.token);
        this.isAuthenticated = true;
        this.user = {
          token: response.token,
          email: tokenDecoded.username
        };
        this.router.navigate(['/']);
        this.login$.next(response);
      },
      error => {
        this.login$.error(error.error);
      }
    );

    return this.login$;
  }
}
