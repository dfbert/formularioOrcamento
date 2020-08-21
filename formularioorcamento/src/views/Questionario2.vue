<template>
  <div>
    <div class="row p-2">
      <div class="message">
        Sabemos que seu tempo é escasso! Por isso, nosso questionário foi montado sob medida com base em suas seleções
        na tela anterior! Na Postali Seguros buscaremos as melhores ofertas disponíveis no mercado, grátis e sem
        compromisso. Fique tranquilo! Cuidaremos dos seus dados e não enviaremos Spam! Também não gostamos disso!
      </div>
    </div>
    <div class="row mb-4">
      <!-- CEP -->
      <div class="col-12 text-left d-flex align-items-center">
        <label for="cep">CEP</label>
      </div>
      <div @click="contadores.cep++" class="col-12 text-left mb-3 d-flex flex-column align-items-end">
        <the-mask
          :class="{ 'mb-1': !cepValidation.valido && contadores.cep != 0 }"
          type="text"
          id="cep"
          placeholder="Informe seu CEP"
          :mask="['#####-###']"
          v-model="cotacao.questionarios['2'].cep"
        />
        <small v-if="!cepValidation.valido && contadores.cep != 0" class="feedback-invalido mb-1">
          {{ cepValidation.mensagemErro }}
        </small>
      </div>

      <!-- NÚMERO -->
      <div class="col-12 text-left d-flex align-items-center">
        <label for="numero">Número</label>
      </div>
      <div class="col-12 text-left mb-3 d-flex flex-column align-items-end">
        <input
          @focus="contadores.numero++"
          :class="{ 'mb-1': !numeroValidation.valido && contadores.numero != 0 }"
          type="text"
          id="numero"
          placeholder="Número"
          v-model="cotacao.questionarios['2'].numero"
        />
        <small v-if="!numeroValidation.valido && contadores.numero != 0" class="feedback-invalido mb-1">
          {{ numeroValidation.mensagemErro }}
        </small>
      </div>

      <!-- PISO -->
      <div class="col-12 text-left d-flex align-items-center">
        <label for="piso">Piso:</label>
      </div>
      <div class="col-12 text-left mb-3 d-flex flex-column align-items-end">
        <select
          @focus="contadores.piso++"
          name="piso"
          id="piso"
          v-model="cotacao.questionarios['2'].piso"
          :class="{ 'mb-1': !pisoValidation.valido && contadores.piso != 0 }"
        >
          <option :value="null" disabled>Selecione o piso</option>
          <option value="Sobrado">Sobrado</option>
          <option value="Subsolo">Subsolo</option>
          <option value="Térreo">Térreo</option>
          <option value="A partir 2 andar">A partir 2 andar</option>
          <option value="Mezanino">Mezanino</option>
        </select>
        <small v-if="!pisoValidation.valido && contadores.piso != 0" class="feedback-invalido mb-1">
          {{ pisoValidation.mensagemErro }}
        </small>
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

    contadores: {
      cep: 0,
      numero: 0,
      piso: 0,
    },
  }),

  beforeMount() {
    if (JSON.parse(localStorage.getItem('cotacao'))) {
      let cotacao = JSON.parse(localStorage.getItem('cotacao'));
      if (cotacao.questionarios['2'] == null) {
        cotacao.questionarios['2'] = {
          cep: null,
          numero: null,
          piso: null,
        };
      }
      this.cotacao = cotacao;
    } else {
      this.$router.push(`/`);
    }
  },

  computed: {
    cepValidation() {
      if (!this.cotacao.questionarios['2'].cep) {
        return {
          valido: false,
          mensagemErro: 'CEP é obrigatório',
        };
      } else if (this.cotacao.questionarios['2'].cep.length < 8) {
        return {
          valido: false,
          mensagemErro: 'CEP deve conter 8 digítos',
        };
      } else {
        return { valido: true };
      }
    },

    numeroValidation() {
      if (!this.cotacao.questionarios['2'].numero || this.cotacao.questionarios['2'].numero < 0) {
        return {
          valido: false,
          mensagemErro: 'Número é obrigatório e deve ser maior que 0',
        };
      } else {
        return {
          valido: true,
        };
      }
    },

    pisoValidation() {
      if (!this.cotacao.questionarios['2'].piso) {
        return { valido: false, mensagemErro: 'Piso é obrigatório' };
      } else {
        return { valido: true };
      }
    },

    formValidation() {
      const campos = ['cep', 'numero', 'piso'];
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
        if (quest > 2) {
          proximo = `/questionario/${quest}`;
        }
      }
      this.$router.push(proximo || '/contato');
    },
  },
};
</script>
