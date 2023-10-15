import React from 'react';

function Header() {
  return (
    <header>
      <h1>Tugas PWL RA Ke-3</h1>
    </header>
  );
}

function MainContent() {
  return (
    <div>
      <h2>Website Sederhana Build By React JS</h2>
      <p>Website ini memiliki penggunaan konsep stateful pada halaman kontak yaitu fitur untuk mengirim data</p>
      <p>Website ini juga menggunakan konsep stateless untuk membuat fitur jumlah pesan karena tidak menggunakan fitur state dalam penggunaannya </p>
    </div>
  );
}

function Footer() {
  return (
    <footer>
      <p>EmirssyahPutra (120140169) RA</p>
    </footer>
  );
}

function App() {
  return (
    <div>
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;
