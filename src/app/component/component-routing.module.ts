import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComprobanteComponent } from './comprobante/comprobante.component';
import { CreaeditaComprobanteComponent } from './comprobante/creaedita-comprobante/creaedita-comprobante.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { CreaeditaServiciosComponent } from './servicios/creaedita-servicios/creaedita-servicios.component';
import { UsersComponent } from './users/users.component';
import { CreaeditaUsersComponent } from './users/creaedita-users/creaedita-users.component';
import { RolesComponent } from './roles/roles.component';
import { CreaeditaRolesComponent } from './roles/creaedita-roles/creaedita-roles.component';
import { CreaeditaComentarioComponent } from './comentario/creaedita-comentario/creaedita-comentario.component';
import { CreaeditaEventoComponent } from './evento/creaedita-evento/creaedita-evento.component';
import { CreaeditaLocalComponent } from './local/creaedita-local/creaedita-local.component';
import { LocalComponent } from './local/local.component';
import { EventoComponent } from './evento/evento.component';
import { ComentarioComponent } from './comentario/comentario.component';

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
  },
  {
    path: 'usuarios',
    component:UsersComponent,
    children:[
      {path:'nuevo',component:CreaeditaUsersComponent},
      {path:'ediciones/:id',component:CreaeditaUsersComponent}
    ]
  },
  {
    path: 'comentarios',
    component:ComentarioComponent,
    children:[
      {path:'nuevo',component:CreaeditaComentarioComponent},
      {path:'ediciones/:id',component:CreaeditaComentarioComponent}
    ]
  },
  {
    path: 'eventos',
    component:EventoComponent,
    children:[
      {path:'nuevo',component:CreaeditaEventoComponent},
      {path:'ediciones/:id',component:CreaeditaEventoComponent}
    ]
  },
  {
    path: 'locales',
    component:LocalComponent,
    children:[
      {path:'nuevo',component:CreaeditaLocalComponent},
      {path:'ediciones/:id',component:CreaeditaLocalComponent}
    ]
  },
  {
    path: 'roles',
    component:RolesComponent,
    children:[
      {path:'nuevo',component:CreaeditaRolesComponent},
      {path:'ediciones/:id',component:CreaeditaRolesComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentRoutingModule { }
