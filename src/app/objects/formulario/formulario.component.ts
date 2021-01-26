import { Component, OnInit } from '@angular/core';
import { Object } from '../shared/object';
import  {  FormBuilder,  FormGroup  }  from  '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.sass']
})
export class FormularioObjectComponent implements OnInit {

  formObject: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.createForm(new Object());
  }

  createForm(object: Object) {
    this.formObject = this.formBuilder.group({
      nome: [object.nome],
      tamanho: [object.tamanho],
      dono: [object.dono]
    })
  }

  onSubmit() {
    // aqui você pode implementar a logica para fazer seu formulário salvar
    console.log(this.formObject.value);

    // Usar o método reset para limpar os controles na tela
    this.formObject.reset(new Object());
  }

}
