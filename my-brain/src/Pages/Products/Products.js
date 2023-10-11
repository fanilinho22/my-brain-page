import "./ProductsStyles.css";
import Btn from "../../Components/Btn/Btn";
import doctor from '../../Assets/doctor.svg'
import hardware from '../../Assets/hardware.svg'
import screen from '../../Assets/screen.svg'

function Products() {
  return (
    <section id="Products">
      <div id="title">
        <h1>Gama de produtos</h1>
      </div>

      <div id="product">
        <div id="productTxt">
          <h2>O app facilita o dia a dia do paciente e agiliza o tratamento para o médico!</h2>
          <Btn />
          <ul>
            <li>Lembretes de remédios e do cotidiano</li>
            <li>Identificação de padrões e efeitos colaterais</li>
            <li>Histórico de crises</li>
          </ul>
        </div>
        <div id="productImg">
        </div>
      </div>
      <div id="doctor">
        <div id="doctorImg"></div>
        <div id="doctorText">
          <p>No site, o médico poderá acessar um relatório dashboard sobre cada um de seus pacientes.</p>
        </div>
      </div>

      <div id="hardware-container">
        <div id="text-container">
            <h1>Hardware</h1>
            <p>Estamos trabalhando em um equipamento para detecção automática de crises epilépticas através de sensores.</p>
            <h2>ficou interessado?</h2> 
            <Btn/>

        </div>
       
        <div id="hardwareImg"></div>
    </div>
   
    
    </section>
  );
}
export default Products;
