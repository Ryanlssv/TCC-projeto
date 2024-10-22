const loja = {
    produtos: [
      { name: 'Capacitador Elétronico', categoria: 'Componentes',parcela:'<br> até 10x de R$ 0,085 sem juros <br>sem juros  ou R$ 0,86 via Pix ', preco: 0.86, image: './imagem/img-Card-maisVendido/img1.png', descricao: 'capacitador de 1.000uF/25v <br> Eletrolítico 470uF/50V' },
      { name: 'Módulo Fonte 5V 3W - HLK-PM01', categoria: 'Módulos', preco: 19.95, image: './imagem/img-Card-maisVendido/img2.png',parcela:'<br> até 10x de R$ 1,99 sem juros <br>sem juros  ou R$ 19,95 via Pix ',descricao:'com entrada bivolt AC de 100 <br>~240VAC, e com saída 5VDC.' },
      { name: 'Arduino Uno R2', categoria: 'Arduinos', preco:  131.50,parcela:'<br> até 10x de R$ 13,50, sem juros <br>sem juros  ou R$ 131,50 via Pix ' , image: './imagem/img-Card-maisVendido/img3.png', descricao: 'Microcontrolador: ATmega328 <br> DIPTensão de Entrada: 7-12V Portas  Digitais: 14 Portas Analógicas: 6'},
      { name: 'Motor De Passo NEMA  23 com redução - 57 Kgf.cm/3,92A Action', categoria: 'Motores', preco: 436.50,parcela:'<br> até 10x de R$ 43,65, sem juros <br>sem juros  ou R$ 436,65 via Pix ' ,image: './imagem/img-Card-maisVendido/img8.png', descricao: '- Action, e uma boa escolha onde há necessidade de um movimento <br> controlado. Como Angulo de rotação' },
      { name: 'Ferro de Solda Hikari', categoria: 'Prototipagem', preco: 115.71 ,parcela:'<br> até 10x de R$ 11,571 sem juros <br> 3 sem juros R$ 115,71 via Pix ' , image: './imagem/img-Card-maisVendido/img4.png',  descricao: 'O Ferro de Solda para Estação <br> HK-936A o princípio de funcionamento <br> a transformação de corrente elétrica <br> em calor.' },
      { name: 'Acoplador Óptico 4N25', categoria: 'Componentes' ,preco: 1.95 , parcela:'<br> até 10x de R$ 0,195 sem juros <br> 3 sem juros R$ 1,95 via Pix ' , image: './imagem/img-Card-maisVendido/img5.png', descricao: 'Acoplador Óptico 4N25.Tensão <br> Coletor-Emissor Máxima (VCEO):30 V-Tensão Coletor-Base Máxima (VCBO)' },
      { name:'Sensor de Proximidade Eltronico', categoria: 'Componentes' ,preco:19.86,parcela:'<br> até 10x de R$ 1,95 sem juros <br>sem juros  ou R$ 19,86 via Pix ' ,image:'./imagem/img-Card-maisVendido/img6.png',descricao:'O Sensor de Proximidade NPN 36V é <br> um  sensor capaz de detectar objetos <br> até 4mm de distância.'},
      { name:'Carregador de <br> Bateria de Lítio', categoria: 'Componentes' ,preco:3.65,parcela:'<br> até 10x de R$ 0,36 sem juros <br>sem juros  ou R$ 3,65 via Pix ',image:'./imagem/img-Card-maisVendido/img7.png',descricao:'Carregador TP4056, A placa possui <br> conexão por cabo USB, carregando <br> baterias sem que remova-a do <br> circuito.'},
      { name: 'Pasta Para Soldar Soldatec - Pote 50g', categoria: 'Componentes', preco:9.71 ,parcela:'<br> até 10x de R$ 0,097 sem juros <br> 3 sem juros R$ 9,71 via Pix '  ,image: './imagem/img-Card-maisVendido/img9.png', descricao: 'A Pasta Para Soldar Soldatec - Pote 50g é formulada a base de colofônia (breu) e hidrocarbonetos.' }
    ]
  };
  
  function exibirProdutos(produtos) {
    const container = document.getElementById('ProdutoCard');
    container.innerHTML = '';  // Limpa os produtos anteriores
    produtos.forEach(produto => {
      const card = `
        <div class="product-card">
          <img class="product-image" src="${produto.image}" alt="${produto.name}">
          <h2 class="product-title">${produto.name}</h2>
          <p class="product-descrição">${produto.descricao}</p>
          <p class="product-price">R$ ${produto.preco}</p>
          <p class="product-parcela">${produto.parcela}</p>
          <button class="add-to-cart" onclick = 'addToCart(${JSON.stringify(produto)})'> Adicionar ao carrinho </button>
        </div>
      `;
      container.innerHTML += card;
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
  