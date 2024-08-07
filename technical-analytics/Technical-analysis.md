# Análise e Validação

## Desafio 01 - Validar Componente Breadcrumb

### Separador
  - Atualmente o componente apresenta o separador "-" entre as rotas. Deve ser trocado pelo ">" que consta na descrição da tarefa.
  - Correção sugerida: `{index + 1 !== routes.length && <span> {'>'} </span>}`


### Classes aplicadas
  - A classe `selectedStyle`  está sendo aplicada corretamente, mas falta a aplicação do texto sublinhado para o caso do usuário avançar
  - Correção sugerida:
  ```
  const selectedStyle = 'font-bold';
  const previousStyle = 'underline';

  <span className={`${currentPath === path ? selectedStyle : previousStyle}`}>
  
  ```




## Desafio 02 - Documentação do Endpoint

Este endpoint irá atender um recurso chamado user-profile

### Método

`POST /api/user-profile`

#### Body
No corpo da requisição serão enviados, no formato JSON, os seguintes dados:

- `isBusinessAccount` - boolean (obrigatório) - Esta flag indica se o perfil é de pessoa jurídica
- `documentCpf` - string (obrigatório)
- `documentCnpj` - string (obrigatório caso isBusinessAccount seja `true`)
- `userName` - string (obrigatório)
- `cellphone` - string (obrigatório)
- `phone` - string (obrigatório)
- `email` - string (obrigatório)
- `address` - objeto com os seguintes parâmetros:
    - `zipCode` - string (obrigatório)
    - `street` - string (obrigatório)
    - `number` - string (obrigatório) - Nem todas as regiões do país utilizam número nos endereços. A obrigatoriedade desse campo precisa ser repensado.
    - `complement` - string (obrigatório)
    - `city` - string (obrigatório)
    - `neighborhood` - string (obrigatório)
    - `state` - string (obrigatório)
  - `agreementTermsAccepted` - boolean (obrigatório)

Exemplo de requisição:

```json
api.post("api/user-profile", {
  data: {
    "isBusinessAccount": true,
    "documentCpf": "12345678901",
    "documentCnpj": "12345678901234",
    "userName": "John Doe",
    "cellphone": "5599912345678",
    "phone": "559912345678",
    "email": "john_doe@email.com",
    "address": {
      "zipCode": "1234578",
      "street": "Rua 10",
      "number": "011",
      "complement": "Próximo da esquina",
      "city": "Cidade",
      "neighborhood": "Centro",
      "state": "Estado",
    },
    "agreementTermsAccepted": true,
  }
})
```

### Respostas

#### Sucesso (201 CREATED) - Perfil criado com sucesso
Retorna um objeto JSON com os detalhes do usuário.

Exemplo de resposta:

```json
{
  "message": "Cadastrado realizado com sucesso! Número protocolo, *número-protocolo*"
}
```

### Possíveis Erros
- **409 Not Conflict**: Recurso enviado já cadastrado/modificado.
    - Exemplo de resposta:

        ```json
        {
          "code":  409,
          "message": "Usuário já cadastrado."
        } 
        ```
- **500 Internal Server Error**: Erro interno na api. Uma reposta padrão deve ser enviada.
    - Exemplo de resposta:

        ```json
        {
          "code":  500,
          "message": "*Nome do usuário*, tente novamente mais tarde."
        } 
        ```