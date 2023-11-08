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
    path: 'roles',
    component:RolesComponent,
    children:[
      {path:'nuevo',component:CreaeditaRolesComponent},
      {path:'ediciones/:id',component:CreaeditaRolesComponent}
    ]
  }
];;

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentRoutingModule { }
