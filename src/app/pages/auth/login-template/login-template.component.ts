import { Component } from '@angular/core';
import { LoginFormComponent } from "../login-form/login-form.component";
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login-template',
  imports: [LoginFormComponent, CommonModule],
  templateUrl: './login-template.component.html',
  styleUrl: './login-template.component.scss'
})
export class LoginTemplateComponent {
  currentUrl = '';

  constructor(private router: Router) {}

  ngOnInit() {
    console.log(this.router.url);
    this.currentUrl = this.router.url;
  }
}
