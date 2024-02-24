var recipes = [
    { name: 'Pizza de liquidiicador', tempo: '30min', custo: 'baixo', nivel: 'facil', ate: '6 pessoas', image: 'https://static.itdg.com.br/images/640-400/e090ca12e17e4f7874aea463c9f1f5bf/shutterstock-225746485.jpg', url: 'https://www.tudogostoso.com.br/receita/93498-pizza-de-liquidificador-facil.html' },
    { name: 'strogonoof',  tempo: '1h', custo: 'medio', nivel: 'facil', ate: '4 pessoas', image: 'https://static.itdg.com.br/images/640-400/7e781068a839f15cdf1c85f18b3ea9d6/332854-original-1-1-.jpg', url:  'https://www.tudogostoso.com.br/receita/2462-strogonoff-de-frango.html' },
    { name: 'pudim de geladeira', tempo: '2h', custo: 'baixo', nivel: 'facil', ate: '6 pessoas', image: 'https://static.itdg.com.br/images/640-400/1b529aaa97732da77578fbd35899a05d/353789-original.jpg', url: 'https://www.tudogostoso.com.br/receita/161389-pudim-de-geladeira.html'},
    { name: 'empadao',  tempo: '2h', custo: 'medio', nivel: 'facil', ate: '5 pessoas',image: 'https://static.itdg.com.br/images/640-400/8542e00db2cd0f6761670765607e6255/shutterstock-2048280131-1-.jpg', url: 'https://www.tudogostoso.com.br/receita/8054-empadao-de-frango-delicioso.html' },
    { name: 'lasanha bolobhesa', tempo: '2h', custo: 'medio', nivel: 'medio', ate: '3 pessoas', image: 'https://static.itdg.com.br/images/640-400/8ac071593f1954f12ef34dc1fd9899db/87808-original.jpg', url: 'https://www.tudogostoso.com.br/receita/62119-lasanha-a-bolonhesa-da-vo-zelca.html'},
    { name: 'Empanada de sardinha', tempo: '15min', custo: 'medio', nivel: 'medio', ate: '10 pessoas', image: 'https://static.itdg.com.br/images/640-400/86895359f0f2a134632feea21c6d1426/354407-original.jpg',url: 'https://www.tudogostoso.com.br/receita/117094-empanada-de-sardinha-em-lata.html' },
    { name: 'Nhoque de batata', tempo: '1h', custo: 'medio', nivel: 'medio', ate: '4 pessoas', image: 'https://static.itdg.com.br/images/640-400/8cdda62e6a7a27c5d3018a86a32995b4/332857-original.jpg',url: 'https://www.tudogostoso.com.br/receita/1348-nhoque-de-batata.html'},
    { name: 'Bolo de cenoura', tempo: '30min', custo: 'baixo', nivel: 'facil', ate: '6 pessoas', image: 'https://static.itdg.com.br/images/360-240/b2b92774c7fec4a05604e5573ef5a294/365326-original.jpg',url: 'https://www.tudogostoso.com.br/receita/23-bolo-de-cenoura.html' },
    { name: 'pao de queijo', tempo: '1h', custo: 'medio', nivel: 'medio', ate: '6 pessoas', image: 'https://static.itdg.com.br/images/640-400/91f752bd7f720be5bc6d209dae386c73/pao-de-queijo-facil-e-delicioso-1-.png',url: 'https://www.tudogostoso.com.br/receita/69468-pao-de-queijo-facil-e-delicioso.html' },
    { name: 'pao de queijo', tempo: '1h', custo: 'medio', nivel: 'medio', ate: '6 pessoas', image: 'https://static.itdg.com.br/images/640-400/91f752bd7f720be5bc6d209dae386c73/pao-de-queijo-facil-e-delicioso-1-.png',url: 'https://www.tudogostoso.com.br/receita/69468-pao-de-queijo-facil-e-delicioso.html' },
    { name: 'pao de queijo', tempo: '1h', custo: 'medio', nivel: 'medio', ate: '6 pessoas', image: 'https://static.itdg.com.br/images/640-400/91f752bd7f720be5bc6d209dae386c73/pao-de-queijo-facil-e-delicioso-1-.png',url: 'https://www.tudogostoso.com.br/receita/69468-pao-de-queijo-facil-e-delicioso.html' },
    { name: 'pao de queijo', tempo: '1h', custo: 'medio', nivel: 'medio', ate: '6 pessoas', image: 'https://static.itdg.com.br/images/640-400/91f752bd7f720be5bc6d209dae386c73/pao-de-queijo-facil-e-delicioso-1-.png',url: 'https://www.tudogostoso.com.br/receita/69468-pao-de-queijo-facil-e-delicioso.html' },
];

var container = document.getElementById('recipe-container');

for (var i = 0; i < recipes.length; i++) {
    var box = document.createElement('div');
    box.className = 'recipe-box';

    // Adicione um evento de clique ao box
    box.addEventListener('click', (function(i) {
        return function() {
            window.location.href = recipes[i].url;
        }
    })(i));

    var img = document.createElement('img');
    img.src = recipes[i].image;
    box.appendChild(img);

    var title = document.createElement('h2');
    title.textContent = recipes[i].name;
    box.appendChild(title);

    var price = document.createElement('p');
    price.textContent = '⏲️: ' + recipes[i].tempo;
    box.appendChild(price);

    var price = document.createElement('p');
    price.textContent = '💰: ' + recipes[i].custo;
    box.appendChild(price);

        var price = document.createElement('p');
    price.textContent = '👨‍🍳: ' + recipes[i].nivel;
    box.appendChild(price);

    var price = document.createElement('p');
    price.textContent = '🍽️: ' + recipes[i].ate;
    box.appendChild(price);

    container.appendChild(box);
}