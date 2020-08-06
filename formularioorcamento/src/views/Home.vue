<template>
  <div>
    <div class="row p-2">
      <div class="col">
        <h1>Selecione quais coberturas você gostaria de cotar:</h1>
        <p>Sem limites! Escolha quantas você quiser.</p>
      </div>
    </div>
    <div class="row p-2">
      <div
        v-for="cobertura in coberturasExibidas"
        :key="cobertura.codigo"
        :class="{'col-12': true, 'col-md-6': true, 'col-lg-4': true, 'col-xl-4': true, 'p-1': true, opcao: true, ativo: coberturasSelecionadas.includes(cobertura)}"
        @click="selecionarCobertura(cobertura.codigo)"
      >
        <div class="d-flex align-items-center">
          <i :class="'fas fa-'+cobertura.icon"></i>
          <span>{{cobertura.nome}}</span>
          <div class="info" v-b-tooltip.hover :title="cobertura.descricao">?</div>
        </div>
      </div>
      <div
        class="col-12 col-md-6 col-lg-4 col-xl-4 p-1 opcao"
        v-if="!colapsado"
        @click="colapsado = true"
      >
        <div class="d-flex align-items-center">
          <i class="fas fa-plus"></i>
          <span>Exibir mais</span>
        </div>
      </div>
    </div>
    <v-select
      :value="pesquisa"
      :options="coberturasPesquisa"
      @input="selecionaPesquisa"
      placeholder="Não encontrou o que procurava? Procure aqui."
    ></v-select>
    <hr />

    <div class="row p-2">
      <h2>Coberturas selecionadas</h2>
    </div>
    <div class="col-12 col-xl-9">
      <div class="row p-2 coberturasSelecionadas">
        <div
          v-for="cobertura in coberturasSelecionadas"
          :key="cobertura.codigo"
          class="col-12 col-md-4 coberturaS"
          @click="selecionarCobertura(cobertura.codigo)"
        >
          <div :class="{'p-2': true}">{{cobertura.nome}}</div>
        </div>
      </div>
    </div>

    <hr />
    <div
      class="button float-right"
      v-show="coberturasSelecionadas.length"
      @click="avancar()"
    >Continuar</div>
  </div>
</template>
<script>
// @ is an alias to /src
export default {
  name: "Home",
  data: () => ({
    coberturasSelecionadas: [],
    pesquisa: "",
    colapsado: false,
    coberturas: [
      {
        nome: "Danos Morais",
        codigo: "7",
        icon: "thumbtack",
        questionarios: [1, 2, 3, 4],
        descricao:
          "O seguro reembolsará os valores que você vier a ser responsabilizado civilmente, por sentença judicial transitada e julgado ou acordo, por danos morais decorrentes de danos corporais ou materiais causados a terceiros"
      },
      {
        nome: "Incêndio, Queda de Raio e Explosão",
        codigo: "11",
        icon: "fire-alt",
        questionarios: [1, 2, 3, 4],
        descricao:
          "Garante os prejuízos causados ao seu estabelecimento e residência, no caso de um incêndio, queda de raio ou explosão"
      },
      {
        nome: "Responsabilidade Civil Operações",
        codigo: "13",
        icon: "hard-hat",
        questionarios: [1, 2, 3, 4],
        descricao:
          "Garante o reembolso das indenizações pagas a terceiros por reparação de danos materiais ou corporais sofridos acidentalmente em decorrência da existência ou operação da empresa"
      },
      {
        nome: "Vendaval, Furação Ciclone, Tornado e Granizo",
        codigo: "14",
        icon: "poo-storm",
        questionarios: [1, 2, 3, 4],
        descricao:
          "Garante danos materiais causados aos bens por vendaval, furacão, ciclone, tornado e granizo "
      },
      {
        nome: "Roubo de Valores no Caixa da Empresa",
        codigo: "15",
        icon: "cash-register",
        questionarios: [1, 2, 3, 4],
        descricao:
          "Garante o pagamento pelos prejuízos decorrentes de roubo ou furto qualificado ou simples tentativa de dinheiro ou cheques, comprovadamente emitidos ou recebidos, relativos ao movimento diário do caixa do dia do evento"
      },
      {
        nome: "Alagamento e Inundação",
        codigo: "17",
        icon: "tint",
        questionarios: [1, 2, 3, 4],
        descricao:
          "Garante o pagamento de prejuízos pelas perdas ou danos materiais causados aos bens segurados por alagamento ou inundação "
      },
      {
        nome: "Desmoronamento",
        codigo: "19",
        icon: "house-damage",
        questionarios: [1, 2, 3, 4],
        descricao:
          "Garante danos causados ao consultório por desmoronamento total ou parcial do imóvel e os custos de proteção dos bens segurados"
      },
      {
        nome: "Pequenas Obras",
        codigo: "20",
        icon: "hammer",
        questionarios: [1, 2, 3, 4],
        descricao:
          "Garante o pagamento de danos materiais causados aos bens decorrentes de origem súbita e imprevista onde se efetuarem pequenas obras de engenharia, ampliação, reparo ou reforma"
      },

      {
        nome: "Pagamento por Doenças Graves",
        codigo: "3",
        icon: "procedures",
        questionarios: [5],
        descricao:
          "Garante o pagamento de indenização em caso de diagnóstico de doenças graves, como por exemplo: Câncer, AVC, Infarto e outras"
      },
      {
        nome: "Proteção Financeira por Perda de Renda",
        codigo: "4",
        icon: "hand-holding-usd",
        questionarios: [5],
        descricao:
          "Proteção financeira de sua renda no caso de você se afastar da atividade profissional por motivo de doença ou acidente"
      },
      {
        nome: "Invalidez por Acidente",
        codigo: "5",
        icon: "crutch",
        questionarios: [5],
        descricao:
          "Garante o pagamento em caso de invalidez permanente de alguns membros ou órgãos causados por acidente"
      },
      {
        nome: "Seguro de Vida",
        codigo: "6",
        icon: "heartbeat",
        questionarios: [5],
        descricao:
          "Garante o pagamento em caso de morte natural ou por acidente, invalidez por acidente ou invalidez por doença"
      },
      {
        nome: "Diagnóstico de Câncer",
        codigo: "12",
        icon: "notes-medical",
        questionarios: [5],
        descricao:
          "Garante o pagamento da indenização em caso de diagnóstico de alguns tipos de câncer"
      },
      {
        nome: "Despesas Médicas e Hospitalares por Acidente",
        codigo: "16",
        icon: "hospital",
        questionarios: [5],
        descricao:
          "Garante o reembolso de despesas médico hospitalares e odontológicas em caso de acidente"
      },
      {
        nome: "Assistência com Funeral",
        codigo: "18",
        icon: "cross",
        questionarios: [5],
        descricao:
          "Garante a prestação de serviços com funeral e sepultamento a partir do acionamento de uma central telefônica disponivel 24 horas e 7 dias da semana"
      },
      {
        nome: "Equipamentos Eletrônicos",
        codigo: "1",
        icon: "memory",
        questionarios: [1], //somente anti roubo
        descricao:
          "Garante danos físicos, roubo e furto qualificado causado aos seus equipamentos eletrônicos portáteis do seu estabelecimento"
      },
      {
        nome: "Erros e Omissões Profissionais",
        codigo: "2",
        icon: "angry",
        questionarios: [2, 7],
        descricao:
          "Garante o pagamento das indenizações de prejuizo financeiro, dano material, moral e corporal, caso você seja condenado por decisão judicial transitado em julgado ou decisão final preferida por tribunal"
      },
      {
        nome: "Equipamentos Portáteis",
        codigo: "8",
        icon: "laptop",
        questionarios: [6],
        descricao:
          "Garante danos materiais, roubo e furto qualificado causado aos equipamentos eletrônicos portáteis, como Smartphones, notebooks, câmeras fotográficas e outros equipamentos seja para uso pessoal, profissional ou lazer"
      },
      {
        nome: "Despesas Fixas",
        codigo: "9",
        icon: "file-invoice-dollar",
        questionarios: [1, 2, 3, 4], //somente anti roubo
        descricao:
          "Garante o reembolso de salário, contas de água, luz, telefone, condominio, IPTU e aluguel, após a ocorrência de incêndio, raio e explosão que acarrete a paralisação das atividades exercidas na empresa"
      },
      {
        nome: "Seguro Finança Locatícia",
        codigo: "10",
        icon: "home",
        questionarios: [4, 9],
        descricao:
          "É um seguro que substitui um fiador em contratos de locação. Garante o pagamento do aluguel e de multa moratória. "
      },
      {
        nome: "Despesas de Defesa em Processos Judiciais",
        codigo: "21",
        icon: "gavel",
        questionarios: [2, 7],
        descricao:
          "Garante o pagamento de honorários advocatícios, laudos e pericias, depósitos recursais, sucumbências e demais despesas do processo nas esferas Civil, Administrativa, Criminal e Arbitral por reclamação de terceiro pela sua Prestação de Serviço"
      },
      {
        nome: "Investimento Financeiro",
        codigo: "22",
        icon: "dollar-sign",
        questionarios: [10],
        descricao:
          "Garante um valor no futuro para sua aposentadoria através de uma previdencia privada"
      },
      {
        nome: "Consórcio Financeiro",
        codigo: "23",
        icon: "money-bill-wave",
        questionarios: [], //falta tela
        descricao:
          "Garante a compra de imóveis, automóvel, credito para construção e giro de capital através de uma carta com taxa mais baixa do mercado"
      }
    ]
  }),
  computed: {
    coberturasPesquisa() {
      let pesquisa = [];
      for (let i in this.coberturas) {
        if (!this.coberturasSelecionadas.includes(this.coberturas[i])) {
          pesquisa.push({
            label: this.coberturas[i].nome,
            code: this.coberturas[i].codigo
          });
        }
      }
      return pesquisa;
    },
    coberturasExibidas() {
      return this.colapsado ? this.coberturas : this.coberturas.slice(0, 11);
    }
  },
  methods: {
    selecionaPesquisa(cobertura) {
      this.pesquisa = "";
      this.selecionarCobertura(cobertura.code);
    },
    selecionarCobertura(codigo) {
      let cobertura;
      for (let i in this.coberturas) {
        if (this.coberturas[i].codigo == codigo) {
          cobertura = this.coberturas[i];
        }
      }
      if (this.coberturasSelecionadas.includes(cobertura)) {
        this.coberturasSelecionadas.splice(
          this.coberturasSelecionadas.indexOf(cobertura),
          1
        );
      } else {
        this.coberturasSelecionadas.push(cobertura);
      }
    },
    avancar() {
      let questionarios = {};
      for (let i in this.coberturasSelecionadas) {
        let cobertura = this.coberturasSelecionadas[i];
        for (let i in cobertura.questionarios) {
          let questionario = cobertura.questionarios[i];
          questionarios[questionario] = null;
        }
      }
      let cotacao = {
        data: "hoje",
        coberturasSelecionadas: this.coberturasSelecionadas,
        questionarios: questionarios,
        identificacao: {
          nomeCompleto: null,
          genero: null,
          dataNascimento: null,
          email: null,
        ocupacao: null
        }
      };
      localStorage.setItem("cotacao", JSON.stringify(cotacao));
      this.$router.push(`/identificacao`);
    }
  }
};
</script>
