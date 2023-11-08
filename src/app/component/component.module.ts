import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import {MatPaginatorModule} from '@angular/material/paginator';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import{MatIconModule} from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule} from '@angular/material/input'


import { ComponentRoutingModule } from './component-routing.module';
import { AppComponent } from '../app.component';
import { CreaeditaComprobanteComponent } from './comprobante/creaedita-comprobante/creaedita-comprobante.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { ListarServiciosComponent } from './servicios/listar-servicios/listar-servicios.component';
import { CreaeditaServiciosComponent } from './servicios/creaedita-servicios/creaedita-servicios.component';
import { UsersComponent } from './users/users.component';
import { ListarUsersComponent } from './users/listar-users/listar-users.component';
import { CreaeditaUsersComponent } from './users/creaedita-users/creaedita-users.component';
import { RolesComponent } from './roles/roles.component';
import { ListarRolesComponent } from './roles/listar-roles/listar-roles.component';
import { CreaeditaRolesComponent } from './roles/creaedita-roles/creaedita-roles.component';
import { ComprobanteComponent } from './comprobante/comprobante.component';
import { ListarComprobanteComponent } from './comprobante/listar-comprobante/listar-comprobante.component';
import { HttpClientModule } from '@angular/common/http';






@NgModule({
  declarations: [
    ComprobanteComponent,
    ListarComprobanteComponent,
    CreaeditaComprobanteComponent,
    ServiciosComponent,
    ListarServiciosComponent,
    CreaeditaServiciosComponent,
    UsersComponent,
    ListarUsersComponent,
    CreaeditaUsersComponent,
    RolesComponent,
    ListarRolesComponent,
    CreaeditaRolesComponent,
    
  ],
  imports: [
    CommonModule,
    ComponentRoutingModule,
    MatTableModule,
    FormsModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatPaginatorModule,
    MatToolbarModule,
    MatListModule,
    MatMenuModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class ComponentModule { }