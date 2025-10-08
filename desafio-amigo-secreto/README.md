# 🎁 Desafio Amigo Secreto (Oracle Next Education - Alura)

[![Badge do Status do Projeto - Concluído](https://img.shields.io/badge/Status-Concluído-success)](https://github.com/Cantalixto/alura-one-g9-projetos/tree/main/challenge-amigo-secreto_pt)

## 📌 Descrição do Projeto

Este projeto é uma aplicação web simples desenvolvida em **HTML, CSS e JavaScript** puro, cujo objetivo é simular um sorteio de "Amigo Secreto".

A aplicação permite que o usuário adicione nomes a uma lista e, ao clicar no botão de sorteio, um algoritmo aleatório forma os pares de forma cíclica, garantindo que ninguém sorteie a si mesmo e que todos participem do ciclo.

## ✨ Funcionalidades

* **Adicionar Nomes:** O usuário insere um nome em um campo de texto e o adiciona à lista.
* **Validação de Entrada:** Alerta o usuário caso tente adicionar um nome vazio.
* **Visualização da Lista:** Exibe dinamicamente a lista de amigos adicionados na interface.
* **Sorteio Aleatório:** Utiliza a combinação de `Math.random()` e o **Algoritmo de Fisher-Yates (embaralhamento)** para formar os pares de forma justa e aleatória, garantindo que o ciclo se feche (o último sorteia o primeiro).

## 🛠️ Tecnologias Utilizadas

| Tecnologia | Descrição |
| :--- | :--- |
| **HTML5** | Estrutura semântica do projeto. |
| **CSS3** | Estilização e layout responsivo. |
| **JavaScript (ES6+)** | Lógica de programação para manipulação do DOM, validação de entrada e algoritmo de sorteio. |

## ⚙️ Como Executar o Projeto

Este projeto faz parte do repositório geral de desafios da trilha. Para executá-lo:

1.  **Clone o Repositório Geral:**
    ```bash
    git clone [https://github.com/Cantalixto/alura-one-g9-projetos.git](https://github.com/Cantalixto/alura-one-g9-projetos.git)
    ```

2.  **Acesse a Pasta Específica do Desafio:**
    ```bash
    cd alura-one-g9-projetos/challenge-amigo-secreto_pt
    ```

3.  **Abra no Navegador:**
    * Localize o arquivo **`index.html`** dentro desta pasta.
    * Dê um **duplo clique** no arquivo, ou use a extensão **Live Server** do VS Code para abrir a aplicação e começar a testar.

## 🧠 Lógica de Sorteio (Diferencial)

A funcionalidade de sorteio (`sortearAmigo()`) utiliza um algoritmo de embaralhamento (*shuffle*), que garante uma distribuição mais aleatória e imparcial dos pares.

1.  **Criação de Cópia:** O array de amigos é copiado para evitar modificações no original.
2.  **Embaralhamento:** O array de cópia é embaralhado completamente (Fisher-Yates simplificado).
3.  **Formação do Ciclo:** Os pares são criados iterando sobre o array embaralhado, onde cada amigo sorteia o *próximo* amigo na lista. O operador **Módulo (`%`)** é usado para garantir que o **último amigo sorteie o primeiro**, fechando o ciclo de presentes.

## 🌟 Contato e Agradecimento

Gostou do projeto? Me ajude a mostrar este e outros desafios dando uma **estrela** no repositório! ✨

Fique à vontade para entrar em contato ou se conectar:

* **LinkedIn:** [Nubia Cantalixto de Melo Alves](https://www.linkedin.com/in/nubia-cantalixto-de-melo-alves/)
* **Email:** cantalixto@gmail.com

---

Desenvolvido com carinho por **Cantalixto** como parte do programa ONE - Oracle Next Education & Alura.
