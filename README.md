
# Sistema de rastreamento de veículos

## Requerimentos

Cada projeto tem seus próprios requerimentos, mas uma ferramenta é comum a todos: o Docker.

### Docker

Dependendo do seu sistema operacional, você tem 2 opções para instalar o Docker:

- [Docker Desktop] - Interface gráfica para gerenciar e usar o Docker.
- [Docker Engine] - Apenas a engine do Docker, sem interface gráfica, chamado de Docker Nativo.

Se você tem 8GB ou menos de memória RAM, recomendamos o uso do Docker Engine, pois a interface gráfica do Docker Desktop + a execução dos containers pode consumir praticamente a memória da máquina, caso contrário usar o Docker Desktop é mais prático.

## Rodar a aplicação

Rode todas as aplicações com o comando:

```bash
docker-compose up -d
```

Este comando irá subir todos os containers necessários para rodar todo o projeto

Acesse as pastas `golang-simulator`, `nestjs-api` e `next-frontend` e siga as instruções.

Como você já vai ter rodado todos os containers com o comando acima, mas instruções pule o passo de *levantar os containers*


## Arquitetura do projeto

![image](https://github.com/user-attachments/assets/ae49cc94-6220-45e5-9d91-3b41b1e23e62)
