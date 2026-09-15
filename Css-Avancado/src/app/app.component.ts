import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

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

}
