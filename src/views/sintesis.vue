<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p Este componente formativo ofrece una comprensión integral del ser humano desde una perspectiva histórica, conceptual y normativa, reconociendo su carácter biopsicosocial, ético y relacional. A partir del contexto histórico del humanismo y del análisis de los componentes que constituyen al ser humano, se promueve una mirada reflexiva sobre la dignidad, los derechos y el valor de la persona en los distintos ámbitos de la vida social. Asimismo, se abordan los lineamientos normativos vigentes en Colombia que orientan la protección, el respeto y la garantía de condiciones dignas para el desarrollo humano.
    p.mb-0 De manera complementaria, el componente profundiza en la humanización en salud como un enfoque fundamental para la atención centrada en la persona, integrando su conceptualización con la importancia de la relación, el vínculo y la comunicación en los procesos de cuidado. Se enfatiza el manejo adecuado de las emociones y el desarrollo de una comunicación asertiva y efectiva como herramientas clave para fortalecer la interacción entre profesionales de la salud, usuarios y familias. Con ello, se fomenta una práctica ética, empática y responsable que contribuye a mejorar la calidad de la atención, el bienestar emocional y la construcción de relaciones humanas basadas en el respeto y la confianza.

    .row.justify-content-center
      .col-lg-10.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/sintesis.svg", alt="La síntesis del componente formativo Contextualización ser humano y humanización en salud, presenta una ruta secuencial que inicia con la comprensión del ser humano desde su contexto histórico humanista y sus componentes esenciales, continúa con la revisión de los lineamientos normativos que lo regulan en Colombia y avanza hacia la conceptualización de la humanización en salud. Este recorrido se complementa con el análisis de la relación, el vínculo, el manejo de emociones y la comunicación asertiva y efectiva, permitiendo integrar dimensiones históricas, normativas y relacionales para fortalecer prácticas éticas y empáticas en la atención en salud.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
