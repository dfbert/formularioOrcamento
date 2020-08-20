<template>
  <div>
    <div class="row p-2 d-none">{{ (100 / (Object.keys(this.cotacao.questionarios).length + 2)) * 2 }}%</div>
    <div class="row p-2">
      <div class="message">
        Sabemos que seu tempo é escasso! Por isso, nosso questionário foi montado sob medida com base em suas seleções
        na tela anterior! Na Postali Seguros buscaremos as melhores ofertas disponíveis no mercado, grátis e sem
        compromisso. Fique tranquilo! Cuidaremos dos seus dados e não enviaremos Spam! Também não gostamos disso!
      </div>
    </div>
    <div class="row">
      <div class="col-6 text-right mb-3 d-flex align-items-center">
        <label for="nomeCompleto">Qual é o seu nome completo?</label>
      </div>
      <div class="col-6 text-left d-flex align-items-center">
        <input type="text" id="nomeCompleto" placeholder="Seu nome" v-model="cotacao.identificacao.nomeCompleto" />
      </div>

      <div class="col-12 col-md-6 text-md-right mb-md-3 d-flex align-items-center">
        <label for="genero">Informe o seu gênero:</label>
      </div>
      <div class="col-12 col-md-6 text-center text-md-left mb-3 d-flex align-items-center">
        <div class="row w-100">
          <label for="masculino" class="col">
            <input type="radio" id="masculino" name="genero" value="masculino" v-model="cotacao.identificacao.genero" />
            <span>Masculino</span>
          </label>
          <label for="feminino" class="col">
            <input type="radio" id="feminino" name="genero" value="feminino" v-model="cotacao.identificacao.genero" />
            <span>Feminino</span>
          </label>
        </div>
      </div>

      <div class="col-6 text-right mb-3 d-flex align-items-center">
        <label for="dataNascimento">Informe a sua data de nascimento:</label>
      </div>
      <div class="col-6 text-left mb-3 d-flex align-items-center">
        <the-mask
          type="text"
          id="dataNascimento"
          :mask="['##/##/####']"
          placeholder="__/__/____"
          v-model="cotacao.identificacao.dataNascimento"
        />
      </div>

      <div class="col-6 text-right mb-3 d-flex align-items-center">
        <label for="email">Informe o seu e-mail:</label>
      </div>
      <div class="col-6 text-left mb-3 d-flex align-items-center">
        <input type="text" id="email" placeholder="Seu e-maill corporativo" v-model="cotacao.identificacao.email" />
      </div>

      <div class="col-12 col-md-6 text-md-right mb-md-3 d-flex align-items-center">
        <label for="genero">Informe sua ocupação:</label>
      </div>
      <div class="col-12 col-md-6 text-center text-md-left mb-3 d-flex align-items-center">
        <div class="w-100">
          <v-select
            :value="cotacao.identificacao.ocupacao"
            :options="ocupacoes"
            @input="selecionarOcupacao"
            placeholder="Digite aqui a sua ocupação"
          ></v-select>
        </div>
      </div>
      <div class="col-6 text-right mb-3 d-flex align-items-center" v-if="docProfissao">
        <label for="email">Informe o seu {{ docProfissao }}:</label>
      </div>
      <div class="col-6 text-left mb-3 d-flex align-items-center" v-if="docProfissao">
        <input type="text" id="text" :placeholder="docProfissao" v-model="cotacao.identificacao.docProfissao" />
      </div>
    </div>

    <div class="button float-left" @click="voltar()">Voltar</div>
    <div class="button float-right" @click="avancar()">Avançar</div>
  </div>
</template>
<script>
import isEmail from 'validator/lib/isEmail';
import ocupacoes from '../utils/ocupacoes';
export default {
  name: 'Home',

  data: () => ({
    cotacao: {
      identificacao: {
        nomeCompleto: null,
        genero: null,
        dataNascimento: null,
        email: null,
        ocupacao: null,
      },
    },
    ocupacoes: ocupacoes,
  }),

  mounted() {
    if (JSON.parse(localStorage.getItem('cotacao'))) {
      this.cotacao = JSON.parse(localStorage.getItem('cotacao'));
    } else {
      this.voltar();
    }
  },

  computed: {
    docProfissao() {
      if (this.cotacao.identificacao.ocupacao) {
        if (
          [241005, 241015, 241035, 241025, 241020, 241030, 241205, 241010].includes(this.cotacao.identificacao.ocupacao)
        ) {
          return 'OAB';
        }
        if (
          [
            223204,
            223208,
            223280,
            223284,
            223212,
            223216,
            223220,
            223224,
            223228,
            223276,
            223288,
            223232,
            223236,
            223240,
            223244,
            223248,
            223256,
            223252,
            223260,
            223264,
            223268,
            223272,
            223293,
          ].includes(this.cotacao.identificacao.ocupacao)
        ) {
          return 'CRO';
        }
        if (
          [
            214425,
            214805,
            222110,
            222105,
            214005,
            214810,
            214205,
            214210,
            214215,
            214220,
            214225,
            214230,
            214235,
            214240,
            214245,
            214250,
            214255,
            214260,
            214270,
            214265,
            222205,
            212205,
            214910,
            202110,
            212210,
            214335,
            214605,
            214705,
            214710,
            214715,
            214720,
            214725,
            214730,
            214735,
            214740,
            222115,
            214905,
            214350,
            214920,
            214915,
            214340,
            214925,
            214305,
            214315,
            214320,
            214310,
            214325,
            214330,
            222120,
            202105,
            214405,
            214415,
            214410,
            214420,
            214610,
            214430,
            214345,
            214505,
            214510,
            214515,
            214520,
            214525,
            214530,
          ].includes(this.cotacao.identificacao.ocupacao)
        ) {
          return 'CREA';
        }
        if (
          [
            223204,
            223208,
            223280,
            223284,
            223212,
            223216,
            223220,
            223224,
            223228,
            223276,
            223288,
            223232,
            223236,
            223240,
            223244,
            223248,
            223256,
            223252,
            223260,
            223264,
            223268,
            223272,
            223293,
          ].includes(this.cotacao.identificacao.ocupacao)
        ) {
          return 'CRO';
        }
        if (
          [
            225105,
            225110,
            225148,
            225151,
            225115,
            225154,
            225290,
            225122,
            225120,
            225210,
            225295,
            225215,
            225220,
            225225,
            225230,
            225235,
            225240,
            225305,
            225125,
            225280,
            225142,
            225130,
            225135,
            225140,
            225203,
            225310,
            225145,
            225150,
            225315,
            225320,
            225155,
            225160,
            225165,
            225170,
            225175,
            225180,
            225250,
            225185,
            225340,
            225345,
            225195,
            225103,
            225106,
            225255,
            225109,
            225260,
            225350,
            225112,
            225118,
            225265,
            225121,
            225270,
            225275,
            225325,
            225335,
            225124,
            225127,
            225133,
            225330,
            225136,
            225139,
            225285,
            223305,
          ].includes(this.cotacao.identificacao.ocupacao)
        ) {
          return 'CRM';
        }
        if (
          [
            223505,
            223510,
            223565,
            223515,
            223520,
            223525,
            223530,
            223535,
            223540,
            223545,
            223550,
            223555,
            223560,
          ].includes(this.cotacao.identificacao.ocupacao)
        ) {
          return 'CRF';
        }
        if (
          [
            223505,
            223510,
            223565,
            223515,
            223520,
            223525,
            223530,
            223535,
            223540,
            223545,
            223550,
            223555,
            223560,
          ].includes(this.cotacao.identificacao.ocupacao)
        ) {
          return 'CRF';
        }
        if ([223710].includes(this.cotacao.identificacao.ocupacao)) {
          return 'CRN';
        }
        if (
          [223660, 223650, 223655, 223605, 223630, 223640, 223645, 223625, 223635].includes(
            this.cotacao.identificacao.ocupacao
          )
        ) {
          return 'CREFITO';
        }
      }
      return false;
    },

    nomeCompletoValidation() {
      const nomeArray = this.cotacao.identificacao.nomeCompleto
        ? this.cotacao.identificacao.nomeCompleto.split(' ')
        : [];

      if (!nomeArray.length) {
        return {
          valido: false,
          mensagemErro: 'Nome é requerido',
        };
      } else if (!nomeArray[1]) {
        return {
          valido: false,
          mensagemErro: 'Você deve digitar seu nome e sobrenome',
        };
      } else {
        return {
          valido: true,
        };
      }
    },

    generoValidation() {
      if (!this.cotacao.identificacao.genero) {
        return {
          valido: false,
          mensagemErro: 'Genêro não informado',
        };
      } else {
        return { valido: true };
      }
    },

    dataNascimentoValidation() {
      const data = this.cotacao.identificacao.dataNascimento;
      if (!data) {
        return {
          valido: false,
          mensagemErro: 'Você deve preencher sua data de nascimento',
        };
      } else if (data.length != 8) {
        return { valido: false, mensagemErro: 'Você deve preencher sua data de nascimento' };
      } else {
        return { valido: true };
      }
    },

    emailValidation() {
      if (!this.cotacao.identificacao.email) {
        return {
          valido: false,
          mensagemErro: 'Você deve informar seu e-mail',
        };
      } else if (!isEmail(this.cotacao.identificacao.email)) {
        return { valido: false, mensagemErro: 'E-mail inválido' };
      } else {
        return { valido: true };
      }
    },

    ocupacaoValidation() {
      return this.cotacao.identificacao.ocupacao
        ? { valido: true }
        : { valido: false, mensagemErro: 'Você deve escolher uma ocupação' };
    },

    formularioValidation() {
      const campos = Object.keys(this.cotacao.identificacao);

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

  methods: {
    voltar() {
      this.$router.push('/');
    },

    avancar() {
      const formularioValidation = this.formularioValidation;

      if (formularioValidation.valido === false) {
        return this.$swal.fire({
          icon: 'error',
          title: 'Ops...',
          text: formularioValidation.mensagemErro,
        });
      }

      localStorage.setItem('cotacao', JSON.stringify(this.cotacao));
      let proximo = Object.keys(this.cotacao.questionarios)[0];
      this.$router.push(`/questionario/${proximo}`);
    },

    selecionarOcupacao(ocupacao) {
      this.cotacao.identificacao.ocupacao = ocupacao.code;
    },
  },
};
</script>
<style scoped="true">
.v-select {
  width: 100%;
}
</style>
