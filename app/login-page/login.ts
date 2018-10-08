import { Component } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';

@Component({
    selector: 'login-selector',
    templateUrl: './login.html',
    styleUrls: ['login.css']
})

export class LoginGit {

    public hide: boolean = true;
    userName = new FormControl('', [Validators.required]);
    userPassword = new FormControl('', [Validators.required]);

    getErrorMessage()
     {
        return this.userName.hasError('required') ? 'You must enter a username' :
            this.userName.hasError('userName') ? 'Not a valid username' : '';
    }
    getErrorMessageFromPassword()
     {
        return this.userPassword.hasError('required') ? 'You must enter a Password' :
            this.userPassword.hasError('userPassword') ? 'Not a valid Password' : '';
    }}