import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComprobanteComponent } from './component/comprobante/comprobante.component';
import { CreaeditaComprobanteComponent } from './component/comprobante/creaedita-comprobante/creaedita-comprobante.component';

const routes: Routes = [
  {
    path: 'tipo_comprobante',
    component:ComprobanteComponent,
    children:[
      {path:'nuevo',component:CreaeditaComprobanteComponent},
      {path: 'ediciones/:id',component:CreaeditaComprobanteComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
