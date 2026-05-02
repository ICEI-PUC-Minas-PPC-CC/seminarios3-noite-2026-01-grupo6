"use client";

import { useState } from "react";
import { perguntas } from "./perguntas";

export default function Home() {
  const [indexPergunta, setIndexPergunta] = useState(0);
  const [mostrarProxima, setMostrarProxima] = useState(false);

  return (
    <div className="pagina">
      <h1 className="titulo">Questão {indexPergunta + 1}/5</h1>
      <div className="enunciado">{perguntas[indexPergunta].enunciado}</div>
      <div className="blocos">
        <div className="blocos-esquerda">
          <div className="dinheiro">
            Você tem: R$ {perguntas[indexPergunta].dinheiro},00
          </div>

          <div className="valores">
            <h3>Compras:</h3>
            <br />
            <p>
              {perguntas[indexPergunta].compras[0].item}: R${" "}
              {perguntas[indexPergunta].compras[0].valor},00
            </p>
            <p>
              {perguntas[indexPergunta].compras[1].item}: R${" "}
              {perguntas[indexPergunta].compras[1].valor},00
            </p>
            <p>
              {perguntas[indexPergunta].compras[2].item}: R${" "}
              {perguntas[indexPergunta].compras[2].valor},00
            </p>
            <br />

            <p>
              <strong>
                Total: R${" "}
                {perguntas[indexPergunta].compras.reduce(
                  (total, item) => item.valor + total,
                  0,
                )}
                ,00
              </strong>
            </p>
          </div>
        </div>
        <div className="resposta">
          {perguntas[indexPergunta].dinheiro} -{" "}
          {perguntas[indexPergunta].compras.reduce(
            (total, item) => item.valor + total,
            0,
          )}{" "}
          = R${" "}
          {perguntas[indexPergunta].dinheiro -
            perguntas[indexPergunta].compras.reduce(
              (total, item) => item.valor + total,
              0,
            )}
          ,00
        </div>{" "}
      </div>{" "}
      <div className="enunciado">
        <strong>Quanto dinheiro sobrou?</strong>{" "}
      </div>{" "}
      <div className="opcoes">
        <button className="botao">
          {perguntas[indexPergunta].alternativas[0]}
        </button>
        <button className="botao">
          {perguntas[indexPergunta].alternativas[1]}
        </button>
        <button className="botao">
          {perguntas[indexPergunta].alternativas[2]}
        </button>
        <button className="botao">
          {perguntas[indexPergunta].alternativas[3]}
        </button>
      </div>
      {mostrarProxima && (
        <div className="navegacao">
          <button
            className="proximo"
            onClick={() => setIndexPergunta(indexPergunta + 1)}
          >
            Próxima Questão
          </button>
        </div>
      )}
    </div>
  );
}
