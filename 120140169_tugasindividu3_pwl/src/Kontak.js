import React, { Component } from 'react';
import JumlahPesan from './JumlahPesan'; 

class Kontak extends Component {
  constructor() {
    super();
    this.state = {
      nama: '',
      email: '',
      pesan: '',
      pesanTerkirim: '', 
      jumlahPesanTerkirim: 0, 
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const pesan = `Pesan dari ${this.state.nama}: ${this.state.pesan}`;
    this.setState(
      {
        pesanTerkirim: 'Pesan telah berhasil dikirim! Terima kasih atas tanggapan Anda.',
        jumlahPesanTerkirim: this.state.jumlahPesanTerkirim + 1, 
      },
      () => {
        this.props.updateJumlahPesanTerkirim(this.state.jumlahPesanTerkirim);
      }
    );
  };

  render() {
    return (
      <div>
        <header>
          <h1>Hubungi Saya </h1>
        </header>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="nama">Nama:</label>
            <input
              type="text"
              id="nama"
              name="nama"
              value={this.state.nama}
              onChange={this.handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="pesan">Pesan:</label>
            <textarea
              id="pesan"
              name="pesan"
              value={this.state.pesan}
              onChange={this.handleChange}
              required
            />
          </div>
          <button type="submit">Kirim Pesan</button>
        </form>
        {/* Tampilkan pesanTerkirim di sini */}
        {this.state.pesanTerkirim && <div>{this.state.pesanTerkirim}</div>}
        {/* Render komponen JumlahPesan */}
        <JumlahPesan jumlah={this.state.jumlahPesanTerkirim} />

        <footer>
          <p>EmirssyahPutra (120140169) RA</p>
        </footer>

      </div>
    );
  }
}

export default Kontak;
