<p align="center">
### Projeto desenvolvido no curso do Ignite - Rocketseat - Desenvolvido em NodeJS
</p>
<p align="center">
  2 semana do ignite e estamos criando uma api será responsável por cadastrar os carros de um loja,
  trazendo conceitos de Solid,Conceito de DTO, 
  Para que serve os **Controllers** e **useCases**,Singleton Pattern,  
   Realizar upload de arquivos com multer, Trabalhar com Streams e  Configurar o Swagger.
</p>

<h1 align="center" display="block">
    <img alt="Swagger" title="Documentation Swagger" src="https://github.com/ferferq/STORECAR/blob/main/layout.png?raw=true" />
</h1>

### Utilizando o projeto: 

1. Clone meu repositório:
   ```sh
   git clone https://github.com/ferferq/STORECAR.git
   ```
2. instale os pacotes necessários:
   ```sh
   npm install
   ```
   or YARN
    ```sh
   yarn
   ```
3. inicie o programa
  ```sh
   yarn dev
   ```
4. Para visualizar a documentação entre nesta rota: http://localhost:3333/api-docs/
   
## 🧪 Tecnologias

- [nodeJS](https://nodejs.org/en/)
- [TypeScript](https://www.typescriptlang.org/)
- [Express](https://expressjs.com/pt-br/)
- [multer](https://www.npmjs.com/package/multer)
- [csv-parse](https://www.npmjs.com/package/csv-parse)
- [Swagger](https://swagger.io/)
- [Swagger-iu-express](https://www.npmjs.com/package/swagger-ui-express)

## 🧪 Funcionalidades

# Cadastro do carro
**RF**
Deve ser Possível cadastrar um carro
**RN**
Não deve ser possível cadastrar um carro com uma placa já existente.
O carro deve ser cadastrado com status disponível por padrão.
Não deve ser possível cadastrar um carro se o usuário não tem permissão de administrador. **
** tem que ser feito antes do controller

# Listagem de carros 
**RF**
Deve ser possível listar todos os carros disponíveis.
Deve ser possível listar pela categoria. 
Deve ser possível listar pela marca.
deve ser possível listar pelo nome do carro.
**RN**
O usuário não precisa estar logado. 

# Cadastros de especificação no carro
**RF**
Deve ser possível cadastrar uma especificação para um carro.
Deve ser possível listar todas as especificações.
Deve ser possível listar todos os carros.
**RN**
Não deve ser possível cadastrar uma especificação para um carro não existente.
Não deve ser possível vincular uma especificação existente para o mesmo carro. 
Não deve ser possível cadastrar uma especificação se o usuário não tem permissão de administrador.

# Cadastros de categorias no carro
**RF**
Deve ser possível cadastrar uma categoria para um carro.
Deve ser possível listar todas as categorias.
Deve ser possível listar todos os carros.
**RN**
Não deve ser possível cadastrar uma categoria para um carro não existente.
Não deve ser possível vincular uma categoria existente para o mesmo carro. 
Não deve ser possível cadastrar uma categoria se o usuário não tem permissão de administrador.

# Cadastro de imagens do carro
**RF**
Deve ser possível cadastrar a imagem do carro
Deve ser possível listar todos os carros
**RNF**
Utilizar o multer para upload dos arquivos
**RN**
O usuário pode cadastrar mais de uma imagem para o mesmo carro.
Não deve ser possível cadastrar uma imagem se o usuário não tem permissão de administrador.

# Aluguel de carro 
**RF**
Deve ser possível cadastrar um aluguel.
**RN**
O tempo mínimo de contrato é de 24 horas.
Não deve ser possível cadastrar um novo contrato caso já exista vinculado ao usuário. 
Não deve ser possível cadastrar um novo contrato caso já exista vinculado ao carro. 