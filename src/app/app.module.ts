import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ComprobanteComponent } from './component/comprobante/comprobante.component';
import { ListarComprobanteComponent } from './component/comprobante/listar-comprobante/listar-comprobante.component';
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
import { HttpClientModule } from '@angular/common/http';
import { CreaeditaComprobanteComponent } from './component/comprobante/creaedita-comprobante/creaedita-comprobante.component';
import { ServiciosComponent } from './component/servicios/servicios.component';
import { ListarServiciosComponent } from './component/servicios/listar-servicios/listar-servicios.component';
import { CreaeditaServiciosComponent } from './component/servicios/creaedita-servicios/creaedita-servicios.component';
import { UsersComponent } from './component/users/users.component';
import { ListarUsersComponent } from './component/users/listar-users/listar-users.component';
import { CreaeditaUsersComponent } from './component/users/creaedita-users/creaedita-users.component';
import { RolesComponent } from './component/roles/roles.component';
import { ListarRolesComponent } from './component/roles/listar-roles/listar-roles.component';
import { CreaeditaRolesComponent } from './component/roles/creaedita-roles/creaedita-roles.component';


@NgModule({
  declarations: [
    AppComponent,
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
    CreaeditaRolesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
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
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
