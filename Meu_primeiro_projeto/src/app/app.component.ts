import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  nome = 'turma';

  mudarNome(){
    this.nome = 'Danilo';
  };

  number1 : number | null = null;
  number2 : number | null = null;
  resultado : number | null = null;

  somar(){
    const n1 = Number(this.number1) ?? 0 ;
    const n2 = Number(this.number2) ?? 0 ;
    this.resultado = n1 + n2;

  };

  valorPago : number | null = null;
  valorItem : number | null = null;
  resultadoTroco : number | null = null;

  calcularTroco(){
    const n1 = Number(this.valorPago) ?? 0 ;
    const n2 = Number(this.valorItem) ?? 0 ;
    if(n1 < n2){
      this.resultadoTroco = null;
    }else{
      this.resultadoTroco = n1 - n2;
    }
  };

  valorDQuilo : number | null = null;
  quantDQuilo : number | null = null;
  resultadoQuilo : number | null = null;

  valorPorPeso(){
    const n1 = Number(this.valorDQuilo) ?? 0 ;
    const n2 = Number(this.quantDQuilo) ?? 0 ;
    this.resultadoQuilo = n1 * n2;    
  }

  valorSemReajuste : number | null = null;
  valorComReajuste : number | null = null;

  calcularReajuste(){
    const n1 = Number(this.valorSemReajuste) ?? 0 ;
    this.valorComReajuste = n1 + (n1 * 0.01);
  }

  numero1 : number | null = null;
  numero2 : number | null = null;
  numero3 : number | null = null;
  resutMediaArit : number | null = null;
  resutMediaPond : number | null = null;
  somaDasMedias : number | null = null;
  mediaDasMedias : number | null = null;    

  calcularMedias(){
    const n1 = Number(this.numero1) ?? 0 ;
    const n2 = Number(this.numero2) ?? 0 ;
    const n3 = Number(this.numero3) ?? 0 ;

    this.resutMediaArit = (n1 + n2 + n3) / 3;
    this.resutMediaPond = (n1 * 3 + n2 * 2 + n3 * 5) / 10;
    this.somaDasMedias = this.resutMediaArit + this.resutMediaPond;
    this.mediaDasMedias = (this.resutMediaArit + this.resutMediaPond) / 2;
  }

  valor1 : number | null = null;
  valor2 : number | null = null;
  oMaior : number | null = null;

  verificarOMaior(){
    const n1 = Number(this.valor1) ?? 0 ;
    const n2 = Number(this.valor2) ?? 0 ;

    if(n1 > n2){
      this.oMaior = n1;
    }else{
      this.oMaior = n2;
    }
  }

  valor4 : number | null = null;
  valor5 : number | null = null;
  valor6 : number | null = null;
  valor7 : number | null = null;
  oMenor : number | null = null;

  verificarOMenor(){
    const n1 = Number(this.valor4) ?? 0 ;
    const n2 = Number(this.valor5) ?? 0 ;
    const n3 = Number(this.valor6) ?? 0 ;
    const n4 = Number(this.valor7) ?? 0 ;

    this.oMenor = n1;

    if(this.oMenor > n2){
      this.oMenor = n2;
    }
    if(this.oMenor > n3){
      this.oMenor = n3;
    }
    if(this.oMenor > n4){
      this.oMenor = n4;
    }
  }

  valor : number | null = null;
  parImpar : String | null = null;

  verificarImpOuPar(){
    const n1 = Number(this.valor) ?? 0 ;

    if((n1 % 2) == 0){
      this.parImpar = "Par";
    }else{
      this.parImpar = "Impar";
    }
  }

  cod : String | null = null;
  produto : String | null = null;

  buscaPorCodigo(){
    const cod = this.cod;

    if(cod == "001" || cod == "01" || cod == "1"){
      this.produto = "Parafuso"
    }else if(cod == "002" || cod == "02" || cod == "2"){
      this.produto = "Porca"
    }else if(cod == "003" || cod == "03" || cod == "3"){
      this.produto = "Prego"
    }else(
      this.produto = "Diversos"
    )
  }
  
}

