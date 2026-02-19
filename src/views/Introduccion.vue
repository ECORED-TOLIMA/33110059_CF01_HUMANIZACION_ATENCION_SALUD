<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-3
        figure(data-aos="zoom-in")
          img.img-fluid(src="@/assets/curso/temas/intro/img1.svg" alt="Icono 1")
      .col-lg-9.mb-0.mb-lg-0
        .cajon.color-primario.p-4.mb-4
          p.mb-0(data-aos="fade-left")  En este componente formativo se abordará la comprensión del ser humano desde una perspectiva integral, reconociendo su dimensión histórica, social, emocional y ética, así como la influencia del humanismo en la construcción de su dignidad y sentido. Se analizarán los componentes que configuran al ser humano y los lineamientos normativos vigentes en Colombia que orientan su reconocimiento y protección, especialmente en los contextos sociales y de atención en salud.
        .row.justify-content-center
          .col-lg-2.d-none.d-lg-block
            figure(data-aos="zoom-in")
              img.img-fluid(src="@/assets/curso/temas/intro/img2.svg" alt="Icono 1")
          .col-lg-10
            p.mb-0(data-aos="fade-left") Asimismo, se profundizará en el concepto de humanización en salud, sus fundamentos teóricos y su relevancia para el diseño de prácticas centradas en las personas, las familias y las redes de apoyo. Este enfoque permitirá reflexionar sobre la relación, el vínculo y la comunicación como ejes esenciales del cuidado, destacando el manejo de las emociones y el desarrollo de una comunicación asertiva y efectiva como herramientas clave para fortalecer la calidad de la atención y las interacciones humanas.
    p.mb-4 Partiendo de lo anterior, se invita a que acceda al siguiente video, el cual relaciona la temática a tratar durante este componente formativo:
    .row.justify-content-center.align-items-center
      .col-lg-12
        figure(data-aos="zoom-in")
          .video
            iframe(width="1401" height="788" src="https://www.youtube.com/embed/wZ4HmbScaAg" title="Contextualización ser humano y humanización en salud" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen)

</template>

<script>
export default {
  name: 'Introduccion',
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
