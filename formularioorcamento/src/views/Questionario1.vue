<template>
  <div>
    <div class="row p-2">
      <div
        class="message"
      >Sabemos que seu tempo é escasso! Por isso, nosso questionário foi montado sob medida com base em suas seleções na tela anterior! Na Postali Seguros buscaremos as melhores ofertas disponíveis no mercado, grátis e sem compromisso. Fique tranquilo! Cuidaremos dos seus dados e não enviaremos Spam! Também não gostamos disso!</div>
    </div>
    <div class="row mb-4">
      <div class="col-12 mb-2">Selecione TODOS os dispositivos de proteção de INCÊNDIO que você possui:</div>

      <div
        v-for="dispositivo in dispositivosIncendio"
        :key="dispositivo.codigo"
        :class="{'col-12': true, 'col-md-6': true, 'col-lg-4': true, 'p-1': true, opcao: true, ativo: dispSeleCod.incendio.includes(dispositivo.codigo)}"
        @click="selecionardispositivo(dispositivo, 'incendio')"
      >
        <div class="d-flex align-items-center">
          <span>{{dispositivo.nome}}</span>
          <div class="info" v-b-tooltip.hover :title="dispositivo.descricao">?</div>
        </div>
      </div>






      <div class="col-12 mt-4 mb-2">Selecione TODOS os dispositivos de proteção de ROUBO que você possui:</div>

      <div
        v-for="dispositivo in dispositivosRoubo"
        :key="dispositivo.codigo"
        :class="{'col-12': true, 'col-md-6': true, 'col-lg-4': true, 'p-1': true, opcao: true, ativo: dispSeleCod.roubo.includes(dispositivo.codigo)}"
        @click="selecionardispositivo(dispositivo, 'roubo')"
      >
        <div class="d-flex align-items-center">
          <span>{{dispositivo.nome}}</span>
          <div class="info" v-b-tooltip.hover :title="dispositivo.descricao">?</div>
        </div>
      </div>
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
      questionarios: {}
    },
    dispositivosIncendio: [
      {
        nome: "Extintor",
        codigo: "extintor",
        icon: "energy",
        descricao:
          "É um equipamento de segurança que tem a finalidade de extinguir ou controlar princípios de incêndios em casos de emergência"
      },
      {
        nome: "Detector de Fumaça",
        codigo: "detectorFumaca",
        icon: "energy",
        descricao:
          "É um dispositivo que detecta fumaça, geralmente como um indicador de fogo. O dispositivo emite um sinal para um painel de controle de alarme de incêndio, que emite um aviso sonoro ou visual"
      },
      {
        nome: "Hidrante",
        codigo: "hidrante",
        icon: "energy",
        descricao:
          'É um terminal hidráulico com mangueira e esguicho, localizado nas paredes dos corredores das edificações, conhecidos como "caixas de incêndio" por estar na parede, dentro de caixa vermelha e sinalizada'
      },
      {
        nome: "Chuveiros Automáticos (Sprinklers)",
        codigo: "sprinklers",
        icon: "energy",
        descricao:
          "É um dispositivo para a extinção de incêndios. Consiste numa armadura, com um cano conectado a uma tubagem de água a pressão. Quando se produz um incêndio, sai a água"
      },
      {
        nome: "Nenhum",
        codigo: "nenhumIncendio",
        icon: "energy",
        descricao:
          "O imóvel não possui nenhum dispositivo de segurança para evitar e proteger contra incêndios"
      }
    ],
    dispositivosRoubo: [
      {
        nome: "Alarme monitorado por telefone",
        codigo: "alarmeTelefone",
        icon: "energy",
        descricao:
          "Possui sensores que detectam a suspeita de invasão. A sirene faz barulho para chamar a atenção de pessoas próximas. O painel que aciona a sirene, envia os sinais para a central de monitoramento"
      },
      {
        nome: "Alarme monitorado por Radio Frequência e GSM (GRPS)",
        codigo: "alarmeGSM",
        icon: "energy",
        descricao:
          "É um sistema eletrônico de monitoramento via rádio frequencia. Não depende de terceiros, cabos, chip, internet ou energia elétrica"
      },
      {
        nome: "Vigilância Armada",
        codigo: "vigilanciaArmada",
        icon: "energy",
        descricao:
          "Serviço executado por empresas de segurança com o objetivo de garantir a proteção física das pessoas e a integridade do patrimônio"
      },
      {
        nome: "Sistema de detecção e Alarme Preventivo",
        codigo: "detecaoPreventivo",
        icon: "energy",
        descricao:
          "É um sistema de detecção de intrusão, composto por dispositivos periféricos, incluindo câmeras, colocados em locais estratégicos e com alertas telefônicos ou ligados numa central de monitoramento"
      },
      {
        nome: "Sistema de Alarme Infra-vermelho ou Impacto",
        codigo: "alarmeInfraVermelho",
        icon: "energy",
        descricao:
          "Realiza a identificação do movimento de corpo através do efeito doopler, uma espécie de radar que emite pulsos e analisa os sinais recebidos"
      },
      {
        nome: "Vigilância Exclusiva (24h por dia)",
        codigo: "vigilancia24",
        icon: "energy",
        descricao:
          "Serviço executado por empresa de segurança com o objetivo de garantir a proteção física das pessoas e a integridade do patrimônio por período de 24 horas 7 dias por semana"
      },
      {
        nome: "Grades e Fechaduras Tetras",
        codigo: "gradesFechaduraTetra",
        icon: "energy",
        descricao:
          "chave com quatro lados, cada um com segredo de quatro a oito pinos. Utilizado em fechaduras para portas externas. Grade: Instrumento de segurança estruturado por barrotes que se entrelaçam de alguma forma"
      },
      {
        nome: "Nenhum",
        codigo: "nenhumRoubo",
        icon: "energy",
        descricao:
          "O imóvel não possui nenhum dispositivo de proteção e de segurança física e do patrimônio"
      }
    ]
  }),

  computed: {
    dispSeleCod: function() {
      let questionario = this.cotacao.questionarios["1"];
      let dispositivosCodigo = { incendio: [], roubo: [] };
      for (let i in questionario.dispositivosIncendioSelecionados) {
        let dispositivo = questionario.dispositivosIncendioSelecionados[i];
        dispositivosCodigo.incendio.push(dispositivo.codigo);
      }
      for (let i in questionario.dispositivosRouboSelecionados) {
        let dispositivo = questionario.dispositivosRouboSelecionados[i];
        dispositivosCodigo.roubo.push(dispositivo.codigo);
      }
      return dispositivosCodigo;
    }
  },
  beforeMount() {
    if (JSON.parse(localStorage.getItem("cotacao"))) {
      let cotacao = JSON.parse(localStorage.getItem("cotacao"));
      if (cotacao.questionarios["1"] == null) {
        cotacao.questionarios["1"] = {
          dispositivosIncendioSelecionados: [],
          dispositivosRouboSelecionados: []
        };
      }
      this.cotacao = cotacao;
    } else {
      this.$router.push(`/`);
    }
  },
  methods: {
    removerDispositivo(codigo, tipo) {
      let nome =
        tipo == "incendio"
          ? "dispositivosIncendioSelecionados"
          : "dispositivosRouboSelecionados";
      let dispositivosSelecionados = this.cotacao.questionarios["1"][nome];
      for (let i in dispositivosSelecionados) {
        if (dispositivosSelecionados[i].codigo == codigo) {
          this.cotacao.questionarios["1"][nome].splice(i, 1);
        }
      }
    },
    selecionardispositivo(dispositivo, tipo) {
      let nome =
        tipo == "incendio"
          ? "dispositivosIncendioSelecionados"
          : "dispositivosRouboSelecionados";
      let nenhumCodigo = tipo == "incendio" ? "nenhumIncendio" : "nenhumRoubo";
      if (this.dispSeleCod[tipo].includes(dispositivo.codigo)) {
        this.removerDispositivo(dispositivo.codigo, tipo);
      } else {
        if (dispositivo.codigo == nenhumCodigo) {
          this.cotacao.questionarios["1"][nome] = [];
        } else if (this.dispSeleCod[tipo].includes(nenhumCodigo)) {
          this.removerDispositivo(nenhumCodigo, tipo);
        }
        this.cotacao.questionarios["1"][nome].push(dispositivo);
      }
    },
    voltar() {
      this.$router.back();
    },

    avancar() {
      localStorage.setItem("cotacao", JSON.stringify(this.cotacao));
      let proximo;
      for (const quest of Object.keys(this.cotacao.questionarios).reverse()) {
        if (quest > 1) {
          proximo = `/questionario/${quest}`;
        }
      }
      this.$router.push(proximo || "/contato");
    }
  }
};
</script>
