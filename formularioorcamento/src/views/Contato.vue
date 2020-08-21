<template>
  <div>
    <div class="row">
      <div class="message">
        Sabemos que seu tempo é escasso! Por isso, nosso questionário foi montado sob medida com base em suas seleções
        na tela anterior! Na Postali Seguros buscaremos as melhores ofertas disponíveis no mercado, grátis e sem
        compromisso. Fique tranquilo! Cuidaremos dos seus dados e não enviaremos Spam! Também não gostamos disso!
      </div>
    </div>
    <div class="row">
      <div class="col-6 text-right mb-3 d-flex align-items-center">
        <label for="cpf">Qual o seu CPF?</label>
      </div>
      <div @click="contadores.cpf++" class="col-6 text-left mb-3 d-flex flex-column align-items-end">
        <the-mask
          :class="{ 'mb-1': !cpfValidation.valido && contadores.cpf != 0 }"
          type="text"
          id="cpf"
          :mask="['###.###.###-##']"
          placeholder="___.___.___-__"
          v-model="cotacao.contato.cpf"
        />
        <small v-if="!cpfValidation.valido && contadores.cpf != 0" class="feedback-invalido mb-1">
          {{ cpfValidation.mensagemErro }}
        </small>
      </div>

      <div class="col-6 text-right mb-3 d-flex align-items-center">
        <label for="telefone">Telefone principal:</label>
      </div>
      <div @click="contadores.telefone++" class="col-6 text-left mb-3 d-flex flex-column align-items-end">
        <the-mask
          :class="{ 'mb-1': !telefoneValidation.valido && contadores.telefone != 0 }"
          type="text"
          id="telefone"
          :mask="['(##) #####-####', '(##) ####-####']"
          placeholder="(__) _____-____"
          v-model="cotacao.contato.telefone"
        />
        <small v-if="!telefoneValidation.valido && contadores.telefone != 0" class="feedback-invalido mb-1">
          {{ telefoneValidation.mensagemErro }}
        </small>
      </div>

      <div class="col-6 text-right mb-3 d-flex align-items-center">
        <label for="telefoneAdicional">Telefone adicional:</label>
      </div>
      <div @click="contadores.telefoneAdicional++" class="col-6 text-left mb-3 d-flex flex-column align-items-end">
        <the-mask
          :class="{ 'mb-1': !telefoneAdicionalValidation.valido && contadores.telefoneAdicional != 0 }"
          type="text"
          id="telefoneAdicional"
          :mask="['(##) #####-####', '(##) ####-####']"
          placeholder="(__) _____-____"
          v-model="cotacao.contato.telefoneAdicional"
        />
        <small
          v-if="!telefoneAdicionalValidation.valido && contadores.telefoneAdicional != 0"
          class="feedback-invalido mb-1"
        >
          {{ telefoneAdicionalValidation.mensagemErro }}
        </small>
      </div>

      <div class="col-12 col-lg-6 text-center text-lg-right mb-3 d-flex align-items-center">
        <label for="canal">Como prefere receber a cotação?</label>
      </div>
      <div class="col-12 col-lg-6 text-left mb-3 d-flex align-items-center">
        <div class="row w-100">
          <div class="col">
            <label for="whatsapp">
              <input type="radio" id="whatsapp" name="canal" value="whatsapp" v-model="cotacao.contato.canal" />Whatsapp
            </label>
          </div>
          <div class="col">
            <label for="email">
              <input type="radio" id="email" name="canal" value="email" v-model="cotacao.contato.canal" />E-mail
            </label>
          </div>
          <div class="col">
            <label for="canaltelefone">
              <input
                type="radio"
                id="canaltelefone"
                name="canal"
                value="canaltelefone"
                v-model="cotacao.contato.canal"
              />Telefone
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
      contato: null,
    },

    contadores: {
      cpf: 0,
      telefone: 0,
      telefoneAdicional: 0,
    },
  }),

  computed: {
    cpfValidation() {
      if (!this.cotacao.contato.cpf) {
        return { valido: false, mensagemErro: 'CPF é obrigatório' };
      } else if (this.cotacao.contato.cpf.length < 11) {
        return { valido: false, mensagemErro: 'CPF deve conter 11 dígitos' };
      } else {
        return { valido: true };
      }
    },

    telefoneValidation() {
      if (!this.cotacao.contato.telefone) {
        return {
          valido: false,
          mensagemErro: 'Você deve nos informar seu telefone para que possamos entrar em contato',
        };
      } else if (this.cotacao.contato.telefone.length < 10) {
        return {
          valido: false,
          mensagemErro: 'Telefone deve conter pelo menos 10 dígitos',
        };
      } else {
        return { valido: true };
      }
    },

    telefoneAdicionalValidation() {
      const telefone = this.cotacao.contato.telefoneAdicional;
      if (telefone && telefone.length < 10) {
        return {
          valido: false,
          mensagemErro:
            'Telefone adicional não é obrigatório mas deve conter pelo menos 10 dígitos caso vá ser preenchido',
        };
      } else {
        return { valido: true };
      }
    },

    canalValidation() {
      if (!this.cotacao.contato.canal) {
        return { valido: false, mensagemErro: 'Você deve nos informar como prefere receber a cotação' };
      } else {
        return { valido: true };
      }
    },

    formValidation() {
      const campos = ['cpf', 'telefone', 'telefoneAdicional', 'canal'];
      for (let campo of campos) {
        const campoValidation = this[`${campo}Validation`];
        if (!campoValidation.valido) {
          return { valido: false, mensagemErro: campoValidation.mensagemErro };
        }
      }

      return { valido: true };
    },
  },

  beforeMount() {
    if (JSON.parse(localStorage.getItem('cotacao'))) {
      let cotacao = JSON.parse(localStorage.getItem('cotacao'));
      if (cotacao.contato == null) {
        cotacao.contato = {
          nomeCompleto: null,
          genero: null,
          dataNascimento: null,
          email: null,
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
      this.$router.push('/conclusao');
    },
  },
};
</script>
