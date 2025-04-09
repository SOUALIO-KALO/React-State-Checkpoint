import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      personne: {
        fullName: "Cristiano Ronaldo",
        bio: "Cristiano Ronaldo est un footballeur professionnel portugais, né le 5 février 1985 à Funchal, Madère, Portugal. Considéré comme l’un des plus grands joueurs de tous les temps, il a joué pour des clubs prestigieux tels que le Sporting CP, Manchester United, le Real Madrid, la Juventus, et actuellement Al-Nassr en Arabie Saoudite, où il est également capitaine. Il est le meilleur buteur de tous les temps dans le football professionnel, avec plus de 900 buts en carrière, et détient de nombreux records, notamment le plus grand nombre de buts en Ligue des champions de l’UEFA (140) et en sélection nationale (plus de 130 pour le Portugal). Ronaldo a remporté cinq Ballons d’Or, sept titres de championnats, cinq Ligues des champions de l’UEFA, et a conduit le Portugal à la victoire à l’Euro 2016. En dehors du terrain, il est une icône mondiale connue pour son éthique de travail, ses actions philanthropiques et sa présence massive sur les réseaux sociaux, avec plus d’un milliard de followers sur ses plateformes.",
        imgSrc:
          "https://i.pinimg.com/474x/48/49/ba/4849ba2ea6517f805785071120cccc08.jpg",
        profession:
          "Footballeur professionnel (attaquant et capitaine d’Al-Nassr et de l’équipe nationale du Portugal)",
      },
      montre: false,
      timeSinceMount: 0,
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState((prevState) => ({
        timeSinceMount: prevState.timeSinceMount + 1,
      }));
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  toggleShow = () => {
    this.setState((prevState) => ({
      montre: !prevState.montre,
    }));
  };

  render() {
    const { personne, montre, timeSinceMount } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <h1>Profil de la Personne</h1>
          <button onClick={this.toggleShow}>
            {montre ? "Masquer le profil" : "Afficher le profil"}
          </button>

          {montre && (
            <div className="profile">
              <img src={personne.imgSrc} alt={personne.fullName} />
              <h2>{personne.fullName}</h2>
              <p>{personne.bio}</p>
              <p>Profession: {personne.profession}</p>
            </div>
          )}

          <p>Temps écoulé depuis le montage: {timeSinceMount} secondes</p>
        </header>
      </div>
    );
  }
}

export default App;
