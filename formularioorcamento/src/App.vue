<template>
  <div id="app">
    <div class="nav">
      <div class="container">
        <div class="logo">
          <img
            src="https://www.postaliseguros.com.br/wp-content/uploads/2019/07/Logo_Postali_Corretora_Seguro_Pequeno_Site_145x_B5_5.png"
            alt
          />
        </div>
      </div>
    </div>
    <div class="home">
      <div class="container">
        <div class="row">
          <div class="col-12 col-md-4 p-3">
            <div class="row text-center">
              <b-card class="w-100 widget-consultor" title="FALE COM O SEU CONSULTOR">
                <div class="row">
                  <div class="col-12 col-lg-4 col-xl-3">
                    <div class="consultor"></div>
                  </div>
                  <div class="col text-left d-flex align-items-center text-center text-lg-left">
                    <div class="w-100">
                      
                    <div class="col-12">
                      <p><i class="fas fa-phone"></i> (19) 98854-5185</p>
                        
                    </div>
                    <div class="col-12">
                      <p>
                        <i class="fas fa-at"></i> contato@postaliseguros.com.br</p>
                    </div>
                    </div>
                  </div>
                </div>
              </b-card>
            </div>
            <div class="row text-center mt-3">
              <b-card class="w-100" title="JÁ POSSUI UMA APOLICE?">
                <p>Se deseja renovar ou alterar um seguro, nos encaminhe sua apólice, que entraremos em contato.</p>
                <p>
                  <b>contato@postaliseguros.com.br</b>
                </p>
              </b-card>
            </div>
          </div>

          <div class="col-12 col-md-8 p-4 order-first order-md-last">
            <router-view />
          </div>
        </div>
      </div>
    </div>

    <div class="footer">
      <div class="container">
        <hr />
        <div class="row">
          <div class="col-12 col-md-4 p-3">
            <div class="row">
              <div class="col text-center">
                <div>
                  <b>Dúvidas?</b> Ligue (19) 98854-5185
                </div>
                <div>Whatsapp (19) 98854-5185</div>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-8 p-3">
            <div class="row">
              <div
                class="col"
              >Copyright © 2020 - Postali Corretora de Seguros S/A - Todos os direitos reservados. O uso do site da Postali Corretora de Seguros S/A é sujeito as regras descritas no Termo de Uso e na Política de Privacidade. A Postali Seguros atua em estrita observância à legislação securitária.</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap");

* {
  font-family: "Roboto", sans-serif;
}
body {
  background-color: #f9f9f9 !important;
}

h1,
h2,
h3,
h4 {
  font-weight: 700 !important;
}
h1 {
  font-size: 26px !important;
}
h2 {
  font-size: 24px !important;
}
h3 {
  font-size: 22px !important;
}
h4 {
  font-size: 18px !important;
}
h4.card-title {
  border-bottom: 1px solid #a9a9a97d;
  padding: 0 0 10px 0;
}
.button {
  background: #166e80;
  color: white;
  padding: 10px 30px;
    border-radius: 42px;
  cursor: pointer;
  font-size: 17px;
  font-weight: 600;
}
@media (min-width: 374px) {
  .button {
    padding: 20px 45px;
  }
}
.button:hover {
  background: #17606f;
}
.message {
  background-color: #e6e7e8;
  margin-bottom: 20px;
  font-size: 15px;
  padding: 15px;
  color: #393739;
  border-radius: 13px;
}

input,
select {
  display: block;
  width: 100%;
  height: calc(1.5em + 0.75rem + 2px);
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #495057;
  background-color: #fff !important;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  margin: 0 0 10px;
}
div.vs__dropdown-toggle {
  background: white;
  border: 1px solid #dfdfdf;
  border-radius: 8px;
}
input[type="radio"] {
  width: 20px;
  height: 20px;
  float: left;
  margin: 0 5px 0 0;
}

input[type="radio"]:after {
  width: 12px;
  height: 12px;
  border-radius: 22px;
  top: -1px;
  left: 4px;
  position: relative;
  background-color: #eeeeee;
  content: "";
  display: inline-block;
  visibility: visible;
}

input[type="radio"]:checked:after {
  background-color: #166e80;
}

label {
  display: inline-block;
  margin-bottom: 0;
  width: 100%;
}

.opcao div {
  border: 1px solid #dfdfdf;
  border-radius: 10px;
  cursor: pointer;
  height: 100%;
  padding: 10px 35px 10px 45px;
  font-size: 13px;
  font-weight: 600;
  color: #166e80;
  background: white;
  line-height: 1.5;
  transition: 0.2s ease all;
}
.opcao div:hover {
  color: #ec981c;
}
.opcao .info {
  height: 15px;
  width: 15px;
  text-align: center;
  padding: 0;
  border-radius: 100%;
  position: absolute;
  top: 12px;
  right: 12px;
  border: 1px solid;
  font-weight: 700;
  font-size: 10px;
}
.opcao.ativo div,
.opcao.ativo div:hover {
  color: white;
  background: #166e80;
  border: 1px solid #166e80;
}
.opcao i {
  font-size: 25px;
  margin: 0 10px 0 -35px;
}

.numeroCotacao {
  background: #357988;
  padding: 10px;
  font-size: 21px;
  color: white;
  border-radius: 20px;
  text-align: center;
  margin: 20px 0 0;
}
.nav {
  background: white;
  padding: 15px 0;
  border-bottom: 1px solid gainsboro;
}
@media (min-width: 1024px) {
  .container,
  .container-sm,
  .container-md,
  .container-lg,
  .container-xl {
    max-width: calc(100% - 100px) !important;
  }

  h1:before,
  h2:before,
  h3:before {
    content: "";
    position: absolute;
    margin: 30px 0 0;
    width: 70px;
    border-bottom: 4px solid #166e80;
  }
}
.coberturasSelecionadas .coberturaS {
  font-size: 11px;
  font-weight: 500;
  padding: 0 15px 15px;
}

.coberturasSelecionadas .coberturaS::after {
  content: "x";
  position: absolute;
  right: 0;
  top: 0;
  width: 20px;
  height: 20px;
  border: 2px solid;
  line-height: 1;
  border-radius: 10px;
  color: #166e80;
  background: #ffffff;
  cursor: pointer;
  padding: 2px 0 0 5px;
  font-size: 11px;
  font-weight: 900;
}

.coberturasSelecionadas .coberturaS div {
  border-bottom: 1px solid #d8d8d8;
  height: 100%;
}
div.consultor {
  background-image: url(/img/consultor.jpg);
  width: 100px;
  height: 100px;
  background-size: cover;
  background-position: center;
  border-radius: 100%;
  border: 1px solid #d5d5d5;
  margin: 0 auto 10px;
}
.widget-consultor p {
  font-size: 14px;
  margin: 0 0 5px;
}
</style>
