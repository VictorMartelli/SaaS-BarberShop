# Aparatus: Modern SaaS for Barbershops

![Next.js](https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)

---

## 📝 Sobre o Projeto

O **Aparatus** é uma solução de software como serviço (SaaS) de código aberto, desenvolvida especificamente para otimizar a gestão diária de barbearias e salões de beleza. O projeto visa modernizar o processo de agendamento e administração, oferecendo ferramentas intuitivas para agendamento inteligente, gerenciamento de clientes (CRM) e administração de serviços.

Construído com um stack de tecnologias moderno e robusto, o Aparatus utiliza **Next.js** com **TypeScript** no frontend, garantindo uma experiência de usuário rápida e confiável, e **PostgreSQL** gerenciado pelo **Prisma** no backend para persistência de dados.

---

## ✨ Principais Funcionalidades

O sistema Aparatus foi projetado para oferecer um conjunto completo de ferramentas para a gestão de um negócio de barbearia:

| Funcionalidade | Descrição |
| :--- | :--- |
| **Agendamento Inteligente** | Permite que clientes agendem seus horários online com facilidade, com verificação de disponibilidade em tempo real dos profissionais. |
| **Gestão de Clientes (CRM)** | Armazenamento de histórico de serviços, preferências e dados de contato de cada cliente para um atendimento personalizado. |
| **Dashboard Administrativo** | Visão gerencial completa sobre a performance do negócio, receitas, agendamentos futuros e métricas importantes. |
| **Catálogo de Serviços** | Configuração fácil e flexível de todos os serviços oferecidos, incluindo preços e duração. |

---

## 🛠️ Tecnologias Utilizadas

Este projeto é baseado em um stack moderno e escalável:

| Categoria | Tecnologia | Detalhes |
| :--- | :--- | :--- |
| **Frontend Framework** | Next.js (App Router) | Framework React para renderização do lado do servidor e rotas. |
| **Linguagem** | TypeScript | Garante a tipagem estática e a robustez do código. |
| **Estilização** | Tailwind CSS & Shadcn/ui | Framework utility-first para estilização rápida e componentes de UI acessíveis. |
| **ORM** | Prisma | ORM moderno para acesso e gerenciamento do banco de dados. |
| **Banco de Dados** | PostgreSQL | Banco de dados relacional robusto e de código aberto. |

---

## 🚀 Como Executar o Projeto

Para executar o Aparatus localmente, você precisará ter o Node.js e o PostgreSQL instalados.

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/VictorMartelli/SaaS-BarberShop.git
   ```

2. **Acesse a pasta do projeto:**
   ```bash
   cd SaaS-BarberShop
   ```

3. **Instale as dependências:**
   ```bash
   pnpm install
   # ou npm install / yarn install
   ```

4. **Configure o Banco de Dados:**
   - Crie um arquivo `.env` na raiz do projeto.
   - Adicione a variável de ambiente `DATABASE_URL` com a string de conexão do seu PostgreSQL.
   ```
   DATABASE_URL="postgresql://user:password@host:port/database?schema=public"
   ```

5. **Execute as Migrações e Seed:**
   ```bash
   npx prisma migrate dev
   npx prisma db seed
   ```

6. **Inicie o Servidor de Desenvolvimento:**
   ```bash
   pnpm dev
   # ou npm run dev / yarn dev
   ```

A aplicação estará disponível em `http://localhost:3000`.

---

## ⚠️ Status do Projeto e Deploy

O Aparatus está em **desenvolvimento ativo**. Novas funcionalidades e melhorias são adicionadas regularmente. O projeto será hospedado e distribuído utilizando a plataforma **Vercel**, aproveitando ao máximo o desempenho e a infraestrutura otimizada para aplicações Next.js.

*   **Fase Atual:** Novas funcionalidades e melhorias são adicionadas regularmente.
*   **Deploy Futuro:** Vercel ([https://vercel.com/](https://vercel.com/))

---

## 🤝 Contribuições

Contribuições são extremamente bem-vindas! Se você deseja contribuir com o projeto, sinta-se à vontade para abrir uma *Issue* ou enviar um *Pull Request*.

---

## 📄 Licença

Este projeto está sob a licença MIT. Consulte o arquivo [LICENSE](LICENSE) para mais detalhes.

---

## 👨‍💻 Autor

Desenvolvido por Victor Martelli.

[LinkedIn:] (www.linkedin.com/in/victormartelli)
