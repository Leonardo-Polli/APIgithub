const express = require('express');
const axios = require('axios');
const app = express();
const port = 3000;

app.get('/github/followers', async (req, res) => {
  const username = req.query.username;

  // Verifica se o parâmetro "username" foi fornecido
  if (!username) {
    return res.status(400).json({ message: 'O parâmetro "username" é obrigatório.' });
  }

  try {
    // Fazendo a requisição à API do GitHub para obter as informações do usuário
    const response = await axios.get(`https://api.github.com/users/${username}`);

    // Extraindo as informações desejadas
    const followers = response.data.followers;
    const publicRepos = response.data.public_repos;
    const name = response.data.name;
    const bio = response.data.bio;
    const location = response.data.location;
    const createdAt = response.data.created_at;

    // Retornando os dados em formato JSON
    res.json({
      username,
      followers,
      publicRepos,
      name,
      bio,
      location,
      createdAt
    });
  } catch (error) {
    console.error('Erro ao acessar a API do GitHub:', error);

    // Caso o usuário não seja encontrado
    if (error.response && error.response.status === 404) {
      return res.status(404).json({ message: 'Usuário não encontrado.' });
    }

    // Caso ocorra outro erro
    res.status(500).json({ message: 'Erro ao acessar a API do GitHub.' });
  }
});

// Rodando o servidor na porta 3000
app.listen(port, () => {
  console.log(`API GitHub rodando na porta ${port}`);
});
