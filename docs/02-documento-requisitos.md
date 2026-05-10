# 02 — Documento de Requisitos do Software

> **Grupo:** Grupo 6 - Matemática no Mercado

> **Aplicação:** Site

> **Comunidade:** Tarso de Coimbra

---

## 1. Visão Geral

“Matemática” é uma aplicação web interativa que utiliza um minigame de simulação de compras para ensinar matemática básica. É destinada principalmente a estudantes em fase inicial de aprendizagem e pessoas com deficiência auditiva. O aplicativo resolve a dificuldade de compreensão de conceitos matemáticos ao oferecer uma abordagem prática, visual e acessível.

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
| RF01 | Enunciado com cores                                                       | Alta       | Planejamento do site     |
| RF02 | Soma total das compras                                                    | Alta       | Planejamento do site     |
| RF03 | Botão para exibir a resposta                                              | Alta       | Planejamento do site     |
| RF04 | Botões com as alternativas                                                | Alta       | Planejamento do site     |
| RF05 | Botão para próxima questão                                                | Alta      | Planejamento do site     |

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

- [x] Enunciado com questão matemática  
- [x] Alternativas para escolher resposta do problema.  
- [x] Desafios de matemática (total e troco)  
- [x] Feedback visual para respostas (correto/incorreto)  

## 9. Funcionalidades Desejáveis (se houver tempo)

- [ ] Sistema de pontuação
- [ ] Níveis de dificuldade (fácil, médio, difícil)
- [ ] Modo livre (sem desafios)
- [ ] Mais questões
