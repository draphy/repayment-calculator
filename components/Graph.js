import React, { useState } from "react";
import { useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function Graph() {
  const { balance, history } = useSelector((state) => state);
  const [emivalue, setEmivalue] = useState(null);
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Loan Period Graph",
      },
    },
  };

  let initialbalance = balance;
  let yLabel = [];

  let emi = emivalue;
  if (!emi) {
    emi = 1;
    initialbalance = 0;
  }
  let xaxis = Math.ceil(initialbalance / emi);
  let xLabel = [];
  let value = initialbalance;
  for (let i = 0; i <= xaxis; i++) {
    xLabel.push(i);
    if (value < 0) {
      value = 0;
    }
    yLabel.push(value);
    value = value - emi;
  }

  const data = {
    labels: xLabel,
    datasets: [
      {
        label: "Loan period",
        data: yLabel,
        backgroundColor: ["#a6a1e3"],
        borderWidth: 3,
      },
    ],
  };
  function calculate(e) {
    e.preventDefault();
    let monthPay = document.getElementById("monthPay").value;
    if (balance / monthPay > 200 && monthPay==0) {
      toast.error("Loan is not available, please increase your payment", {
        position: "top-center",
      });
    } else {
      setEmivalue(monthPay);
    }
  }

  return (
    <div>
      <div className="initial">
        <h1>Initial Balance:{balance}</h1>
        <div
          className="inputPayment"
          style={{ display: "flex", flexDirection: "row" }}
        >
          <div>
            <p className="month">Monthly Payment</p>
          </div>

          <div>
            <input
              type="number"
              id="monthPay"
              placeholder="type your monthly payment"
              onChange={calculate}
              style={{ width: "100%" }}
            />
          </div>

          <ToastContainer />
        </div>
      </div>
      <hr />
      <div className="graph">
        <p style={{ fontWeight: "800", fontSize: "1.4rem" }}>
          Balance of accounts after a number of months
        </p>
      </div>
      <div className="chartPresent">
        <Line options={options} data={data} />;
      </div>
    </div>
  );
}

export default Graph;
