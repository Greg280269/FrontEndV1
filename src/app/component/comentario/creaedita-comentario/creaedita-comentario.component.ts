import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Comentario } from 'src/app/model/comentarios';
import { ComentarioService } from 'src/app/service/comentario.service';


@Component({
  selector: 'app-creaedita-comentario',
  templateUrl: './creaedita-comentario.component.html',
  styleUrls: ['./creaedita-comentario.component.css']
})
export class CreaeditaComentarioComponent implements OnInit{

  idF:number = 0;
  edicion:boolean =false;
  form: FormGroup = new FormGroup({});
  mensaje:string="";
  comentario: Comentario = new Comentario ();
  tipo: { value: number; viewValue: string }[] = [
    { value: 1, viewValue: '1' },
    { value: 2, viewValue: '2' },
    { value: 3, viewValue: '3' },
    { value: 4, viewValue: '4' },
    { value: 5, viewValue: '5' },
  ];

  constructor(
    private cS: ComentarioService,
    private router: Router,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute
  ){}

  ngOnInit(): void {
    this.route.params.subscribe((data: Params)=>{
      this.idF = data['id'];
      this.edicion = data['id'] != null;
      this.init();
    });

    this.form=this.formBuilder.group({
      idComentario: ['',],
      valoracion: ['', Validators.required],
      contenido: ['', Validators.required],
    });
  }
  aceptar(){
    if(this.form.valid){
      this.comentario.idComentario = this.form.value.idComentario;
      this.comentario.valoracion = this.form.value.valoracion;
      this.comentario.contenido = this.form.value.contenido;
      if (this.edicion) {
        this.cS.update(this.comentario).subscribe(() => {
          this.cS.list().subscribe((data) => {
            this.cS.setList(data);
          });
        });
      } else {
        this.cS.insert(this.comentario).subscribe((data) => {
          this.cS.list().subscribe((data) => {
            this.cS.setList(data);
          });
        });
      }
      this.router.navigate(['components/comentarios']);
    } else {
      this.mensaje = 'Por favor complete todos los campos obligatorios.';
    }
  }

  obtenerControlCampo(nombreCampo:string): AbstractControl{
    const control = this.form.get(nombreCampo);
    if(!control){
      throw new Error (`Control no encontrado para el campo ${nombreCampo}`);
    }
    return control;
  }

  init(){
    if (this.edicion) {
      this.cS.listId(this.idF).subscribe((data) => {
        this.form = new FormGroup({
          idComentario: new FormControl(data.idComentario),
          valoracion: new FormControl(data.valoracion),
          contenido: new FormControl(data.contenido),
        });
      });
    }
  }

}
