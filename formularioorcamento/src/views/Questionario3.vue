<template>
  <div>
    <div class="row p-2">
      <div
        class="message"
      >Sabemos que seu tempo é escasso! Por isso, nosso questionário foi montado sob medida com base em suas seleções na tela anterior! Na Postali Seguros buscaremos as melhores ofertas disponíveis no mercado, grátis e sem compromisso. Fique tranquilo! Cuidaremos dos seus dados e não enviaremos Spam! Também não gostamos disso!</div>
    </div>
    <div class="row mb-4">
      <div class="col-6 text-right mb-3 d-flex align-items-center">
        <label
          for="localEspecial"
        >Está localizado em lugares especiais e compartilhado com outros estabelecimentos?</label>
      </div>
      <div class="col-6 text-left mb-3 d-flex align-items-center">
        <select
          name="localEspecial"
          id="localEspecial"
          v-model="cotacao.questionarios['3'].localEspecial"
        >
          <option value="Shopping Center">Shopping Center</option>
          <option value="Aeroporto">Aeroporto</option>
          <option value="Ceasa ou Simulares">Ceasa ou Simulares</option>
          <option value="Mercadões">Mercadões</option>
          <option value="Supermercados">Supermercados</option>
          <option value="Coworking">Coworking</option>
          <option value="Não">Não</option>
        </select>
      </div>
      <div class="col-6 text-right mb-3 d-flex align-items-center">
        <label for="idadeDoImovel">Qual a idade do imóvel?</label>
      </div>
      <div class="col-6 text-left mb-3 d-flex align-items-center">
        <select
          name="idadeDoImovel"
          id="idadeDoImovel"
          v-model="cotacao.questionarios['3'].idadeDoImovel"
        >
          <option value="até 5 anos">até 5 anos</option>
          <option value="de 6 a 10 anos">de 6 a 10 anos</option>
          <option value="de 11 a 15 anos">de 11 a 15 anos</option>
          <option value="de 16 a 20 anos">de 16 a 20 anos</option>
          <option value="acima de 20 anos">acima de 20 anos</option>
          <option value="não sei responder">não sei responder</option>
        </select>
      </div>

      <div class="col-6 text-right mb-3 d-flex align-items-center">
        <label for="paredesExternas">As paredes EXTERNAS do imóvel são de:</label>
      </div>
      <div class="col-6 text-left mb-3 d-flex align-items-center">
        <div class="row">
          <div class="col-12">
            <label for="alvenaria">
              <input
                name="paredesExternas"
                type="radio"
                id="alvenaria"
                value="alvenaria"
                v-model="cotacao.questionarios['3'].paredesExternas"
              />Totalmente de tijolos e concreto (alvenaria)
            </label>
          </div>
          <div class="col-12">
            <label for="ate25madeira">
              <input
                name="paredesExternas"
                type="radio"
                id="ate25madeira"
                value="ate25madeira"
                v-model="cotacao.questionarios['3'].paredesExternas"
              />Até 25% de construção de madeira
            </label>
          </div>
          <div class="col-12">
            <label for="acima25madeira">
              <input
                name="paredesExternas"
                type="radio"
                id="acima25madeira"
                value="acima25madeira"
                v-model="paredesExternas"
              />Acima de 25% de construção de madeira
            </label>
          </div>
          <div class="col-12">
            <label for="totalmenteMadeira">
              <input
                name="paredesExternas"
                type="radio"
                id="totalmenteMadeira"
                value="totalmenteMadeira"
                v-model="paredesExternas"
              />Totalmente de madeira
            </label>
          </div>
        </div>
      </div>

      <div class="col-6 text-right mb-3 d-flex align-items-center">
        <label for="telhado">O telhado ou cobertura do imóvel é de:</label>
      </div>
      <div class="col-6 text-left mb-3 d-flex align-items-center">
        <div class="row">
          <div class="col-12">
            <label for="lajeconcreto">
              <input
                name="telhado"
                type="radio"
                id="lajeconcreto"
                value="lajeconcreto"
                v-model="cotacao.questionarios['3'].telhado"
              />Laje de Concreto
            </label>
          </div>
          <div class="col-12">
            <label for="forroMadeiraOuGesso">
              <input
                name="telhado"
                type="radio"
                id="forroMadeiraOuGesso"
                value="forroMadeiraOuGesso"
                v-model="cotacao.questionarios['3'].telhado"
              />Forro de madeira ou Gesso (SEM Laje de Concreto)
            </label>
          </div>
          <div class="col-12">
            <label for="barroOuFibrocimento">
              <input
                name="telhado"
                type="radio"
                id="barroOuFibrocimento"
                value="barroOuFibrocimento"
                v-model="cotacao.questionarios['3'].telhado"
              />Telha de barro ou Fibrocimento (SEM Laje de Concreto)
            </label>
          </div>
        </div>
      </div>

      <div class="col-6 text-right mb-3 d-flex align-items-center">
        <label for="maisDeUmEnderecoComercial">Você possui mais de um endereço comercial?</label>
      </div>
      <div class="col-6 text-left mb-3 d-flex align-items-center">
        <div class="row w-100">
          <div class="col">
            <label for="sim">
              <input
                name="maisDeUmEnderecoComercial"
                type="radio"
                id="sim"
                value="sim"
                v-model="cotacao.questionarios['3'].maisDeUmEnderecoComercial"
              />Sim
            </label>
          </div>
          <div class="col">
            <label for="nao">
              <input
                name="maisDeUmEnderecoComercial"
                type="radio"
                id="nao"
                value="nao"
                v-model="cotacao.questionarios['3'].maisDeUmEnderecoComercial"
              />Não
            </label>
          </div>
        </div>
      </div>

      <div class="col-12 my-4">
        <div
          class="message"
        >Definir o valor do seguro requer um pouco de reflexão e depende de sua necessidade: Contrato de Aluguel: selecione o valor de seguro exigido no contrato de locação Seguro completo: considerar a soma de valores de reconstrução do imóvel equipamentos móveis estoque e matéria-prima Recomendamos adicionar entre 10% e 20% de margem de segurança no valor para eventuais oscilações. Tá com dúvida? Fale com nosso Consultor de Vendas!</div>
      </div>

      <div class="col-6 text-right mb-3 d-flex align-items-center">
        <label for="prioridade">Selecione a sua necessidade e prioridade:</label>
      </div>
      <div class="col-6 text-left mb-3 d-flex align-items-center">
        <div class="row">
        <div class="col-12">
          <label for="contratoAluguel">
            <input
              name="prioridade"
              type="radio"
              id="contratoAluguel"
              value="contratoAluguel"
              v-model="cotacao.questionarios['3'].prioridade"
            />Quero atender APENAS o Contrato de Aluguel
          </label>
        </div>
        <div class="col-12">
          <label for="seguroCompleto">
            <input
              name="prioridade"
              type="radio"
              id="seguroCompleto"
              value="seguroCompleto"
              v-model="cotacao.questionarios['3'].prioridade"
            />Quero um Seguro COMPLETO
          </label>
        </div>
        </div>
      </div>
      <div class="col-6 text-right mb-3 d-flex align-items-center">
        <label for="valorSeguro">Selecione o valor do Seguro Empresarial de sua preferência?</label>
      </div>
      <div class="col-6 text-left mb-3 d-flex align-items-center">
        <select
          name="valorSeguro"
          id="valorSeguro"
          v-model="cotacao.questionarios['3'].valorSeguro"
        >
          <option value="50000">R$ 50.000</option>
          <option value="100000">R$ 100.000</option>
          <option value="200000">R$ 200.000</option>
          <option value="300000">R$ 300.000</option>
          <option value="400000">R$ 400.000</option>
          <option value="500000">R$ 500.000</option>
          <option value="600000">R$ 600.000</option>
          <option value="700000">R$ 700.000</option>
          <option value="800000">R$ 800.000</option>
          <option value="900000">R$ 900.000</option>
          <option value="1000000">R$ 1.000.000</option>
          <option value="1200000">R$ 1.200.000</option>
          <option value="1500000">R$ 1.500.000</option>
          <option value="1750000">R$ 1.750.000</option>
          <option value="2000000">R$ 2.000.000</option>
          <option value="+2000000">Acima de R$ 2.000.000</option>
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
  name: "Home",
  data: () => ({
    cotacao: {
      questionarios: {}
    }
  }),

  beforeMount() {
    if (JSON.parse(localStorage.getItem("cotacao"))) {
      let cotacao = JSON.parse(localStorage.getItem("cotacao"));
      if (cotacao.questionarios["3"] == null) {
        cotacao.questionarios["3"] = {
          localEspecial: "Shopping Center",
          idadeDoImovel: "até 5 anos",
          paredesExternas: null,
          telhado: null,
          maisDeUmEnderecoComercial: null,
          prioridade: null,
          valorSeguro: 50000
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
      localStorage.setItem("cotacao", JSON.stringify(this.cotacao));
      let proximo;
      for (const quest of Object.keys(this.cotacao.questionarios).reverse()) {
        if (quest > 3) {
          proximo = `/questionario/${quest}`;
        }
      }
      this.$router.push(proximo || "/contato");
    }
  }
};
</script>
