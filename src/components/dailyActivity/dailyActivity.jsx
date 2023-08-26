/* 
Axe des ordonnees : Y 
Axe des abcisses : X

*/

import "../../styles/style.css"
import {
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Bar,
} from "recharts"
const DailyActivity = ({ datas }) => {
  const data = datas[0].activity
  const chartData = data.map((entry, index) => ({
    jours: (index + 1).toString(),
    "Poids (kg)": entry.kilogram,
    "Calories brûlées (kCal)": entry.calories,
  }))

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="custom__tooltip">
          <p className="custom__tooltip-label">{`${payload[0].value} kg`}</p>
          <p className="custom__tooltip-label">{`${payload[1].value} kCal`}</p>
          <div
            className="custom__tooltip-cursor"
            style={{ left: `${payload[0].offsetX}px` }}
          />
        </div>
      )
    }
    return null
  }

  return (
    <section className="dailyActivity">
      <h3 className="dailyActivity__title"> Activité quotidienne</h3>

      <div className="dailyActivity__chart">
        <BarChart width={720} height={320} data={chartData} barGap={8}>
          <CartesianGrid
            strokeDasharray="2 2"
            horizontal={true}
            vertical={false}
          />
          <XAxis dataKey="jours" tickLine={false} axisLine={false} />

          <YAxis
            tickLine={false}
            axisLine={false}
            orientation="right"
            yAxisId="Poids (kg)"
            type="number"
            dataKey="Poids (kg)"
            domain={["dataMin - 2", "dataMax + 2"]}
            allowDataOverflow={true}
            allowDecimals={false}
          />
          <YAxis
            yAxisId="Calories brûlées (kCal)"
            type="number"
            dataKey="Calories brûlées (kCal)"
            domain={["dataMin - 20", "dataMax + 10"]}
            hide={true}
          />

          <Tooltip content={<CustomTooltip />} cursor={false} />
          <Legend
            verticalAlign="top"
            align="right"
            iconType="circle"
            iconSize="8"
            height={80}
          />
          <Bar
            yAxisId="Poids (kg)"
            dataKey="Poids (kg)"
            fill="#282D30"
            radius={[10, 10, 0, 0]}
            barSize={10}
          />

          <Bar
            yAxisId="Calories brûlées (kCal)"
            dataKey="Calories brûlées (kCal)"
            fill="#E60000"
            radius={[10, 10, 0, 0]}
            barSize={10}
          />
        </BarChart>
      </div>
    </section>
  )
}

export default DailyActivity
