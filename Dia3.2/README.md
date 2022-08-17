
# Lógica de programação com Scratch - Dia 01

  

## O que vamos fazer

Vamos  aprender como funciona a plataforma Scratch e desenvolver um joguinho com base na atividade da caixa de frutas.

Acesse o projeto clicando   [Aqui](https://scratch.mit.edu/projects/576324926)

![ProjetoFinal](https://i.imgur.com/2iyOeLB.png)

  

## O que vamos aprender

*  Funcionalidades do Scratch;

*  Programação em blocos;

*  Lógica de Programação;

*  Trabalho em equipe;

*  Criatividade.

  

## Requisitos

### 1. Criando o cenário.

 *  Selecione um backdrop no botão Choose a Backdrop no canto inferior direito;

![backdrop](https://i.imgur.com/lOh3SVr.png)

 *  Adicione três novos sprites no botão Choose a Sprite no canto inferior direito;
	 - Duas frutas iguais;
	 - Uma tigela ( Bowl )

![Sprites](https://i.imgur.com/F9i5lxv.png)

### 2. Configurando os objetos.

* Posicione uma das frutas na parte superior do jogo para que ela seja o botão;

* Selecione a segunda fruta e mude o nome, tamanho e a visibilidade no painel de atributos do objeto;

![AppleInTheBowl](https://i.imgur.com/lCiTZaz.png)

*  Altere a posição e tamanho da tigela;

![Bowl](https://i.imgur.com/bJDnTOX.png)
  

### 3. Criando e setando variáveis 

*  Crie três novas variáveis na aba Variables  e deixe visível somente a variável total;
	- Price ( Preço padrão )
	- PromotionPrice ( Preço da fruta que está em promoção )
	- Total  ( Preço total da tigela de frutas )

![Variables](https://i.imgur.com/CyQ9OfS.png)

*  Selecione o Stage ( backdrop ) para definir o valor inicial de cada variável;

* Adicione o bloco de start *When Bandeira Verde clicked*;

* Utilizando o bloco *Set ___ to ___* vamos definir o valor inicial de cada variável.

![SetVariables](https://i.imgur.com/jr8u2wN.png)
  

### 4. Programando o botão de adicionar frutas

*  Selecione a fruta referente ao botão;

*  Adicionar o bloco de evento *When this sprite clicked*;

*  Ao clicar na fruta, uma pergunta deve ser feita utilizando o bloco *Ask ___ and wait* que está na aba sensing;

*  Após responder a pergunta, um clone da fruta que está na tigela deve ser gerado, adicione o bloco *Create clone of ___* e selecione a fruta.

![Btn_Add](https://i.imgur.com/GuxrDus.png)
  

### 5. Programando o clone da fruta

*  Selecione a fruta que deve dar origem aos clones;

*  Adicione o bloco *When I start as a clone* que se encontra na aba control;

* Devemos deixar o clone visível, adicione o bloco *Show* que está na aba Look;

* O clone deverá ir para posições aleatórias na parte superior da tigela. Utilizaremos o bloco *Go to X ___ Y ___* e o bloco *Pick Random ___ to ___*
	-	O bloco *Go to* move o objeto para uma posição no nosso game
	-	O bloco *Pick Random* obtém um valor aleatório entre dois números 
	
![clone](https://i.imgur.com/vGBqinQ.png)
  

### 6. Incrementando o total

*  Checar se a resposta é sim;
	- Caso a resposta for sim, incremente o valor promocional na variável total;
	- Caso a resposta for diferente de sim, incremente o valor padrão na variável total.
	

### BÔNUS

  

### 7. Alterando a imagem da fruta promocional

*  Todas as frutas adicionadas na tigela são iguais, para diferenciarmos quais estão em promoção das que não estão podemos mudar a aparência da fruta após a verificação.

*  Adicionar um novo costume para a fruta caso ela contenha somente um;

* Adicionar o bloco que faça a mudança do numero do costume.

  

### 8. Removendo uma fruta

*  Adicionar o evento de clique no objeto que será clonado;

*  Checar o numero do costume da fruta, assim saberemos se a fruta está em promoção ou não;

*  Após saber se a fruta clicada está em promoção subtrair o preço na variável total;

* Deletar o clone clicado.
