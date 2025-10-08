// O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação.
// Aqui você deverá desenvolver a lógica para resolver o problema.

// ==============================================================================
// 1. Variável Principal
// ==============================================================================
// Variável do tipo array que armazenará os nomes dos amigos.
let amigos = [];

// ==============================================================================
// 2. Função para Adicionar Amigos (chamada por onclick="adicionarAmigo()")
// ==============================================================================
function adicionarAmigo() {
    // Captura o elemento input com o id="amigo"
    let campoNome = document.getElementById('amigo');
    let nome = campoNome.value.trim(); // Pega o valor e remove espaços em branco

    // Validação: Verifica se o campo está vazio.
    if (nome == '') {
        alert('Por favor, insira um nome válido.');
        return; // Sai da função, impedindo a adição de um nome vazio.
    }

    // Adiciona o nome (com a primeira letra em maiúscula para melhorar a visualização)
    // Opcional: Apenas para deixar o nome com a primeira letra maiúscula, se desejar.
    let nomeFormatado = nome.charAt(0).toUpperCase() + nome.slice(1).toLowerCase();
    
    // Atualiza o array de amigos: adiciona o nome
    amigos.push(nomeFormatado);

    // Limpa o campo de entrada
    campoNome.value = '';

    // Atualiza a exibição da lista de amigos na tela
    atualizarLista();
    
    // Limpa o resultado anterior, se houver
    document.getElementById('resultado').innerHTML = '';
}


// ==============================================================================
// 3. Função para Exibir a Lista na Tela
// ==============================================================================
// Função auxiliar para renderizar (mostrar) o array 'amigos' na ul com id="listaAmigos".
function atualizarLista() {
    let listaElemento = document.getElementById('listaAmigos');
    listaElemento.innerHTML = ''; // Limpa a lista antes de reconstruir

    // Itera sobre o array 'amigos' e cria um item de lista (<li>) para cada nome
    for (let i = 0; i < amigos.length; i++) {
        // Cria um elemento <li>
        let itemLista = document.createElement('li');
        // Define o texto do <li> como o nome do amigo
        itemLista.textContent = amigos[i]; 
        // Adiciona o <li> à lista <ul>
        listaElemento.appendChild(itemLista);
    }
}


// ==============================================================================
// 4. Função para Sortear (chamada por onclick="sortearAmigo()")
// ==============================================================================
function sortearAmigo() {
    // Validação: Exige pelo menos 2 amigos para que o sorteio tenha sentido
    if (amigos.length < 2) {
        alert('Adicione pelo menos 2 amigos para realizar o sorteio!');
        return; 
    }
    
    // Cria uma cópia do array para não modificar o original (boa prática)
    let amigosParaSorteio = [...amigos];
    
    // Embaralha o array (Algoritmo de Fisher-Yates simplificado)
    // Isso garante que a ordem dos nomes seja totalmente aleatória
    for (let i = amigosParaSorteio.length - 1; i > 0; i--) {
        // Gera um índice aleatório
        let j = Math.floor(Math.random() * (i + 1)); 
        // Troca o elemento atual (i) com o elemento aleatório (j)
        [amigosParaSorteio[i], amigosParaSorteio[j]] = [amigosParaSorteio[j], amigosParaSorteio[i]];
    }

    // Exibe o resultado na ul com id="resultado"
    let resultadoElemento = document.getElementById('resultado');
    resultadoElemento.innerHTML = ''; // Limpa resultados anteriores

    // Itera sobre o array embaralhado para formar os pares
    for (let i = 0; i < amigosParaSorteio.length; i++) {
        // O amigo secreto de 'amigo A' é 'amigo B' (o próximo no array)
        // O módulo (%) garante que o último amigo (i = length-1) sorteie o primeiro (i=0)
        let amigoSecreto = amigosParaSorteio[(i + 1) % amigosParaSorteio.length];

        // Cria o item de resultado: "Amigo A -> Amigo Secreto de A"
        let itemResultado = document.createElement('li');
        itemResultado.textContent = `${amigosParaSorteio[i]} -> ${amigoSecreto}`;
        
        resultadoElemento.appendChild(itemResultado);
    }
}


// ==============================================================================
// 5. Função para Reiniciar o Jogo
// ==============================================================================
// Função opcional, mas útil para limpar e recomeçar
function reiniciar() {
    // 1. Limpa o array principal
    amigos = [];
    
    // 2. Limpa a lista de amigos na tela
    atualizarLista();
    
    // 3. Limpa o resultado do sorteio
    document.getElementById('resultado').innerHTML = '';
}