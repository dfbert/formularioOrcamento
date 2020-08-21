<template>
  <div>
    <div class="row">
      <div class="message">
        Sabemos que seu tempo é escasso! Por isso, nosso questionário foi montado sob medida com base em suas seleções
        na tela anterior! Na Postali Seguros buscaremos as melhores ofertas disponíveis no mercado, grátis e sem
        compromisso. Fique tranquilo! Cuidaremos dos seus dados e não enviaremos Spam! Também não gostamos disso!
      </div>
    </div>
    <div class="row mb-4">
      <div class="message">
        Na Postali Seguros estimulamos as iniciativas contínuas de preservação do Meio Ambiente! Conte pra gente que
        você terá benefícios no preço.
      </div>

      <div class="col-6 text-right mb-3 d-flex align-items-center">
        <label for="reusoAgua">Tem programa contínuo de reuso, reaproveitamento ou uso eficiente de água?</label>
      </div>
      <div class="col-6 text-left mb-3 d-flex align-items-center">
        <div class="row w-100">
          <div class="col">
            <label for="reusoAguasim">
              <input
                name="reusoAgua"
                type="radio"
                id="reusoAguasim"
                value="sim"
                v-model="cotacao.questionarios['4'].reusoAgua"
              />Sim
            </label>
          </div>
          <div class="col">
            <label for="reusoAguanao">
              <input
                name="reusoAgua"
                type="radio"
                id="reusoAguanao"
                value="nao"
                v-model="cotacao.questionarios['4'].reusoAgua"
              />Não
            </label>
          </div>
        </div>
      </div>
      <div class="col-6 text-right mb-3 d-flex align-items-center">
        <label for="energiaSolar">Tem programa contínuo de utilização de Energia Solar?</label>
      </div>
      <div class="col-6 text-left mb-3 d-flex align-items-center">
        <div class="row w-100">
          <div class="col">
            <label for="energiaSolarsim">
              <input
                name="energiaSolar"
                type="radio"
                id="energiaSolarsim"
                value="sim"
                v-model="cotacao.questionarios['4'].energiaSolar"
              />Sim
            </label>
          </div>
          <div class="col">
            <label for="energiaSolarnao">
              <input
                name="energiaSolar"
                type="radio"
                id="energiaSolarnao"
                value="nao"
                v-model="cotacao.questionarios['4'].energiaSolar"
              />Não
            </label>
          </div>
        </div>
      </div>
      <div class="col-6 text-right mb-3 d-flex align-items-center">
        <label for="coletaeReciclagem"
          >Tem programa contínuo de coleta seletiva e reciclagem de Resíduos Sólidos (lixo)?</label
        >
      </div>
      <div class="col-6 text-left mb-3 d-flex align-items-center">
        <div class="row w-100">
          <div class="col">
            <label for="coletaeReciclagemsim">
              <input
                name="coletaeReciclagem"
                type="radio"
                id="coletaeReciclagemsim"
                value="sim"
                v-model="cotacao.questionarios['4'].coletaeReciclagem"
              />Sim
            </label>
          </div>
          <div class="col">
            <label for="coletaeReciclagemnao">
              <input
                name="coletaeReciclagem"
                type="radio"
                id="coletaeReciclagemnao"
                value="nao"
                v-model="cotacao.questionarios['4'].coletaeReciclagem"
              />Não
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
export default {
  name: 'Home',
  data: () => ({
    cotacao: {
      questionarios: {},
    },
  }),

  computed: {
    reusoAguaValidation() {
      if (!this.cotacao.questionarios['4'].reusoAgua) {
        return {
          valido: false,
          mensagemErro:
            'Você precisa nos informar se tem um programa contínuo de reuso, reaproveitamento ou uso eficiente de água',
        };
      } else {
        return { valido: true };
      }
    },

    energiaSolarValidation() {
      if (!this.cotacao.questionarios['4'].energiaSolar) {
        return {
          valido: false,
          mensagemErro: 'Você precisa nos informar se tem um programa contínuo de utilização de energia solar',
        };
      } else {
        return { valido: true };
      }
    },

    coletaeReciclagemValidation() {
      if (!this.cotacao.questionarios['4'].coletaeReciclagem) {
        return {
          valido: false,
          mensagemErro:
            'Você precisa nos informar se tem um programa contínuo de coleta seletiva e reciclagem de resíduos sólidos(lixo)',
        };
      } else {
        return { valido: true };
      }
    },

    formValidation() {
      const campos = ['reusoAgua', 'energiaSolar', 'coletaeReciclagem'];
      for (let campo of campos) {
        const campoValidation = this[`${campo}Validation`];
        if (!campoValidation.valido) {
          return {
            valido: false,
            mensagemErro: campoValidation.mensagemErro,
          };
        }
      }

      return {
        valido: true,
      };
    },
  },

  beforeMount() {
    if (JSON.parse(localStorage.getItem('cotacao'))) {
      let cotacao = JSON.parse(localStorage.getItem('cotacao'));
      if (cotacao.questionarios['4'] == null) {
        cotacao.questionarios['4'] = {
          reusoAgua: null,
          energiaSolar: null,
          coletaeReciclagem: null,
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
        if (quest > 4) {
          proximo = `/questionario/${quest}`;
        }
      }
      this.$router.push(proximo || '/contato');
    },
  },
};
</script>
