// import { useState, useEffect } from "react"
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
import RadialBarChartActivity from "../../components/radialBarChartActivity"

const Home = () => {
  // const [datas, setDatas] = useState([])

  // useEffect(() => {
  //   setDatas(users)
  // }, [])

  // console.log(datas)

  return (
    <div className="container">
      <Header />
      <Aside />
      <div className="dashboard-container">
        <Banner datas={users} />
        <BarChartActivity datas={users} />
        <LineChartActivity datas={users} />
        <RadarChartActivity datas={users} />
        <RadialBarChartActivity datas={users} />
        <KeyDataContainer datas={users} />
      </div>
    </div>
  )
}

export default Home
