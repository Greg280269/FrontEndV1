import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { TipoComprobante } from 'src/app/model/TipoComprobante';
import { ComprobanteService } from 'src/app/service/comprobante.service';

@Component({
  selector: 'app-creaedita-comprobante',
  templateUrl: './creaedita-comprobante.component.html',
  styleUrls: ['./creaedita-comprobante.component.css']
})
export class CreaeditaComprobanteComponent implements OnInit{

  idF:number = 0;
  edicion:boolean =false;
  form: FormGroup = new FormGroup({});
  mensaje:string="";
  comp: TipoComprobante = new TipoComprobante ();
  constructor(
    private ps: ComprobanteService,
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
      id:['',],
      nombre:['',Validators.required],
      descripcion:['',Validators.required],
      
    });
  }
  Aceptar(){
    if(this.form.valid){
      this.comp.id=this.form.value.id;
      this.comp.nombre=this.form.value.nombre;
      this.comp.descripcion =this.form.value.descripcion;
      

      if(this.edicion){
        this.ps.update(this.comp).subscribe(()=>{
          this.ps.list().subscribe((data)=>{
            this.ps.setList(data);
          });
        });

      }else{
        this.ps.insert(this.comp).subscribe((data)=>{
          this.ps.list().subscribe((data)=>{
            this.ps.setList(data);
          });
        });
      }
      this.router.navigate(['tipo_comprobante']);
    } else{
      this.mensaje='Complete todos los campos, revise!!';
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
      this.ps.listId(this.idF).subscribe((data) => {
        this.form = new FormGroup({
          id: new FormControl(data.id),
          nombre: new FormControl(data.nombre),
          descripcion: new FormControl(data.descripcion),
        });
      });
    }
  }
  
}
