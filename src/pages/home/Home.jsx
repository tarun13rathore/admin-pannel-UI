import React from "react";
import "./home.scss";
import TopBox from "../../components/topBox/TopBox";
import ChartBox from "../../components/chartBox/ChartBox";
import {
  ChartDatas,
  ChartDatas2,
  products,
  ratio,
  barData,
  barDataRevenue,
} from "../../components/menu/Data";
import BarChart from "../../components/barchart/BarChartBox";

const Home = () => {
  return (
    <>
      <div className="main_home">
        <div className="box box1">
          <TopBox />
        </div>
        <div className="box box2">
          <ChartBox {...ChartDatas} />
        </div>
        <div className="box box3">
          <ChartBox {...ChartDatas2} />
        </div>
        <div className="box box4">Box4</div>
        <div className="box box5">
          <ChartBox {...ratio} />
        </div>
        <div className="box box6">
          <ChartBox {...products} />
        </div>
        <div className="box box7">Box7</div>
        <div className="box box8">
          <BarChart {...barData} />
        </div>
        <div className="box box9">
          <BarChart {...barDataRevenue} />
        </div>
      </div>
    </>
  );
};

export default Home;
