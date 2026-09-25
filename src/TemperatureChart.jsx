import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

function TemperatureChart({ forecast, unit }) {
  if (!forecast || !forecast.list) {
    return null;
  }

  // Get one temperature for each day
  const dailyData = forecast.list.filter((item) => {
    const date = new Date(item.dt * 1000);

    // Pick around 12 PM forecast
    return date.getHours() === 12;
  });

  const chartData = dailyData.map((item) => {
    const date = new Date(item.dt * 1000);

    return {
      day: date.toLocaleDateString([], {
        weekday: "short",
      }),

      temperature: Math.round(item.main.temp),
    };
  });

  return (
    <div style={styles.chartCard}>
      <h2>📈 Temperature Forecast</h2>

      <div style={{ width: "100%", height: 300 }}>
        <ResponsiveContainer>
          <LineChart data={chartData}>
            
            <CartesianGrid strokeDasharray="3 3" />

            <XAxis dataKey="day" />

            <YAxis
              label={{
                value: unit === "metric"
                  ? "Temperature °C"
                  : "Temperature °F",
                angle: -90,
                position: "insideLeft",
              }}
            />

            <Tooltip
              formatter={(value) => [
                `${value}°${unit === "metric" ? "C" : "F"}`,
                "Temperature",
              ]}
            />

            <Line
              type="monotone"
              dataKey="temperature"
              stroke="#ff7300"
              strokeWidth={3}
              dot={{ r: 5 }}
              activeDot={{ r: 7 }}
            />

          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

const styles = {
  chartCard: {
    background: "white",
    borderRadius: "20px",
    padding: "25px",
    marginTop: "25px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
  },

};

export default TemperatureChart;