<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad                
        <Actividad :cuestionario="cuestionario"/>
  
  </template>

<script>
import Actividad from 'ecored-pkg-fliz/plugin/components/actividad/Actividad.vue'
export default {
  name: 'ActividadDidactica',
  components: {
    Actividad,
  },
  data: () => ({
    cuestionario: {
      tema: 'Contextualización del ser humano y humanización en salud',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> analizar los fundamentos del ser humano y la humanización en salud para promover una atención ética, empática y centrada en la persona.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO.',
      preguntas: [
        {
          id: 1,
          texto:
            'Comprender al ser humano desde una perspectiva integral implica reconocer:',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Únicamente su dimensión biológica.',
              esCorrecta: false,
            },
            { id: 'b', texto: 'Solo su contexto social.', esCorrecta: false },
            {
              id: 'c',
              texto:
                'La interacción de dimensiones físicas, psicológicas, sociales, emocionales, culturales y espirituales.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Exclusivamente su capacidad racional.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! El ser humano es multidimensional y no puede reducirse a una sola dimensión.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 2,
          texto:
            'La dimensión emocional del ser humano se relaciona principalmente con:',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Las normas jurídicas.', esCorrecta: false },
            {
              id: 'b',
              texto: 'El manejo y expresión de emociones y sentimientos.',
              esCorrecta: true,
            },
            { id: 'c', texto: 'La estructura corporal.', esCorrecta: false },
            { id: 'd', texto: 'La producción económica.', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Las emociones influyen en el equilibrio personal y las relaciones humanas.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 3,
          texto: 'Desde el humanismo, el ser humano se concibe como:',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Un objeto del sistema social.',
              esCorrecta: false,
            },
            { id: 'b', texto: 'Un recurso productivo.', esCorrecta: false },
            {
              id: 'c',
              texto: 'Un sujeto con dignidad y capacidad de transformación.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Un ente determinado solo por la biología.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! El humanismo resalta la dignidad, conciencia y capacidad reflexiva del ser humano.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 4,
          texto: 'La humanización en salud se fundamenta principalmente en:',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La eficiencia administrativa.',
              esCorrecta: false,
            },
            { id: 'b', texto: 'La tecnología médica.', esCorrecta: false },
            {
              id: 'c',
              texto: 'La atención centrada en la persona.',
              esCorrecta: true,
            },
            { id: 'd', texto: 'El control financiero.', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! La humanización pone a la persona en el centro del cuidado.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 5,
          texto: 'El modelo biopsicosocial explica la salud como resultado de:',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Factores exclusivamente biológicos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'La interacción entre factores biológicos, psicológicos y sociales.',
              esCorrecta: true,
            },
            { id: 'c', texto: 'La genética únicamente.', esCorrecta: false },
            { id: 'd', texto: 'El entorno físico.', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! La salud y la enfermedad surgen de múltiples interacciones.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 6,
          texto: 'George Engel es reconocido por:',
          imagen: require('@/assets/actividad/imagen6.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La teoría de las necesidades.',
              esCorrecta: false,
            },
            { id: 'b', texto: 'El enfoque de capacidades.', esCorrecta: false },
            { id: 'c', texto: 'El modelo biopsicosocial.', esCorrecta: true },
            { id: 'd', texto: 'La inteligencia emocional.', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Engel propuso una visión integral de la salud.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 7,
          texto: 'Según Maslow, la autorrealización se alcanza cuando:',
          imagen: require('@/assets/actividad/imagen7.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Se satisfacen progresivamente las necesidades inferiores.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Se ignoran las necesidades básicas.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Se satisfacen necesidades económicas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Se controla el entorno social.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! La autorrealización es el nivel más alto de la pirámide.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 8,
          texto: 'Las necesidades fisiológicas se caracterizan por:',
          imagen: require('@/assets/actividad/imagen8.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Mantener el equilibrio corporal.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Relacionarse con el reconocimiento social.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Depender del contexto cultural.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Ser exclusivas de la adultez.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Son necesidades básicas para la supervivencia.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 9,
          texto: 'Para Amartya Sen, las capacidades humanas se entienden como:',
          imagen: require('@/assets/actividad/imagen9.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Recursos económicos.', esCorrecta: false },
            { id: 'b', texto: 'Habilidades innatas.', esCorrecta: false },
            { id: 'c', texto: 'Normas sociales.', esCorrecta: false },
            {
              id: 'd',
              texto: 'Libertades para lograr funcionamientos valiosos.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Las capacidades reflejan la libertad de elegir y actuar.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 10,
          texto: 'El PNUD considera capacidad esencial:',
          imagen: require('@/assets/actividad/imagen10.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'La competencia política.', esCorrecta: false },
            { id: 'b', texto: 'La vida larga y saludable.', esCorrecta: true },
            { id: 'c', texto: 'El consumo tecnológico.', esCorrecta: false },
            { id: 'd', texto: 'La productividad laboral.', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! La salud es una capacidad fundamental para el desarrollo humano.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 11,
          texto: 'Los valores morales se caracterizan por promover:',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'La eficiencia.', esCorrecta: false },
            { id: 'b', texto: 'La rentabilidad.', esCorrecta: false },
            { id: 'c', texto: 'La compasión y la bondad.', esCorrecta: true },
            { id: 'd', texto: 'La jerarquía.', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Los valores morales orientan la conducta ética.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 12,
          texto: 'El enfoque de derechos humanos en salud se basa en:',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La rentabilidad del sistema.',
              esCorrecta: false,
            },
            { id: 'b', texto: 'El control tecnológico.', esCorrecta: false },
            {
              id: 'c',
              texto: 'La competencia institucional.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'La igualdad en dignidad y derechos.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Reconoce a todas las personas como sujetos de derechos.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 13,
          texto: 'La comunicación asertiva se caracteriza por ser:',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Impositiva.', esCorrecta: false },
            { id: 'b', texto: 'Ambigua.', esCorrecta: false },
            {
              id: 'c',
              texto: 'Clara, respetuosa y empática.',
              esCorrecta: true,
            },
            { id: 'd', texto: 'Exclusivamente verbal.', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Facilita relaciones humanas y atención humanizada.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 14,
          texto: 'El vínculo en salud se fortalece principalmente mediante:',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'La confianza y la empatía.', esCorrecta: true },
            { id: 'b', texto: 'La jerarquía.', esCorrecta: false },
            { id: 'c', texto: 'El control administrativo.', esCorrecta: false },
            { id: 'd', texto: 'La distancia emocional.', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! El vínculo mejora la adherencia y la participación.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 15,
          texto: 'La inteligencia emocional enfatiza la capacidad de:',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Resolver problemas matemáticos.',
              esCorrecta: false,
            },
            { id: 'b', texto: 'Memorizar información.', esCorrecta: false },
            { id: 'c', texto: 'Liderar procesos técnicos.', esCorrecta: false },
            {
              id: 'd',
              texto: 'Comprender y regular emociones propias y ajenas.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Es clave para la interacción humana.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 16,
          texto: 'Una barrera de la comunicación es:',
          imagen: require('@/assets/actividad/imagen6.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'La percepción selectiva.', esCorrecta: true },
            { id: 'b', texto: 'La escucha activa.', esCorrecta: false },
            { id: 'c', texto: 'El interés mutuo.', esCorrecta: false },
            { id: 'd', texto: 'La claridad del mensaje.', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! La percepción selectiva distorsiona el mensaje.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 17,
          texto: 'No corresponde a un ejemplo de humanización en salud:',
          imagen: require('@/assets/actividad/imagen7.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Priorizar procesos financieros sobre el bienestar.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Participación del paciente.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Atención centrada en la persona.',
              esCorrecta: false,
            },
            { id: 'd', texto: 'Comunicación empática.', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! La humanización prioriza a la persona, no al proceso.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 18,
          texto: 'El enfoque intercultural en salud promueve:',
          imagen: require('@/assets/actividad/imagen8.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La homogeneización cultural.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'El respeto por saberes y prácticas diversas.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'La imposición de modelos únicos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'La exclusión de prácticas tradicionales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Reconoce la diversidad cultural en la atención.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 19,
          texto: 'La humanización en salud implica:',
          imagen: require('@/assets/actividad/imagen9.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Solo buenas intenciones.', esCorrecta: false },
            { id: 'b', texto: 'Reducción de costos.', esCorrecta: false },
            {
              id: 'c',
              texto: 'Uso exclusivo de tecnología.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Cambios en actitudes, prácticas y gestión.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Requiere transformaciones personales e institucionales.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 20,
          texto: 'La base de una atención humanizada en salud es:',
          imagen: require('@/assets/actividad/imagen10.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La actitud del personal de salud.',
              esCorrecta: true,
            },
            { id: 'b', texto: 'La rapidez del servicio.', esCorrecta: false },
            {
              id: 'c',
              texto: 'El cumplimiento administrativo.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'La infraestructura tecnológica.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! La actitud es el punto de partida de la humanización.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
      ],
      mensaje_final_aprobado:
        'Ha superado la actividad y demuestra sólidos conocimientos sobre el componente formativo.',
      mensaje_final_reprobado:
        'No ha superado la actividad. Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
