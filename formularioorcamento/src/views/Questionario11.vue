<template>
  <div>
    <div class="row">
      <div
        class="message"
      >Para definir o VALOR (Carta) do Consórcio, escolha o tipo de consórcio e valor da carta. Tá com dúvida? Fale com nosso Consultor de Vendas!</div>
    </div>
    <div class="row mb-4">
      <div class="col-6 text-right mb-3 d-flex align-items-center">
        <label for="tipoConsorcio">Selecione o tipo de consórcio:</label>
      </div>
      <div class="col-6 text-left mb-3 d-flex align-items-center">
        <select
          name="tipoConsorcio"
          id="tipoConsorcio"
          v-model="cotacao.questionarios['11'].tipoConsorcio"
        >
          <option value="Consórcio de Imóveis">Consórcio de Imóveis</option>
          <option value="Consórcio de Automóveis">Consórcio de Automóveis</option>
          <option value="Consórcio de Caminhões">Consórcio de Caminhões</option>
          <option value="Consórcio de Ônibus">Consórcio de Ônibus</option>
          <option value="Consórcio de Máquinas Agrícolas">Consórcio de Máquinas Agrícolas</option>
          <option value="Consórcio de Lanchas">Consórcio de Lanchas</option>
          <option value="Consórcio de Serviços">Consórcio de Serviços</option>
          <option value="Outros Consórcios">Outros Consórcios</option>
        </select>
      </div>

      <div class="col-6 text-right mb-3 d-flex align-items-center">
        <label for="valorDaCarta">Selecione o valor da sua carta:</label>
      </div>
      <div class="col-6 text-left mb-3 d-flex align-items-center">
        <select
          name="valorDaCarta"
          id="valorDaCarta"
          v-model="cotacao.questionarios['11'].valorDaCarta"
        >
          <option value="Até R$ 100.000">Até R$ 100.000</option>
          <option value="Entre R$ 100.001 a R$ 200.000">Entre R$ 100.001 a R$ 200.000</option>
          <option value="Entre R$ 200.001 a R$ 500.000">Entre R$ 200.001 a R$ 500.000</option>
          <option value="Entre R$ R$ 500.001 a R$ R$ 750.000">Entre R$ R$ 500.001 a R$ R$ 750.000</option>
          <option value="Entre R$ 750.001 a R$  1.000.000">Entre R$ 750.001 a R$ 1.000.000</option>
          <option value="Entre R$ 1.000.001 a R$ 1.500.000">Entre R$ 1.000.001 a R$ 1.500.000</option>
          <option value="Entre R$ 1.500.001 a R$ 2.000.000">Entre R$ 1.500.001 a R$ 2.000.000</option>
          <option value="Acima de R$ 2.000.000">Acima de R$ 2.000.000</option>
          <option value="Não desejo informar">Não desejo informar</option>
        </select>
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
      questionarios: {},
    },
  }),

  beforeMount() {
    if (JSON.parse(localStorage.getItem("cotacao"))) {
      let cotacao = JSON.parse(localStorage.getItem("cotacao"));
      if (cotacao.questionarios["11"] == null) {
        cotacao.questionarios["11"] = {
          tipoConsorcio: null,
          valorDaCarta: null,
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
        if (quest > 10) {
          proximo = `/questionario/${quest}`;
        }
      }
      this.$router.push(proximo || "/contato");
    },
  },
};
</script>
