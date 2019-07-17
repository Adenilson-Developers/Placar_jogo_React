import React from 'react';

import PlacarContainer from './PlacarContainer';

const dados = {
    partida: {
        estadio: "Allianz Arena",
        data: "26/06/2019",
        horario: "20h",
    },
    casa: {
        nome: "Bayern",
    },
    visitante: {
        nome: "Borussia",
    }
};
export default class App extends React.Component {
    render(){
        return <PlacarContainer {...dados} />;
    }
}