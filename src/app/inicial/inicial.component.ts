import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicial',
  templateUrl: './inicial.component.html',
  styleUrls: ['./inicial.component.css']
})
export class InicialComponent {
  produtos = [
    { id: 1, nome: 'Trator', imagem: 'assets/trator.png', descricao: 'Trator agrícola de alta potência para grandes lavouras' },
    { id: 2, nome: 'Arado', imagem: 'assets/arado.png', descricao: 'Arado para preparo de solo profundo, ideal para terrenos compactados' },
    { id: 3, nome: 'Sementes de Milho', imagem: 'assets/sementes.png', descricao: 'Sementes de milho híbrido de alta produtividade' },
    { id: 4, nome: 'Colheitadeira', imagem: 'assets/colheitadeira.png', descricao: 'Colheitadeira eficiente para grãos, reduz perdas na colheita' },
    { id: 5, nome: 'Adubo Orgânico', imagem: 'assets/adubo.png', descricao: 'Adubo orgânico de alta qualidade, ideal para melhorar a fertilidade do solo' },
    { id: 6, nome: 'Pulverizador', imagem: 'assets/pulverizador.png', descricao: 'Pulverizador agrícola com grande capacidade de alcance e eficiência' },
    { id: 7, nome: 'Sementes de Soja', imagem: 'assets/sementes_soja.png', descricao: 'Sementes de soja resistente a pragas e alta produtividade' },
    { id: 8, nome: 'Cavadeira', imagem: 'assets/cavadeira.png', descricao: 'Cavadeira manual para plantio de mudas e pequenas escavações' },
    { id: 9, nome: 'Rolo Compactador', imagem: 'assets/compactador.png', descricao: 'Rolo compactador ideal para preparar solos para plantio' }
  ];
  

  constructor(private router: Router) {}

  verMais(id: number) {
    this.router.navigate(['/detalhes', id]);
  }
}
