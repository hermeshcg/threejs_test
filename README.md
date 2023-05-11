# Air Jordan Display

Esse projeto foi criado durante uma aula de Computação Gráfica no 7º semestre de Ciências da Computação da Uni-FACEF.

Site foi produzido com React + ThreeJS com o deploy sendo realizado na Vercel, com o intuito de explorar a manipulação de arquivos 3D em sites web.

Você pode acessar o site clicando [aqui](https://threejs-test-chi.vercel.app).

![App Screenshot](https://uploaddeimagens.com.br/images/004/462/879/full/image_2023-05-11_194123537.png?1683844891)

## Tecnologias usadas

- React:
  - É um framework de JavaScript desenvolvido pelo Facebook que permite a criação de interfaces de usuário interativas e eficientes. Ele é baseado em componentes reutilizáveis, onde cada componente representa uma parte específica da interface do usuário;
- Threejs:
  - O Three.js é uma biblioteca de JavaScript que permite criar e exibir gráficos 3D interativos no navegador. Ele é construído em cima do WebGL, que é uma API de renderização 3D de baixo nível, e simplifica muito o processo de criação de gráficos 3D em JavaScript.

#### Integração React + Threejs

Para que fosse realizada a integração entre ambas as tecnologias, foi necessário iniciar um novo projeto react com o comando `npx create-react-app threejs-teste`. Posteriormente, foi instalada as bibliotecas necessárias para o desenvolvimento, sendo elas _@react-three/fiber_, _@react-three/cannon_, _@react-three/drei_, _three_, _react-icons_ e _styled-components_, sendo as 4 primeiras parte da integração do ThreeJS e as duas últimas para estilização do sistema.

Foi utilizada a biblioteca _styled-components_ para realizar a componentização/estilização do sistema, com isso em mente, foram criados três componentes, sendo eles, "_Description_" que contem a descrição do produto, "_Header_" que contem a logo e os icones que se encontram na parte superior da página e por fim "_View_" na qual é responsável pela montagem do objeto 3D e sua manipulação.
