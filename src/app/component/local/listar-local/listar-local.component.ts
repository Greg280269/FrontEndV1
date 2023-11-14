import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Local } from 'src/app/model/local';
import { LocalService } from 'src/app/service/local.service';

@Component({
  selector: 'app-listar-local',
  templateUrl: './listar-local.component.html',
  styleUrls: ['./listar-local.component.css']
})
export class ListarLocalComponent {
  dataSource: MatTableDataSource<Local> = new MatTableDataSource()
  displayedColumns: string[] = [
    'Codigo',
    'Nombre',
    'Direccion',
    'Capacidad',
    'accion01',
    'accion02'
  ];

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private lS: LocalService) { }

  ngOnInit(): void {
    this.lS.list().subscribe((data) => {
        this.dataSource = new MatTableDataSource(data);
        this.dataSource.paginator=this.paginator;
    });
    this.lS.getList().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
    });
  }

  eliminar(id: number){
    this.lS.delete(id).subscribe((data)=>{
      this.lS.list().subscribe((data)=>{
        this.lS.setList(data);
      });
    });
  }

  filtrar(e: any) {
    this.dataSource.filter = e.target.value.trim();
  }

}
