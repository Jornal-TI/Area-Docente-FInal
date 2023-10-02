import React, { Component } from 'react';
import './Material.css'

class MaterialInfos extends Component {
  constructor() {
    super();
    this.state = {
      exibirMateriais: false,
      exibirLinks: false,
      pdf1: ['Material 1.pdf'],
      pdf2: ['Material 2.pdf'],
      youtube: ['https://www.youtube.com/'],
      twitter: ['https://twitter.com/home?lang=pt'],
    };
  }

  toggleMateriais = () => {
    this.setState({ exibirMateriais: !this.state.exibirMateriais });
  };

  toggleLinks = () => {
    this.setState({ exibirLinks: !this.state.exibirLinks });
  };

  render() {
    return (

      <div className='bt-bk'>
        <button className='material-button' onClick={this.toggleMateriais}>Materiais de Apoio</button>
        <div className='ul-bk'>
          {this.state.exibirMateriais && (
            <ul>
              <div className='pdf-link'>
                {this.state.pdf1.map((pdf1, index) => (
                  <li key={index}>
                    <a className='link-a' href={pdf1} download >
                      {pdf1}
                    </a>
                  </li>
                ))}
              </div>

              <br />

              <div className='pdf-link'>
                {this.state.pdf2.map((pdf2, index) => (
                  <li key={index}>
                    <a className='link-a' href={pdf2} download >
                      {pdf2}
                    </a>
                  </li>
                ))}
              </div>
            </ul>
          )}
        </div>


        <button className='link-button' onClick={this.toggleLinks}>Links</button>
        <div className='ul-bk'>
          {this.state.exibirLinks && (
            <ul>
              {this.state.youtube.map((youtube, index) => (
                <li key={index}>
                  <a  href={youtube} target="_blank" rel="noopener noreferrer" className="external-link">
                    Youtube
                  </a>
                </li>
              ))}

              <br />

              {this.state.twitter.map((twitter, index) => (
                <li key={index}>
                  <a href={twitter} target="_blank" rel="noopener noreferrer" className="external-link">
                    Twitter
                  </a>
                </li>
              ))}

              <br />

            </ul>

          )}
        </div>
      </div>
    );
  }
}

export default MaterialInfos;
