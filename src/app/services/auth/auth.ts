import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Usuario {
  nombre: string;
  email: string;
  loggedIn: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  private usuarioSubject = new BehaviorSubject<Usuario | null>(null);
  usuario$ = this.usuarioSubject.asObservable();

  constructor() {
    this.cargarUsuarioStorage();
  }

  private cargarUsuarioStorage() {
    const usuarioGuardado = localStorage.getItem('usuario');
    if (usuarioGuardado) {
      const usuario = JSON.parse(usuarioGuardado);
      if (usuario.loggedIn) {
        this.usuarioSubject.next(usuario);
      }
    }
  }

  login(usuario: Usuario): void {
    localStorage.setItem('usuario', JSON.stringify(usuario));
    this.usuarioSubject.next(usuario);
    console.log('Login emitido:', usuario); // Para debug
  }

  logout(): void {
    localStorage.removeItem('usuario');
    this.usuarioSubject.next(null);
    console.log('Logout emitido'); // Para debug
  }

  isLoggedIn(): boolean {
    const usuario = this.usuarioSubject.value;
    return usuario !== null && usuario.loggedIn;
  }

  getUsuarioActual(): Usuario | null {
    return this.usuarioSubject.value;
  }
}