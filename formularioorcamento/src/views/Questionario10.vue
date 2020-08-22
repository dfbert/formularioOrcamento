<template>
  <div>
    <div class="row">
      <div class="message">
        Para definir o VALOR do Investimento, escolha o seu perfil de risco e modalidade que deseja investir. Tá com
        dúvida? Fale com nosso Consultor de Vendas!
      </div>
    </div>
    <div class="row mb-4">
      <!-- perfilIdeal -->
      <div class="col-12 text-left d-flex align-items-center">
        <label for="perfilIdeal">Selecione o seu perfil ideal:</label>
      </div>
      <div class="col-12 text-left mb-3 d-flex flex-column align-items-end">
        <select
          @focus="contadores.perfilIdeal++"
          :class="{ 'mb-1': !perfilIdealValidation.valido && contadores.perfilIdeal != 0 }"
          name="perfilIdeal"
          id="perfilIdeal"
          v-model="cotacao.questionarios['10'].perfilIdeal"
        >
          <option value="Sigo o conselho de alguém que conheça mais o mercado que eu e seja da minha confiança"
            >Sigo o conselho de alguém que conheça mais o mercado que eu e seja da minha confiança</option
          >
          <option
            value="Busco primeiro segurança, pensando no longo prazo, mesmo abrindo mão de um pouco de rentabilidade"
            >Busco primeiro segurança, pensando no longo prazo, mesmo abrindo mão de um pouco de rentabilidade</option
          >
          <option value="Invisto em algo que eu conheça bem">Invisto em algo que eu conheça bem</option>
        </select>
        <small v-if="!perfilIdealValidation.valido && contadores.perfilIdeal != 0" class="feedback-invalido mb-1">
          {{ perfilIdealValidation.mensagemErro }}
        </small>
      </div>

      <!-- tipoInvestimento -->
      <div class="col-12 text-left d-flex align-items-center">
        <label for="tipoInvestimento">Selecione o tipo de investimento que mais lhe interessa:</label>
      </div>
      <div class="col-12 text-left mb-3 d-flex flex-column align-items-end">
        <select
          @focus="contadores.tipoInvestimento++"
          :class="{ 'mb-1': !tipoInvestimentoValidation.valido && contadores.tipoInvestimento != 0 }"
          name="tipoInvestimento"
          id="tipoInvestimento"
          v-model="cotacao.questionarios['10'].tipoInvestimento"
        >
          <option value="Renda a longo prazo para aposentadoria">Renda a longo prazo para aposentadoria</option>
          <option value="Renda variável, multimercado, etc.">Renda variável, multimercado, etc.</option>
          <option value="Renda variável alto risco">Renda variável alto risco</option>
        </select>
        <small
          v-if="!tipoInvestimentoValidation.valido && contadores.tipoInvestimento != 0"
          class="feedback-invalido mb-1"
        >
          {{ tipoInvestimentoValidation.mensagemErro }}
        </small>
      </div>

      <!-- aporteInicial -->
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
                @click="contadores.valorAporteInicial++"
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

      <!-- valorAporteInicial -->
      <div class="col-12 text-left d-flex align-items-center">
        <label for="valorAporteInicial">Se sim, qual valor</label>
      </div>
      <div class="col-12 text-left mb-3 d-flex flex-column align-items-end">
        <input
          @focus="contadores.valorAporteInicial++"
          :class="{ 'mb-1': !valorAporteInicialValidation.valido && contadores.valorAporteInicial != 0 }"
          type="number"
          id="valorAporteInicial"
          v-model="cotacao.questionarios['10'].valorAporteInicial"
        />
        <small
          v-if="!valorAporteInicialValidation.valido && contadores.valorAporteInicial != 0"
          class="feedback-invalido mb-1"
        >
          {{ valorAporteInicialValidation.mensagemErro }}
        </small>
      </div>

      <!-- investimentoMensal -->
      <div class="col-12 text-left d-flex align-items-center">
        <label for="investimentoMensal"
          >Digite o valor de investimento mensal (em algumas aplicações o mínimo é de R$ 100 reais p/mês):</label
        >
      </div>
      <div class="col-12 text-left mb-3 d-flex flex-column align-items-end">
        <input
          @focus="contadores.investimentoMensal++"
          :class="{ 'mb-1': !investimentoMensalValidation.valido && contadores.investimentoMensal != 0 }"
          type="number"
          id="investimentoMensal"
          v-model="cotacao.questionarios['10'].investimentoMensal"
        />
        <small
          v-if="!investimentoMensalValidation.valido && contadores.investimentoMensal != 0"
          class="feedback-invalido mb-1"
        >
          {{ investimentoMensalValidation.mensagemErro }}
        </small>
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

    contadores: {
      perfilIdeal: 0,
      tipoInvestimento: 0,
      valorAporteInicial: 0,
      investimentoMensal: 0,
    },
  }),

  computed: {
    perfilIdealValidation() {
      if (!this.cotacao.questionarios['10'].perfilIdeal) {
        return { valido: false, mensagemErro: 'Você deve selecionar seu perfil ideal' };
      } else {
        return { valido: true };
      }
    },

    tipoInvestimentoValidation() {
      if (!this.cotacao.questionarios['10'].tipoInvestimento) {
        return { valido: false, mensagemErro: 'Você deve selecionar o tipo de investimento que mais lhe interessa' };
      } else {
        return { valido: true };
      }
    },

    aporteInicialValidation() {
      if (this.cotacao.questionarios['10'].aporteInicial === null) {
        return { valido: false, mensagemErro: 'Você deve nos informar se terá aporte inicial' };
      } else {
        return { valido: true };
      }
    },

    valorAporteInicialValidation() {
      const aporteInicial = this.cotacao.questionarios['10'].aporteInicial;
      const valorAporteInicial = this.cotacao.questionarios['10'].valorAporteInicial;

      if (aporteInicial === 'sim' && !valorAporteInicial) {
        return { valido: false, mensagemErro: 'Já que terá aporte inicial, o valor dele é obrigatório' };
      } else if (aporteInicial === 'sim' && Number(valorAporteInicial) <= 0) {
        return { valido: false, mensagemErro: 'Valor do aporte inicial deve ser maior que 0' };
      } else {
        return { valido: true };
      }
    },

    investimentoMensalValidation() {
      const investimentoMensal = this.cotacao.questionarios['10'].investimentoMensal;

      if (!investimentoMensal) {
        return { valido: false, mensagemErro: 'Investimento mensal é obrigatório' };
      } else if (Number(investimentoMensal) <= 0) {
        return { valido: false, mensagemErro: 'Investimento mensal não pode ser negativo' };
      } else {
        return { valido: true };
      }
    },

    formValidation() {
      const campos = ['perfilIdeal', 'tipoInvestimento', 'aporteInicial', 'valorAporteInicial', 'investimentoMensal'];

      for (let campo of campos) {
        const campoValidation = this[`${campo}Validation`];
        if (!campoValidation.valido) {
          return {
            valido: false,
            mensagemErro: campoValidation.mensagemErro,
          };
        }
      }

      return { valido: true };
    },
  },

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
      const formValidation = this.formValidation;

      if (!formValidation.valido) {
        return this.$swal.fire({
          icon: 'error',
          title: 'Ops...',
          text: formValidation.mensagemErro,
        });
      }

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
