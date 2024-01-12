import React from "react";
import "./chartbox.scss";
import { Link } from "react-router-dom";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const ChartBox = (props) => {
  console.log(props);
  return (
    <>
      <div className="main_chat">
        <div className="info">
          <div className="title">
            <img src={props.icon} />
            <span>{props.title}</span>
          </div>
          <h3 className="head">{props.number}</h3>
          <Link to="/" style={{ color: props?.color }}>
            view all
          </Link>
        </div>
        <div className="chart">
          <div className="chat">
            <ResponsiveContainer width="99%" height="100%">
              <LineChart data={props?.chartData}>
                <Tooltip
                  contentStyle={{
                    backgroundColor: "transparent",
                    border: "none",
                  }}
                  labelStyle={{ display: "none" }}
                  position={{ x: 10, y: 50 }}
                />
                <Line
                  type="monotone"
                  dataKey={props?.dataKey}
                  stroke={props?.stroke}
                  strokeWidth={2}
                  dot={false}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <div className="texts">
            <span
              className="perc"
              style={{ color: props?.percentage < 0 ? "red" : "limegreen" }}
            >
              {props.percentage}
            </span>
            <span className="date">{props.duration}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChartBox;
