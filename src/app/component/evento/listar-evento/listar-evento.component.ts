import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Evento } from 'src/app/model/evento';
import { EventoService } from 'src/app/service/evento.service';

@Component({
  selector: 'app-listar-evento',
  templateUrl: './listar-evento.component.html',
  styleUrls: ['./listar-evento.component.css']
})
export class ListarEventoComponent {
  dataSource: MatTableDataSource<Evento> = new MatTableDataSource()
  displayedColumns: string[] = [
    'Codigo',
    'Nombre',
    'Descripcion',
    'Fecha',
    'Hora',
    'Capacidad',
    'Costo',
    'accion01',
    'accion02'
  ];

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private eS: EventoService) { }

  ngOnInit(): void {
    this.eS.list().subscribe((data) => {
        this.dataSource = new MatTableDataSource(data);
        this.dataSource.paginator=this.paginator;
    });
    this.eS.getList().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
    });
  }

  eliminar(id: number){
    this.eS.delete(id).subscribe((data)=>{
      this.eS.list().subscribe((data)=>{
        this.eS.setList(data);
      });
    });
  }

  filtrar(e: any) {
    this.dataSource.filter = e.target.value.trim();
  }


}
