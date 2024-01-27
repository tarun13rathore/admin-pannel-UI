import React from "react";
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
import "./SinglePage.scss";

const Single = (props) => {
  console.log(props);
  return (
    <>
      <div className="mainSingle">
        <div className="info">
          <div className="userInfo">
            <div className="topInfo">
              {props.img && <img src={props.img} alt="" />}
              {props.title && <h3>{props.title}</h3>}
              <button>Update</button>
            </div>
            <div className="details">
              {Object.entries(props.info).map((i) => (
                <div className="item" key={i[0]}>
                  <span className="itemTitle">{i?.[0]}</span>
                  <span className="itemValue">{i?.[1]}</span>
                </div>
              ))}
            </div>
          </div>
          <hr />
          {props?.chart && (
            <div className="userChart">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  width={500}
                  height={300}
                  data={props.chart.data}
                  margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                  }}
                >
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  {props?.chart?.dataKeys?.map((i) => (
                    <Line
                      type="monotone"
                      key={i?.name}
                      dataKey={i?.name}
                      stroke={i?.color}
                    />
                  ))}
                </LineChart>
              </ResponsiveContainer>
            </div>
          )}
        </div>
        <div className="activities">
          <h2>Latest Activity</h2>
          {props.activities && (
            <ul>
              {props?.activities?.map((i) => (
                <li key={i.text}>
                  <div>
                    <p>{i.text}</p>
                    <time>{i.text}</time>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </>
  );
};

export default Single;
