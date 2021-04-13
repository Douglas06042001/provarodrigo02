import { Component } from '@angular/core';
import { dicionario } from './dicionario';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Prova2021';
  dicionario: dicionario=new dicionario()
  dicionarios: dicionario[] = []
  checkWord = false
  


  saveData(form) {
    console.log('salvando os dados')

    if (!this.dicionario.id) {
      this.dicionario.id = (new Date()).getTime()
      this.dicionarios.push(this.dicionario)
    }
    else {
      let olddicionario = this.dicionarios.find(s => s.id === this.dicionario.id)
      olddicionario.palavra=this.dicionario.palavra
      olddicionario.significado=this.dicionario.significado
    }


    this.dicionario = new dicionario()
    form.resetForm() //Limpa o formulario

  }
}


