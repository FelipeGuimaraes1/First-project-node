const express = require('express')
const port = 3000
const app = express()
app.use(express.json())

/*
    - Query params => meusite.com/users?name=Felipe&age=38  // FILTROS
    - Route params => /users/2    // BUSCAR, DELETAR OU ATUALIZAR ALGO ESPECÍFICO
    - Request body => { "name": "Felipe", "age": 37 }   // CRIAR UM NOVO

    - GET          => Buscar informação no back-end
    - POST         => Criar informação no back-end
    - PUT / PATCH  => Alterar/Atualizar informação no back-end
    - DELETE       => Deletar informação no back-end

    - Middleware   => INTERCEPTADOR => Tem o poder de parar ou  alterar dados da requisição

    THIS

    No javascript, o "this" faz referência:
    Node => module.exports
    Web => window

    Excopo:
        => Global -> Quando começamos a escrever nossa aplicação.
        No contexto global, o "this" faz referência ao objeto global,
        que é o objeto window no navegadorde internet, ou ao objeto global no Node.js.

        => Local -> Por exemplo dentro de uma função
*/
app.get('/users/', (request, response) => {
    const { name, age } = request.body     // Destructuring assignment


    return response.json({ name, age })     // Quando o nome da chave e do valor são iguais,não precisa colocar o nome da chave
})


app.listen(port, () => {
    console.log(`🚀 Server is running on port ${port} 🚀`)
})