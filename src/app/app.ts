import { Component } from '@angular/core';
import { RouterOutlet, ChildrenOutletContexts } from '@angular/router'; // <--- Importar Contexts
import { Header } from './components/shared/header/header';
import { Footer } from './components/shared/footer/footer';
import { fadeAnimation } from './animations'; // <--- Importar nuestra animación

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Header, Footer],
  animations: [fadeAnimation], // <--- Registrar la animación
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent {
  // Esta lógica ayuda a Angular a saber cuándo cambió la página
  constructor(private contexts: ChildrenOutletContexts) {}

  getRouteAnimationData() {
  try {
    const animation = this.contexts.getContext('primary')?.route?.snapshot?.data?.['animation'];
    return animation || null; // Si no hay animación, devuelve null en lugar de romper la app
  } catch (e) {
    return null;
  }
}
}