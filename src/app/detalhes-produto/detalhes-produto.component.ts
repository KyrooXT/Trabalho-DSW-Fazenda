import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalhes-produto',
  templateUrl: './detalhes-produto.component.html',
  styleUrls: ['./detalhes-produto.component.css']
})
export class DetalhesProdutoComponent implements OnInit {
  produto: any;
  produtos = [
    { id: 1, nome: 'Trator', descricao: 'Trator agrícola de última geração, equipado com tecnologia de ponta para facilitar o trabalho em grandes áreas agrícolas. Ideal para agricultores que buscam eficiência e alta produtividade nas colheitas.', preco: 'R$ 100.000', imagens: ['assets/trator.png', 'assets/trator2.png'] },
    { id: 2, nome: 'Arado', descricao: 'Arado eficiente para preparo de solo profundo, projetado para otimizar o processo de cultivo em terrenos de difícil manejo. Excelente opção para melhorar a qualidade do solo antes do plantio.', preco: 'R$ 5.000', imagens: ['assets/arado.png', 'assets/arado2.png'] },
    { id: 3, nome: 'Sementes de Milho', descricao: 'Sementes de milho híbrido de alta produtividade, desenvolvidas para garantir uma colheita abundante e resistente a pragas. Perfeitas para agricultores que buscam maximizar seus resultados no campo.', preco: 'R$ 300', imagens: ['assets/sementes.png', 'assets/sementes2.png'] },
    { id: 4, nome: 'Colheitadeira', descricao: 'Colheitadeira moderna com alta capacidade de colheita, projetada para operações em grandes lavouras. Proporciona uma colheita rápida e eficiente, minimizando as perdas de grãos durante o processo.', preco: 'R$ 250.000', imagens: ['assets/colheitadeira.png', 'assets/colheitadeira2.png'] },
    { id: 5, nome: 'Adubo Orgânico', descricao: 'Adubo orgânico de alta qualidade, indicado para melhorar a fertilidade do solo de maneira sustentável. Enriquecido com nutrientes essenciais, ideal para cultivos orgânicos e agricultura sustentável.', preco: 'R$ 800', imagens: ['assets/adubo.png', 'assets/adubo2.png'] },
    { id: 6, nome: 'Pulverizador', descricao: 'Pulverizador agrícola de grande alcance, ideal para aplicação de defensivos e fertilizantes líquidos em grandes áreas de plantio. Garantia de eficiência na distribuição uniforme de produtos.', preco: 'R$ 12.000', imagens: ['assets/pulverizador.png', 'assets/pulverizador2.png'] },
    { id: 7, nome: 'Sementes de Soja', descricao: 'Sementes de soja de alta produtividade, desenvolvidas para resistir a condições adversas de clima e solo. A escolha certa para agricultores que buscam aumentar a produção e garantir uma colheita rentável.', preco: 'R$ 350', imagens: ['assets/sementes_soja.png', 'assets/sementes_soja2.png'] },
    { id: 8, nome: 'Cavadeira', descricao: 'Cavadeira manual robusta, ideal para pequenos agricultores e jardineiros. Projetada para facilitar o plantio de mudas e pequenas escavações com eficiência e conforto.', preco: 'R$ 150', imagens: ['assets/cavadeira.png', 'assets/cavadeira2.png'] },
    { id: 9, nome: 'Rolo Compactador', descricao: 'Rolo compactador agrícola, utilizado para preparar o solo após o plantio, garantindo uma melhor absorção de água e compactação do terreno. Indicado para diversas culturas, como grãos e pastagens.', preco: 'R$ 30.000', imagens: ['assets/compactador.png', 'assets/compactador2.png'] }
  ];
  

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.produto = this.produtos.find(p => p.id === id);
  }
}
