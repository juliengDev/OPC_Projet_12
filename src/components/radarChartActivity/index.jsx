import "../../styles/style.css"

import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
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

  const data = datas[0].performance
  const transformedData = data.map((item) => ({
    value: item.value,
    kind: kindMapping[item.kind],
  }))

  return (
    <section className="radarChartActivity grid-item grid-item-6">
      <RadarChart
        outerRadius={90}
        width={270}
        height={263}
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
    </section>
  )
}

export default RadarChartActivity
