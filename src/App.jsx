import { useState } from 'react';
import './App.css';
import Banner from './componentes/Banner/Banner';
import Form from './componentes/Form/Form';
import Team from './componentes/Team/Team';



function App() {
  const [colaboradores, setColaboradores] = useState(
    [
      {
          "nome": "Pedro",
          "cargo": "Front-End Developer",
          "imagem": "https://http.cat/201",
          "time": "1"
      },
      {
          "nome": "Jose",
          "cargo": "Comentarista de Código",
          "imagem": "https://http.cat/404",
          "time": "1"
      },
      {
          "nome": "Maria",
          "cargo": "Designer",
          "imagem": "https://http.cat/102",
          "time": "2"
      },
      {
          "nome": "Tiago",
          "cargo": "Chefe",
          "imagem": "https://http.cat/402",
          "time": "4"
      }
  ]
  )

  const saveColaborador = (newColaborador) => {
    setColaboradores([...colaboradores, newColaborador])     
  }

  const optionsTeams = {
    1: {name: "Programação", bgcolor: "#D9F7E9", cardcolor: "#57C278"},
    2: {name: "Front-End", bgcolor: "#E8F8FF", cardcolor: "#82CFFA"},
    3: {name: "Data Science", bgcolor: "#F0F8E2", cardcolor: "#A6D157"},
    4: {name: "Devops", bgcolor: "#FDE7E8", cardcolor: "#E06B69"},
    5: {name: "UX e Design", bgcolor: "#FAE9F5", cardcolor: "#DB6EBF"},
    6: {name: "Mobile", bgcolor: "#FFF5D9", cardcolor: "#FFBA05"},
    7: {name: "Inovação e Gestão", bgcolor: "#FFEEDF", cardcolor: "#FF8A29"}
  }

  function deleteColaborador (nome, event){
    let newColaboradores = colaboradores.filter(el => el.nome != nome)
    setColaboradores(newColaboradores)
  }

  return (
    <div className="App">
      <header className="header">
        <Banner></Banner>
        <Form
          optionsTeams={optionsTeams}
          onRegister={colaborador => saveColaborador(colaborador)} 
        />
        <Team colaboradores={colaboradores} optionsTeams={optionsTeams} onDelete={deleteColaborador} />
      </header>
    </div>
  );
}

export default App;
