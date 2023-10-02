import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./components/header/indexHeader";
import Footer from "./components/footer/indexFooter";
import ControlledCarousel from "./components/destaque/indexCarrosel";
import Marquee from "./components/marquee/indexMarquee";
import BotaoTopo from "./components/botaoTela/botaoTopo";
import Feed from "./components/feed/indexFeed";
import MenusLa from "./components/menus/menus";
import Inicial from "./components/Pagina-Inicial/pagina";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Inicial" element={<Inicial />} />
        <Route path="/" element={<TelaHome />} />
      </Routes>
    </BrowserRouter>
  );
}

function TelaHome() {
  return (
    <div className="App">
      <Header />
      <br />
      <Marquee
        items={[
          {
            link: "teste",
            text: "notícia 1 ",
          },
          {
            link: "teste2",
            text: "Bolsas de Estudo",
          },
          {
            link: "teste3",
            text: "Eventos",
          },
          {
            link: "teste4",
            text: "Centro Universitário",
          },
          {
            link: "teste5",
            text: "Senac São Paulo",
          },
          {
            link: "teste6",
            text: "Senac",
          },
          {
            link: "teste7",
            text: "Parceiros",
          },
        ]}
      />
      <br />
      <ControlledCarousel />
      <br />
      <br />
      <BotaoTopo />
      <br />
      <div className="Feeds">
        <div className="row">
          <div className="teste" id="teste">
            <Feed
              category="Hardware/Software"
              title="Título do Feed 1"
              date="10 de Janeiro de 2023"
              author="Autor 1"
              content="
                  Teste 1 dolor sit amet. Et soluta magni et expedita galisum qui amet modi cum
                  consectetur autem nam dolorem alias est corporis consequatur.
                  voluptas. Hic inventore facere et eius sequi qui odit obcaecati sed saepe molestias
                  eos quisquam impedit! Eum animi recusandae et nesciunt asperiores qui consequatur
                  itaque ex facilis consequatur qui autem autem id autem accusamus qui quibusdam
                  doloremque? Est unde maiores et repellendus ipsum eos dignissimos dolore vel animi
                  exercitationem et quisquam minus ea expedita eaque! Quo accusamus dolores qui tempora
                  aliquid ea nesciunt odit ut optio cumque ut galisum neque et omnis galisum in
                  consectetur officia.
                  Teste dolor sit amet. Et soluta magni et expedita galisum qui amet modi cum
                  consectetur autem nam dolorem alias est corporis consequatur.
                  In quaerat totam id esse corporis est nesciunt impedit ex neque aliquam eum repellat
                  aliquid qui internos enim qui libero distinctio. Eum vitae eligendi nam aspernatur
                  sint eos dicta natus est esse magnam et velit adipisci et vitae labore sit suscipit
                  voluptatem. Vel ipsum iure et veniam error in labore repellendus. Eum rerum nihil non
                  dolores modi eos iure reiciendis aut architecto tempora. Eum internos Quis
                  ea atque delectus qui inventore quas aut reiciendis facere qui saepe reprehenderit!
                  Non animi exercitationem qui quia temporibus aut perferendis expedita At corrupti
                  distinctio ut distinctio laudantium et dicta minima in consequatur impedit?
                  Qui quos officia eum rerum nemo hic reiciendis libero vel molestias earum in sunt
                  voluptas. Hic inventore facere et eius sequi qui odit obcaecati sed saepe molestias
                  eos quisquam impedit! Eum animi recusandae et nesciunt asperiores qui consequatur
                  itaque ex facilis consequatur qui autem autem id autem accusamus qui quibusdam
                  doloremque? Est unde maiores et repellendus ipsum eos dignissimos dolore vel animi
                  exercitationem et quisquam minus ea expedita eaque! Quo accusamus dolores qui tempora
                  aliquid ea nesciunt odit ut optio cumque ut galisum neque et omnis galisum in
                  consectetur officia."
              comment=""
            />
          </div>

          <div className="teste2" id="teste2">
            <Feed
              category="Redes"
              title="Título do Feed 2"
              date="10 de Janeiro de 2023"
              author="Autor 1"
              content="
                Teste 2 dolor sit amet. Et soluta magni et expedita galisum qui amet modi cum
                consectetur autem nam dolorem alias est corporis consequatur.
                In quaerat totam id esse corporis est nesciunt impedit ex neque aliquam eum repellat
                aliquid qui internos enim qui libero distinctio. Eum vitae eligendi nam aspernatur
                sint eos dicta natus est esse magnam et velit adipisci et vitae labore sit suscipit
                voluptatem. Vel ipsum iure et veniam error in labore repellendus. Eum rerum nihil non
                dolores modi eos iure reiciendis aut architecto tempora. Eum internos Quis
                ea atque delectus qui inventore quas aut reiciendis facere qui saepe reprehenderit!
                Non animi exercitationem qui quia temporibus aut perferendis expedita At corrupti
                distinctio ut distinctio laudantium et dicta minima in consequatur impedit?
                Qui quos officia eum rerum nemo hic reiciendis libero vel molestias earum in sunt
                voluptas. Hic inventore facere et eius sequi qui odit obcaecati sed saepe molestias
                eos quisquam impedit! Eum animi recusandae et nesciunt asperiores qui consequatur
                itaque ex facilis consequatur qui autem autem id autem accusamus qui quibusdam
                doloremque? Est unde maiores et repellendus ipsum eos dignissimos dolore vel animi
                exercitationem et quisquam minus ea expedita eaque! Quo accusamus dolores qui tempora
                aliquid ea nesciunt odit ut optio cumque ut galisum neque et omnis galisum in
                consectetur officia.
                Qui quos officia eum rerum nemo hic reiciendis libero vel molestias earum in sunt
                voluptas. Hic inventore facere et eius sequi qui odit obcaecati sed saepe molestias
                eos quisquam impedit! Eum animi recusandae et nesciunt asperiores qui consequatur
                itaque ex facilis consequatur qui autem autem id autem accusamus qui quibusdam
                doloremque? Est unde maiores et repellendus ipsum eos dignissimos dolore vel animi
                exercitationem et quisquam minus ea expedita eaque! Quo accusamus dolores qui tempora
                aliquid ea nesciunt odit ut optio cumque ut galisum neque et omnis galisum in
                consectetur officia.
                Qui quos officia eum rerum nemo hic reiciendis libero vel molestias earum in sunt
                voluptas. Hic inventore facere et eius sequi qui odit obcaecati sed saepe molestias
                eos quisquam impedit! Eum animi recusandae et nesciunt asperiores qui consequatur
                itaque ex facilis consequatur qui autem autem id autem accusamus qui quibusdam
                doloremque? Est unde maiores et repellendus ipsum eos dignissimos dolore vel animi
                exercitationem et quisquam minus ea expedita eaque! Quo accusamus dolores qui tempora
                aliquid ea nesciunt odit ut optio cumque ut galisum neque et omnis galisum in
                consectetur officia."
              comment=""
            />
          </div>

          <div className="teste3" id="teste3">
            <Feed
              category="Programação"
              title="Título do Feed 3"
              date="10 de Janeiro de 2023"
              author="Autor 1"
              content="Conteúdo do Feed 3..."
              comment=""
            />
          </div>
          <div className="teste4" id="teste4">
            <Feed
              category="Senac"
              title="Título do Feed 4"
              date="10 de Janeiro de 2023"
              author="Autor 1"
              content="Conteúdo do Feed 4..."
              comment=""
            />
          </div>

          <div className="teste5" id="teste5">
            <Feed
              category="Hardware/Software"
              title="Título do Feed 5"
              date="10 de Feveiro de 2023"
              author="Autor 1"
              content="Conteúdo do Feed 5..."
              comment=""
            />
          </div>

          <div className="teste6" id="teste6">
            <Feed
              category="Redes"
              title="Título do Feed 6"
              date="10 de Março de 2023"
              author="Autor 1"
              content="Conteúdo do Feed 6..."
              comment=""
            />
          </div>

          <div className="teste7" id="teste7">
            <Feed
              category="Programação"
              title="Título do Feed 7"
              date="10 de Março de 2023"
              author="Autor 1"
              content="Conteúdo do Feed 7..."
              comment=""
            />
          </div>
        </div>
        <div className="MenusLaterais">
          <MenusLa />
        </div>
      </div>

      <br />
      <Footer />
    </div>
  );
}


export default App;
