<template>
  <div>
    <div class="row">
      <div class="message">
        * Entre os mais vendido nos últimos anos para sua atividade está o Seguro de Responsabilidade Civil
        Profissional, também conhecido como Seguro de Erros e Omissões Profissionais, que atenua judicial e
        financeiramente eventuais falhas na execução do seu trabalho.
      </div>
    </div>
    <div class="row mb-4">
      <div class="col-6 text-right mb-3 d-flex align-items-center">
        <label for="reclamacaoJudicial12Meses"
          >Já SOFREU qualquer tipo de reclamação judicial, extrajudicial ou disciplinar em sua atividade profissional
          nos últimos 12 meses?</label
        >
        <p></p>
      </div>
      <div class="col-6 text-left mb-3 d-flex align-items-center">
        <select
          name="reclamacaoJudicial12Meses"
          id="reclamacaoJudicial12Meses"
          v-model="cotacao.questionarios['7'].reclamacaoJudicial12Meses"
        >
          <option value="nao">Não, nenhuma</option>
          <option value="uma">Sim, apenas 1</option>
          <option value="duas">Sim, apenas 2</option>
          <option value="tresoumais">3 ou mais</option>
        </select>
      </div>
      <div class="col-6 text-right mb-3 d-flex align-items-center">
        <label for="reclamacaoJudicial5Anos"
          >Já SOFREU qualquer tipo de reclamação judicial, extrajudicial ou disciplinar em sua atividade profissional
          nos últimos 5 anos?</label
        >
        <p></p>
      </div>
      <div class="col-6 text-left mb-3 d-flex align-items-center">
        <select
          name="reclamacaoJudicial5Anos"
          id="reclamacaoJudicial5Anos"
          v-model="cotacao.questionarios['7'].reclamacaoJudicial5Anos"
        >
          <option value="nao">Não, nenhuma</option>
          <option value="uma">Sim, apenas 1</option>
          <option value="duas">Sim, apenas 2</option>
          <option value="tresoumais">3 ou mais</option>
        </select>
      </div>
      <div class="col-6 text-right mb-3 d-flex align-items-center">
        <label for="conhecimentoFato"
          >Você tem CONHECIMENTO de qualquer fato ou circunstância que possa gerar uma reclamação extrajudicial,
          processo judicial civil, criminal ou ético administrativo ou de qualquer tipo similar de pedido de reparação
          de danos causados pela prestação de seus serviços?
        </label>
        <p></p>
      </div>
      <div class="col-6 text-left mb-3 d-flex align-items-center">
        <select name="conhecimentoFato" id="conhecimentoFato" v-model="cotacao.questionarios['7'].conhecimentoFato">
          <option value="nao">Não tenho conhecimento</option>
          <option value="tenho">Tenho conhecimento</option>
        </select>
      </div>

      <div class="col-6 text-right mb-3 d-flex align-items-center">
        <label for="faturamentoAnual">Selecione o seu Faturamento Bruto Anual:</label>
      </div>
      <div class="col-6 text-left mb-3 d-flex align-items-center">
        <select name="faturamentoAnual" id="faturamentoAnual" v-model="cotacao.questionarios['7'].faturamentoAnual">
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
  name: 'Home',
  data: () => ({
    cotacao: {
      questionarios: {},
    },
  }),

  beforeMount() {
    if (JSON.parse(localStorage.getItem('cotacao'))) {
      let cotacao = JSON.parse(localStorage.getItem('cotacao'));
      if (cotacao.questionarios['7'] == null) {
        cotacao.questionarios['7'] = {
          reclamacaoJudicial12Meses: 'nao',
          reclamacaoJudicial5Anos: 'nao',
          conhecimentoFato: 'nao',
          faturamentoAnual: 'Até R$ 100.000',
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
        if (quest > 8) {
          proximo = `/questionario/${quest}`;
        }
      }
      this.$router.push(proximo || '/contato');
    },
  },
};
</script>
