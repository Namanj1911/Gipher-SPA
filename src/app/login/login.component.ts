import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
import { FavService } from '../services/fav.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    username = new FormControl();
    password = new FormControl();
    public submitMessage: string;
    public user: FormGroup;

    constructor(private fb: FormBuilder, private router: Router, private authService: AuthenticationService, private favService: FavService) {
    }

    ngOnInit(): void {
        this.user = this.fb.group({
            username: ['', [Validators.required, Validators.pattern('[a-zA-Z]+'), Validators.minLength(3), Validators.maxLength(30)]],
            password: ['', Validators.required]
        });
    }

    get username1(): any{
        return this.user.get('username');
    }

    get password1(): any {
        return this.user.get('password');
    }

    login(user): any{
        const token = this.authService.authenticate(user);
        if (token) {
            this.favService.username(user.username);
            this.authService.storeToken(token);
            this.router.navigate(['/dashboard']);
        } else {
            this.router.navigate(['/login']);
        }
    }

}
