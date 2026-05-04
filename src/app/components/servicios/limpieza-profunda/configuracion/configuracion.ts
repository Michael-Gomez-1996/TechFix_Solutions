import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

export interface ServicioAdicional {
  id: number;
  nombre: string;
  descripcion: string;
  icono: string;
  precio: number;
  seleccionado: boolean;
}

interface OpcionTorre {
  nombre: string;
  opciones: { valor: string; precio: number }[];
  seleccion: string;
}

interface OpcionPortatil {
  nombre: string;
  opciones: { valor: string; precio: number }[];
  seleccion: string;
}

@Component({
  selector: 'app-configuracion-limpieza',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './configuracion.html',
  styleUrl: './configuracion.css'
})
export class Configuracion {

  constructor(private router: Router) { }

  tipoEquipoSeleccionado: 'torre' | 'portatil' = 'torre';

  preciosBase = {
    torre: 250000,
    portatil: 200000
  };

  nivelSuciedad: number = 0;

  opcionesTorre: OpcionTorre[] = [
    {
      nombre: 'Tipo de Gabinete',
      opciones: [
        { valor: 'ATX Estándar', precio: 0 },
        { valor: 'Micro-ATX (Compacto)', precio: -20000 },
        { valor: 'Mini-ITX (Ultra compacto)', precio: -30000 },
        { valor: 'Gabinete Gamer (RGB + Ventana)', precio: 50000 }
      ],
      seleccion: 'ATX Estándar'
    },
    {
      nombre: 'Fuente de Poder',
      opciones: [
        { valor: '500W 80 Plus', precio: 0 },
        { valor: '650W 80 Plus Bronze', precio: 45000 },
        { valor: '750W 80 Plus Gold', precio: 85000 },
        { valor: '850W 80 Plus Platinum', precio: 150000 }
      ],
      seleccion: '500W 80 Plus'
    },
    {
      nombre: 'Refrigeración',
      opciones: [
        { valor: 'Aire estándar (Stock)', precio: 0 },
        { valor: 'Cooler básico (Aftermarket)', precio: 35000 },
        { valor: 'Refrigeración líquida 120mm', precio: 120000 },
        { valor: 'Refrigeración líquida 240mm', precio: 180000 },
        { valor: 'Refrigeración líquida 360mm', precio: 250000 }
      ],
      seleccion: 'Aire estándar (Stock)'
    },
    {
      nombre: 'Iluminación RGB',
      opciones: [
        { valor: 'Sin RGB', precio: 0 },
        { valor: 'RGB Básico (1 tira)', precio: 25000 },
        { valor: 'ARGB Completo (4 ventiladores)', precio: 80000 },
        { valor: 'ARGB Premium (todo el gabinete)', precio: 150000 }
      ],
      seleccion: 'Sin RGB'
    },
    {
      nombre: 'Ventiladores Adicionales',
      opciones: [
        { valor: 'Ninguno', precio: 0 },
        { valor: '+2 Ventiladores 120mm', precio: 40000 },
        { valor: '+4 Ventiladores 120mm', precio: 75000 },
        { valor: '+6 Ventiladores 120mm ARGB', precio: 120000 }
      ],
      seleccion: 'Ninguno'
    },
    {
      nombre: 'Gestión de Cables',
      opciones: [
        { valor: 'Básica (Funcional)', precio: 0 },
        { valor: 'Profesional (Organizada)', precio: 35000 },
        { valor: 'Premium (Atada y oculta)', precio: 60000 }
      ],
      seleccion: 'Básica (Funcional)'
    },
    {
      nombre: 'Tarjeta Gráfica',
      opciones: [
        { valor: 'Sin tarjeta dedicada', precio: 0 },
        { valor: 'Limpieza y mantenimiento', precio: 30000 },
        { valor: 'Re-paste de GPU (Alta gama)', precio: 60000 },
        { valor: 'Actualización de BIOS GPU', precio: 25000 }
      ],
      seleccion: 'Sin tarjeta dedicada'
    },
    {
      nombre: 'Discos Duros / SSD',
      opciones: [
        { valor: 'Sin servicios adicionales', precio: 0 },
        { valor: 'Optimización de discos', precio: 20000 },
        { valor: 'Migración de datos a SSD', precio: 50000 },
        { valor: 'Instalación de disco nuevo', precio: 35000 }
      ],
      seleccion: 'Sin servicios adicionales'
    },
    {
      nombre: 'Memoria RAM',
      opciones: [
        { valor: 'Sin servicio RAM', precio: 0 },
        { valor: 'Diagnóstico de memoria', precio: 15000 },
        { valor: 'Limpieza de contactos', precio: 20000 },
        { valor: 'Prueba de estabilidad', precio: 25000 }
      ],
      seleccion: 'Sin servicio RAM'
    },
    {
      nombre: 'Placa Madre',
      opciones: [
        { valor: 'Sin servicio', precio: 0 },
        { valor: 'Actualización de BIOS', precio: 30000 },
        { valor: 'Revisión de capacitores', precio: 25000 },
        { valor: 'Limpieza profunda PCB', precio: 20000 }
      ],
      seleccion: 'Sin servicio'
    }
  ];

  opcionesPortatil: OpcionPortatil[] = [
    {
      nombre: 'Marca del Equipo',
      opciones: [
        { valor: 'HP / Compaq', precio: 0 },
        { valor: 'Dell', precio: 0 },
        { valor: 'Lenovo / IBM', precio: 0 },
        { valor: 'ASUS', precio: 0 },
        { valor: 'Acer / Gateway', precio: 0 },
        { valor: 'Apple MacBook', precio: 50000 },
        { valor: 'MSI / Gamer', precio: 0 }
      ],
      seleccion: 'HP / Compaq'
    },
    {
      nombre: 'Tamaño de Pantalla',
      opciones: [
        { valor: '13 pulgadas', precio: -20000 },
        { valor: '14 pulgadas', precio: -10000 },
        { valor: '15.6 pulgadas', precio: 0 },
        { valor: '17 pulgadas', precio: 15000 }
      ],
      seleccion: '15.6 pulgadas'
    },
    {
      nombre: 'Tipo de Batería',
      opciones: [
        { valor: 'Original (Mantenimiento)', precio: 0 },
        { valor: 'Original (Reemplazo)', precio: 120000 },
        { valor: 'Genérica (Alta capacidad)', precio: 80000 },
        { valor: 'Premium (Mayor duración)', precio: 160000 }
      ],
      seleccion: 'Original (Mantenimiento)'
    },
    {
      nombre: 'Estado del Teclado',
      opciones: [
        { valor: 'Funcional - Solo limpieza', precio: 0 },
        { valor: 'Limpieza profunda + Desinfección', precio: 25000 },
        { valor: 'Teclas pegajosas (Limpieza especial)', precio: 45000 },
        { valor: 'Teclas dañadas (Reparación)', precio: 80000 },
        { valor: 'Reemplazo completo de teclado', precio: 150000 }
      ],
      seleccion: 'Funcional - Solo limpieza'
    },
    {
      nombre: 'Estado de Bisagras',
      opciones: [
        { valor: 'Perfecto estado', precio: 0 },
        { valor: 'Ligeramente flojas (Ajuste)', precio: 20000 },
        { valor: 'Fljas (Requiere lubricación)', precio: 40000 },
        { valor: 'Dañadas (Reparación compleja)', precio: 100000 }
      ],
      seleccion: 'Perfecto estado'
    },
    {
      nombre: 'Tipo de Carcasa',
      opciones: [
        { valor: 'Plástico estándar', precio: 0 },
        { valor: 'Aluminio / Metal', precio: 0 },
        { valor: 'Fibra de carbono', precio: 0 },
        { valor: 'Piel sintética / Textil', precio: 0 }
      ],
      seleccion: 'Plástico estándar'
    },
    {
      nombre: 'Puerto de Carga',
      opciones: [
        { valor: 'Tipo C (USB-C)', precio: 0 },
        { valor: 'Barrilete (Cargador tradicional)', precio: 0 },
        { valor: 'MagSafe (Apple)', precio: 25000 },
        { valor: 'Puerto dañado (Reparación)', precio: 60000 }
      ],
      seleccion: 'Tipo C (USB-C)'
    },
    {
      nombre: 'Servicio de Pantalla',
      opciones: [
        { valor: 'Sin servicio de pantalla', precio: 0 },
        { valor: 'Limpieza anti-huellas', precio: 15000 },
        { valor: 'Calibración de colores', precio: 30000 },
        { valor: 'Reparación de píxeles', precio: 50000 }
      ],
      seleccion: 'Sin servicio de pantalla'
    },
    {
      nombre: 'Ventilación / Enfriamiento',
      opciones: [
        { valor: 'Sin servicio', precio: 0 },
        { valor: 'Limpieza de ventiladores', precio: 20000 },
        { valor: 'Lubricación de ventiladores', precio: 15000 },
        { valor: 'Limpieza de disipador', precio: 25000 }
      ],
      seleccion: 'Sin servicio'
    },
    {
      nombre: 'Puertos USB / Conectores',
      opciones: [
        { valor: 'Sin servicio', precio: 0 },
        { valor: 'Limpieza de puertos', precio: 15000 },
        { valor: 'Reparación de puerto USB', precio: 35000 },
        { valor: 'Revisión de conectores', precio: 20000 }
      ],
      seleccion: 'Sin servicio'
    }
  ];

  serviciosAdicionales: ServicioAdicional[] = [
    { id: 1, nombre: 'Instalación de Software', descripcion: 'Instalación de programas y drivers actualizados', icono: '💿', precio: 45000, seleccionado: false },
    { id: 2, nombre: 'Respaldo de Información', descripcion: 'Backup completo de tus archivos importantes', icono: '💾', precio: 35000, seleccionado: false },
    { id: 3, nombre: 'Optimización de Sistema', descripcion: 'Acelera el rendimiento del equipo', icono: '⚡', precio: 40000, seleccionado: false },
    { id: 4, nombre: 'Antivirus Premium', descripcion: 'Protección completa por 1 año', icono: '🛡️', precio: 60000, seleccionado: false },
    { id: 5, nombre: 'Limpieza de Pantalla', descripcion: 'Limpieza especializada de pantalla', icono: '🖥️', precio: 25000, seleccionado: false }
  ];

  get recargoSuciedad(): number {
    if (this.nivelSuciedad === 100) return 50000;
    if (this.nivelSuciedad >= 50) return 25000;
    return 0;
  }

  get textoNivelSuciedad(): string {
    if (this.nivelSuciedad === 100) return 'Alto';
    if (this.nivelSuciedad >= 50) return 'Medio';
    return 'Bajo';
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

  get subtotalServicios(): number {
    return this.serviciosAdicionales.filter(s => s.seleccionado).reduce((sum, s) => sum + s.precio, 0);
  }

  get costoPersonalizacion(): number {
    return this.tipoEquipoSeleccionado === 'torre' ? this.costoTorreOpciones : this.costoPortatilOpciones;
  }

  get totalGeneral(): number {
    const precioBase = this.preciosBase[this.tipoEquipoSeleccionado];
    return precioBase + this.subtotalServicios + this.recargoSuciedad + this.costoPersonalizacion;
  }

  getPrecioOpcionTorre(nombre: string): number {
    const opcion = this.opcionesTorre.find(o => o.nombre === nombre);
    if (opcion) {
      const seleccionada = opcion.opciones.find(o => o.valor === opcion.seleccion);
      return seleccionada ? seleccionada.precio : 0;
    }
    return 0;
  }

  getPrecioOpcionPortatil(nombre: string): number {
    const opcion = this.opcionesPortatil.find(o => o.nombre === nombre);
    if (opcion) {
      const seleccionada = opcion.opciones.find(o => o.valor === opcion.seleccion);
      return seleccionada ? seleccionada.precio : 0;
    }
    return 0;
  }

  formatearPrecio(precio: number): string {
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(precio);
  }

  seleccionarEquipo(tipo: 'torre' | 'portatil') {
    this.tipoEquipoSeleccionado = tipo;
  }

  getProblemasSeleccionados() {
    return [];
  }

  getServiciosSeleccionados() {
    return this.serviciosAdicionales.filter(s => s.seleccionado);
  }

  continuarADatos() {
    // Obtener servicios seleccionados con todos sus datos
    const serviciosSeleccionados = this.serviciosAdicionales
      .filter(s => s.seleccionado)
      .map(s => ({
        id: s.id,
        nombre: s.nombre,
        descripcion: s.descripcion,
        icono: s.icono,
        precio: s.precio
      }));

    const datosConfiguracion = {
      equipo: this.tipoEquipoSeleccionado === 'torre' ? 'Torre / Desktop' : 'Portátil / Laptop',
      servicios: serviciosSeleccionados,  // ✅ Ahora enviamos objetos completos
      total: this.totalGeneral,
      recargoSuciedad: this.recargoSuciedad,
      nivelSuciedad: this.textoNivelSuciedad,
      opcionesCount: this.tipoEquipoSeleccionado === 'torre' ? this.opcionesTorre.length : this.opcionesPortatil.length
    };

    console.log('Enviando a datos:', datosConfiguracion);
    this.router.navigate(['/servicios/limpieza-profunda/datos'], { state: datosConfiguracion });
  }
}