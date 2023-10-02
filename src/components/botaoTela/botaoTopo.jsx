import React, { Component } from 'react';
import './botaoTopo.css'; 
import Seta from '../../img/seta-para-cima.png';

class BotaoTopo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isButtonVisible: false
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    // Verifica se a página foi rolada o suficiente para mostrar a imagem
    if (window.pageYOffset > 100) {
      this.setState({ isButtonVisible: true });
    } else {
      this.setState({ isButtonVisible: false });
    }
  };

  scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  render() {
    return (
      <div
        className={`scroll-to-top-container ${this.state.isButtonVisible ? 'visible' : ''}`}
        onClick={this.scrollToTop}
      >
        <img
          src={Seta} // Substitua pelo caminho da sua imagem
          alt="Scroll to Top"
          className="scroll-to-top-image"
        />
      </div>
    );
  }
}

export default BotaoTopo;
