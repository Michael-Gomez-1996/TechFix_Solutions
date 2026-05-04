import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth/auth';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  
  loginForm: FormGroup;
  registerForm: FormGroup;
  mostrarRegistro: boolean = false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });

    this.registerForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  get loginEmail() { return this.loginForm.get('email'); }
  get loginPassword() { return this.loginForm.get('password'); }
  get registerUsername() { return this.registerForm.get('username'); }
  get registerEmail() { return this.registerForm.get('email'); }
  get registerPassword() { return this.registerForm.get('password'); }

  toggleRegistro() {
    this.mostrarRegistro = !this.mostrarRegistro;
  }

  onLogin() {
    if (this.loginForm.valid) {
      const email = this.loginForm.value.email;
      const nombreUsuario = email.split('@')[0];
      
      const usuario = {
        nombre: nombreUsuario,
        email: email,
        loggedIn: true
      };
      
      // Primero guardar en el servicio
      this.authService.login(usuario);
      
      // Luego navegar
      alert(`¡Bienvenido ${nombreUsuario}!`);
      this.router.navigate(['/']);
    } else {
      alert('Por favor, completa todos los campos correctamente.');
      this.loginForm.markAllAsTouched();
    }
  }

  onRegister() {
    if (this.registerForm.valid) {
      const username = this.registerForm.value.username;
      
      const usuario = {
        nombre: username,
        email: this.registerForm.value.email,
        loggedIn: true
      };
      
      // Primero guardar en el servicio
      this.authService.login(usuario);
      
      // Luego navegar
      alert(`¡Bienvenido ${username}! Registro exitoso.`);
      this.router.navigate(['/']);
    } else {
      alert('Por favor, completa todos los campos correctamente.');
      this.registerForm.markAllAsTouched();
    }
  }

  loginConGoogle() {
    console.log('Login con Google');
    alert('Funcionalidad en desarrollo');
  }

  loginConFacebook() {
    console.log('Login con Facebook');
    alert('Funcionalidad en desarrollo');
  }

  loginConApple() {
    console.log('Login con Apple');
    alert('Funcionalidad en desarrollo');
  }
}