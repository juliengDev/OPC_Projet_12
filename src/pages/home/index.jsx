import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import "../../styles/style.css"
// import users from "../../services/API_MOCK"
import users from "../../services/API"

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
  const [datas, setDatas] = useState([])
  const [loading, setLoading] = useState(true)
  const { id } = useParams()

  useEffect(() => {
    setDatas(users)
    setLoading(false)
  }, [])
  // console.log(datas)

  if (loading) {
    // Si les données sont en cours de chargement
    return (
      <section>
        <h1>Chargement des données en cours...</h1>
        <h2>Veuillez patienter</h2>
      </section>
    )
  } else if (datas.length === 0) {
    // Si les données sont chargées mais vides
    return (
      <section>
        <h1>Aucune donnée disponible</h1>
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
        </section>
      )
    }
  }
}

export default Home
