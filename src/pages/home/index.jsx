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
  const [datas, setDatas] = useState([])

  useEffect(() => {
    setDatas(users)
  }, [])

  // console.log(datas)
  const { id } = useParams()

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
  }
}

export default Home
