import "./TeamStyles.css";
import isadoraPalu from '../../Assets/isadoraPalu.svg'
import anaNegri from '../../Assets/anaNegri.svg'
import ashlynIero from '../../Assets/ashlynIero.svg'
import bernardoMattos from '../../Assets/bernardoMattos.svg'
import danielPedrozo from '../../Assets/danielPedrozo.svg'
import beatrizLinhares from '../../Assets/beatrizLinhares.svg'
function Team() {

  return (
    <section id="Team">
      <div class="row">
        <h1>Nossa equipe</h1>
      </div>
      <div class="row">
        <div class="column">
          <div class="card">
            <div class="img-container">
              <img src={isadoraPalu} alt="Isadora palú icon" />
            </div>
            <h3>Isadora Palú</h3>
            <p>Co-CEO</p>
            <div class="icons">
              <a href="https://instagram.com/isadorapallu?igshid=OGQ5ZDc2ODk2ZA==">
                <i class="fa-brands fa-square-instagram"></i>
              </a>
              <a href="https://www.linkedin.com/in/isadorapalu?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app">
                <i class="fab fa-linkedin"></i>
              </a>
              <a href="https://github.com/isapallu">
                <i class="fab fa-github"></i>
              </a>
              <a href='mailto:palu.isadora00@gmail.com' >
                <i class="fas fa-envelope"></i>
              </a>
            </div>
          </div>
        </div>

        <div class="column">
          <div class="card">
            <div class="img-container">
              <img src={anaNegri} alt="Ana Negri icon" />
            </div>
            <h3>Ana Negri</h3>
            <p>Co-CEO</p>
            <div class="icons">
              <a href="https://instagram.com/aninhaanegri?igshid=NzZlODBkYWE4Ng==">
                <i class="fa-brands fa-square-instagram"></i>
              </a>
              <a href="https://www.linkedin.com/in/ananegri?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
                <i class="fab fa-linkedin"></i>
              </a>
              <a href="https://github.com/orgs/Inova-Senai/repositories">
                <i class="fab fa-github"></i>
              </a>
              <a href='mailto:' >
                <i class="fas fa-envelope"></i>
              </a>
            </div>
          </div>
        </div>

        <div class="column">
          <div class="card">
            <div class="img-container">
              <img src={danielPedrozo} alt="Daniel Pedrozo icon" />
            </div>
            <h3>Daniel Pedrozo</h3>
            <p>CIO</p>
            <div class="icons">
              <a href="https://www.instagram.com/d_pedrozo22/">
                <i class="fa-brands fa-square-instagram"></i>
              </a>
              <a href=" https://www.linkedin.com/in/daniel-pedrozo-251a5025b/">
                <i class="fab fa-linkedin"></i>
              </a>
              <a href="https://github.com/fanilinho22">
                <i class="fab fa-github"></i>
              </a>
              <a href='mailto:daniel.pedrozo8266@gmail.com' >
                <i class="fas fa-envelope"></i>
              </a>
            </div>
          </div>
        </div>

        <div class="column">
          <div class="card">
            <div class="img-container">
              <img src={bernardoMattos} alt="Bernardo Mattos icon" />
            </div>
            <h3>Bernardo Mattos</h3>
            <p>CMO</p>
            <div class="icons">
              <a href="https://www.instagram.com/bernardo_ritzel_/">
                <i class="fa-brands fa-square-instagram"></i>
              </a>
              <a href="https://www.linkedin.com/in/bernardo-augusto-08868220b/">
                <i class="fab fa-linkedin"></i>
              </a>
              <a href="https://github.com/Bernardo-Mattos">
                <i class="fab fa-github"></i>
              </a>
              <a href='mailto:bernardomtt2@gmail.com' >
                <i class="fas fa-envelope"></i>
              </a>
            </div>
          </div>
        </div>

        <div class="column">
          <div class="card">
            <div class="img-container">
              <img src={ashlynIero} alt="Ashlyn Iero icon" />
            </div>
            <h3>Ashlyn Iero</h3>
            <p>CSO</p>
            <div class="icons">
              <a href="https://www.instagram.com/cemeterydriiver/">
                <i class="fa-brands fa-square-instagram"></i>
              </a>
              <a href="https://github.com/cemeterydriiver">
                <i class="fab fa-linkedin"></i>
              </a>
              <a href="https://github.com/cemeterydriiver">
                <i class="fab fa-github"></i>
              </a>
              <a href='mailto:ashlynierow@gmail.com' >
                <i class="fas fa-envelope"></i>
              </a>
            </div>
          </div>
        </div>

        <div class="column">
          <div class="card">
            <div class="img-container">
              <img src={beatrizLinhares} alt="Beatriz Linhares icon" />
            </div>
            <h3>Beatriz Linhares</h3>
            <p>Social media</p>
            <div class="icons">
              <a href="https://instagram.com/bialinhares03?igshid=OGQ5ZDc2ODk2ZA==">
                <i class="fa-brands fa-square-instagram"></i>
              </a>
              <a href="https://www.linkedin.com/in/beatriz-linhares-012744271?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app">
                <i class="fab fa-linkedin"></i>
              </a>
              <a href="https://github.com/orgs/Inova-Senai/repositories">
                <i class="fab fa-github"></i>
              </a>
              <a href="mailto:beatrizbia.bl48@gmail.com">
                <i class="fas fa-envelope"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
export default Team;
