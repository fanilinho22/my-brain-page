import "./HomeStyles.css";
import Logo from "../../Components/Logo/Logo.js";
import SocialMediaBtn from "../../Components/SocialMediaBtn/SocialMediaBtn";
import Btn from "../../Components/Btn/Btn";
import screens from '../../Assets/screens.svg';

function Home() {
  return (
    <section id="Home">

      <div id="header">
        <div id="headerContent">
          <h1>Devolvendo às pessoas com doenças neurológicas segurança e controle de suas vidas.</h1>
          <SocialMediaBtn />
        </div>
        <div id="logoContainer">
          <Logo id="Logo" />
        </div>
      </div>

      <div id="body">
        <div id="screens">
          <img src={screens} alt="Telas do app" />
        </div>
        <div id="bodyContent">
          <div id="text">
            <h1>Com o MyBrain, Você:</h1>
            <br />
            <ul >
              <li>Facilita sua rotina</li>
              <li>Agiliza o tratamento</li>
              <li>Encontra padrões e gatilhos</li>
              <li>Organiza sua vida</li>
            </ul>
          </div>

          <Btn />
        </div>
      </div>
    </section>
  );
}

export default Home;
