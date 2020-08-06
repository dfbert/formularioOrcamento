<template>
  <div>
    <div class="row">
      <div
        class="message"
      >Sabemos que seu tempo é escasso! Por isso, nosso questionário foi montado sob medida com base em suas seleções na tela anterior! Na Postali Seguros buscaremos as melhores ofertas disponíveis no mercado, grátis e sem compromisso. Fique tranquilo! Cuidaremos dos seus dados e não enviaremos Spam! Também não gostamos disso!</div>
    </div>
    <div class="row mb-4">
      <div class="col-6 text-right mb-3 d-flex align-items-center">
        <label for="valorSeguro">Selecione o valor do Seguro de Vida de sua preferência:</label>
      </div>
      <div class="col-6 text-left mb-3 d-flex align-items-center">
        <select
          name="valorSeguro"
          id="valorSeguro"
          v-model="cotacao.questionarios['5'].valorSeguro"
        >
          <option value="30000">R$ 30.000</option>
          <option value="40000">R$ 40.000</option>
          <option value="50000">R$ 50.000</option>
          <option value="80000">R$ 80.000</option>
          <option value="100000">R$ 100.000</option>
          <option value="200000">R$ 200.000</option>
          <option value="300000">R$ 300.000</option>
          <option value="400000">R$ 400.000</option>
          <option value="500000">R$ 500.000</option>
          <option value="600000">R$ 600.000</option>
          <option value="700000">R$ 700.000</option>
          <option value="800000">R$ 800.000</option>
          <option value="900000">R$ 900.000</option>
          <option value="1000000">R$ 1.000.000</option>
          <option value="1200000">R$ 1.200.000</option>
          <option value="1500000">R$ 1.500.000</option>
          <option value="1750000">R$ 1.750.000</option>
          <option value="2000000">R$ 2.000.000</option>
          <option value="+2000000">Acima de R$ 2.000.000</option>
        </select>
      </div>

      <div class="col-6 text-right mb-3 d-flex align-items-center">
        <label for="rendaMensal">Selecione a sua faixa de renda mensal:</label>
      </div>
      <div class="col-6 text-left mb-3 d-flex align-items-center">
        <select
          name="rendaMensal"
          id="rendaMensal"
          v-model="cotacao.questionarios['5'].rendaMensal"
        >
          <option value="Até R$ 2.000">Até R$ 2.000</option>
          <option value="R$ 2.001 e R$ 3.000">R$ 2.001 e R$ 3.000</option>
          <option value="R$ 3.001 a R$ 5.000">R$ 3.001 a R$ 5.000</option>
          <option value="R$ 5.001 e R$ 7.000">R$ 5.001 e R$ 7.000</option>
          <option value="R$ 7.001 e R$ 10.000">R$ 7.001 e R$ 10.000</option>
          <option value="R$ 10.001 e R$ 15.000">R$ 10.001 e R$ 15.000</option>
          <option value="R$ 15.001 e R$ 20.000">R$ 15.001 e R$ 20.000</option>
          <option value="R$ 20.001 e R$ 30.000">R$ 20.001 e R$ 30.000</option>
          <option value="Acima de R$ 30.000">Acima de R$ 30.000</option>
          <option value="Não desejo informar">Não desejo informar</option>
        </select>
      </div>

      <div class="col-6 text-right mb-3 d-flex align-items-center">
        <label for="fumante">Você é fumante habitual e diário?</label>
      </div>
      <div class="col-6 text-left mb-3 d-flex align-items-center">
        <div class="row w-100">
          <div class="col">
            <label for="nao">
              <input
                type="radio"
                id="nao"
                name="fumante"
                value="nao"
                v-model="cotacao.questionarios['5'].fumante"
              />Não
            </label>
          </div>
          <div class="col">
            <label for="sim">
              <input
                type="radio"
                id="sim"
                name="fumante"
                value="sim"
                v-model="cotacao.questionarios['5'].fumante"
              />Sim
            </label>
          </div>
        </div>
      </div>
    </div>

    <div class="button float-left" @click="voltar()">Voltar</div>
    <div class="button float-right" @click="avancar()">Avançar</div>
  </div>
</template>
<script>
// @ is an alias to /src
export default {
  name: "Home",
  data: () => ({
    cotacao: {
      questionarios: {}
    }
  }),

  beforeMount() {
    if (JSON.parse(localStorage.getItem("cotacao"))) {
      let cotacao = JSON.parse(localStorage.getItem("cotacao"));
      if (cotacao.questionarios["5"] == null) {
        cotacao.questionarios["5"] = {
          valorSeguro: 30000,
          rendaMensal: "Até R$ 2.000",
          fumante: null
        };
      }
      this.cotacao = cotacao;
    } else {
      this.$router.push(`/`);
    }
  },
  methods: {
    voltar() {
      this.$router.back();
    },
    avancar() {
      localStorage.setItem("cotacao", JSON.stringify(this.cotacao));
      let proximo;
      for (const quest of Object.keys(this.cotacao.questionarios).reverse()) {
        if (quest > 5) {
          proximo = `/questionario/${quest}`;
        }
      }
      this.$router.push(proximo || "/contato");
    }
  }
};
</script>
