const loja = {
    produtos: [
        { id:'1', name:'Capacitador Eltronico', preço:'R$0,86',parcela:'<br> até 10x de R$ 0,085 sem juros <br>sem juros  ou R$ 0,86 via Pix ' ,image:'./imagem/img-Card-maisVendido/img1.png',descricao:'capacitador de 1.000uF/25v <br> Eletrolítico 470uF/50V'},
        { id:'2', name:'Módulo Fonte 5V 3W <br> - HLK-PM01', preço:'R$19,95',parcela:'<br> até 10x de R$ 1,99 sem juros <br>sem juros  ou R$ 19,95 via Pix ',image:'./imagem/img-Card-maisVendido/img2.png',descricao:'com entrada bivolt AC de 100 <br>~240VAC, e com saída 5VDC.'},
        { id:'3', name: 'Arduino Uno R2', preço: 'R$131,50',parcela:'<br> até 10x de R$ 13,50, sem juros <br>sem juros  ou R$ 131,50 via Pix ' , image: './imagem/img-Card-maisVendido/img3.png', descricao:'Microcontrolador: ATmega328 <br> DIPTensão de Entrada: 7-12V Portas  Digitais: 14 Portas Analógicas: 6' },
        { id:'4', name: 'Ferro de Solda Hikari', preço: 'R$115,71',parcela:'<br> até 10x de R$ 11,571 sem juros <br> 3 sem juros R$ 115,71 via Pix '  ,image: './imagem/img-Card-maisVendido/img4.png', descricao: 'O Ferro de Solda para Estação <br> HK-936A o princípio de funcionamento <br> a transformação de corrente elétrica <br> em calor.' },
        { id:'5', name: 'Acoplador Óptico 4N25', preço: 'R$1,95', parcela:'<br> até 10x de R$ 0,195 sem juros <br> 3 sem juros R$ 1,95 via Pix ' , image: './imagem/img-Card-maisVendido/img5.png', descricao: 'Acoplador Óptico 4N25.Tensão <br> Coletor-Emissor Máxima (VCEO):30 V-Tensão Coletor-Base Máxima (VCBO)' },
        { id:'6', name:'Sensor de Proximidade Eltronico', preço:'R$19,86',parcela:'<br> até 10x de R$ 1,95 sem juros <br>sem juros  ou R$ 19,86 via Pix ' ,image:'./imagem/img-Card-maisVendido/img6.png',descricao:'O Sensor de Proximidade NPN 36V é <br> um  sensor capaz de detectar objetos <br> até 4mm de distância.'},
        { id:'7', name:'Carregador de <br> Bateria de Lítio', preço:'R$3,65',parcela:'<br> até 10x de R$ 0,36 sem juros <br>sem juros  ou R$ 3,65 via Pix ',image:'./imagem/img-Card-maisVendido/img7.png',descricao:'Carregador TP4056, A placa possui <br> conexão por cabo USB, carregando <br> baterias sem que remova-a do <br> circuito.'},
        { id:'8', name: 'Motor De Passo', preço: 'R$436,50',parcela:'<br> até 10x de R$ 43,65, sem juros <br>sem juros  ou R$ 436,65 via Pix ' , image: './imagem/img-Card-maisVendido/img8.png', descricao:'Motor De Passo NEMA 23 Com Caixa De Redução - 57 Kgf.cm / 3,92A - Action, Quando pulsos elétricos são aplicados em uma determinada sequência nos terminais deste.' },
        { id:'9', name: 'Pasta Para Soldar Soldatec - Pote 50g', preço: 'R$9,71',parcela:'<br> até 10x de R$ 0,097 sem juros <br> 3 sem juros R$ 9,71 via Pix '  ,image: './imagem/img-Card-maisVendido/img9.png', descricao: 'A Pasta Para Soldar Soldatec - Pote 50g é formulada a base de colofônia (breu) e hidrocarbonetos.' },
        { id:'10', name: 'Acoplador Óptico 4N25', preço: 'R$1,95', parcela:'<br> até 10x de R$ 0,195 sem juros <br> 3 sem juros R$ 1,95 via Pix ' , image: './imagem/img-Card-maisVendido/img5.png', descricao: 'Acoplador Óptico 4N25.Tensão <br> Coletor-Emissor Máxima (VCEO):30 V-Tensão Coletor-Base Máxima (VCBO)' }
        
    ]
};

const productList = document.getElementById('produtosCards');
let cart = [];

/* esse script add os produtos no carrinho */

function addToCart(product) {
    cart.push(product);
    alert(product.name + " Foi adicionado ao carrinho !");
    console.log("Carrinho Atual", cart);
}

function criarCards(){
    loja.produtos.forEach(product => {
        const productCard = 
        `
        <div class="product-card">
          <img src="${product.image}" alt="${product.name}" class="product-image">
          <h2 class="product-title">${product.name}</h2>
          <p class="product-descrição" >${product.descricao}</p>
          <p class="product-price">${product.preço}</p>
          <p class="product-parcela">${product.parcela}</p>
          <button class="add-to-cart" onclick = 'addToCart(${JSON.stringify(product)})'> Adicionar ao carrinho </button>
        </div>  
        `;
       productList.innerHTML += productCard;
    });
}

criarCards()
