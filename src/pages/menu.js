import Empanada from '../img/empanada.jpg';
import Provoleta from '../img/provoleta.jpg';
import Asado from '../img/asado.jpg';
import Milanesa from '../img/milanesa.jpg';
import Chorizos from '../img/chorizos.jpg';
import Chocotorta from '../img/chocotorta.jpg';
import Flan from '../img/flan.jpg';

export default function Menu() {
  const content = document.getElementById('content');
  content.innerHTML = ''; // Limpiar contenido

  const title = document.createElement('h1');
  title.classList.add('title');

  title.textContent = 'Nuestro menú';
  const text = document.createElement('p');
  text.classList.add('text');
  text.textContent =
    'Descubre la auténtica gastronomía argentina con nuestra selección de platos tradicionales elaborados con ingredientes frescos y de alta calidad.';

  const menuContainer = document.createElement('div');
  menuContainer.classList.add('menu-container');

  function createMenuElement(menuType, title, desc, imgSrc) {
    const image = document.createElement('img');
    image.src = imgSrc;
    image.alt = title;
    image.classList.add('menu-item-img');

    const titleElement = document.createElement('p');
    titleElement.classList.add('menu-text', 'menu-title');
    titleElement.textContent = title;

    const descElement = document.createElement('p');
    descElement.classList.add('menu-text');
    descElement.textContent = desc;

    const menuItem = document.createElement('div');
    menuItem.classList.add('item');

    menuItem.appendChild(image);
    menuItem.appendChild(titleElement);
    menuItem.appendChild(descElement);

    menuType.appendChild(menuItem);
    return menuType;
  }

  //Entradas
  const appetizersTitle = document.createElement('h1');
  appetizersTitle.classList.add('section-title');
  appetizersTitle.textContent = 'Entradas';

  //Contenedor de entradas
  const appetizers = document.createElement('div');
  appetizers.classList.add('section-container');

  //Items
  createMenuElement(
    appetizers,
    'Empanadas',
    'Empanadas rellenas de carne, pollo o queso y espinaca.',
    Empanada
  );
  createMenuElement(
    appetizers,
    'Provoleta',
    'Provolone grillado con orégano, acompañado de pan casero.',
    Provoleta
  );

  //Platos principales
  const mainCoursesTitle = document.createElement('h1');
  mainCoursesTitle.classList.add('section-title');
  mainCoursesTitle.textContent = 'Platos Principales';

  const mainCourses = document.createElement('div');
  mainCourses.classList.add('section-container');

  createMenuElement(
    mainCourses,
    'Asado',
    'Parrillada con cortes seleccionados como asado, vacío y chorizo.',
    Asado
  );
  createMenuElement(
    mainCourses,
    'Milanesa Napolitana',
    'Clásica milanesa cubierta con jamón, salsa de tomate y queso derretido.',
    Milanesa
  );
  createMenuElement(
    mainCourses,
    'Bife de Chorizo',
    'Jugoso bife de chorizo cocido a tu gusto, acompañado de vegetales asados.',
    Chorizos
  );

  //Postres
  const dessertsTitle = document.createElement('h1');
  dessertsTitle.classList.add('section-title');
  dessertsTitle.textContent = 'Postres';

  const desserts = document.createElement('div');
  desserts.classList.add('section-container');

  //Creating main courses items
  createMenuElement(
    desserts,
    'Chocotorta',
    'Porción de tradicional postre hecho con capas de galletitas de chocolate, dulce de leche y crema de leche.',
    Chocotorta
  );

  createMenuElement(
    desserts,
    'Flan',
    'Clásico flan argentino con crema y dulce de leche.',
    Flan
  );

  content.appendChild(title);
  content.appendChild(text);
  content.appendChild(menuContainer);

  menuContainer.appendChild(appetizersTitle);
  menuContainer.appendChild(appetizers);

  menuContainer.appendChild(mainCoursesTitle);
  menuContainer.appendChild(mainCourses);

  menuContainer.appendChild(dessertsTitle);
  menuContainer.appendChild(desserts);
}
