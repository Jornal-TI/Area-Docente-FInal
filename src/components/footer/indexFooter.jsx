import "./styleFooter.css";
import Facebook from '../../img/iconFacebook.png';
import Instagram from '../../img/iconInstagram.png';
import Spotify from '../../img/iconSpotify.png';
import Youtube from '../../img/iconYoutube.png';

export default function Footer() {
  return (
    <div className="container-footer">
      <footer className="footer2">
        <h1>Jornal Senac</h1>
      </footer>

      <footer className="footer1">
        <p>Siga o Jornal SN em todas as redes sociais.</p>
      </footer>

        <div className="imagens-linkadas">
          <a href="https://www.facebook.com/senacsaopaulo">
            <img src={Facebook} alt="facebook.alt" />
          </a>
          <a href="https://www.instagram.com/senacsaopaulo/">
            <img src={Instagram} alt="instagram.alt" />
            </a>
          <a href="https://www.youtube.com/c/senacsaopaulo">
            <img src={Youtube} alt="youtube.alt" />
            </a>
          <a href="https://materiais.sp.senac.br/podcast-senac-sp">
            <img src={Spotify} alt="spotify.alt" />
            </a>
        </div>
      </div>
  );
}
