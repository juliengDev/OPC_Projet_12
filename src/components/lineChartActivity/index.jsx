import React from "react"
import {
  LineChart,
  XAxis,
  Tooltip,
  Line,
  YAxis,
  Legend,
  ResponsiveContainer,
} from "recharts"

const getDayOfWeek = (day) => {
  const daysOfWeek = ["L", "M", "M", "J", "V", "S", "D"]
  return daysOfWeek[day - 1] || ""
}

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    const sessionLength = payload[0].value
    return (
      <div className="lineChartActivity__tooltip">{`${sessionLength} min`}</div>
    )
  }
  return null
}

const LineChartActivity = ({ datas }) => {
  let data

  if (datas.averageSessions.sessions) {
    data = datas.averageSessions.sessions
  } else {
    data = datas.averageSessions
  }
  // data.sessions.map
  const chartData = data.map((item) => ({
    day: item.day,
    dayOfWeek: getDayOfWeek(item.day),
    sessionLength: item.sessionLength,
  }))

  const ChartTitle = () => {
    return (
      <h3 className="lineChartActivity__title">Durée moyenne des sessions</h3>
    )
  }

  return (
    <section className="lineChartActivity grid-item grid-item-5">
      <div className="chart-container">
        <ResponsiveContainer width={"100%"} height={"100%"}>
          <LineChart
            data={chartData}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <Legend
              layout=""
              verticalAlign="top"
              align="left"
              content={<ChartTitle />}
              width={170}
            />
            <XAxis
              dataKey="dayOfWeek"
              tickLine={false}
              tick={{
                fontFamily: "Roboto",
                fill: "#fff",
                fontSize: 16,
                fontWeight: 500,
              }}
              axisLine={false}
            />
            <YAxis
              dataKey="sessionLength"
              domain={["dataMin - 20", "dataMax + 50"]}
              hide={true}
              axisLine={false}
            />

            <Tooltip
              animationEasing="ease-out"
              offset={40}
              wrapperStyle={{ outline: "none" }}
              content={<CustomTooltip />}
              active={false}
            />

            <Line
              type="natural"
              dataKey="sessionLength"
              dot={false}
              stroke="#FFF"
              strokeWidth={2}
              isAnimationActive={false}
              activeDot={{
                fill: "white",
                stroke: "rgba(255,255,255,0.3)",
                strokeWidth: 10,
                r: 5,
              }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </section>
  )
}

export default LineChartActivity
