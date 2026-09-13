import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { zip } from 'rxjs';
import { StringToken } from '@angular/compiler';

@Component({
  selector: 'app-root',
  imports: [CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  //variavel vinculado ao input
  novoNome: string = '';  
  somaNomes: number = 0;

  //lisata de nomes
  listaNomes: string[] = [];


  //Função para adicionar nomes na lista
  adicionarNome(){
    //verificar se novoNome não esta vazio, trim remove espaços
    if(this.novoNome.trim()){
      //adiciona o nome na lista
      this.listaNomes.push(this.novoNome);
      //limpar a variavel do input
      this.novoNome = '';
      //chama a função para contar os nomes
      this.contadorDNomes(this.listaNomes);
    }
  }

  contadorDNomes(lista: string[]){
    let contador = 0;
    contador = lista.length;
    this.somaNomes = contador;
  }

  //Função para remover nome da lista
  //tem como parametro de entrada o endereço(index) do nome que sera removido
  removerNome(index:number){
    this.listaNomes.splice(index, 1);
    //chama a função para contar os nomes
    this.contadorDNomes(this.listaNomes);
  }









  novoNumero : number | null = null;
  soma : number = 0;
  media : number = 0;
  listaDeNumeros : number[] = [];

  adicionarNumero(){
    const n1 = Number(this.novoNumero);
    if( n1 != null){
      this.listaDeNumeros.push(n1);
      this.novoNumero = null;
      this.soma = 0;
      for(let i = 0; i < this.listaDeNumeros.length; i++ ){
      this.soma += this.listaDeNumeros[i];
      this.media = this.soma / (i+1);
    }
    }
    
  }

  removerNumero(index : number){
    this.listaDeNumeros.splice(index,1);
    this.soma = 0;
    for(let i = 0; i < this.listaDeNumeros.length; i++ ){
      this.soma += this.listaDeNumeros[i];
      this.media = this.soma / (i+1);
    }
  }

  nomeProd : string = '';
  valorProd : number | null=null;
  valorTotal : number = 0;

  listaNomeProduto : string[] = [];
  listaValorProduto : number[] = [];

  adicionarProduto(){
    const n1 = Number(this.valorProd);
    if(this.nomeProd.trim() && n1 != null){
      this.listaNomeProduto.push(this.nomeProd);
      this.listaValorProduto.push(n1);
      this.nomeProd = '';
      this.valorProd = null;
      this.valorTotal = 0;
      for(let i = 0; i <this.listaValorProduto.length; i++){
        this.valorTotal += this.listaValorProduto[i];
      }
    }  
  }

  removerProduto(index : number){
    this.listaNomeProduto.splice(index,1);
    this.listaValorProduto.splice(index,1);
    this.valorTotal = 0;
    for(let i = 0; i <this.listaValorProduto.length; i++){
      this.valorTotal += this.listaValorProduto[i];
    }
  }




}
