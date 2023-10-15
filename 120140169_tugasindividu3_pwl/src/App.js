
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom'; 
import Beranda from './Beranda';
import Kontak from './Kontak';
import Tentang from './Tentang';

class App extends Component {
  constructor() {
    super();
    this.state = {
      jumlahPesanTerkirim: 0,
    };
  }

 
  updateJumlahPesanTerkirim = (jumlahBaru) => {
    this.setState({ jumlahPesanTerkirim: jumlahBaru });
  };

  render() {
    return (
      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/">Beranda</Link>
            </li>
            <li>
              <Link to="/kontak">Kontak</Link>
            </li>
            <li>
              <Link to="/tentang">Tentang</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route
            path="/kontak"
            element={<Kontak updateJumlahPesanTerkirim={this.updateJumlahPesanTerkirim} />}
          />
            <Route path="/tentang" element={<Tentang />} />
            <Route path="/" element={<Beranda />} />        
            
          </Routes>
      </Router>
    );
  }
}

export default App;
