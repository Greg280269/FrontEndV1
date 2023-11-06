import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComprobanteComponent } from './component/comprobante/comprobante.component';
import { CreaeditaComprobanteComponent } from './component/comprobante/creaedita-comprobante/creaedita-comprobante.component';
import { ServiciosComponent } from './component/servicios/servicios.component';
import { CreaeditaServiciosComponent } from './component/servicios/creaedita-servicios/creaedita-servicios.component';

const routes: Routes = [
  {
    path: 'tipo_comprobante',
    component:ComprobanteComponent,
    children:[
      {path:'nuevo',component:CreaeditaComprobanteComponent},
      {path: 'ediciones/:id',component:CreaeditaComprobanteComponent},
    ]
  },
  {
    path:'servicio_disponible',
    component:ServiciosComponent,
    children:[
      {path:'nuevo',component:CreaeditaServiciosComponent},
      {path:'ediciones/:id',component:CreaeditaServiciosComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
