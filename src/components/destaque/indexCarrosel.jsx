import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'animate.css/animate.min.css';
import Carousel from 'react-bootstrap/Carousel';
import './styleDestaque.css';
import senac1 from '../../img/senac1.png';
import senac2 from '../../img/senac2.png';
import senac3 from '../../img/senac3.png';
import Topico from '../noticia/tableNoticia'

function UncontrolledExample() {
  return (
    <div className='junta-news'>

    {/* <div className='container-carrossel'> */}
    <div className='container-fluid'>
      {/* <div className='main-container'> */}
      <div className='row'>
        {/* <div className='carousel-container'> */}
        <div className='col-md-8'>
          <Carousel interval={5000} indicators={true}>
            <Carousel.Item>
              <div className='carousel-image'>
                {/* <img className='img-container' src={senac1} alt="Slide 1" /> */}
                <img className='d-block w-100' src={senac1} alt="Slide 1" />
                {/* <div className='gradient-overlay'></div> */}
              </div>
              <Carousel.Caption style={{ position: 'relative', left: '0', right: '0', bottom: '0', textAlign: 'center', backgroundColor: 'rgba(0, 0, 0, 0.5)', top: '85%' }}>
                <div className='txtCarousel1 animate__animated animate__fadeInLeft'>
                  <div></div>
                  <h3 >Senac divulga parceria com banco Santander referente a bolsas de estudo.</h3>
                </div>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <div className='carousel-image'>
                {/* <img className='img-container' src={senac2} alt="Slide 2" /> */}
                <img className='d-block w-100' src={senac2} alt="Slide 2" />
                {/* <div className='gradient-overlay'></div> */}
              </div>
              <Carousel.Caption style={{ position: 'relative', left: '0', right: '0', bottom: '0', textAlign: 'center', backgroundColor: 'rgba(0, 0, 0, 0.5)', top: '85%' }}>
                <h3 className='animate__animated animate__fadeInLeft'>Senac libera bolsas para estudantes com baixa renda.</h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <div className='carousel-image'>
                {/* <img className='img-container' src={senac3} alt="Slide 3" /> */}
                <img className='d-block w-100' src={senac3} alt="Slide 3" />
                {/* <div className='gradient-overlay'></div> */}
              </div>
              <Carousel.Caption style={{ position: 'relative', left: '0', right: '0', bottom: '0', textAlign: 'center', backgroundColor: 'rgba(0, 0, 0, 0.5)', top: '85%' }}>
                <h3 className='animate__animated animate__fadeInLeft'>Cenaqui</h3>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
        <div className='col-md-4'>
          {/* Conteúdo à direita aqui */}
        <Topico/>
        </div>
      </div>

        </div>

    </div>
  );
}

export default UncontrolledExample;
