import React from "react";
import "./piechart.scss";
import {
  PieChart,
  Pie,
  Sector,
  Cell,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

const PieChartBox = () => {
  const data = [
    { name: "Mobile", value: 400, color: "red" },
    { name: "Desktop", value: 300, color: "blue" },
    { name: "Tablet", value: 300, color: "yellow" },
    { name: "Other", value: 200, color: "green" },
  ];
  return (
    <>
      <div className="piaChartBox">
        <h3>Leads by source</h3>
        <div className="chart">
          <ResponsiveContainer width="100%" height={300}>
            <PieChart width={800} height={400}>
              <Tooltip
                contentStyle={{ background: "white", borderRadius: "none" }}
                labelStyle={{ display: "none" }}
                cursor={{ fill: "none" }}
              />
              <Pie
                data={data}
                innerRadius={"70%"}
                outerRadius={"90%"}
                paddingAngle={5}
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="options">
          {data.map((i) => (
            <div className="option">
              <div className="title">
                <span
                  className="dot"
                  style={{ backgroundColor: i?.color }}
                ></span>
                <span>{i?.name}</span>
              </div>
              <span>{i?.value}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default PieChartBox;
