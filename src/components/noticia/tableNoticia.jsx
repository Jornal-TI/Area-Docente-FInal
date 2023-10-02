import '../noticia/tablenoticia.css'
import img1 from "./News.jfif"
import cesar from "./cesar.jpg"
import bonner from "./bonner.jfif"


import React, { useState } from 'react';

// function Topico() {
//   const [showNewsPop, setShowNewsPop] = useState(false);
//   const [showNewsHight, setShowNewsHight] = useState(false);
//   const [showNewsLastNews, setShowNewsLastNews] = useState(true);

//   const trocarPop = () => {
//     setShowNewsPop(!showNewsPop)
//     setShowNewsLastNews(false)
//     setShowNewsHight(false)
//   }
//   const trocarHight = () => {
//     setShowNewsPop(false)
//     setShowNewsLastNews(false)
//     setShowNewsHight(!showNewsHight)
//   }
//   const trocarLast = () => {
//     setShowNewsPop(false)
//     setShowNewsLastNews(!showNewsLastNews)
//     setShowNewsHight(false)
//   }
//   return (
   
//           <div className='show-background'>
//             <div className='btn-news'>
//               <button className='btns' onClick={trocarLast}>
//                 Últimas
//               </button>
//               <button className='btns' onClick={trocarPop}>
//                 Popular
//               </button>
//               <button className='btns' onClick={trocarHight}>
//                 Em Alta
//               </button>
//             </div>
//             <div className='show-news'>
//               {showNewsLastNews &&
//                 <ul>
//                   <li>Últimas Notícia</li>
//                   <li>teste</li>
//                   <li>teste</li>
//                   <li><img src={bonner} alt="teste" /></li>
//                   <li><img src={cesar} alt="teste" /></li>
//                   <li><img src={img1} alt="teste" /></li>
//                 </ul>}

//               {showNewsPop &&
//                 <ul>
//                   <li><img src={img1} alt="teste" /></li>
//                   <li>teste</li>
//                   <li><img src={cesar} alt="teste" /></li>
//                   <li>teste</li>
//                   <li>Notícia Pop</li>
//                 </ul>}
//               {showNewsHight &&
//                 <ul>
//                   <li>Notícia Em Alta</li>
//                   <li><img src={img1} alt="teste" /></li>
//                   <li><img src={cesar} alt="teste" /></li>
//                   <li><img src={bonner} alt="teste" /></li>
//                   <li>teste</li>
//                 </ul>}

//             </div>
//           </div>
function Topico() {
  const [showNewsPop, setShowNewsPop] = useState(false);
  const [showNewsHight, setShowNewsHight] = useState(false);
  const [showNewsLastNews, setShowNewsLastNews] = useState(true);

  return (
    <div className='show-background'>
      <div className='btn-news'>
        <button className='btns' onClick={() => { setShowNewsLastNews(true); setShowNewsHight(false); setShowNewsPop(false); }}>
          Últimas
        </button>
        <button className='btns' onClick={() => { setShowNewsPop(true); setShowNewsHight(false); setShowNewsLastNews(false); }}>
          Popular
        </button>
        <button className='btns' onClick={() => { setShowNewsHight(true); setShowNewsPop(false); setShowNewsLastNews(false); }}>
          Em Alta
        </button>
      </div>
      <div className='show-news'>
        {showNewsPop && <ul>
             <li>Notícia Pop</li>
             <li>teste</li>
             <li><img src={cesar} alt="teste" /></li>             
             <li><img src={bonner} alt="teste" /></li> 
            <li><img src={img1} alt="teste" /></li>
             <li>teste</li>
            </ul>}
        {showNewsHight && <ul>
             <li>Notícia em Alta</li>
             <li>teste</li>
            <li><img src={img1} alt="teste" /></li>
             <li><img src={cesar} alt="teste" /></li>             
             <li>teste</li>
             <li><img src={bonner} alt="teste" /></li> 
            </ul>}
        {showNewsLastNews && <ul>
             <li>Últimas Notícia</li>
             <li><img src={bonner} alt="teste" /></li> 
             <li>teste</li>
            <li><img src={img1} alt="teste" /></li>
             <li><img src={cesar} alt="teste" /></li>             
             <li>teste</li>
            </ul>}
      </div>
    </div>
  );
}

export default Topico;

 // <div className='container-fluid'>
    //   <div className='row'>
    //     <div className='col-md-8'>
    //       {/* Coloque aqui o código para o carrossel Bootstrap */}
    //       <Carousel>
    //         <Carousel.Item>
    //           <img
    //             className="d-block w-100"
    //             src={senac1}
    //             alt="First slide"
    //           />
    //           <Carousel.Caption>
    //             <h3>Notícia 1</h3>
    //             <p>Descrição da notícia 1.</p>
    //           </Carousel.Caption>
    //         </Carousel.Item>
    //         <Carousel.Item>
    //           <img
    //             className="d-block w-100"
    //             src={senac2}
    //             alt="Second slide"
    //           />
    //           <Carousel.Caption>
    //             <h3>Notícia 2</h3>
    //             <p>Descrição da notícia 2.</p>
    //           </Carousel.Caption>
    //         </Carousel.Item>
    //         {/* Adicione mais itens do carrossel conforme necessário */}
    //       </Carousel>
    //     </div>
    //     <div className='col-md-4'>
    //     </div>
    //   </div>
    // </div>