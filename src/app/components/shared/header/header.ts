import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../../services/auth/auth';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header implements OnInit {
  mostrarMenuServicios: boolean = false;
  usuario: string = 'Invitado';
  estaLogueado: boolean = false;

  constructor(
    private router: Router,
    private authService: AuthService,
    private cdr: ChangeDetectorRef  // ← Agregar esto
  ) {}

  ngOnInit(): void {
    // Cargar estado inicial
    this.actualizarEstadoUsuario();
    
    // Suscribirse a los cambios
    this.authService.usuario$.subscribe(usuario => {
      console.log('Header recibió cambio:', usuario); // Para debug
      this.actualizarEstadoUsuario();
      this.cdr.detectChanges(); // Forzar actualización de la vista
    });
  }

  actualizarEstadoUsuario() {
    const usuario = this.authService.getUsuarioActual();
    if (usuario && usuario.loggedIn) {
      this.estaLogueado = true;
      this.usuario = usuario.nombre;
    } else {
      this.estaLogueado = false;
      this.usuario = 'Invitado';
    }
  }

  toggleMenuServicios() {
    this.mostrarMenuServicios = !this.mostrarMenuServicios;
  }

  cerrarMenu() {
    this.mostrarMenuServicios = false;
  }

  cerrarSesion() {
    this.authService.logout();
    this.router.navigate(['/']);
  }

  servicios = [
    { nombre: 'Limpieza Profunda', ruta: '/servicios/limpieza-profunda'},
    { nombre: 'Reparación Técnica', ruta: '/servicios/reparacion-tecnica' },
    { nombre: 'Ensamble de PC', ruta: '/servicios/ensamble-pc' },
    { nombre: 'Venta de Repuestos', ruta: '/servicios/venta-repuestos' }
  ];
}