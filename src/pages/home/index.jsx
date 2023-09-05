import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import "../../styles/style.css"
import users from "../../services/API_MOCK"
// import users from "../../services/API"

// components
import Header from "../../components/header"
import Aside from "../../components/aside"
import Banner from "../../components/banner"
import KeyDataContainer from "../../components/keydataContainer/keydataContainer"
import BarChartActivity from "../../components/barChartActivity"
import LineChartActivity from "../../components/lineChartActivity"
import RadarChartActivity from "../../components/radarChartActivity"
import PieChartActivity from "../../components/PieChartActivity"

// console.log(users)
const Home = () => {
  //useState : Gerer l'etat local d'un composant
  const [datas, setDatas] = useState([]) // Variable contenant les datas
  const [loading, setLoading] = useState(true) // Variable d'etat de chargement des donnees

  // Le useParams hook renvoie un objet de paires clé / valeur des paramètres dynamiques de l'URL actuelle qui ont été appariés par le <Route path>.
  const { id } = useParams()

  //  Le hook useEffect s'exécute après chaque rendu initial et à chaque fois qu'une modification
  //  intervient dans la prop 'datas' ou le state.
  useEffect(() => {
    if (users) {
      setDatas(users)
      setLoading(false)
    }
  }, []) // Tableau de dependance vide : exécute un effet uniquement après le premier render de mon composant, ici recuperer les donnees de l'API
  // console.log(datas)

  if (loading) {
    // Si les données sont en cours de chargement
    return (
      <section className="error">
        <h1 className="error__msg">Chargement des données en cours...</h1>
        <h2 className="error__msg__h2">Veuillez patienter</h2>
      </section>
    )
  } else if (datas.length === 0) {
    // Si les données sont chargées mais vides
    return (
      <section className="error">
        <h1 className="error__msg">Aucune donnée disponible</h1>
      </section>
    )
  } else {
    const user = datas.find((user) => user.id === parseInt(id))

    if (user) {
      const { userInfos } = user
      const firstName = userInfos.firstName

      return (
        <div className="container">
          <Header />
          <Aside />
          <Banner firstName={firstName} />
          <BarChartActivity datas={user} />
          <LineChartActivity datas={user} />
          <RadarChartActivity datas={user} />
          <PieChartActivity datas={user} />
          <KeyDataContainer datas={user} />
        </div>
      )
    } else {
      return (
        <section className="error">
          <h1 className="error__msg">Utilisateur non trouvé</h1>
          <a href="/" className="reset-a">
            Retour à la page précédente
          </a>
        </section>
      )
    }
  }
}

export default Home
