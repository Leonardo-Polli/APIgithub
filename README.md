# GitHub API - Seguidores e Repositórios

Essa é uma API simples que retorna informações sobre um perfil do GitHub, como número de seguidores, repositórios públicos, nome, bio, localização e data de criação da conta.

## Tecnologias Utilizadas

- **Node.js**: Plataforma para desenvolvimento do servidor.
- **Express.js**: Framework para criação de APIs em Node.js.
- **Axios**: Biblioteca para fazer requisições HTTP à API do GitHub.

## Funcionalidades

A API oferece um endpoint para consultar dados de um perfil do GitHub. Você pode obter informações sobre:

- Número de seguidores.
- Número de repositórios públicos.
- Nome do usuário.
- Bio do usuário.
- Localização do usuário.
- Data de criação da conta.

### Endereço da API:

**Endpoint**: `GET /github/followers?username=<username>`

Exemplo de requisição:

GET http://localhost:3000/github/followers?username=octocat


Exemplo de resposta:

```json
{
  "username": "octocat",
  "followers": 300,
  "publicRepos": 25,
  "name": "The Octocat",
  "bio": "GitHub's mascot.",
  "location": "San Francisco",
  "createdAt": "2011-01-25T18:44:36Z"
}

Licença
Este projeto está licenciado sob a Licença MIT - consulte o arquivo LICENSE para mais detalhes.

