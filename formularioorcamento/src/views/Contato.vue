<template>
  <div>
    <div class="row">
      <div
        class="message"
      >Sabemos que seu tempo é escasso! Por isso, nosso questionário foi montado sob medida com base em suas seleções na tela anterior! Na Postali Seguros buscaremos as melhores ofertas disponíveis no mercado, grátis e sem compromisso. Fique tranquilo! Cuidaremos dos seus dados e não enviaremos Spam! Também não gostamos disso!</div>
    </div>
      <div class="row">
        <div class="col-6 text-right mb-3 d-flex align-items-center">
          <label for="cpf">Qual o seu CPF?</label>
        </div>
        <div class="col-6 text-left mb-3 d-flex align-items-center">
          <the-mask
            type="text"
            id="cpf"
            :mask="['###.###.###-##']"
            placeholder="___.___.___-__"
            v-model="cotacao.contato.cpf"
          />
        </div>

        <div class="col-6 text-right mb-3 d-flex align-items-center">
          <label for="telefone">Telefone principal:</label>
        </div>
        <div class="col-6 text-left mb-3 d-flex align-items-center">
          <the-mask
            type="text"
            id="telefone"
            :mask="['(##) #####-####', '(##) ####-####']"
            placeholder="(__) _____-____"
            v-model="cotacao.contato.telefone"
          />
        </div>
        <div class="col-6 text-right mb-3 d-flex align-items-center">
          <label for="telefoneAdicional">Telefone adicional:</label>
        </div>
        <div class="col-6 text-left mb-3 d-flex align-items-center">
          <the-mask
            type="text"
            id="telefoneAdicional"
            :mask="['(##) #####-####', '(##) ####-####']"
            placeholder="(__) _____-____"
            v-model="cotacao.contato.telefoneAdicional"
          />
        </div>

        <div class="col-12 col-lg-6 text-center text-lg-right mb-3 d-flex align-items-center">
          <label for="canal">Como prefere receber a cotação?</label>
        </div>
        <div class="col-12 col-lg-6 text-left mb-3 d-flex align-items-center">
          <div class="row w-100">
            <div class="col">
              <label for="whatsapp">
                <input
                  type="radio"
                  id="whatsapp"
                  name="canal"
                  value="whatsapp"
                  v-model="cotacao.contato.canal"
                />Whatsapp
              </label>
            </div>
            <div class="col">
              <label for="email">
                <input
                  type="radio"
                  id="email"
                  name="canal"
                  value="email"
                  v-model="cotacao.contato.canal"
                />E-mail
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
// @ is an alias to /src
export default {
  name: "Home",
  data: () => ({
    cotacao: {
      contato: null
    }
  }),

  beforeMount() {
    if (JSON.parse(localStorage.getItem("cotacao"))) {
      let cotacao = JSON.parse(localStorage.getItem("cotacao"));
      if (cotacao.contato == null) {
        cotacao.contato = {
          nomeCompleto: null,
          genero: null,
          dataNascimento: null,
          email: null
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
      this.$router.push("/conclusao");
    }
  }
};
</script>
