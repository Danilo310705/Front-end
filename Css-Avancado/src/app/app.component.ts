import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  valorPago = 0;
  valorItem = 0;
  resultadoTroco : number | null = null;

  calcularTroco():number{
    const n1 = Number(this.valorPago) ?? 0 ;
    const n2 = Number(this.valorItem) ?? 0 ;
      return this.resultadoTroco = n1 - n2;

  };

  valorDQuilo = 0;
  quantDQuilo = 0;
  resultadoQuilo : number | null = null;

  valorPorPeso():number{
    const n1 = Number(this.valorDQuilo) ?? 0 ;
    const n2 = Number(this.quantDQuilo) ?? 0 ;
    return this.resultadoQuilo = n1 * n2;    
  }

}
