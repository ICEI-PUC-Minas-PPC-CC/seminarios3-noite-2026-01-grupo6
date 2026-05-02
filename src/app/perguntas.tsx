export const perguntas = [
  {
    enunciado: (
      <>
        Você foi a uma papelaria com <span className="verde">R$ 80</span>.
        Comprou um caderno por <span className="vermelho">R$ 25</span>, duas
        canetas por <span className="vermelho">R$ 5</span> cada e uma régua por{" "}
        <span className="vermelho">R$ 10</span>. Quanto dinheiro sobrou?
      </>
    ),
    dinheiro: 80,
    compras: [
      { item: "Caderno", valor: 25 },
      { item: "Canetas", valor: 10 },
      { item: "Régua", valor: 10 },
    ],
    alternativas: ["R$ 30,00", "R$ 40,00", "R$ 35,00", "R$ 45,00"],
    indexCorreta: 2,
  },

  {
    enunciado: (
      <>
        Você tinha <span className="verde">R$ 100</span>. Comprou um livro por{" "}
        <span className="vermelho">R$ 40</span>, um lápis por{" "}
        <span className="vermelho">R$ 5</span> e uma borracha por{" "}
        <span className="vermelho">R$ 5</span>. Quanto dinheiro sobrou?
      </>
    ),
    dinheiro: 100,
    compras: [
      { item: "Livro", valor: 40 },
      { item: "Lápis", valor: 5 },
      { item: "Borracha", valor: 5 },
    ],
    alternativas: ["R$ 50,00", "R$ 45,00", "R$ 40,00", "R$ 55,00"],
    indexCorreta: 0,
  },

  {
    enunciado: (
      <>
        Você foi ao mercado com <span className="verde">R$ 60</span>. Comprou um
        pacote de arroz por <span className="vermelho">R$ 20</span>, um feijão
        por <span className="vermelho">R$ 10</span> e um óleo por{" "}
        <span className="vermelho">R$ 15</span>. Quanto dinheiro sobrou?
      </>
    ),
    dinheiro: 60,
    compras: [
      { item: "Arroz", valor: 20 },
      { item: "Feijão", valor: 10 },
      { item: "Óleo", valor: 15 },
    ],
    alternativas: ["R$ 20,00", "R$ 10,00", "R$ 15,00", "R$ 25,00"],
    indexCorreta: 2,
  },

  {
    enunciado: (
      <>
        Você tinha <span className="verde">R$ 90</span>. Comprou uma camiseta
        por <span className="vermelho">R$ 30</span>, um boné por{" "}
        <span className="vermelho">R$ 20</span> e um par de meias por{" "}
        <span className="vermelho">R$ 10</span>. Quanto dinheiro sobrou?
      </>
    ),
    dinheiro: 90,
    compras: [
      { item: "Camiseta", valor: 30 },
      { item: "Boné", valor: 20 },
      { item: "Meias", valor: 10 },
    ],
    alternativas: ["R$ 25,00", "R$ 20,00", "R$ 30,00", "R$ 35,00"],
    indexCorreta: 2,
  },

  {
    enunciado: (
      <>
        Você foi a uma loja com <span className="verde">R$ 70</span>. Comprou um
        brinquedo por <span className="vermelho">R$ 25</span>, um doce por{" "}
        <span className="vermelho">R$ 5</span> e um suco por{" "}
        <span className="vermelho">R$ 10</span>. Quanto dinheiro sobrou?
      </>
    ),
    dinheiro: 70,
    compras: [
      { item: "Brinquedo", valor: 25 },
      { item: "Doce", valor: 5 },
      { item: "Suco", valor: 10 },
    ],
    alternativas: ["R$ 35,00", "R$ 20,00", "R$ 30,00", "R$ 25,00"],
    indexCorreta: 2,
  },
];
