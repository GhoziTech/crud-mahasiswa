import React, { useState } from 'react';
import RowMahasiswa from'./components/RowMahasiswa';
import RowTambahMahasiswa from'./components/RowTambahMahasiswa';

//Data awal tabel mahasiswa
const arrMahasiswas = [
  {
    nim: "18010245",
    nama: "Eka Putra",
    jurusan: "Teknik Informatika",
    asalProvinsi: "DKI Jakarta",
  },
  {
    nim: "19010214",
    nama: "Lisa Permata",
    jurusan: "Sistem Informasi",
    asalProvinsi: "Sumatera Barat",
  },
  {
    nim: "20010710",
    nama: "Rudi Setiawan",
    jurusan: "Ilmu Komputer",
    asalProvinsi: "Jawa Tengah",
  },
  {
    nim: "20010790",
    nama: "FriskaRamadhani",
    jurusan: "Ilmu Komputer",
    asalProvinsi: "Kalimantan Barat",
  },
];

const App = () => {
  const [mahasiswas, setMahasiswas] = useState(arrMahasiswas);

  // handler tambah data mahasiswa
  const handleTambahMahasiswa = (data) => {
    const newMahasiswas = [
      ...mahasiswas, data
    ];
    setMahasiswas(newMahasiswas);
  }

  // handler edit data mahasiswa
  const handleEditMahasiswa = (data) => {
    const result = mahasiswas.findIndex(
      (mahasiswa) => mahasiswa.nim === data.nim
    );

  // copy mahasiswas karena fungsi splice akan mengubah array asal(mutate)
    const newMahasiswas = mahasiswas;
    newMahasiswas.splice(result, 1, data);
    setMahasiswas([...newMahasiswas]);
  }

  // handle hapus data mahasiswa
  const handleHapusMahasiswa = (e) => {
    
    const result = mahasiswas.findIndex(
      (mahasiswa) => mahasiswa.nim === e.target.id
    );

    const newMahasiswas = mahasiswas;
    newMahasiswas.splice(result, 1);
    setMahasiswas([...newMahasiswas]);

    //Cara alternatif penghapusan dengan method filter
    //const newMahasiswas = mahasiswas.filter(
      //mahasiswa => mahasiswa.nim !== e.target.id
    //);
    //setMahasiswas(newMahasiswas);
  }

  return (
    <div className="container mt-5">
      <div className="row mt-5">
        <div className="col">
          <h1 className="text-center">Tabel Mahasiswa</h1>

          <table className="table mt-4">
            <thead>
              <tr>
                <th>NIM</th>
                <th>Nama</th>
                <th>Jurusan</th>
                <th>AsalProvinsi</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {
              mahasiswas.map((mahasiswa) => 
                <RowMahasiswa
                 key={mahasiswa.nim}
                 mahasiswa={mahasiswa}
                 onEditMahasiswa={handleEditMahasiswa}
                 onHapusMahasiswa={handleHapusMahasiswa}
                 />
              )
            }
            <RowTambahMahasiswa 
            mahasiswas={arrMahasiswas}
            onTambahMahasiswa={handleTambahMahasiswa} />
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default App;
