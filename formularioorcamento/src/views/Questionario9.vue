<template>
  <div>
    <div class="row p-2">
      <div class="message col-12 mb-2">
        Sabemos que seu tempo é escasso! Por isso, nosso questionário foi montado sob medida com base em suas seleções
        na tela anterior! Na Postali Seguros buscaremos as melhores ofertas disponíveis no mercado, grátis e sem
        compromisso. Fique tranquilo! Cuidaremos dos seus dados e não enviaremos Spam! Também não gostamos disso!
      </div>
      <div class="message col-12">
        Campos com * são obrigatórios
      </div>
    </div>

    <!-- CEP -->
    <div class="row mb-4">
      <div class="col-12 text-left d-flex align-items-center">
        <label for="cep">CEP *</label>
      </div>
      <div @click="contadores.cep++" class="col-12 text-left mb-3 d-flex flex-column align-items-end">
        <the-mask
          :class="{ 'mb-1': !cepValidation.valido && contadores.cep != 0 }"
          type="text"
          id="cep"
          placeholder="Informe seu CEP"
          :mask="['#####-###']"
          v-model="cotacao.questionarios['9'].cep"
        />
        <small v-if="!cepValidation.valido && contadores.cep != 0" class="feedback-invalido mb-1">
          {{ cepValidation.mensagemErro }}
        </small>
      </div>

      <!-- tipoImovel -->
      <div class="col-12 text-left d-flex align-items-center">
        <label for="tipoImovel">Tipo de imóvel *</label>
        <p></p>
      </div>
      <div class="col-12 text-left mb-3 d-flex flex-column align-items-end">
        <select
          @focus="contadores.tipoImovel++"
          :class="{ 'mb-1': !tipoImovelValidation.valido && contadores.tipoImovel != 0 }"
          name="tipoImovel"
          id="tipoImovel"
          v-model="cotacao.questionarios['9'].tipoImovel"
        >
          <option value="nao">Não, nenhuma</option>
          <option value="uma">Sim, apenas 1</option>
          <option value="duas">Sim, apenas 2</option>
          <option value="tresoumais">3 ou mais</option>
        </select>
        <small v-if="!tipoImovelValidation.valido && contadores.tipoImovel != 0" class="feedback-invalido mb-1">
          {{ tipoImovelValidation.mensagemErro }}
        </small>
      </div>

      <!-- motivoLocacao -->
      <div class="col-12 text-left d-flex align-items-center">
        <label for="motivoLocacao">Motivo da locação *</label>
        <p></p>
      </div>
      <div class="col-12 text-left mb-3 d-flex flex-column align-items-end">
        <select
          @focus="contadores.motivoLocacao++"
          :class="{ 'mb-1': !motivoLocacaoValidation.valido && contadores.motivoLocacao != 0 }"
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
          <option value="Renovação de contrato com aumento de valores"
            >Renovação de contrato com aumento de valores</option
          >
          <option value="Separação">Separação</option>
          <option value="Outros">Outros</option>
        </select>
        <small v-if="!motivoLocacaoValidation.valido && contadores.motivoLocacao != 0" class="feedback-invalido mb-1">
          {{ motivoLocacaoValidation.mensagemErro }}
        </small>
      </div>

      <!-- quantidadeResponsaveis -->
      <div class="col-12 text-left d-flex align-items-center">
        <label for="quantidadeResponsaveis">Quantidade de responsáveis no contrato de aluguel *</label>
        <p></p>
      </div>
      <div class="col-12 text-left mb-3 d-flex flex-column align-items-end">
        <select
          @focus="contadores.quantidadeResponsaveis++"
          :class="{ 'mb-1': !quantidadeResponsaveisValidation.valido && contadores.quantidadeResponsaveis != 0 }"
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
        <small
          v-if="!quantidadeResponsaveisValidation.valido && contadores.quantidadeResponsaveis != 0"
          class="feedback-invalido mb-1"
        >
          {{ quantidadeResponsaveisValidation.mensagemErro }}
        </small>
      </div>

      <div class="message">
        Para avaliação do seu seguro, é necessário conhecer um pouco sobre alguns dados pessoais e de rendimento mensal.
        Após o aceite pela seguradora, esses dados poderão ser comprovados.
      </div>
    </div>

    <!-- cpfResponsavel -->
    <div class="col-12 text-left d-flex align-items-center">
      <label for="cpfResponsavel">Qual o CPF do responsável no contrato de aluguel? *</label>
    </div>
    <div @click="contadores.cpfResponsavel++" class="col-12 text-left mb-3 d-flex flex-column align-items-end">
      <the-mask
        :class="{ 'mb-1': !cpfResponsavelValidation.valido && contadores.cpfResponsavel != 0 }"
        :mask="['###.###.###-##']"
        type="text"
        id="cpfResponsavel"
        placeholder="Informe o CPF"
        v-model="cotacao.questionarios['9'].cpfResponsavel"
      />
      <small v-if="!cpfResponsavelValidation.valido && contadores.cpfResponsavel != 0" class="feedback-invalido mb-1">
        {{ cpfResponsavelValidation.mensagemErro }}
      </small>
    </div>

    <!-- rgResponsavel -->
    <div class="col-12 text-left d-flex align-items-center">
      <label for="rgResponsavel">Qual o RG do responsável no contrato de aluguel? *</label>
    </div>
    <div @click="contadores.rgResponsavel++" class="col-12 text-left mb-3 d-flex flex-column align-items-end">
      <the-mask
        :class="{ 'mb-1': !rgResponsavelValidation.valido && contadores.rgResponsavel != 0 }"
        :mask="['##.###.###-#']"
        type="text"
        id="rgResponsavel"
        placeholder="Informe o RG"
        v-model="cotacao.questionarios['9'].rgResponsavel"
      />
      <small v-if="!rgResponsavelValidation.valido && contadores.rgResponsavel != 0" class="feedback-invalido mb-1">
        {{ rgResponsavelValidation.mensagemErro }}
      </small>
    </div>

    <!-- estadoCivil -->
    <div class="col-12 text-left d-flex align-items-center">
      <label for="estadoCivil">Estado Civil *</label>
      <p></p>
    </div>
    <div class="col-12 text-left mb-3 d-flex flex-column align-items-end">
      <select
        @focus="contadores.estadoCivil++"
        :class="{ 'mb-1': !estadoCivilValidation.valido && contadores.estadoCivil != 0 }"
        name="estadoCivil"
        id="estadoCivil"
        v-model="cotacao.questionarios['9'].estadoCivil"
      >
        <option value="Solteiro">Solteiro</option>
        <option value="Casado">Casado</option>
        <option value="União Estável">União Estável</option>
        <option value="Desquitado">Desquitado</option>
        <option value="Divorciado">Divorciado</option>
        <option value="Separado">Separado</option>
        <option value="Viúvo">Viúvo</option>
      </select>
      <small v-if="!estadoCivilValidation.valido && contadores.estadoCivil != 0" class="feedback-invalido mb-1">
        {{ estadoCivilValidation.mensagemErro }}
      </small>
    </div>

    <!-- cpfConjugue -->
    <div class="col-12 text-left d-flex align-items-center">
      <label for="cpfConjugue">CPF do Cônjugue? *</label>
    </div>
    <div @click="contadores.cpfConjugue++" class="col-12 text-left mb-3 d-flex flex-column align-items-end">
      <the-mask
        :mask="['###.###.###-##']"
        :class="{ 'mb-1': !cpfConjugueValidation.valido && contadores.cpfConjugue != 0 }"
        type="text"
        id="cpfConjugue"
        placeholder="Informe o CPF"
        v-model="cotacao.questionarios['9'].cpfConjugue"
      />
      <small v-if="!cpfConjugueValidation.valido && contadores.cpfConjugue != 0" class="feedback-invalido mb-1">
        {{ cpfConjugueValidation.mensagemErro }}
      </small>
    </div>

    <!-- dependentes -->
    <div class="col-12 text-left d-flex align-items-center">
      <label for="dependentes">Número de Dependentes? *</label>
    </div>
    <div class="col-12 text-left mb-3 d-flex flex-column align-items-end">
      <input
        @focus="contadores.dependentes++"
        :class="{ 'mb-1': !dependentesValidation.valido && contadores.dependentes != 0 }"
        type="number"
        id="dependentes"
        placeholder="Quantidade de dependentes"
        v-model="cotacao.questionarios['9'].dependentes"
      />
      <small v-if="!dependentesValidation.valido && contadores.dependentes != 0" class="feedback-invalido mb-1">
        {{ dependentesValidation.mensagemErro }}
      </small>
    </div>

    <!-- vinculoRenda -->
    <div class="col-12 text-left d-flex align-items-center">
      <label for="vinculoRenda">Tipo de vínculo que compõe sua renda *</label>
      <p></p>
    </div>
    <div class="col-12 text-left mb-3 d-flex flex-column align-items-end">
      <select
        @focus="contadores.vinculoRenda++"
        :class="{ 'mb-1': !vinculoRendaValidation.valido && contadores.vinculoRenda != 0 }"
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
      <small v-if="!vinculoRendaValidation.valido && contadores.vinculoRenda != 0" class="feedback-invalido mb-1">
        {{ vinculoRendaValidation.mensagemErro }}
      </small>
    </div>

    <!-- empresaOndeTrabalha -->
    <div class="col-12 text-left d-flex align-items-center">
      <label for="empresaOndeTrabalha">Nome da Empresa onde Trabalha? *</label>
    </div>
    <div class="col-12 text-left mb-3 d-flex flex-column align-items-end">
      <input
        @focus="contadores.empresaOndeTrabalha++"
        :class="{ 'mb-1': !empresaOndeTrabalhaValidation.valido && contadores.empresaOndeTrabalha != 0 }"
        type="text"
        id="empresaOndeTrabalha"
        placeholder="Nome da empresa"
        v-model="cotacao.questionarios['9'].empresaOndeTrabalha"
      />
      <small
        v-if="!empresaOndeTrabalhaValidation.valido && contadores.empresaOndeTrabalha != 0"
        class="feedback-invalido mb-1"
      >
        {{ empresaOndeTrabalhaValidation.mensagemErro }}
      </small>
    </div>

    <!-- dataAdmissao -->
    <div class="col-12 text-left d-flex align-items-center">
      <label for="dataAdmissao">Data Admissão Empresa *</label>
    </div>
    <div @click="contadores.dataAdmissao++" class="col-12 text-left mb-3 d-flex flex-column align-items-end">
      <the-mask
        type="text"
        :class="{ 'mb-1': !dataAdmissaoValidation.valido && contadores.dataAdmissao != 0 }"
        id="dataAdmissao"
        placeholder="Informe a data"
        :mask="['##/##/####']"
        v-model="cotacao.questionarios['9'].dataAdmissao"
      />
      <small v-if="!dataAdmissaoValidation.valido && contadores.dataAdmissao != 0" class="feedback-invalido mb-1">
        {{ dataAdmissaoValidation.mensagemErro }}
      </small>
    </div>

    <!-- salarioMensal -->
    <div class="col-12 text-left d-flex align-items-center">
      <label for="salarioMensal">Informe seu salário mensal *</label>
    </div>
    <div class="col-12 text-left mb-3 d-flex flex-column align-items-end">
      <input
        @focus="contadores.salarioMensal++"
        :class="{ 'mb-1': !salarioMensalValidation.valido && contadores.salarioMensal != 0 }"
        type="number"
        id="salarioMensal"
        placeholder="Seu salário"
        v-model="cotacao.questionarios['9'].salarioMensal"
      />
      <small v-if="!salarioMensalValidation.valido && contadores.salarioMensal != 0" class="feedback-invalido mb-1">
        {{ salarioMensalValidation.mensagemErro }}
      </small>
    </div>

    <!-- outrosRendimentos -->
    <div class="col-12 text-left d-flex align-items-center">
      <label for="outrosRendimentos">Outros rendimentos</label>
    </div>
    <div class="col-12 text-left mb-3 d-flex align-items-center">
      <input
        type="text"
        id="outrosRendimentos"
        placeholder="Outros rendimentos"
        v-model="cotacao.questionarios['9'].outrosRendimentos"
      />
    </div>

    <div class="message">
      Vamos detalhar agora as exigências do contrato de aluguel, buscando fazer uma proposta sob medida do seu seguro.
      Preencha apenas os campos necessários que atendam o contrato de aluguel.
    </div>

    <!-- valorAluguel -->
    <div class="col-12 text-left d-flex align-items-center">
      <label for="valorAluguel">Valor do Aluguel (R$) *</label>
    </div>
    <div class="col-12 text-left mb-3 d-flex flex-column align-items-end">
      <input
        @focus="contadores.valorAluguel++"
        :class="{ 'mb-1': !valorAluguelValidation.valido && contadores.valorAluguel != 0 }"
        type="number"
        id="valorAluguel"
        v-model="cotacao.questionarios['9'].valorAluguel"
      />
      <small v-if="!valorAluguelValidation.valido && contadores.valorAluguel != 0" class="feedback-invalido mb-1">
        {{ valorAluguelValidation.mensagemErro }}
      </small>
    </div>

    <!-- iptuMensal -->
    <div class="col-12 text-left d-flex align-items-center">
      <label for="iptuMensal">Valor do IPTU Mensal (R$) *</label>
    </div>
    <div class="col-12 text-left mb-3 d-flex flex-column align-items-end">
      <input
        @focus="contadores.iptuMensal++"
        :class="{ 'mb-1': !iptuMensalValidation.valido && contadores.iptuMensal != 0 }"
        type="number"
        id="iptuMensal"
        v-model="cotacao.questionarios['9'].iptuMensal"
      />
      <small v-if="!iptuMensalValidation.valido && contadores.iptuMensal != 0" class="feedback-invalido mb-1">
        {{ iptuMensalValidation.mensagemErro }}
      </small>
    </div>

    <!-- condominio -->
    <div class="col-12 text-left d-flex align-items-center">
      <label for="condominio">Valor do Condomínio (R$)</label>
    </div>
    <div class="col-12 text-left mb-3 d-flex flex-column align-items-end">
      <input
        @focus="contadores.condominio++"
        :class="{ 'mb-1': !condominioValidation.valido && contadores.condominio != 0 }"
        type="number"
        id="condominio"
        v-model="cotacao.questionarios['9'].condominio"
      />
      <small v-if="!condominioValidation.valido && contadores.condominio != 0" class="feedback-invalido mb-1">
        {{ condominioValidation.mensagemErro }}
      </small>
    </div>

    <!-- contaDeAgua -->
    <div class="col-12 text-left d-flex align-items-center">
      <label for="contaDeAgua">Valor da conta de Água (R$) *</label>
    </div>
    <div class="col-12 text-left mb-3 d-flex flex-column align-items-end">
      <input
        @focus="contadores.contaDeAgua++"
        :class="{ 'mb-1': !contaDeAguaValidation.valido && contadores.contaDeAgua != 0 }"
        type="number"
        id="contaDeAgua"
        v-model="cotacao.questionarios['9'].contaDeAgua"
      />
      <small v-if="!contaDeAguaValidation.valido && contadores.contaDeAgua != 0" class="feedback-invalido mb-1">
        {{ contaDeAguaValidation.mensagemErro }}
      </small>
    </div>

    <!-- contaDeLuz -->
    <div class="col-12 text-left d-flex align-items-center">
      <label for="contaDeLuz">Valor da conta de Luz (R$) *</label>
    </div>
    <div class="col-12 text-left mb-3 d-flex flex-column align-items-end">
      <input
        @focus="contadores.contaDeLuz++"
        :class="{ 'mb-1': !contaDeLuzValidation.valido && contadores.contaDeLuz != 0 }"
        type="number"
        id="contaDeLuz"
        v-model="cotacao.questionarios['9'].contaDeLuz"
      />
      <small v-if="!contaDeLuzValidation.valido && contadores.contaDeLuz != 0" class="feedback-invalido mb-1">
        {{ contaDeLuzValidation.mensagemErro }}
      </small>
    </div>

    <!-- contaDeGas -->
    <div class="col-12 text-left d-flex align-items-center">
      <label for="contaDeGas">Valor da conta de Gás Canalizado (R$)</label>
    </div>
    <div class="col-12 text-left mb-3 d-flex flex-column align-items-end">
      <input
        @focus="contadores.contaDeGas++"
        :class="{ 'mb-1': !contaDeGasValidation.valido && contadores.contaDeGas != 0 }"
        type="number"
        id="contaDeGas"
        v-model="cotacao.questionarios['9'].contaDeGas"
      />
      <small v-if="!contaDeGasValidation.valido && contadores.contaDeGas != 0" class="feedback-invalido mb-1">
        {{ contaDeGasValidation.mensagemErro }}
      </small>
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
      tipoImovel: 0,
      motivoLocacao: 0,
      quantidadeResponsaveis: 0,
      cpfResponsavel: 0,
      rgResponsavel: 0,
      estadoCivil: 0,
      cpfConjugue: 0,
      dependentes: 0,
      vinculoRenda: 0,
      empresaOndeTrabalha: 0,
      dataAdmissao: 0,
      salarioMensal: 0,
      outrosRendimentos: 0,
      valorAluguel: 0,
      iptuMensal: 0,
      condominio: 0,
      contaDeAgua: 0,
      contaDeLuz: 0,
      contaDeGas: 0,
    },
  }),

  computed: {
    cepValidation() {
      if (!this.cotacao.questionarios['9'].cep) {
        return {
          valido: false,
          mensagemErro: 'CEP é obrigatório',
        };
      } else if (this.cotacao.questionarios['9'].cep.length < 8) {
        return {
          valido: false,
          mensagemErro: 'CEP deve conter 8 dígitos',
        };
      } else {
        return { valido: true };
      }
    },

    tipoImovelValidation() {
      if (!this.cotacao.questionarios['9'].tipoImovel) {
        return {
          valido: false,
          mensagemErro: 'Você deve nos informar o tipo do seu ímovel',
        };
      } else {
        return {
          valido: true,
        };
      }
    },

    motivoLocacaoValidation() {
      if (!this.cotacao.questionarios['9'].motivoLocacao) {
        return {
          valido: false,
          mensagemErro: 'Você deve nos informar o motivo da sua locação',
        };
      } else {
        return {
          valido: true,
        };
      }
    },

    quantidadeResponsaveisValidation() {
      if (!this.cotacao.questionarios['9'].quantidadeResponsaveis) {
        return {
          valido: false,
          mensagemErro: 'Você deve nos informar a quantidade de responsáveis no contrato de aluguel',
        };
      } else {
        return {
          valido: true,
        };
      }
    },

    cpfResponsavelValidation() {
      if (!this.cotacao.questionarios['9'].cpfResponsavel) {
        return {
          valido: false,
          mensagemErro: 'CPF do responsável no contrato de aluguel é obrigatório',
        };
      } else if (this.cotacao.questionarios['9'].cpfResponsavel.length < 11) {
        return {
          valido: false,
          mensagemErro: 'CPF do responsável deve conter 11 dígitos',
        };
      } else {
        return { valido: true };
      }
    },

    rgResponsavelValidation() {
      if (!this.cotacao.questionarios['9'].rgResponsavel) {
        return {
          valido: false,
          mensagemErro: 'RG do responsável no contrato de aluguel é obrigatório',
        };
      } else if (this.cotacao.questionarios['9'].rgResponsavel.length < 9) {
        return {
          valido: false,
          mensagemErro: 'RG do responsável no contrato de aluguel deve conter 9 digítos',
        };
      } else {
        return { valido: true };
      }
    },

    estadoCivilValidation() {
      if (!this.cotacao.questionarios['9'].estadoCivil) {
        return {
          valido: false,
          mensagemErro: 'Você deve nos informar seu estado civil',
        };
      } else {
        return {
          valido: true,
        };
      }
    },

    cpfConjugueValidation() {
      if (!this.cotacao.questionarios['9'].cpfConjugue) {
        return {
          valido: false,
          mensagemErro: 'CPF do Cônjuge é obrigatório',
        };
      } else if (this.cotacao.questionarios['9'].cpfConjugue.length < 11) {
        return {
          valido: false,
          mensagemErro: 'CPF do Cônjuge deve conter 11 dígitos',
        };
      } else {
        return { valido: true };
      }
    },

    dependentesValidation() {
      if (!this.cotacao.questionarios['9'].dependentes) {
        return { valido: false, mensagemErro: 'Você deve nos informar a quantidade de dependentes' };
      } else if (this.cotacao.questionarios['9'].dependentes < 0) {
        return { valido: false, mensagemErro: 'Número de dependentes não pode ser negativo' };
      } else {
        return { valido: true };
      }
    },

    vinculoRendaValidation() {
      if (!this.cotacao.questionarios['9'].vinculoRenda) {
        return { valido: false, mensagemErro: 'Você deve nos informar que tipo de atividade compõe sua renda' };
      } else {
        return { valido: true };
      }
    },

    empresaOndeTrabalhaValidation() {
      if (!this.cotacao.questionarios['9'].empresaOndeTrabalha) {
        return { valido: false, mensagemErro: 'Nos informe o nome da empresa na qual você trabalha' };
      } else {
        return { valido: true };
      }
    },

    dataAdmissaoValidation() {
      if (!this.cotacao.questionarios['9'].dataAdmissao) {
        return { valido: false, mensagemErro: 'Você deve nos informar sua data de admissão' };
      } else if (this.cotacao.questionarios['9'].dataAdmissao.length < 8) {
        return { valido: false, mensagemErro: 'Data de admissão deve conter 8 digítos' };
      } else {
        return { valido: true };
      }
    },

    salarioMensalValidation() {
      if (!this.cotacao.questionarios['9'].salarioMensal || this.cotacao.questionarios['9'].salarioMensal < 0) {
        return { valido: false, mensagemErro: 'Você deve nos informar seu salário mensal e ele não pode ser negativo' };
      } else {
        return { valido: true };
      }
    },

    valorAluguelValidation() {
      if (!this.cotacao.questionarios['9'].valorAluguel) {
        return { valido: false, mensagemErro: 'Você deve nos informar o valor do aluguel' };
      } else if (Number(this.cotacao.questionarios['9'].valorAluguel) < 0) {
        return { valido: false, mensagemErro: 'O valor do aluguel não pode ser negativo' };
      } else {
        return { valido: true };
      }
    },

    iptuMensalValidation() {
      if (!this.cotacao.questionarios['9'].iptuMensal) {
        return { valido: false, mensagemErro: 'Você deve nos informar o valor do IPTU mensal' };
      } else if (Number(this.cotacao.questionarios['9'].iptuMensal) < 0) {
        return { valido: false, mensagemErro: 'O valor do IPTU mensal não pode ser negativo' };
      } else {
        return { valido: true };
      }
    },

    condominioValidation() {
      const condominio = this.cotacao.questionarios['9'].condominio;

      if (condominio && Number(condominio) < 0) {
        return { valido: false, mensagemErro: 'O valor da conta de condomínio não pode ser negativo' };
      } else {
        return { valido: true };
      }
    },

    contaDeAguaValidation() {
      if (!this.cotacao.questionarios['9'].contaDeAgua) {
        return { valido: false, mensagemErro: 'Você deve nos informar o valor da conta de água' };
      } else if (Number(this.cotacao.questionarios['9'].contaDeAgua) < 0) {
        return { valido: false, mensagemErro: 'O valor da conta de água não pode ser negativo' };
      } else {
        return { valido: true };
      }
    },

    contaDeLuzValidation() {
      if (!this.cotacao.questionarios['9'].contaDeLuz) {
        return { valido: false, mensagemErro: 'Você deve nos informar o valor da conta de luz' };
      } else if (Number(this.cotacao.questionarios['9'].contaDeLuz) < 0) {
        return { valido: false, mensagemErro: 'O valor da conta de luz não pode ser negativo' };
      } else {
        return { valido: true };
      }
    },

    contaDeGasValidation() {
      const contaDeGas = this.cotacao.questionarios['9'].contaDeGas;

      if (contaDeGas && Number(contaDeGas) < 0) {
        return { valido: false, mensagemErro: 'O valor da conta de gás não pode ser negativo' };
      } else {
        return { valido: true };
      }
    },

    formValidation() {
      const campos = [
        'cep',
        'tipoImovel',
        'motivoLocacao',
        'quantidadeResponsaveis',
        'cpfResponsavel',
        'rgResponsavel',
        'estadoCivil',
        'cpfConjugue',
        'dependentes',
        'vinculoRenda',
        'empresaOndeTrabalha',
        'dataAdmissao',
        'salarioMensal',
        'valorAluguel',
        'iptuMensal',
        'condominio',
        'contaDeAgua',
        'contaDeLuz',
        'contaDeGas',
      ];

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
      if (cotacao.questionarios['9'] == null) {
        cotacao.questionarios['9'] = {
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
        if (quest > 9) {
          proximo = `/questionario/${quest}`;
        }
      }
      this.$router.push(proximo || '/contato');
    },
  },
};
</script>
