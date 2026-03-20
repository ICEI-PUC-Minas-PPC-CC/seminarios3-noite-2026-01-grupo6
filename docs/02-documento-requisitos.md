# 02 — Documento de Requisitos do Software

> **Grupo:** Grupo 6 - Matemática no Mercado

> **Aplicação:** Site

> **Comunidade:** Tarso de Coimbra

---

## 1. Visão Geral

“Matemática no Mercado” é uma aplicação web interativa que utiliza um minigame de simulação de compras para ensinar matemática básica. É destinada principalmente a estudantes em fase inicial de aprendizagem e pessoas com deficiência auditiva. O aplicativo resolve a dificuldade de compreensão de conceitos matemáticos ao oferecer uma abordagem prática, visual e acessível.

## 2. Público-Alvo

| Campo | Informação |
| ------- | ----------- |
| Perfil dos usuários | Estudantes |
| Faixa etária | Todas as idades |
| Necessidades de acessibilidade | Deficiência auditiva |
| Nível de familiaridade com tecnologia | Baixa |

> **Lembrete (Tarso de Coimbra):** Os usuários podem ter deficiência auditiva/surdez. A interface deve ser **visual, intuitiva e de baixa complexidade**. Priorize elementos visuais (imagens, ícones, cores) sobre texto extenso.

## 3. Requisitos Funcionais

Lista de requisitos para o site:

| ID   | Requisito                                                                 | Prioridade | Origem da demanda            |
|------|---------------------------------------------------------------------------|:----------:|------------------------------|
| RF01 | Permitir que o usuário visualize produtos com nome, preço e imagem        | Alta       | Planejamento do site     |
| RF02 | Permitir adicionar e remover produtos de um carrinho virtual               | Alta       | Planejamento do site     |
| RF03 | Exibir o valor total da compra em tempo real                               | Alta       | Planejamento do site     |
| RF04 | Gerar desafios de matemática (total da compra e cálculo de troco)          | Alta       | Planejamento do site     |
| RF05 | Fornecer feedback visual imediato para respostas corretas e incorretas     | Média      | Planejamento do site     |

## 4. Requisitos Não Funcionais

| ID   | Requisito                                                                 | Categoria        |
|------|---------------------------------------------------------------------------|------------------|
| RNF01 | A aplicação deve ser acessível via navegador web                          | Acessibilidade   |
| RNF02 | A interface deve ser simples e intuitiva                                  | Usabilidade      |
| RNF03 | A aplicação deve funcionar em dispositivos móveis                         | Compatibilidade  |
| RNF04 | A aplicação deve apresentar feedback visual claro (cores, ícones, animações) | Acessibilidade   |


## 5. Requisitos de Acessibilidade

- [x] Interface predominantemente visual (ícones, cores, imagens)
- [x] Textos curtos e objetivos
- [x] Botões grandes e identificáveis
- [x] Contraste adequado de cores
- [ ] Compatível com Libras (se aplicável: vídeos, sinais, glossário)
- [x] Sem dependência de áudio para funcionalidades essenciais
- [ ] Outro: *(especificar)*

## 6. Tecnologias Escolhidas

| Componente        | Tecnologia                |
|------------------|---------------------------|
| Front-end        | Next.js (React), HTML, CSS |
| Hospedagem       | Github ou Vercel           |
| Outras ferramentas | Figma                    |

## 7. Protótipo / Wireframes

(Inclua esboços das telas principais ou links para protótipos — mesmo rascunhos simples em papel são válidos. Salvem imagens dos wireframes em `evidencias/prints/`.)

## 8. Escopo Mínimo Viável (MVP)

- [x] Visualização de produtos com nome, preço e imagem  
- [x] Carrinho de compras com adição e remoção de itens  
- [x] Cálculo automático do valor total da compra  
- [x] Desafios de matemática (total e troco)  
- [x] Feedback visual para respostas (correto/incorreto)  

## 9. Funcionalidades Desejáveis (se houver tempo)

- [ ] Sistema de pontuação
- [ ] Níveis de dificuldade (fácil, médio, difícil)
- [ ] Modo livre (sem desafios)
