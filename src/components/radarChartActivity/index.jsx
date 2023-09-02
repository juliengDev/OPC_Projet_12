import "../../styles/style.css"

import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  ResponsiveContainer,
} from "recharts"

const RadarChartActivity = ({ datas }) => {
  const kindMapping = {
    1: "Intensité",
    2: "Vitesse",
    3: "Force",
    4: "Endurance",
    5: "Energie",
    6: "Cardio",
  }

  const dataPerformance = datas.performance

  const transformedData = dataPerformance.data.map((item) => ({
    value: item.value,
    kind: kindMapping[item.kind],
  }))

  return (
    <section className="radarChartActivity grid-item grid-item-6">
      <div className="chart-container">
        <ResponsiveContainer width={"100%"} height={"100%"}>
          <RadarChart
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            data={transformedData}
          >
            <PolarGrid stroke="#fff" />
            <PolarAngleAxis dataKey="kind" tick={{ fill: "#fff" }} />
            <PolarRadiusAxis angle={30} domain={[0, 150]} tick={false} />
            <Radar
              dataKey="value"
              stroke="#FF0101"
              fill="#FF0101"
              fillOpacity={0.7}
            />
          </RadarChart>
        </ResponsiveContainer>
      </div>
    </section>
  )
}

export default RadarChartActivity
