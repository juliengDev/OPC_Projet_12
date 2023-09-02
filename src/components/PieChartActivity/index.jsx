import "../../styles/style.css"

import { PieChart, Pie, Legend, ResponsiveContainer } from "recharts"
const PieChartActivity = ({ datas }) => {
  let data
  let formattedData
  if (datas.todayScore) {
    data = Math.round(datas.todayScore * 100) // Calcul du pourcentage
    formattedData = [
      {
        name: `${data}% de votre objectif`,
        value: data,
      },
    ]
  } else {
    data = 0
    formattedData = [
      {
        name: `${data}% de votre objectif`,
        value: data,
      },
    ]
  }

  return (
    <section className="radialBarChartActivity grid-item grid-item-7">
      <div className="chart-container">
        <h3 className="radialBarChartActivity__mainTitle">Score</h3>
        <ResponsiveContainer width={"100%"} height={"100%"}>
          <PieChart margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <Pie
              data={[{ value: 100 }]}
              cx="50%"
              cy="50%"
              innerRadius={0}
              outerRadius={75}
              startAngle={0}
              endAngle={370}
              dataKey="value"
              fill="#fff"
            />
            <Pie
              data={formattedData}
              dataKey="value"
              cx="60%"
              cy="50%"
              startAngle={190}
              endAngle={150}
              innerRadius={90}
              outerRadius={100}
              fill="#FE293B"
              cornerRadius={10}
              label
            />
            <Legend
              content={() => (
                <div className="legend">
                  <p className="legend__titre">{data}%</p>
                  <div className="legend__titreSuite">
                    <p>de votre</p>
                    <p>objectif</p>
                  </div>
                </div>
              )}
              layout="vertical"
              verticalAlign="middle"
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </section>
  )
}

export default PieChartActivity
