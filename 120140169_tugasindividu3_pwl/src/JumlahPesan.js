// JumlahPesan.js

import React from 'react';

const JumlahPesan = ({ jumlah }) => {
  return (
    <div>
      <h2>Jumlah Pesan Terkirim</h2>
      <p>{jumlah} pesan telah terkirim.</p>
    </div>
  );
};

export default JumlahPesan;
