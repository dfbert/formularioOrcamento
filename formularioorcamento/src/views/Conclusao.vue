<template>
  <div>
    <div class="row">
      <div class="col-12">
        <h1>Seu pedido de cotação foi finalizado com sucesso!</h1>
        <p class="mt-4">
          Seguro é um planejamento financeiro, você acabou de dar um passo muito importante neste sentido. Enviaremos um orçamento personalizado em até
          <strong>8 horas</strong> úteis.
        </p>
      </div>
      <div class="col-12">
        <p>Ate lá ficamos a disposição pelos canais:</p>
        <div>(19) 98854-5185</div>
        <div>seuseguro@postaliseguros.com.br</div>
      </div>
    </div>
    <div class="row mt-4">
      <div class="col-12">
        <h2>Nº da Cotação:</h2>
        <div class="numeroCotacao text-uppercase">2020-{{numero.split('-')[0]}}</div>
      </div>
    </div>
  </div>
</template>
<script>
// @ is an alias to /src
const { v4: uuidv4 } = require("uuid");

export default {
  name: "Home",
  methods: {},
  data: () => ({
    numero: uuidv4()
  })
};
</script>
