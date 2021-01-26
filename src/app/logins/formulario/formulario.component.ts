import { Component, OnInit } from '@angular/core';
import { Login } from '../shared/login';
import { FormBuilder,  FormGroup }  from  '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulariologin.component.html',
  styleUrls: ['./formulariologin.component.sass']
})
export class FormularioLoginComponent implements OnInit {

  formLogin: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.createForm(new Login());
  }

  createForm(login: Login) {
    this.formLogin = this.formBuilder.group({
      nome: [login.email],
      tamanho: [login.senha]
    })
  }

  onSubmit() {
    // aqui você pode implementar a logica para fazer seu formulário salvar
    console.log(this.formLogin.value);

    // Usar o método reset para limpar os controles na tela
    this.formLogin.reset(new Object());
  }

}
