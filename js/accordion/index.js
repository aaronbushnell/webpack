import styles from './styles.css';
import $ from 'jquery';

let element = `
  <div class="accordion">
    <a href="#accordion1" class="accordion__title">Example Accordion 1</a>
    <div id="accordion1" class="accordion__content">
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus enim vero, autem adipisci ipsa cumque tenetur! Ratione, impedit fugiat maxime commodi veritatis quia reiciendis soluta repudiandae, nemo voluptates, doloribus modi!</p>
    </div>
  </div>
  <div class="accordion">
    <a href="#accordion2" class="accordion__title">Example Accordion 2</a>
    <div id="accordion2" class="accordion__content">
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus enim vero, autem adipisci ipsa cumque tenetur! Ratione, impedit fugiat maxime commodi veritatis quia reiciendis soluta repudiandae, nemo voluptates, doloribus modi!</p>
    </div>
  </div>
  <div class="accordion">
    <a href="#accordion3" class="accordion__title">Example Accordion 3</a>
    <div id="accordion3" class="accordion__content">
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus enim vero, autem adipisci ipsa cumque tenetur! Ratione, impedit fugiat maxime commodi veritatis quia reiciendis soluta repudiandae, nemo voluptates, doloribus modi!</p>
    </div>
  </div>
`;

$('#accordion').append(element);
