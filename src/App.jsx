import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import DocAkreditasi from "./Pages/DocAkreditasi/DocAkreditasi";
import InformasiDosen from "./Pages/InformasiDosen";
import InfoemasiMahasiswa from "./Pages/InformasiMahasiswa";
import { useContext, useEffect } from "react";
import { GlobalState } from "./Context/Context";
import ProfilJurusan from "./Pages/DocJurusan/ProfilJurusan";
import Kurikulum from "./Pages/DocJurusan/Kurikulum";
import Jadwal from "./Pages/DocJurusan/Jadwal";
import SaranaPrasaranaImage from "./Pages/SaranaPrasarana/SaranaPrasaranaImage";
import KaryaMahasiswa from "./Pages/DocJurusan/KaryaMahasiswa";
import Bpk from "./Pages/Download/Bpk";
import Rps from "./Pages/Download/Rps";
import KontrakKuliah from "./Pages/Download/KontrakKuliah";
import Penelitian from "./Pages/Download/Penelitian";
import Pengabdian from "./Pages/Download/Pengabdian";
import Sertifikat from "./Pages/Download/Sertifikat";
import InputDataAll from "./Pages/InputDataAll";

const App = () => {
  const { globalState } = useContext(GlobalState);

  useEffect(() => {
    const metaData = () => {
      document.title =
        typeof globalState?.page === "string"
          ? globalState.page
          : globalState.page.page;
    };

    metaData();
  }, [globalState]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/dokumentasi-jurusan/profil-jurusan"
          element={<ProfilJurusan />}
        />
        <Route path="/dokumentasi-jurusan/kurikulum" element={<Kurikulum />} />
        <Route path="/dokumentasi-jurusan/jadwal" element={<Jadwal />} />
        <Route
          path="/dokumentasi-jurusan/karya-mahasiswa"
          element={<KaryaMahasiswa />}
        />
        <Route path="/pendukung-akreditasi" element={<DocAkreditasi />} />
        <Route path="/sarana-prasarana" element={<SaranaPrasaranaImage />} />
        <Route path="/informasi-dosen" element={<InformasiDosen />} />
        <Route path="/informasi-mahasiswa" element={<InfoemasiMahasiswa />} />
        <Route path="/download/bpk" element={<Bpk />} />
        <Route path="/download/rps" element={<Rps />} />
        <Route path="/download/kontrak-kuliah" element={<KontrakKuliah />} />
        <Route path="/download/penelitian" element={<Penelitian />} />
        <Route path="/download/pengabdian" element={<Pengabdian />} />
        <Route path="/download/sertifikat" element={<Sertifikat />} />
        <Route path="/input-data" element={<InputDataAll />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
