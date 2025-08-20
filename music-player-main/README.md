# Music Player 🎶

Essa aplicação é um player de música simples que reproduz uma lista de músicas em sequência. Ele utiliza recursos do DOM para controlar os elementos HTML e do áudio para reproduzir as músicas.

## Funcionalidades
- **Botão "Iniciar/Parar"**: Quando clicado, reproduz ou pausa a música atual.
- **Botão "Próxima música"**: Avança para a próxima música da lista.
- **Botão "Música anterior"**: Volta para a música anterior da lista.
- **Ícone de coração**: Permite favoritar a música atual. Ao clicar no ícone, a cor muda para vermelho se a música estiver favoritada, e volta para branco se não estiver.
- **Barra de volume**: Permite ajustar o volume do áudio.
- **Tecla "M"**: Alterna entre volume 0 e o volume anteriormente selecionado. Se o volume estiver em 0, o áudio é pausado.
- **Tecla "K"**: Inicia ou para a reprodução da música atual.
- **Teclas de seta (esquerda/direita)**: Avança ou retrocede para a próxima ou música anterior, respectivamente.

## 📸 Demonstração

<img src="https://github.com/user-attachments/assets/fb11e653-e031-435f-9195-7890466fe63e">

## Explicação do Código
A primeira parte do código é responsável por selecionar os elementos HTML necessários para a interação com o usuário. Os elementos são selecionados usando o método `querySelector`, e as referências a eles são armazenadas em variáveis para uso posterior.

### Estrutura de Dados
- **Array `musicas`**: Armazena as informações de cada música, como `nomeMusica`, `nomeCantor`, `src` (arquivo de áudio) e `imagem` (capa da música).
- **Variáveis de Controle**:
  - `indiceMusicaAtual`: Índice da música atual no array.
  - `rotateIntervalId`: ID do intervalo para rotacionar a imagem da capa.
  - `tempoReproducao` e `tempoPausado`: Controlam o tempo de reprodução e pausa.
  - `musicaAtual`: Representa o objeto da música em reprodução.

### Funções Principais
- **`reproduzirMusica()`**: Inicia a reprodução da música, atualiza os detalhes da interface e rotaciona a capa.
- **`pararMusica()`**: Pausa a música, interrompe a rotação da capa e armazena o tempo de reprodução.
- **`verificarSeMusicaFavoritada()`**: Atualiza o status de favorito da música atual.
- **`atualizarProgresso()`**: Controla o tempo de pausa da música.

### Event Listeners
Os event listeners respondem a eventos como cliques nos botões, ajustes de volume e pressionamento de teclas, chamando as funções correspondentes para executar a lógica do player.

## 📚 Conceitos Aprendidos

Durante o desenvolvimento deste projeto, foram abordados os seguintes conceitos:

- **Manipulação de Áudio com JavaScript**: Controle de reprodução, pausa e ajuste de volume.
- **Manipulação do DOM**: Atualização dinâmica dos elementos HTML para refletir o estado do player.
- **Eventos de Teclado e Clique**: Controle da interação com o usuário através de teclas e cliques.
- **Animações com CSS**: Efeitos visuais, como rotação da imagem da capa durante a reprodução.
- **Gerenciamento de Estado**: Controle do índice atual da música e favoritos.

## Tecnologias Utilizadas
- **HTML**
- **CSS**
- **JavaScript**
