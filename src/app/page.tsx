export default function Home() {
  return (
    <div className="pagina">
      <h1 className="titulo">Questão 1/5</h1>

      <div className="enunciado">
        Você foi a uma papelaria com <span className="verde">R$ 80</span>.
        Comprou um caderno por <span className="vermelho">R$ 25</span>, duas
        canetas por <span className="vermelho">R$ 5</span> cada e uma régua por{" "}
        <span className="vermelho">R$ 10</span>. Quanto dinheiro sobrou?
      </div>

      <div className="blocos">
        <div className="blocos-esquerda">
          <div className="dinheiro">
            Você tem: R$ 80,00
          </div>

          <div className="valores">
            <h3>Compras:</h3>
            <br />
            <p>Caderno: R$ 25,00</p>
            <p>Canetas: R$ 5 + R$ 5</p>
            <p>Régua: R$ 10</p>
            <br />

            <p><strong>Total: R$ 45,00</strong></p>
          </div>
        </div>

        <div className="resposta">
          80 - 45 = R$ 35,00
        </div>
      </div>

      <div className="enunciado">
        <strong>Quanto dinheiro sobrou?</strong>
      </div>

      <div className="opcoes">
        <button className="botao">R$ 30,00</button>
        <button className="botao">R$ 40,00</button>
        <button className="botao">R$ 35,00</button>
        <button className="botao">R$ 45,00</button>
      </div>

      <div className="navegacao">
        <button className="proximo">Próxima Questão</button>
      </div>
    </div>
  );
}