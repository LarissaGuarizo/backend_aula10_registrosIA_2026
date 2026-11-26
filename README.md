# Consumo de IA

## Descrição

Aplicação web Full Stack desenvolvida para o gerenciamento e monitoramento de registros de uso de Inteligência Artificial. O sistema permite cadastrar usuários e registrar ocorrências de uso de ferramentas de IA, integrando uma interface web a uma API REST em Node.js e banco de dados MySQL.

## Tecnologias

* HTML
* CSS
* JS
* Node.js
* Express
* Cors
* MySQL / MariaDB (via XAMPP / phpMyAdmin)
* mysql2
* Thunder Client

## Passo a passo para testar o projeto

### 1. Pré-requisitos
Certifique-se de ter instalado em sua máquina:
* Node.js
* XAMPP
* Thunder Client (extensão do VS Code) ou Insomnia

### 2. Configurar o Banco de Dados
1. Inicie o módulo MySQL no painel do XAMPP.
2. Acesse o phpMyAdmin (`http://localhost/phpmyadmin`).
3. Abra o arquivo `docs/script.sql` deste repositório, copie o conteúdo e execute na aba SQL para criar o banco de dados e popular as tabelas iniciais.

### 3. Instalar Dependências e Rodar o Servidor
1. Clone este repositório ou baixe os arquivos:
```bash
git clone https://github.com
```

2. Acesse a pasta do projeto pelo terminal e instale os pacotes:
```bash
npm install
```

3. Verifique as credenciais do banco no arquivo `src/config/db.js` (`host`, `user`, `password` e `database`).

4. Inicie o servidor:
```bash
node server.js
```

5. Acesse a interface web no navegador em `http://localhost:3000`.

## Prints

### Usuários

* **Listar**
![Listar Usuários](listar_usuarios_IA.png)

* **Cadastrar**
![Cadastrar Usuário](cadastrar_usuarios_IA.png)

* **Atualizar**
![Atualizar Usuário](atualizar_usuarios_IA.png)

* **Excluir**
![Excluir Usuário](excluir_usuarios_IA.png)

---

### Usos de IA

* **Listar**
![Listar Usos](listar_usos_IA.png)

* **Cadastrar**
![Cadastrar Uso](cadastrar_usos_IA.png)

* **Atualizar**
![Atualizar Uso](atualizar_usos_IA.png)

* **Excluir**
![Excluir Uso](excluir_usos_IA.png)
