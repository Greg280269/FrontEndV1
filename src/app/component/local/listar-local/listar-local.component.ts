import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { Local } from 'src/app/model/local';
import { LocalService } from 'src/app/service/local.service';


@Component({
  selector: 'app-listar-local',
  templateUrl: './listar-local.component.html',
  styleUrls: ['./listar-local.component.css']
})
export class ListarLocalComponent implements OnInit {
  Lista: Local[] = [];
  dataSource: MatTableDataSource<Local> = new MatTableDataSource();
  displayedColumns: string[] = [
    'CodigoLocal',
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
