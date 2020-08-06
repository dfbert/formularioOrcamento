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
          v-model="cotacao.questionarios['9'].cep"
        />
      </div>
      <div class="col-6 text-right mb-3 d-flex align-items-center">
        <label for="tipoImovel">Tipo de imóvel</label>
        <p></p>
      </div>
      <div class="col-6 text-left mb-3 d-flex align-items-center">
        <select name="tipoImovel" id="tipoImovel" v-model="cotacao.questionarios['9'].tipoImovel">
          <option value="noa">Não, nenhuma</option>
          <option value="uma">Sim, apenas 1</option>
          <option value="duas">Sim, apenas 2</option>
          <option value="tresoumais">3 ou mais</option>
        </select>
      </div>
      <div class="col-6 text-right mb-3 d-flex align-items-center">
        <label for="motivoLocacao">Motivo da locação</label>
        <p></p>
      </div>
      <div class="col-6 text-left mb-3 d-flex align-items-center">
        <select
          name="motivoLocacao"
          id="motivoLocacao"
          v-model="cotacao.questionarios['9'].motivoLocacao"
        >
          <option value="Transferencia da empresa">Transferencia da empresa</option>
          <option value="Abertura da empresa">Abertura da empresa</option>
          <option value="Abertura de nova filial">Abertura de nova filial</option>
          <option value="Apólice vencida">Apólice vencida</option>
          <option value="Funcionário responsavel responsável">Funcionário responsavel responsável</option>
          <option value="Casamento">Casamento</option>
          <option value="Imóvel próximos de famíliares">Imóvel próximos de famíliares</option>
          <option value="Indepêndencia">Indepêndencia</option>
          <option value="Locação adicional">Locação adicional</option>
          <option value="Locação em vigor">Locação em vigor</option>
          <option value="Para terceiros">Para terceiros</option>
          <option value="Próximo a instituição de ensino">Próximo a instituição de ensino</option>
          <option value="Próximo ao trabalho">Próximo ao trabalho</option>
          <option value="Redução de custo">Redução de custo</option>
          <option
            value="Renovação de contrato com aumento de valores"
          >Renovação de contrato com aumento de valores</option>
          <option value="Separação">Separação</option>
          <option value="Outros">Outros</option>
        </select>
      </div>
      <div class="col-6 text-right mb-3 d-flex align-items-center">
        <label for="quantidadeResponsaveis">Quantidade de responsáveis no contrato de aluguel</label>
        <p></p>
      </div>
      <div class="col-6 text-left mb-3 d-flex align-items-center">
        <select
          name="quantidadeResponsaveis"
          id="quantidadeResponsaveis"
          v-model="cotacao.questionarios['9'].quantidadeResponsaveis"
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="Mais de 4">Mais de 4</option>
        </select>
      </div>

      <div
        class="message"
      >Para avaliação do seu seguro, é necessário conhecer um pouco sobre alguns dados pessoais e de rendimento mensal. Após o aceite pela seguradora, esses dados poderão ser comprovados.</div>
    </div>

    <div class="col-12 text-left d-flex align-items-center">
      <label for="cpfResponsavel">Qual o CPF do responsável no contrato de aluguel?</label>
    </div>
    <div class="col-12 text-left mb-3 d-flex align-items-center">
      <the-mask
        type="text"
        id="cpfResponsavel"
        placeholder="Informe o CPF"
        v-model="cotacao.questionarios['9'].cpfResponsavel"
      />
    </div>

    <div class="col-12 text-left d-flex align-items-center">
      <label for="rgResponsavel">Qual o RG do responsável no contrato de aluguel?</label>
    </div>
    <div class="col-12 text-left mb-3 d-flex align-items-center">
      <the-mask
        type="text"
        id="rgResponsavel"
        placeholder="Informe o RG"
        v-model="cotacao.questionarios['9'].rgResponsavel"
      />
    </div>

    <div class="col-6 text-right mb-3 d-flex align-items-center">
      <label for="estadoCivil">Estado Civil</label>
      <p></p>
    </div>
    <div class="col-6 text-left mb-3 d-flex align-items-center">
      <select name="estadoCivil" id="estadoCivil" v-model="cotacao.questionarios['9'].estadoCivil">
        <option value="Solteiro">Solteiro</option>
        <option value="Casado">Casado</option>
        <option value="União Estável">União Estável</option>
        <option value="Desquitado">Desquitado</option>
        <option value="Divorciado">Divorciado</option>
        <option value="Separado">Separado</option>
        <option value="Viúvo">Viúvo</option>
      </select>
    </div>

    <div class="col-12 text-left d-flex align-items-center">
      <label for="cpfConjugue">CPF do Cônjugue?</label>
    </div>
    <div class="col-12 text-left mb-3 d-flex align-items-center">
      <the-mask
        type="text"
        id="cpfConjugue"
        placeholder="Informe o CPF"
        v-model="cotacao.questionarios['9'].cpfConjugue"
      />
    </div>

    <div class="col-12 text-left d-flex align-items-center">
      <label for="dependentes">Número de Dependentes?</label>
    </div>
    <div class="col-12 text-left mb-3 d-flex align-items-center">
      <the-mask
        type="text"
        id="dependentes"
        placeholder="Quantidade de dependentes"
        v-model="cotacao.questionarios['9'].dependentes"
      />
    </div>

    <div class="col-6 text-right mb-3 d-flex align-items-center">
      <label for="vinculoRenda">Tipo de vínculo que compõe sua renda</label>
      <p></p>
    </div>
    <div class="col-6 text-left mb-3 d-flex align-items-center">
      <select
        name="vinculoRenda"
        id="vinculoRenda"
        v-model="cotacao.questionarios['9'].vinculoRenda"
      >
        <option value="Empresário com CNPJ">Empresário com CNPJ</option>
        <option value="Profissional Liberal">Profissional Liberal</option>
        <option value="Autônomo">Autônomo</option>
        <option value="Funcionário de empresa Privada CLT">Funcionário de empresa Privada CLT</option>
        <option value="Funcionário de empresa Pública CLT">Funcionário de empresa Pública CLT</option>
        <option value="Aposentado ou Pensionista">Aposentado ou Pensionista</option>
        <option value="Estudante">Estudante</option>
        <option value="Renda proveniente de aluguéis">Renda proveniente de aluguéis</option>
      </select>
    </div>
    <div class="col-12 text-left d-flex align-items-center">
      <label for="empresaOndeTrabalha">Nome da Empresa onde Trabalha?</label>
    </div>
    <div class="col-12 text-left mb-3 d-flex align-items-center">
      <the-mask
        type="text"
        id="empresaOndeTrabalha"
        placeholder="Nome da empresa"
        v-model="cotacao.questionarios['9'].empresaOndeTrabalha"
      />
    </div>

    <div class="col-12 text-left d-flex align-items-center">
      <label for="dataAdmissao">Data Admissão Empresa</label>
    </div>
    <div class="col-12 text-left mb-3 d-flex align-items-center">
      <the-mask
        type="text"
        id="dataAdmissao"
        placeholder="Informe a data"
        :mask="['##/##/####']"
        v-model="cotacao.questionarios['9'].dataAdmissao"
      />
    </div>

    <div class="col-12 text-left d-flex align-items-center">
      <label for="salarioMensal">Informe seu salário mensal</label>
    </div>
    <div class="col-12 text-left mb-3 d-flex align-items-center">
      <the-mask
        type="text"
        id="salarioMensal"
        placeholder="Seu salário"
        v-model="cotacao.questionarios['9'].salarioMensal"
      />
    </div>
    <div class="col-12 text-left d-flex align-items-center">
      <label for="outrosRendimentos">Outros rendimentos</label>
    </div>
    <div class="col-12 text-left mb-3 d-flex align-items-center">
      <the-mask
        type="text"
        id="outrosRendimentos"
        placeholder="Outros rendimentos"
        v-model="cotacao.questionarios['9'].outrosRendimentos"
      />
    </div>

    <div
      class="message"
    >Vamos detalhar agora as exigências do contrato de aluguel, buscando fazer uma proposta sob medida do seu seguro. Preencha apenas os campos necessários que atendam o contrato de aluguel.</div>

    <div class="col-12 text-left d-flex align-items-center">
      <label for="valorAluguel">Valor do Aluguel (R$)</label>
    </div>
    <div class="col-12 text-left mb-3 d-flex align-items-center">
      <the-mask type="text" id="valorAluguel" v-model="cotacao.questionarios['9'].valorAluguel" />
    </div>
    <div class="col-12 text-left d-flex align-items-center">
      <label for="iptuMensal">Valor do IPTU Mensal (R$)</label>
    </div>
    <div class="col-12 text-left mb-3 d-flex align-items-center">
      <the-mask type="text" id="iptuMensal" v-model="cotacao.questionarios['9'].iptuMensal" />
    </div>
    <div class="col-12 text-left d-flex align-items-center">
      <label for="condominio">Valor do Condomínio (R$)</label>
    </div>
    <div class="col-12 text-left mb-3 d-flex align-items-center">
      <the-mask type="text" id="condominio" v-model="cotacao.questionarios['9'].condominio" />
    </div>
    <div class="col-12 text-left d-flex align-items-center">
      <label for="contaDeAgua">Valor da conta de Água (R$)</label>
    </div>
    <div class="col-12 text-left mb-3 d-flex align-items-center">
      <the-mask type="text" id="contaDeAgua" v-model="cotacao.questionarios['9'].contaDeAgua" />
    </div>
    <div class="col-12 text-left d-flex align-items-center">
      <label for="contaDeLuz">Valor da conta de Luz (R$)</label>
    </div>
    <div class="col-12 text-left mb-3 d-flex align-items-center">
      <the-mask type="text" id="contaDeLuz" v-model="cotacao.questionarios['9'].contaDeLuz" />
    </div>
    <div class="col-12 text-left d-flex align-items-center">
      <label for="contaDeGas">Valor da conta de Gás Canalizado (R$)</label>
    </div>
    <div class="col-12 text-left mb-3 d-flex align-items-center">
      <the-mask type="text" id="contaDeGas" v-model="cotacao.questionarios['9'].contaDeGas" />
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
      if (cotacao.questionarios["9"] == null) {
        cotacao.questionarios["9"] = {
          cep: null,
          tipoImovel: null,
          motivoLocacao: null,
          quantidadeResponsaveis: null,
          cpfResponsavel: null,
          rgResponsavel: null,
          estadoCivil: null,
          cpfConjugue: null,
          dependentes: null,
          vinculoRenda: null,
          empresaOndeTrabalha: null,
          dataAdmissao: null,
          salarioMensal: null,
          outrosRendimentos: null,
          valorAluguel: null,
          iptuMensal: null,
          condominio: null,
          contaDeAgua: null,
          contaDeLuz: null,
          contaDeGas: null,
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
        if (quest > 9) {
          proximo = `/questionario/${quest}`;
        }
      }
      this.$router.push(proximo || "/contato");
    },
  },
};
</script>
