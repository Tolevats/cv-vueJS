//creando una instancia de Vue
new Vue({
    el: '#app',
    data: {
      name: 'Juan Carlos',
      surname: 'Bodoque y Vodoque',
      position: 'Periodista estrella',
      address: 'Villa Fantasía 777, Santiago - Chile',
      phone: '+56 1234567890',
      email: 'bodoque@31minutos.com',
      summary: 'Periodista consumado con una pasión por lo excéntrico y una habilidad innata para narrar historias. Con una amplia experiencia en reportajes de campo y una cartera de contactos que abarca desde chamanes hasta caballos de carreras, Juan Carlos Bodoque es la voz autorizada en temas ambientales y culturales de 31 Minutos.',
      experience: [
        { 
            company: 'TVN', 
            role: 'Periodista de 31 minutos', 
            year: '2003-2014', 
            description: 'Encargado de la icónica "Nota Verde", investigado los temas más relevantes para el medio ambiente (y algunos que solo él considera relevantes). Entre sus descubrimientos más sobresalientes se incluye "la extraña mutación del alga verde de Titirilquén" (que luego resultó ser un chicle) y "el misterioso gusano gigante de la selva amazónica" (que lamentablemente resultó ser un espagueti olvidado).' },
        { 
            company: 'El Alarmista de Titirilquén', 
            role: 'Periodista', 
            year: '2000-2002',
            description: 'Famoso por su habilidad para cubrir "noticias de alto impacto y peligro mortal". Destacó en notas que incluían: "El cactus carnívoro del desierto", "El ladrón fantasma de empanadas" y "La invasión secreta de polillas en el norte". Fue despedido tras confundir un tornado con una lavadora descompuesta.' 
        },
      ],
      education: [
        { 
            degree: 'Licenciado en Periodismo y Comunicador Comunicacional', 
            institution: 'Universidad de Titirilquén', 
            year: 1999,
            description: '“Siempre fui el primero en mi clase… el primero en salir del salón después de cada examen,” recuerda Bodoque con orgullo. Gracias a su "habilidad investigativa", aprobó su proyecto final titulado: _Cómo identificar fideos en ambientes naturales_.',
        },
      ],
      skills: [
        {
          skill: 'Investigación',
          description: 'Capaz de investigar hasta encontrar respuestas (o hasta que Tulio lo llame a comer). Famoso por encontrar "hechos impactantes" como la vez que "descubrió" que el agua moja.'
        },
        {
          skill: 'Redacción',
          description: 'Escribe con la velocidad de un rayo (si el rayo fuera un caracol). Sus artículos suelen comenzar con "el mundo debe saber esto", aunque solo él piense que es vital.'
        },
        {
          skill: 'Edición',
          description: 'Perfeccionista nato. Si un titular no incluye al menos una palabra alarmante, no es digno de Bodoque.'
        },
        {
          skill: 'Entrevistas',
          description: 'Maestro de las preguntas incisivas. Su enfoque: “si la respuesta es demasiado clara, pregunta otra cosa para confundirse (y confundir al entrevistado)."'
        },
        {
          skill: 'Producción de reportajes',
          description: 'Con una producción modesta (y sin presupuesto), Bodoque es capaz de hacer que hasta el hecho más trivial parezca el inicio de un apocalipsis.'
        }
      ],
      languages: [
        { 
          name: 'Español (nativo)', 
          description: '“Porque si no hablara español, ¿cómo iba a insultar a Tulio?”'
        },
        { 
          name: 'Sirulengo', 
          description: '“Útil cuando hay que negociar con el chamán Pelmazo y pedirle descuentos en consultas espirituales.”'
        }
      ],
      goal: '“Algún día conduciré 31 Minutos en lugar de Tulio… si es que él se retira, claro. Y si no, siempre me queda el plan B: convertirme en crítico de zanahorias.”',
    },
    template: `
      <div class="cv-container">
        <img src="assets/imgs/jc-bodoque.webp" alt="Foto de Juan Carlos Bodoque" class="img-thumbnail mx-auto d-block">
          <h1>{{ name }} {{ surname }}</h1>
          <h2><em>{{ position }}<em><i class="fas fa-solid fa-star"></i></h2>

        <div class="contact-info">  
          <p class="text-line"><i class="fas fa-map-marker-alt"></i> <em>{{ address }}</em></p>
          <p class="text-line"><i class="fas fa-phone"></i><em>{{ phone }}</em></p>
          <p class="text-line"><i class="fas fa-envelope"></i><em>{{ email }}</em></p>
        </div>

        <h5 class="section-title">Resumen</h5>
        <p>{{ summary }}</p>
          
        <h3 class="section-title">Experiencia Profesional</h3>
        <ul>
          <li v-for="experience in experience" :key="experience.company">
             <strong>{{ experience.role }} en {{ experience.company }}</strong> ({{ experience.year }})
             <p>{{ experience.description }}</p>
          </li>
        </ul>
  
        <h3 class="section-title">Educación</h3>
        <ul>
          <li v-for="education in education" :key="education.degree">
             <strong>{{ education.degree }} en {{ education.institution }}</strong> ({{ education.year }})
             <p>{{ education.description }}</p>
          </li>
        </ul>

        <h3 class="section-title">Habilidades</h3>
        <ul>
          <li v-for="skill in skills" :key="skill.skill">
            <strong>{{ skill.skill }}:</strong> {{ skill.description }}
          </li>
        </ul>

        <h3 class="section-title">Idiomas</h3>
        <ul>
          <li v-for="language in languages" :key="language.name">
            <strong>{{ language.name }}:</strong> {{ language.description }}
          </li>
        </ul>

        <h3 class="section-title">Meta Profesional</h3>
        <p><em>{{ goal }}</em></p>

        <br>
        <footer>
          <p>
            <i class="fas fa-solid fa-horse"></i>
            <i class="fas fa-solid fa-horse"></i>
            <i class="fas fa-solid fa-horse"></i>
            <i class="fas fa-solid fa-horse"></i>
            <i class="fas fa-solid fa-horse"></i>
            <i class="fas fa-solid fa-horse"></i>
            <i class="fas fa-solid fa-horse"></i>
            <i class="fas fa-solid fa-horse"></i>
            <i class="fas fa-solid fa-horse"></i>
            <i class="fas fa-solid fa-horse"></i>
            <i class="fas fa-solid fa-horse"></i>
            <i class="fas fa-solid fa-horse"></i>
            <i class="fas fa-solid fa-horse"></i>
            <i class="fas fa-solid fa-horse"></i>
            <i class="fas fa-solid fa-horse"></i>
            <i class="fas fa-solid fa-horse"></i>
            <i class="fas fa-solid fa-horse"></i>
            <i class="fas fa-solid fa-horse"></i>
            <i class="fas fa-solid fa-horse"></i>
            <i class="fas fa-solid fa-horse"></i>
          </p>
          <p>© 2024 Tolevats</p>
        </footer>
        
      </div>
    `
  })