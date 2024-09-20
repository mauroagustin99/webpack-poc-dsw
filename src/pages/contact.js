export default function About() {
  const content = document.getElementById('content');

  content.innerHTML = `<h1 class="title">Contacto</h1>
    <p class="text">Nos encantaría saber de ti. Si tienes preguntas sobre nuestro menú, deseas hacer una reservación, o simplemente quieres decir hola, no dudes en comunicarte con nosotros.</p>
    <h2 class="subtitle">Información de Contacto:</h2>
    <ul>
      <li>Teléfono: +54 11 1234 5678</li>
      <li>Email: contacto@restauranteargentino.com</li>
      <li>Dirección: Av. S/N 1234, Rosario, Argentina</li>
    </ul>
    <h2 class="subtitle">Horarios de Atención:</h2>
    <ul>
      <li>Lunes - Jueves: 11:00 PM - 12:00 AM</li>
      <li>Viernes - Sábado: 11:00 PM - 01:00AM</li>
      <li>Domingo: 11:00 PM - 01:00AM</li>
    </ul>
    <h2 class="subtitle">Síguenos:</h2>
    <p class="text">Mantente al tanto de nuestras últimas novedades, ofertas especiales y eventos siguiéndonos en nuestras redes sociales.</p>
    <ul>
      <li>Facebook: facebook.com/restauranteargentino</li>
      <li>Instagram: @restauranteargentino</li>
    </ul>
  `;
}
