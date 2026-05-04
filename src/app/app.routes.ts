import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Login } from './components/login/login';
import { Catalogo } from './components/catalogo/catalogo';
import { About } from './components/home/about/about';

// Limpieza Profunda
import { LimpiezaProfunda } from './components/servicios/limpieza-profunda/limpieza-profunda';
import { Configuracion } from './components/servicios/limpieza-profunda/configuracion/configuracion';
import { DatosLimpieza } from './components/servicios/limpieza-profunda/configuracion/datos/datos';
import { PagoLimpieza } from './components/servicios/limpieza-profunda/configuracion/pago/pago';
import { ConfirmacionLimpieza } from './components/servicios/limpieza-profunda/configuracion/confirmacion/confirmacion';

// Reparación Técnica
import { ReparacionTecnica } from './components/servicios/reparacion-tecnica/reparacion-tecnica';
import { ConfiguracionReparacion } from './components/servicios/reparacion-tecnica/configuracion/configuracion';
import { DatosReparacion } from './components/servicios/reparacion-tecnica/datos/datos';
import { PagoReparacion } from './components/servicios/reparacion-tecnica/pago/pago';
import { ConfirmacionReparacion } from './components/servicios/reparacion-tecnica/confirmacion/confirmacion';

// Ensamble de PC
import { EnsamblePc } from './components/servicios/ensamble-pc/ensamble-pc';
import { ConfiguracionEnsamble } from './components/servicios/ensamble-pc/configuracion/configuracion';
import { DatosEnsamble } from './components/servicios/ensamble-pc/datos/datos';
import { PagoEnsamble } from './components/servicios/ensamble-pc/pago/pago';
import { ConfirmacionEnsamble } from './components/servicios/ensamble-pc/confirmacion/confirmacion';

// Venta de Repuestos
import { VentaRepuestos } from './components/servicios/venta-repuestos/venta-repuestos';
import { Carrito } from './components/servicios/venta-repuestos/carrito/carrito';
import { DatosVentaRepuestos } from './components/servicios/venta-repuestos/datos/datos';
import { PagoVentaRepuestos } from './components/servicios/venta-repuestos/pago/pago';
import { ConfirmacionVentaRepuestos } from './components/servicios/venta-repuestos/confirmacion/confirmacion';


export const routes: Routes = [
  { path: '', component: Home, data: { animation: 'HomePage' } },
  { path: 'login', component: Login, data: { animation: 'LoginPage' } },
  { path: 'catalogo', component: Catalogo, data: { animation: 'CatalogoPage' } },
  { path: 'nosotros', component: About, data: { animation: 'AboutPage' } },
  
  /* ========== LIMPIEZA PROFUNDA ========== */
  { path: 'servicios/limpieza-profunda', component: LimpiezaProfunda, data: { animation: 'LimpiezaPage' } },
  { path: 'servicios/limpieza-profunda/configuracion', component: Configuracion, data: { animation: 'ConfigLimpiezaPage' } },
  { path: 'servicios/limpieza-profunda/datos', component: DatosLimpieza, data: { animation: 'DatosLimpiezaPage' } },
  { path: 'servicios/limpieza-profunda/pago', component: PagoLimpieza, data: { animation: 'PagoLimpiezaPage' } },
  { path: 'servicios/limpieza-profunda/confirmacion', component: ConfirmacionLimpieza, data: { animation: 'ConfirmacionLimpiezaPage' } },
  
  /* ========== REPARACIÓN TÉCNICA ========== */
  { path: 'servicios/reparacion-tecnica', component: ReparacionTecnica, data: { animation: 'ReparacionPage' } },
  { path: 'servicios/reparacion-tecnica/configuracion', component: ConfiguracionReparacion, data: { animation: 'ConfigReparacionPage' } },
  { path: 'servicios/reparacion-tecnica/datos', component: DatosReparacion, data: { animation: 'DatosReparacionPage' } },
  { path: 'servicios/reparacion-tecnica/pago', component: PagoReparacion, data: { animation: 'PagoReparacionPage' } },
  { path: 'servicios/reparacion-tecnica/confirmacion', component: ConfirmacionReparacion, data: { animation: 'ConfirmacionReparacionPage' } },
  
  /* ========== ENSAMBLE DE PC ========== */
  { path: 'servicios/ensamble-pc', component: EnsamblePc, data: { animation: 'EnsamblePage' } },
  { path: 'servicios/ensamble-pc/configuracion', component: ConfiguracionEnsamble, data: { animation: 'ConfigEnsamblePage' } },
  { path: 'servicios/ensamble-pc/datos', component: DatosEnsamble, data: { animation: 'DatosEnsamblePage' } },
  { path: 'servicios/ensamble-pc/pago', component: PagoEnsamble, data: { animation: 'PagoEnsamblePage' } },
  { path: 'servicios/ensamble-pc/confirmacion', component: ConfirmacionEnsamble, data: { animation: 'ConfirmacionEnsamblePage' } },
  
  /* ========== VENTA DE REPUESTOS ========== */
  { path: 'servicios/venta-repuestos', component: VentaRepuestos, data: { animation: 'VentaPage' } },
  { path: 'servicios/venta-repuestos/carrito', component: Carrito, data: { animation: 'CarritoPage' } },
  { path: 'servicios/venta-repuestos/datos', component: DatosVentaRepuestos, data: { animation: 'DatosVentaPage' } },
  { path: 'servicios/venta-repuestos/pago', component: PagoVentaRepuestos, data: { animation: 'PagoVentaPage' } },
  { path: 'servicios/venta-repuestos/confirmacion', component: ConfirmacionVentaRepuestos, data: { animation: 'ConfirmacionVentaPage' } },
  
  /* ========== COMODÍN ========== */
  { path: '**', redirectTo: '' }
];