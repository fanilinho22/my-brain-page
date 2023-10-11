import "./SponsorsStyles.css";
import senaiLogo from '../../Assets/senaiLogo.svg'
import inaitecLogo from '../../Assets/inaitecLogo.svg'

function Sponsors() {
    return (
        <section id="Sponsors">
            <h2>
                Apoio
            </h2>
                <img src={senaiLogo} alt="Isadora palú icon" />
                <img src={inaitecLogo} alt="Isadora palú icon" />
        </section>
    );
}
export default Sponsors;
