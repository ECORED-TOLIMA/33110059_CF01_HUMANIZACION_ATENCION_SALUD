<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Lineamientos normativos ser humano en Colombia
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-12
        figure(data-aos="zoom-in")
          img.img-fluid(src="@/assets/curso/temas/tema2/img1.png" alt="Imagen decorativa")
    p.mb-4(data-aos="fade-left") La humanización en la atención en salud en Colombia, se sustenta en un sólido marco normativo que reconoce la dignidad humana, el derecho fundamental a la salud y la responsabilidad del Estado y de la sociedad en su garantía. Estas normas orientan la organización del sistema de salud, la calidad de los servicios y las prácticas de atención, promoviendo un enfoque centrado en la persona, la familia y el contexto social.
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-3.col-6.mb-4.mb-lg-0
        figure(data-aos="zoom-in")
          img.img-fluid(src="@/assets/curso/temas/tema2/img2.svg" alt="Icono 1")
      .col-lg-9.mb-4.mb-lg-0
        .row.justify-content-center.mb-3
          .col-lg-2.d-none.d-lg-block
            figure(data-aos="zoom-in")
              img.img-fluid(src="@/assets/curso/temas/tema2/img3.svg" alt="Icono 1")
          .col-lg-10(data-aos="fade-left")
            p.mb-0(data-aos="fade-left") Desde la Constitución Política de Colombia, la salud se concibe como un servicio público esencial y un derecho estrechamente vinculado al derecho a la vida, principio que ha sido reafirmado por la Corte Constitucional y desarrollado mediante leyes estatutarias, políticas públicas y modelos de atención integral. Este marco legal establece que la atención en salud debe ser oportuna, accesible, aceptable, continua, de calidad y libre de tratos crueles o degradantes, incorporando explícitamente la humanización como eje transversal.
        .cajon.color-secundario.p-4.mb-4
          p.mb-0(data-aos="fade-left")  Asimismo, las políticas como el Sistema Obligatorio de Garantía de la Calidad (SOGC), el Plan Decenal de Salud Pública (PDSP), la Política de Atención Integral en Salud (PAIS) y los modelos como el MIAS y el MAITE, junto con las leyes que regulan el talento humano en Salud, consolidan la humanización como un principio orientador de la gestión, la prestación de servicios y la cultura institucional. En conjunto, estos lineamientos normativos buscan asegurar que la atención en salud en Colombia se base en el respeto, la ética, la calidad y el reconocimiento integral del ser humano.
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        p.mb-4(data-aos="fade-left") Para mayor claridad, se relaciona la siguiente explicación normativa, indicando el accionar y evolución de cada una, así como los aspectos más destacados en cada lineamiento:
    .tarjeta.color-acento-botones.p-3.mb-5(data-aos="fade-right")
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/temas/tema2/img4.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-sm-0.mb-4
              h3.mb-1 Lineamientos normativos en humanización
              p Se presenta de manera general los lineamientos normativos que sustentan la humanización del ser humano en la atención en salud en Colombia.
            .col-sm-auto
              a.boton.color-acento-botones(:href="obtenerLink('/downloads/Anexo_Hacia_una_comunicacion_efectiva.pdf')" target="_blank" type="application/pdf")
                span Descargar
                i.fas.fa-file-download

</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
