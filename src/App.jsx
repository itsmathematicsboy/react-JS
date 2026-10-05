import { useState } from "react";
import heroImg from "./assets/hero.png";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import "./App.css";
import DataPeserta from "./components/DataPeserta";
import { Peserta } from "./components/Peserta";
import FormPeserta from "./components/FormPeserta";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import MainLayout from "./pages/MainLayout";
import ListUser from "./pages/user/List";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/login" replace />} />
          <Route path="/login" element={<Login />}></Route>

          <Route element={<MainLayout />}>
            <Route path="/Dashboard" element={<Dashboard />}></Route>
            <Route path="/user" element={<ListUser />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
  // const [listPeserta, setListPeserta] = useState(Peserta);
  // const [editPeserta, setEditPeserta] = useState(null);

  // const handleSubmit = (dataPeserta) => {
  //   if(editPeserta){
  //     setListPeserta(listPeserta.map((item) => (item.id === dataPeserta.id ? dataPeserta : item)));
  //     setEditPeserta(null);
  //   }else{
  //     setListPeserta([...listPeserta, dataPeserta]);
  //   }
  //   console.log(dataPeserta);
  // };

  // const handleHapus = (id) =>{
  //   setListPeserta(listPeserta.filter((item) => item.id !== id));
  //   if(id === pesertaEdit.id){
  //     setListPeserta(null);
  //   }
  // };
  // destruct
  // const siswa = {
  //   name : "Reza",
  //   nilai: 50,
  // };
  // const {name, nilai} = siswa;
  // console.log(name);
  // console.log(nilai);

  // return (
  //   <>
  //     {/* <FormPeserta onSimpan={handleSubmit} pesertaEdit={editPeserta}/>
  //     {listPeserta.map((item) => (
  //       <DataPeserta key={item.id} peserta={item} onEdit={setEditPeserta} onHapus={(handleHapus)}/>
  //     ))}; */}
  //     {/* listPeserta.map((item) => {
  //     <DataPeserta key={item.id} nama={item.nama} jurusan = {item.jurusan}/>
  //   }) */}
  //   </>
  // );
}

export default App;
