import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

interface TipoProblema {
  id: number;
  nombre: string;
  descripcion: string;
  icono: string;
  seleccionado: boolean;
  precio: number;
}

interface ServicioAdicional {
  id: number;
  nombre: string;
  descripcion: string;
  icono: string;
  precio: number;
  seleccionado: boolean;
}

interface OpcionTorre {
  nombre: string;
  opciones: { valor: string; precio: number; descripcion?: string }[];
  seleccion: string;
}

interface OpcionPortatil {
  nombre: string;
  opciones: { valor: string; precio: number; descripcion?: string }[];
  seleccion: string;
}

@Component({
  selector: 'app-configuracion-reparacion',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './configuracion.html',
  styleUrl: './configuracion.css'
})
export class ConfiguracionReparacion implements OnInit {
  
  tipoEquipoSeleccionado: 'torre' | 'portatil' = 'torre';
  
  preciosBase = {
    torre: 350000,
    portatil: 300000
  };
  
  // Opciones de personalización para TORRE
  opcionesTorre: OpcionTorre[] = [
    {
      nombre: 'Marca / Fabricante',
      opciones: [
        { valor: 'HP', precio: 0, descripcion: 'Hewlett Packard' },
        { valor: 'Dell', precio: 0, descripcion: 'Dell Technologies' },
        { valor: 'Lenovo', precio: 0, descripcion: 'Lenovo Group' },
        { valor: 'ASUS', precio: 0, descripcion: 'ASUSTeK Computer' },
        { valor: 'MSI', precio: 0, descripcion: 'Micro-Star International' },
        { valor: 'Gigabyte', precio: 0, descripcion: 'Gigabyte Technology' },
        { valor: 'Armada personalizada', precio: 50000, descripcion: 'Ensamble personalizado' }
      ],
      seleccion: 'HP'
    },
    {
      nombre: 'Procesador',
      opciones: [
        { valor: 'Intel Core i3', precio: 0, descripcion: 'Gama de entrada' },
        { valor: 'Intel Core i5', precio: 50000, descripcion: 'Gama media' },
        { valor: 'Intel Core i7', precio: 100000, descripcion: 'Alto rendimiento' },
        { valor: 'Intel Core i9', precio: 180000, descripcion: 'Extremo' },
        { valor: 'AMD Ryzen 5', precio: 45000, descripcion: 'Gama media AMD' },
        { valor: 'AMD Ryzen 7', precio: 95000, descripcion: 'Alto rendimiento AMD' },
        { valor: 'AMD Ryzen 9', precio: 170000, descripcion: 'Extremo AMD' }
      ],
      seleccion: 'Intel Core i5'
    },
    {
      nombre: 'Memoria RAM',
      opciones: [
        { valor: '8GB DDR4', precio: 0, descripcion: 'Básico' },
        { valor: '16GB DDR4', precio: 60000, descripcion: 'Recomendado' },
        { valor: '32GB DDR4', precio: 120000, descripcion: 'Alto rendimiento' },
        { valor: '64GB DDR4', precio: 220000, descripcion: 'Extremo' },
        { valor: '16GB DDR5', precio: 100000, descripcion: 'Nueva generación' },
        { valor: '32GB DDR5', precio: 180000, descripcion: 'Alta velocidad' }
      ],
      seleccion: '16GB DDR4'
    },
    {
      nombre: 'Almacenamiento',
      opciones: [
        { valor: '256GB SSD', precio: 0, descripcion: 'Básico' },
        { valor: '512GB SSD', precio: 45000, descripcion: 'Recomendado' },
        { valor: '1TB SSD', precio: 90000, descripcion: 'Alta capacidad' },
        { valor: '2TB SSD', precio: 170000, descripcion: 'Extremo' },
        { valor: '1TB HDD + 256GB SSD', precio: 55000, descripcion: 'Híbrido' },
        { valor: '2TB HDD + 512GB SSD', precio: 100000, descripcion: 'Máxima capacidad' }
      ],
      seleccion: '512GB SSD'
    },
    {
      nombre: 'Tarjeta Gráfica',
      opciones: [
        { valor: 'Integrada', precio: 0, descripcion: 'Uso básico' },
        { valor: 'NVIDIA GTX 1650', precio: 150000, descripcion: 'Gaming básico' },
        { valor: 'NVIDIA RTX 3060', precio: 350000, descripcion: 'Gaming medio' },
        { valor: 'NVIDIA RTX 4070', precio: 600000, descripcion: 'Gaming alto' },
        { valor: 'AMD RX 6600', precio: 280000, descripcion: 'Gaming medio AMD' },
        { valor: 'AMD RX 7800 XT', precio: 550000, descripcion: 'Gaming alto AMD' }
      ],
      seleccion: 'NVIDIA RTX 3060'
    },
    {
      nombre: 'Fuente de Poder',
      opciones: [
        { valor: '500W 80 Plus', precio: 0, descripcion: 'Básico' },
        { valor: '650W 80 Plus Bronze', precio: 80000, descripcion: 'Recomendado' },
        { valor: '750W 80 Plus Gold', precio: 130000, descripcion: 'Premium' },
        { valor: '850W 80 Plus Platinum', precio: 200000, descripcion: 'Extremo' },
        { valor: '1000W 80 Plus Gold', precio: 280000, descripcion: 'Workstation' }
      ],
      seleccion: '650W 80 Plus Bronze'
    },
    {
      nombre: 'Sistema Operativo',
      opciones: [
        { valor: 'Sin SO', precio: 0, descripcion: 'El cliente instala' },
        { valor: 'Windows 11 Home', precio: 120000, descripcion: 'Licencia original' },
        { valor: 'Windows 11 Pro', precio: 180000, descripcion: 'Para empresas' },
        { valor: 'Ubuntu Linux', precio: 0, descripcion: 'Open source' },
        { valor: 'Dual Boot (Windows + Linux)', precio: 60000, descripcion: 'Dos sistemas' }
      ],
      seleccion: 'Windows 11 Home'
    }
  ];

  opcionesPortatil: OpcionPortatil[] = [
    {
      nombre: 'Marca',
      opciones: [
        { valor: 'HP', precio: 0, descripcion: 'Hewlett Packard' },
        { valor: 'Dell', precio: 0, descripcion: 'Dell Technologies' },
        { valor: 'Lenovo', precio: 0, descripcion: 'Lenovo Group' },
        { valor: 'ASUS', precio: 0, descripcion: 'ASUSTeK Computer' },
        { valor: 'Acer', precio: 0, descripcion: 'Acer Inc.' },
        { valor: 'Apple MacBook', precio: 80000, descripcion: 'Apple Inc.' },
        { valor: 'MSI', precio: 0, descripcion: 'Gaming laptops' }
      ],
      seleccion: 'HP'
    },
    {
      nombre: 'Procesador',
      opciones: [
        { valor: 'Intel Core i3', precio: 0, descripcion: 'Básico' },
        { valor: 'Intel Core i5', precio: 60000, descripcion: 'Recomendado' },
        { valor: 'Intel Core i7', precio: 130000, descripcion: 'Alto rendimiento' },
        { valor: 'Intel Core i9', precio: 220000, descripcion: 'Extremo' },
        { valor: 'AMD Ryzen 5', precio: 55000, descripcion: 'Rendimiento AMD' },
        { valor: 'AMD Ryzen 7', precio: 120000, descripcion: 'Alto AMD' }
      ],
      seleccion: 'Intel Core i5'
    },
    {
      nombre: 'Memoria RAM',
      opciones: [
        { valor: '8GB', precio: 0, descripcion: 'Básico' },
        { valor: '12GB', precio: 40000, descripcion: 'Intermedio' },
        { valor: '16GB', precio: 70000, descripcion: 'Recomendado' },
        { valor: '32GB', precio: 140000, descripcion: 'Alto rendimiento' }
      ],
      seleccion: '16GB'
    },
    {
      nombre: 'Almacenamiento',
      opciones: [
        { valor: '256GB SSD', precio: 0, descripcion: 'Básico' },
        { valor: '512GB SSD', precio: 50000, descripcion: 'Recomendado' },
        { valor: '1TB SSD', precio: 100000, descripcion: 'Alta capacidad' },
        { valor: '2TB SSD', precio: 190000, descripcion: 'Extremo' }
      ],
      seleccion: '512GB SSD'
    },
    {
      nombre: 'Tamaño de Pantalla',
      opciones: [
        { valor: '13.3 pulgadas', precio: -30000, descripcion: 'Ultraportátil' },
        { valor: '14 pulgadas', precio: -15000, descripcion: 'Compacto' },
        { valor: '15.6 pulgadas', precio: 0, descripcion: 'Estándar' },
        { valor: '16 pulgadas', precio: 20000, descripcion: 'Grande' },
        { valor: '17.3 pulgadas', precio: 40000, descripcion: 'Gaming/Workstation' }
      ],
      seleccion: '15.6 pulgadas'
    },
    {
      nombre: 'Resolución de Pantalla',
      opciones: [
        { valor: 'HD (1366x768)', precio: 0, descripcion: 'Básico' },
        { valor: 'Full HD (1920x1080)', precio: 50000, descripcion: 'Recomendado' },
        { valor: '2K (2560x1440)', precio: 120000, descripcion: 'Alta definición' },
        { valor: '4K (3840x2160)', precio: 220000, descripcion: 'Ultra HD' }
      ],
      seleccion: 'Full HD (1920x1080)'
    },
    {
      nombre: 'Garantía Extendida',
      opciones: [
        { valor: '3 meses', precio: 0, descripcion: 'Estándar' },
        { valor: '6 meses', precio: 50000, descripcion: 'Media' },
        { valor: '12 meses', precio: 90000, descripcion: 'Recomendado' },
        { valor: '24 meses', precio: 160000, descripcion: 'Protección total' }
      ],
      seleccion: '3 meses'
    }
  ];

  tiposProblema: TipoProblema[] = [
    { id: 1, nombre: 'No enciende', descripcion: 'El equipo no responde al presionar el botón de encendido', icono: '🔌', seleccionado: false, precio: 50000 },
    { id: 2, nombre: 'Pantalla azul / Reinicios', descripcion: 'BSOD, reinicios constantes o congelamientos', icono: '💙', seleccionado: false, precio: 45000 },
    { id: 3, nombre: 'Sobrecalentamiento', descripcion: 'Apagados por temperatura, ventiladores ruidosos', icono: '🌡️', seleccionado: false, precio: 40000 },
    { id: 4, nombre: 'Sin conexión a internet', descripcion: 'Problemas de red, WiFi o Ethernet', icono: '🌐', seleccionado: false, precio: 35000 },
    { id: 5, nombre: 'Rendimiento lento', descripcion: 'Equipo lento, tarda en abrir programas', icono: '🐌', seleccionado: false, precio: 40000 },
    { id: 6, nombre: 'Problemas de sonido / video', descripcion: 'Sin audio, video distorsionado o sin imagen', icono: '🎵', seleccionado: false, precio: 45000 }
  ];

  serviciosAdicionales: ServicioAdicional[] = [
    { id: 1, nombre: 'Diagnóstico Express', descripcion: 'Resultado en 24 horas', icono: '⏱️', precio: 30000, seleccionado: false },
    { id: 2, nombre: 'Instalación de software básico', descripcion: 'Office, navegadores, antivirus', icono: '📥', precio: 45000, seleccionado: false },
    { id: 3, nombre: 'Recogida a domicilio', descripcion: 'Recogida y entrega sin costo adicional', icono: '🏠', precio: 0, seleccionado: false },
    { id: 4, nombre: 'Backup de datos', descripcion: 'Respaldo de información importante', icono: '💾', precio: 55000, seleccionado: false },
    { id: 5, nombre: 'Garantía extendida', descripcion: '3 meses de garantía adicional', icono: '🛡️', precio: 60000, seleccionado: false },
    { id: 6, nombre: 'Mantenimiento preventivo', descripcion: 'Limpieza y optimización completa', icono: '🧹', precio: 70000, seleccionado: false }
  ];

  constructor(private router: Router) {}

  ngOnInit(): void {}

  get costoProblemas(): number {
    return this.tiposProblema.filter(p => p.seleccionado).reduce((sum, p) => sum + p.precio, 0);
  }

  get costoServicios(): number {
    return this.serviciosAdicionales.filter(s => s.seleccionado).reduce((sum, s) => sum + s.precio, 0);
  }

  get costoTorreOpciones(): number {
    if (this.tipoEquipoSeleccionado !== 'torre') return 0;
    let total = 0;
    for (const opcion of this.opcionesTorre) {
      const seleccionada = opcion.opciones.find(o => o.valor === opcion.seleccion);
      if (seleccionada) total += seleccionada.precio;
    }
    return total;
  }

  get costoPortatilOpciones(): number {
    if (this.tipoEquipoSeleccionado !== 'portatil') return 0;
    let total = 0;
    for (const opcion of this.opcionesPortatil) {
      const seleccionada = opcion.opciones.find(o => o.valor === opcion.seleccion);
      if (seleccionada) total += seleccionada.precio;
    }
    return total;
  }

  get costoPersonalizacion(): number {
    return this.tipoEquipoSeleccionado === 'torre' ? this.costoTorreOpciones : this.costoPortatilOpciones;
  }

  get totalGeneral(): number {
    const precioBase = this.preciosBase[this.tipoEquipoSeleccionado];
    return precioBase + this.costoProblemas + this.costoServicios + this.costoPersonalizacion;
  }

  seleccionarEquipo(tipo: 'torre' | 'portatil') {
    this.tipoEquipoSeleccionado = tipo;
  }

  getProblemasSeleccionados() {
    return this.tiposProblema.filter(p => p.seleccionado);
  }

  getServiciosSeleccionados() {
    return this.serviciosAdicionales.filter(s => s.seleccionado);
  }

  formatearPrecio(precio: number): string {
    return new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP', minimumFractionDigits: 0 }).format(precio);
  }

  continuarADatos() {
    const datosConfiguracion = {
      equipo: this.tipoEquipoSeleccionado === 'torre' ? 'Torre / Desktop' : 'Portátil / Laptop',
      problemas: this.tiposProblema.filter(p => p.seleccionado).map(p => p.nombre),
      servicios: this.serviciosAdicionales.filter(s => s.seleccionado).map(s => s.nombre),
      total: this.totalGeneral,
      precioBase: this.preciosBase[this.tipoEquipoSeleccionado],
      costoProblemas: this.costoProblemas,
      costoServicios: this.costoServicios,
      costoPersonalizacion: this.costoPersonalizacion
    };
    this.router.navigate(['/servicios/reparacion-tecnica/datos'], { state: datosConfiguracion });
  }
}