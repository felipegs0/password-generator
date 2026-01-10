# 🔐 Gerador de Senhas

Aplicação web desenvolvida em **React** para geração de senhas seguras e personalizáveis, utilizando **styled-components** para estilização.

---

## 📌 Visão Geral

O **Gerador de Senhas** permite ao usuário criar senhas fortes de forma simples e intuitiva, escolhendo o tamanho da senha e os tipos de caracteres que deseja incluir (Letras maiúsculas, números e caracteres especiais).

---

## 🛠️ Tecnologias Utilizadas

* **React** – Biblioteca JavaScript para construção da interface
* **Vite** – Ferramenta de build e desenvolvimento
* **Styled-components** – Estilização baseada em componentes
* **React Icons** – Ícones utilizados na interface
* **JavaScript (ES6+)** – Lógica da aplicação

---

## ⚙️ Funcionalidades

* Definição do tamanho da senha
* Inclusão ou exclusão de:

  * Letras maiúsculas
  * Letras minúsculas
  * Números
  * Caracteres especiais
* Geração de senha aleatória baseada nas opções escolhidas
* Botão para copiar a senha para a área de transferência
* Feedback visual ao copiar a senha

---

## 🧩 Estrutura do Projeto

```
src/
├── components/
│   ├── PasswordGenerator.jsx
│   ├── PasswordDisplay.jsx
│   └── Options.jsx
├── styles/
│   └── GlobalStyles.js
├── App.jsx
└── main.jsx
```

---

## 🎨 Estilização

A estilização foi feita utilizando **styled-components**, permitindo:

* Estilos escopados por componente
* Uso de props para estilos dinâmicos
* Melhor organização e manutenção do código

---

## 🚀 Como Executar o Projeto

### Pré-requisitos

* Node.js instalado
* Gerenciador de pacotes (npm ou yarn)

### Passos

```bash
# Instalar dependências
npm install

# Rodar o projeto
npm run dev
```

A aplicação estará disponível em:

```
http://localhost:5173
```

ou

* Acesse o link: 

https://password-generator-vercel-cuuk.vercel.app/

---

## 👨‍💻 Autor

**Felipe Gomes**
