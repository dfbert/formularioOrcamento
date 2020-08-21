<template>
  <div>
    <div class="row">
      <div class="message">
        Para definir o VALOR do Investimento, escolha o seu perfil de risco e modalidade que deseja investir. Tá com
        dúvida? Fale com nosso Consultor de Vendas!
      </div>
    </div>
    <div class="row mb-4">
      <div class="col-6 text-right mb-3 d-flex align-items-center">
        <label for="perfilIdeal">Selecione o seu perfil ideal:</label>
      </div>
      <div class="col-6 text-left mb-3 d-flex align-items-center">
        <select name="perfilIdeal" id="perfilIdeal" v-model="cotacao.questionarios['10'].perfilIdeal">
          <option value="Sigo o conselho de alguém que conheça mais o mercado que eu e seja da minha confiança"
            >Sigo o conselho de alguém que conheça mais o mercado que eu e seja da minha confiança</option
          >
          <option
            value="Busco primeiro segurança, pensando no longo prazo, mesmo abrindo mão de um pouco de rentabilidade"
            >Busco primeiro segurança, pensando no longo prazo, mesmo abrindo mão de um pouco de rentabilidade</option
          >
          <option value="Invisto em algo que eu conheça bem">Invisto em algo que eu conheça bem</option>
        </select>
      </div>

      <div class="col-6 text-right mb-3 d-flex align-items-center">
        <label for="tipoInvestimento">Selecione o tipo de investimento que mais lhe interessa:</label>
      </div>
      <div class="col-6 text-left mb-3 d-flex align-items-center">
        <select name="tipoInvestimento" id="tipoInvestimento" v-model="cotacao.questionarios['10'].tipoInvestimento">
          <option value="Renda a longo prazo para aposentadoria">Renda a longo prazo para aposentadoria</option>
          <option value="Renda variável, multimercado, etc.">Renda variável, multimercado, etc.</option>
          <option value="Renda variável alto risco">Renda variável alto risco</option>
        </select>
      </div>

      <div class="col-6 text-right mb-3 d-flex align-items-center">
        <label for="aporteInicial">Terá aporte inicial?</label>
      </div>
      <div class="col-6 text-left mb-3 d-flex align-items-center">
        <div class="row w-100">
          <div class="col">
            <label for="nao">
              <input
                type="radio"
                id="nao"
                name="aporteInicial"
                value="nao"
                v-model="cotacao.questionarios['10'].aporteInicial"
              />Não
            </label>
          </div>
          <div class="col">
            <label for="sim">
              <input
                type="radio"
                id="sim"
                name="aporteInicial"
                value="sim"
                v-model="cotacao.questionarios['10'].aporteInicial"
              />Sim
            </label>
          </div>
        </div>
      </div>

      <div class="col-12 text-left d-flex align-items-center">
        <label for="valorAporteInicial">Se sim, qual valor</label>
      </div>
      <div class="col-12 text-left mb-3 d-flex align-items-center">
        <the-mask type="text" id="valorAporteInicial" v-model="cotacao.questionarios['10'].valorAporteInicial" />
      </div>
      <div class="col-12 text-left d-flex align-items-center">
        <label for="investimentoMensal"
          >Digite o valor de investimento mensal (algumas aplicações o mínimo é R$ 100 reais p/mês):</label
        >
      </div>
      <div class="col-12 text-left mb-3 d-flex align-items-center">
        <the-mask type="text" id="investimentoMensal" v-model="cotacao.questionarios['10'].investimentoMensal" />
      </div>
    </div>

    <div class="button float-left" @click="voltar()">Voltar</div>
    <div class="button float-right" @click="avancar()">Avançar</div>
  </div>
</template>

<script>
export default {
  data: () => ({
    cotacao: {
      questionarios: {},
    },
  }),

  beforeMount() {
    if (JSON.parse(localStorage.getItem('cotacao'))) {
      let cotacao = JSON.parse(localStorage.getItem('cotacao'));
      if (cotacao.questionarios['10'] == null) {
        cotacao.questionarios['10'] = {
          perfilIdeal: null,
          tipoInvestimento: null,
          aporteInicial: null,
          valorAporteInicial: null,
          investimentoMensal: null,
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
      localStorage.setItem('cotacao', JSON.stringify(this.cotacao));
      let proximo;
      for (const quest of Object.keys(this.cotacao.questionarios).reverse()) {
        if (quest > 10) {
          proximo = `/questionario/${quest}`;
        }
      }
      this.$router.push(proximo || '/contato');
    },
  },
};
</script>
