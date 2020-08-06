<template>
  <div>
    <div class="row">
      <div class="message">
        Para definir o Tipo de Equipamento, considere sempre a seguinte definição: <br />
        Equipamento Fixo é aquele que está sempre no mesmo local.<br />
        Equipamento Portátil é aquele que pode ser utilizado em outro endereço.
      </div>
    </div>
    <div class="row mb-4">
      <div class="col-6 text-right mb-3 d-flex align-items-center">
        <label
          for="tipoEquipamento"
        >Tipo de equipamento:</label>
        <p></p>
      </div>
      <div class="col-6 text-left mb-3 d-flex align-items-center">
        <select
          name="tipoEquipamento"
          id="tipoEquipamento"
          v-model="cotacao.questionarios['6'].tipoEquipamento"
        >
          <option value="fixo">Fixo</option>
          <option value="portatil">Portátil</option>
        </select>
      </div>

      <div class="col-6 text-right mb-3 d-flex align-items-center">
        <label for="propriedade">Propriedade:</label>
      </div>
      <div class="col-6 text-left mb-3 d-flex align-items-center">
        <select
          name="propriedade"
          id="propriedade"
          v-model="cotacao.questionarios['6'].propriedade"
        >
          <option value="alugado">Alugado ou Locado</option>
          <option value="financiado">Financiado</option>
          <option value="proprio">Próprio</option>
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
      if (cotacao.questionarios["6"] == null) {
        cotacao.questionarios["6"] = {
          tipoEquipamento: "fixo",
          propriedade: "alugado",
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
        if (quest > 6) {
          proximo = `/questionario/${quest}`;
        }
      }
      this.$router.push(proximo || "/contato");
    },
  },
};
</script>
