<template>
  <div>
    <div class="row p-2">
      <div
        class="message"
      >Sabemos que seu tempo é escasso! Por isso, nosso questionário foi montado sob medida com base em suas seleções na tela anterior! Na Postali Seguros buscaremos as melhores ofertas disponíveis no mercado, grátis e sem compromisso. Fique tranquilo! Cuidaremos dos seus dados e não enviaremos Spam! Também não gostamos disso!</div>
    </div>
    <div class="row mb-4">
      <div class="col-12 text-left d-flex align-items-center">
        <label for="cep">CEP</label>
      </div>
      <div class="col-12 text-left mb-3 d-flex align-items-center">
        <the-mask
          type="text"
          id="cep"
          placeholder="Informe seu CEP"
          :mask="['#####-###']"
          v-model="cotacao.questionarios['2'].cep"
        />
      </div>
      <div class="col-12 text-left d-flex align-items-center">
        <label for="numero">Número</label>
      </div>
      <div class="col-12 text-left mb-3 d-flex align-items-center">
        <input
          type="text"
          id="numero"
          placeholder="Número"
          v-model="cotacao.questionarios['2'].numero"
        />
      </div>

      <div class="col-12 text-left d-flex align-items-center">
        <label for="piso">Piso:</label>
      </div>
      <div class="col-12 text-left mb-3 d-flex align-items-center">
        <select name="piso" id="piso" v-model="cotacao.questionarios['2'].piso">
          <option :value="null" disabled>Selecione o piso</option>
          <option value="Sobrado">Sobrado</option>
          <option value="Subsolo">Subsolo</option>
          <option value="Térreo">Térreo</option>
          <option value="A partir 2 andar">A partir 2 andar</option>
          <option value="Mezanino">Mezanino</option>
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
      questionarios: {}
    }
  }),
  beforeMount() {
    if (JSON.parse(localStorage.getItem("cotacao"))) {
      let cotacao = JSON.parse(localStorage.getItem("cotacao"));
      if (cotacao.questionarios["2"] == null) {
        cotacao.questionarios["2"] = {
          cep: null,
          numero: null,
          piso: null
        };
      }
      this.cotacao = cotacao;
    } else {
      this.$router.push(`/`);
    }
  },
  computed: {},
  methods: {
    voltar() {
      this.$router.back();
    },

    avancar() {
      localStorage.setItem("cotacao", JSON.stringify(this.cotacao));
      let proximo;
      for (const quest of Object.keys(this.cotacao.questionarios).reverse()) {
        if (quest > 2) {
          proximo = `/questionario/${quest}`;
        }
      }
      this.$router.push(proximo || "/contato");
    }
  }
};
</script>
