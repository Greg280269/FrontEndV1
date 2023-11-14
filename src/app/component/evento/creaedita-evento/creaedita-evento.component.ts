import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { ActivatedRoute, Params, Router } from '@angular/router';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
  AbstractControl,
} from '@angular/forms';
import { Evento } from 'src/app/model/evento';
import { EventoService } from 'src/app/service/evento.service';

@Component({
  selector: 'app-creaedita-evento',
  templateUrl: './creaedita-evento.component.html',
  styleUrls: ['./creaedita-evento.component.css']
})
export class CreaeditaEventoComponent implements OnInit {
  form: FormGroup = new FormGroup({});
  evento: Evento = new Evento();
  mensaje: string = '';
  maxFecha: Date = moment().add(-1, 'days').toDate();
  id: number = 0;
  edicion: boolean = false;
  horaPattern = /^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/;

  constructor(
    private eS: EventoService,
    private router: Router,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((data: Params) => {
      this.id= data['id'];
      this.edicion = data['id'] != null;
      this.init();
    });
    this.form = this.formBuilder.group({
      id: ['',],
      nombre: ['', Validators.required],
      descripcion: ['', Validators.required],
      fecha: ['', Validators.required],
      hora: ['', Validators.required],
      capacidad: ['', Validators.required],
      costo: ['', Validators.required],

    });
  }

  aceptar(): void {
    if (this.form.valid) {
      this.evento.id = this.form.value.id;
      this.evento.nombre = this.form.value.nombre;
      this.evento.descripcion = this.form.value.descripcion;
      this.evento.fecha = this.form.value.fecha;
      this.evento.hora = this.form.value.hora;
      this.evento.capacidad = this.form.value.capacidad;
      this.evento.costo = this.form.value.costo;
      if (this.edicion) {
        this.eS.update(this.evento).subscribe(() => {
          this.eS.list().subscribe((data) => {
            this.eS.setList(data);
          });
        });
      } else {
        this.eS.insert(this.evento).subscribe((data) => {
          this.eS.list().subscribe((data) => {
            this.eS.setList(data);
          });
        });
      }
      this.router.navigate(['components/eventos']);
    } else {
      this.mensaje = 'Por favor complete todos los campos obligatorios.';
    }
  }

  obtenerControlCampo(nombreCampo: string): AbstractControl {
    const control = this.form.get(nombreCampo);
    if (!control) {
      throw new Error(`Control no encontrado para el campo ${nombreCampo}`);
    }
    return control;
  }

  init() {
    if (this.edicion) {
      this.eS.listId(this.id).subscribe((data) => {
        this.form = new FormGroup({
          id: new FormControl(data.id),
          nombre: new FormControl(data.nombre),
          descripcion: new FormControl(data.descripcion),
          fecha: new FormControl(data.fecha),
          hora: new FormControl(data.hora),
          capacidad: new FormControl(data.capacidad),
          costo: new FormControl(data.costo),

        });
      });
    }
  }
}
