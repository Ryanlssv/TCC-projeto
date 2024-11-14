const loja = {
    produtos: [
      { name: 'Capacitador Elétronico', categoria: 'Componentes',parcela:'até 10x de R$ 0,085 sem juros sem juros  ou R$ 0,86 via Pix ', preco: 0.86, image: './imagem/img-Card-maisVendido/img1.png', descricao: 'capacitador de 1.000uF/25v Eletrolítico 470uF/50V',descricaoProdutc: 'O capacitador de 1.000uF/25v tem a função de armazenar energia elétrica para fornecer uma tensão estável com menos variação, usados diversamente no ramo da eletrônica, seja dentro de fontes, placas PCI, computadores entre diversos outros.'   },
      { name: 'Módulo Fonte 5V 3W - HLK-PM01', categoria: 'Módulos', preco: 19.95, image: './imagem/img-Card-maisVendido/img2.png',parcela:' até 10x de R$ 1,99 sem juros sem juros  ou R$ 19,95 via Pix ',descricao:'com entrada bivolt AC de 100 ~240VAC, e com saída 5VDC.', descricaoProdutc: 'O capacitador de 1.000uF/25v tem a função de armazenar energia elétrica para fornecer uma tensão estável com menos variação, usados diversamente no ramo da eletrônica, seja dentro de fontes, placas PCI, computadores entre diversos outros.'  },
      { name: 'Arduino Uno R2', categoria: 'Arduinos', preco:  131.50,parcela:' até 10x de R$ 13,50, sem juros sem juros  ou R$ 131,50 via Pix ' , image: './imagem/img-Card-maisVendido/img3.png', descricao: 'Microcontrolador: ATmega328  DIPTensão de Entrada: 7-12V Portas  Digitais: 14 Portas Analógicas: 6', descricaoProdutc: 'O Arduino Uno R3 é uma placa baseada no microcontrolador Tmega328. uma conexão USB, Ele contém todos os componentes necessários para suportar o microcontrolador, simplesmente conecte a um computador pela porta USB ou alimentar com uma fonte ou com uma bateria e tudo pronto para começar.' },
      { name: 'Motor De Passo NEMA  23 com redução - 57 Kgf.cm/3,92A Action', categoria: 'Motores', preco: 436.50,parcela:' até 10x de R$ 43,65, sem juros sem juros  ou R$ 436,65 via Pix ' ,image: './imagem/img-Card-maisVendido/img8.png', descricao: '- Action, e uma boa escolha onde há necessidade de um movimento controlado. Como Angulo de rotação' , descricaoProdutc: 'Quando pulsos elétricos são aplicados em uma determinada sequência nos terminais deste. A rotação de tais motores é diretamente relacionada aos impulsos elétricos que são recebidos, bem como a sequência a qual tais pulsos são aplicados reflete diretamente na direção a qual o motor gira. '  },
      { name: 'Ferro de Solda Hikari', categoria: 'Prototipagem', preco: 115.71 ,parcela:' até 10x de R$ 11,571 sem juros  R$ 115,71 via Pix ' , image: './imagem/img-Card-maisVendido/img4.png',  descricao: 'O Ferro de Solda para Estação  HK-936A o princípio de funcionamento a transformação de corrente elétrica  em calor.', descricaoProdutc: 'O ferro de solda é uma ferramenta indispensável no mundo da eletrônica, ele é extremamente útil para montagem de placas, pequenos reparos onde seja necessária a substituição de componentes, emendas em cabos e terminais, entre outras utilidades'  },
      { name: 'Acoplador Óptico 4N25', categoria: 'Componentes' ,preco: 1.95 , parcela:' até 10x de R$ 0,195 sem juros R$ 1,95 via Pix ' , image: './imagem/img-Card-maisVendido/img5.png', descricao: 'Acoplador Óptico 4N25.Tensão  Coletor-Emissor Máxima (VCEO):30 V-Tensão Coletor-Base Máxima (VCBO)', descricaoProdutc: 'O Optoacoplador 4N25 SMD é um componente eletrônico capaz de fazer o isolamento de algumas partes do circuito, por necessitar de baixa potência de operação, ser muito mais rápido,aprova de interferência e ser muito menos que um relé, está ganhando cada vez mais lugar no mercado de automação. '  },
      { name:'Sensor de Proximidade Eltronico', categoria: 'Componentes' ,preco:19.86,parcela:' até 10x de R$ 1,95 sem juros sem juros  ou R$ 19,86 via Pix ' ,image:'./imagem/img-Card-maisVendido/img6.png',descricao:'O Sensor de Proximidade NPN 36V é  um  sensor capaz de detectar objetos  até 4mm de distância.', descricaoProdutc: 'O Sensor de Proximidade Indutivo NPN é um sensor capaz de detectar objetos metálicos com até 4mm de distância. Ao detectar o objeto ele gera um sinal na saída, que pode ser lido e interpretado por um microcontrolador como Arduino, para ativar algum rele ou acionar algum tipo de movimento.' },
      { name:'Carregador de Bateria de Lítio', categoria: 'Componentes' ,preco:3.65,parcela:' até 10x de R$ 0,36 sem juros sem juros  ou R$ 3,65 via Pix ',image:'./imagem/img-Card-maisVendido/img7.png',descricao:'Carregador TP4056, A placa possui  conexão por cabo USB, carregando  baterias sem que remova-a do  circuito.', descricaoProdutc: 'Este módulo carregador TP4056 é ideal para baterias de Lítio. A placa possui um circuito de carga, LED de status e fácil conexão por cabo Mini USB, podendo carregar baterias sem que remova-a do circuito.' },
      { name: 'Pasta Para Soldar Soldatec - Pote 50g', categoria: 'Componentes', preco:9.71 ,parcela:'até 10x de R$ 0,097 sem juros  R$ 9,71 via Pix '  ,image: './imagem/img-Card-maisVendido/img9.png', descricao: 'A Pasta Para Soldar Soldatec - Pote 50g é formulada a base de colofônia (breu) e hidrocarbonetos.', descricaoProdutc: 'A Pasta Para Soldar Soldatec - Pote 50g é formulada a base de colofônia (breu) e hidrocarbonetos, usada profissionalmente há um longo tempo para trabalhos de soldagem metálica, com soldas a base de misturas eutéticas de estanho. A Soldatec age como fluxo de solda, ativando a ligação metal-metal.'  },
      { name: 'Kit Robô Seguidor de Linha 2 Rodas DIY', categoria: 'KitComponente', preco:35.00 ,parcela:' até 10x de R$ 3,5 sem juros  R$ 35,00 via Pix '  ,image: './imagem/img-Card-maisVendido/img10.png', descricao: 'Kit Robô Seguidor de Linha 2 Rodas DIY é perfeito pra você que adora colocar a mão na massa', descricaoProdutc: 'Este Kit Robô Seguidor de Linha 2 Rodas DIY é perfeito pra você que adora colocar a mão na massa, pois é uma versão DIY (Do it Yourself), onde você recebe as partes separadamente e se diverte soldando elas. Este kit funciona com 2 pilhas AA (não inclusas).'  },
      { name: 'Filamento ABS Caneta Premium 1,75mm', categoria: 'Impressão3D', preco: 55.50 ,parcela:' até 10x de R$ 5,55 sem juros R$ 55,50 via Pix '  ,image: './imagem/img-Card-maisVendido/img11.png', descricao: 'Filamento ABS Azul Caneta Premium + tem como suas principais características ser resistente a impacto', descricaoProdutc: 'O Filamento ABS Azul Caneta Premium + tem como suas principais características ser resistente a impacto, ter boa resistência térmica e ser durável. Pode-se dizer ainda que este é um dos polímeros mais utilizado em impressoras 3D'  },
      { name: 'Módulo Bluetooth HC-05', categoria: 'Arduinos', preco: 55.50 ,parcela:' até 10x de R$ 5,55 sem juros  R$ 55,50 via Pix '  ,image: './imagem/img-Card-maisVendido/img12.png', descricao: 'módulo bluetooth HC-05 oferece uma forma fácil e barata de comunicação com seu projeto Arduino.', descricaoProdutc: 'Este módulo bluetooth HC-05 oferece uma forma fácil e barata de comunicação com seu projeto Arduino. Diferente do modelo HC-06, suporta tanto o modo mestre como escravo. Em sua placa existe um regulador de tensão e você poderá alimentar com 3.3 a 5v, bem como um LED que indica se o módulo está pareado com outro dispositivo.'  }
    ]
  };
  
  function exibirProdutos(produtos) {
    const container = document.getElementById('ProdutoCard');
    container.innerHTML = '';  // Limpa os produtos anteriores
    produtos.forEach(produto => {
      const card = document.createElement("div");
      card.classList.add("product-card");
      card.innerHTML = `
        <img class="product-image" src="${produto.image}" alt="${produto.name}">
        <h2 class="product-title">${produto.name}</h2>
        <p class="product-descrição">${produto.descricao}</p>
        <p class="product-price">R$ ${produto.preco}</p>
        <p class="product-parcela">${produto.parcela}</p>
        <button class="add-to-cart" onclick='addToCart(${JSON.stringify(produto)})'>Adicionar ao carrinho</button>
      `;
      // Adiciona o evento de clique para abrir o modal
      card.addEventListener("click", () => {
          openModal(produto);
      });
      container.appendChild(card);
    });
}

  
  
  // Exibe todos os produtos inicialmente
  exibirProdutos(loja.produtos);
  
  function atualizarPreco(valor) {
    document.getElementById('preco-valor').textContent = valor;
  }
  
  function filtrarProdutos() {
    const categoriasSelecionadas = Array.from(document.querySelectorAll('.categoria-checkbox:checked')).map(cb => cb.value);
    const precoMax = document.getElementById('preco-range').value;
  
    const produtosFiltrados = loja.produtos.filter(produto => {
      const atendeCategoria = categoriasSelecionadas.length === 0 || categoriasSelecionadas.includes(produto.categoria);
      const atendePreco = produto.preco <= precoMax;
      return atendeCategoria && atendePreco;
    });
  
    exibirProdutos(produtosFiltrados);
  }

// Obter elementos do modal
const modal = document.getElementById("productModal");
const modalImage = document.getElementById("modal-product-image");
const modalTitle = document.getElementById("modal-product-title");
const modalDescription = document.getElementById("modal-product-description");
const modalDescription2 = document.getElementById("modal-descricao-div");
const modalParcela = document.getElementById("modal-product-parcela");
const modalPrice = document.getElementById("modal-product-price");
const closeBtn = document.getElementsByClassName("close")[0];

// Exemplo de dados dos produtos
const products = [
  { name: 'Capacitador Elétronico', categoria: 'Componentes',parcela:' até 10x de R$ 0,085 sem juros sem juros  ou R$ 0,86 via Pix ', preco: 0.86, image: './imagem/img-Card-maisVendido/img1.png', descricao: 'capacitador de 1.000uF/25v  Eletrolítico 470uF/50V' , descricaoProdutc: 'O capacitador de 1.000uF/25v tem a função de armazenar energia elétrica para fornecer uma tensão estável com menos variação, usados diversamente no ramo da eletrônica, seja dentro de fontes, placas PCI, computadores entre diversos outros.'  },
  { name: 'Módulo Fonte 5V 3W - HLK-PM01', categoria: 'Módulos', preco: 19.95, image: './imagem/img-Card-maisVendido/img2.png',parcela:' até 10x de R$ 1,99 sem juros sem juros  ou R$ 19,95 via Pix ',descricao:'com entrada bivolt AC de 100 ~240VAC, e com saída 5VDC.', descricaoProdutc: 'Módulo Fonte - HLK-PM01 Fonte encapsulada com entrada bivolt e saída retificada 5 VDC com corrente máxima de saída de 600mA.Perfeita para ser utilizada em projetos de Internet das Coisas ou dispositivos compactos que podem ser energizados diretamente.' },
  { name: 'Arduino Uno R2', categoria: 'Arduinos', preco:  131.50,parcela:' até 10x de R$ 13,50, sem juros sem juros  ou R$ 131,50 via Pix ' , image: './imagem/img-Card-maisVendido/img3.png', descricao: 'Microcontrolador: ATmega328 DIPTensão de Entrada: 7-12V Portas  Digitais: 14 Portas Analógicas: 6', descricaoProdutc: 'O Arduino Uno R3 é uma placa baseada no microcontrolador Tmega328. uma conexão USB, Ele contém todos os componentes necessários para suportar o microcontrolador, simplesmente conecte a um computador pela porta USB ou alimentar com uma fonte ou com uma bateria e tudo pronto para começar.'  },
  { name: 'Motor De Passo NEMA  23 com redução', categoria: 'Motores', preco: 436.50,parcela:' até 10x de R$ 43,65, sem juros sem juros  ou R$ 436,65 via Pix ' ,image: './imagem/img-Card-maisVendido/img8.png', descricao: '- Action, e uma boa escolha onde há necessidade de um movimento controlado. Como Angulo de rotação' , descricaoProdutc: 'Quando pulsos elétricos são aplicados em uma determinada sequência nos terminais deste. A rotação de tais motores é diretamente relacionada aos impulsos elétricos que são recebidos, bem como a sequência a qual tais pulsos são aplicados reflete diretamente na direção a qual o motor gira. '  },
  { name: 'Ferro de Solda Hikari', categoria: 'Prototipagem', preco: 115.71 ,parcela:' até 10x de R$ 11,571 sem juros  R$ 115,71 via Pix ' , image: './imagem/img-Card-maisVendido/img4.png',  descricao: 'O Ferro de Solda para Estação HK-936A o princípio de funcionamento a transformação de corrente elétrica em calor.' , descricaoProdutc: 'O ferro de solda é uma ferramenta indispensável no mundo da eletrônica, ele é extremamente útil para montagem de placas, pequenos reparos onde seja necessária a substituição de componentes, emendas em cabos e terminais, entre outras utilidades'},
  { name: 'Acoplador Óptico 4N25', categoria: 'Componentes' ,preco: 1.95 , parcela:' até 10x de R$ 0,195 sem juros R$ 1,95 via Pix ' , image: './imagem/img-Card-maisVendido/img5.png', descricao: 'Acoplador Óptico 4N25.Tensão Coletor-Emissor Máxima (VCEO):30 V-Tensão Coletor-Base Máxima (VCBO)', descricaoProdutc: 'O Optoacoplador 4N25 SMD é um componente eletrônico capaz de fazer o isolamento de algumas partes do circuito, por necessitar de baixa potência de operação, ser muito mais rápido,aprova de interferência e ser muito menos que um relé, está ganhando cada vez mais lugar no mercado de automação. '  },
  { name:'Sensor de Proximidade Eltronico', categoria: 'Componentes' ,preco:19.86,parcela:' até 10x de R$ 1,95 sem juros sem juros  ou R$ 19,86 via Pix ' ,image:'./imagem/img-Card-maisVendido/img6.png',descricao:'O Sensor de Proximidade NPN 36V é um  sensor capaz de detectar objetos até 4mm de distância.', descricaoProdutc: 'O Sensor de Proximidade Indutivo NPN é um sensor capaz de detectar objetos metálicos com até 4mm de distância. Ao detectar o objeto ele gera um sinal na saída, que pode ser lido e interpretado por um microcontrolador como Arduino, para ativar algum rele ou acionar algum tipo de movimento.' },
  { name:'Carregador de  Bateria de Lítio', categoria: 'Componentes' ,preco:3.65,parcela:' até 10x de R$ 0,36 sem juros sem juros  ou R$ 3,65 via Pix ',image:'./imagem/img-Card-maisVendido/img7.png',descricao:'Carregador TP4056, A placa possui conexão por cabo USB, carregando baterias sem que remova-a do circuito.', descricaoProdutc: 'Este módulo carregador TP4056 é ideal para baterias de Lítio. A placa possui um circuito de carga, LED de status e fácil conexão por cabo Mini USB, podendo carregar baterias sem que remova-a do circuito.' },
  { name: 'Pasta Para Soldar Soldatec - Pote 50g', categoria: 'Componentes', preco:9.71 ,parcela:' até 10x de R$ 0,097 sem juros R$ 9,71 via Pix '  ,image: './imagem/img-Card-maisVendido/img9.png', descricao: 'A Pasta Para Soldar Soldatec - Pote 50g é formulada a base de colofônia (breu) e hidrocarbonetos.' , descricaoProdutc: 'A Pasta Para Soldar Soldatec - Pote 50g é formulada a base de colofônia (breu) e hidrocarbonetos, usada profissionalmente há um longo tempo para trabalhos de soldagem metálica, com soldas a base de misturas eutéticas de estanho. A Soldatec age como fluxo de solda, ativando a ligação metal-metal' },
  { name: 'Kit Robô Seguidor de Linha 2 Rodas DIY', categoria: 'KitComponente', preco: 35.00 ,parcela:' até 10x de R$ 3,5 sem juros R$ 35,00 via Pix '  ,image: './imagem/img-Card-maisVendido/img10.png', descricao: 'Kit Robô Seguidor de Linha 2 Rodas DIY é perfeito pra você que adora colocar a mão na massa', descricaoProdutc: 'Este Kit Robô Seguidor de Linha 2 Rodas DIY é perfeito pra você que adora colocar a mão na massa, pois é uma versão DIY (Do it Yourself), onde você recebe as partes separadamente e se diverte soldando elas. Este kit funciona com 2 pilhas AA (não inclusas).'  },
  { name: 'Filamento ABS Caneta Premium 1,75mm', categoria: 'Impressão3D', preco: 55.50 ,parcela:' até 10x de R$ 5,55 sem juros  R$ 55,50 via Pix '  ,image: './imagem/img-Card-maisVendido/img11.png', descricao: 'Filamento ABS Azul Caneta Premium + tem como suas principais características ser resistente a impacto', descricaoProdutc: 'O Filamento ABS Azul Caneta Premium + tem como suas principais características ser resistente a impacto, ter boa resistência térmica e ser durável. Pode-se dizer ainda que este é um dos polímeros mais utilizado em impressoras 3D'  }
    // Adicione mais produtos conforme necessário
];

// Função para abrir o modal com dados do produto
function openModal(product) {
    modalImage.src = product.image;
    modalTitle.textContent = product.name;
    modalDescription.textContent = product.descricao;
    modalDescription2.textContent = product.descricaoProdutc;
    modalPrice.textContent = "R$ " +  product.preco ;
    modalParcela.textContent = product.parcela;
    modal.style.display = "block";
}

// Fechar o modal ao clicar no botão de fechar
closeBtn.onclick = function () {
    modal.style.display = "none";
}

// Fechar o modal ao clicar fora dele
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Adicionando evento de clique aos cards de produto
document.querySelectorAll(".product-card").forEach((card, index) => {
    card.addEventListener("click", () => {
        openModal(products[index]);
    });
}); 