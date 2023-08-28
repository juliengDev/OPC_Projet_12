import "../../styles/style.css"

// import { RadialBarChart, RadialBar, Legend } from "recharts"
import { PieChart, Pie, Legend } from "recharts"
const RadialBarChartActivity = ({ datas }) => {
  const data = Math.round(datas[0].todayScore * 100) // Calcul du pourcentage
  const formattedData = [
    {
      name: `${data}% de votre objectif`,
      value: data,
    },
  ]
  console.log(formattedData)
  return (
    <section className="radialBarChartActivity grid-item grid-item-7">
      <h3 className="radialBarChartActivity__mainTitle">Score</h3>
      <PieChart width={270} height={263}>
        <Pie
          data={[{ value: 100 }]}
          cx="50%"
          cy="50%"
          innerRadius={0}
          outerRadius={90}
          startAngle={0}
          endAngle={370}
          dataKey="value"
          fill="#fff"
        />
        <Pie
          data={formattedData}
          dataKey="value"
          cx="50%"
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
    </section>
  )
}

export default RadialBarChartActivity
