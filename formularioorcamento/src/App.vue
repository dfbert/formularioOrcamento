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
                        <p><i class="fas fa-at"></i> contato@postaliseguros.com.br</p>
                      </div>
                    </div>
                  </div>
                </div>
              </b-card>
            </div>
            <div class="row text-center mt-3">
              <b-card class="w-100" title="JÁ POSSUI UMA APOLICE?">
                <p>
                  Se deseja renovar ou alterar um seguro, nos encaminhe sua apólice, que entraremos em contato.
                </p>
                <p>
                  <b>contato@postaliseguros.com.br</b>
                </p>
              </b-card>
            </div>
          </div>

          <div class="col-12 col-md-8 p-4 order-first order-md-last">
            <transition name="slide" mode="out-in">
              <router-view />
            </transition>
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
                <div><b>Dúvidas?</b> Ligue (19) 98854-5185</div>
                <div>Whatsapp (19) 98854-5185</div>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-8 p-3">
            <div class="row">
              <div class="col">
                Copyright © 2020 - Postali Corretora de Seguros S/A - Todos os direitos reservados. O uso do site da
                Postali Corretora de Seguros S/A é sujeito as regras descritas no Termo de Uso e na Política de
                Privacidade. A Postali Seguros atua em estrita observância à legislação securitária.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
