import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
  AbstractControl,
} from '@angular/forms';
import { Local } from 'src/app/model/local';
import { LocalService } from 'src/app/service/local.service';

@Component({
  selector: 'app-creaedita-local',
  templateUrl: './creaedita-local.component.html',
  styleUrls: ['./creaedita-local.component.css']
})
export class CreaeditaLocalComponent implements OnInit {
  form: FormGroup = new FormGroup({});
  local: Local = new Local();
  mensaje: string = '';
  id: number = 0;
  edicion: boolean = false;

  constructor(
    private lS: LocalService,
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
      direccion: ['', Validators.required],
      capacidad: ['', Validators.required],

    });
  }

  aceptar() {
    if (this.form.valid) {
      this.local.id = this.form.value.id;
      this.local.nombre = this.form.value.nombre;
      this.local.direccion = this.form.value.direccion;
      this.local.capacidad = this.form.value.capacidad;
      if (this.edicion) {
        this.lS.update(this.local).subscribe(() => {
          this.lS.list().subscribe((data) => {
            this.lS.setList(data);
          });
        });
      } else {
        this.lS.insert(this.local).subscribe((data) => {
          this.lS.list().subscribe((data) => {
            this.lS.setList(data);
          });
        });
      }
      this.router.navigate(['locales']);
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

  //actualizar
  init() {
    if (this.edicion) {
      this.lS.listId(this.id).subscribe((data) => {
        this.form = new FormGroup({
          id: new FormControl(data.id),
          nombre: new FormControl(data.nombre),
          direccion: new FormControl(data.direccion),
          capacidad: new FormControl(data.capacidad),

        });
      });
    }
  }
}
