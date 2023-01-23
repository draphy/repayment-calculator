import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { addBalance } from "@/redux";

function Sidebar() {
  const { balance, history } = useSelector((state) => state);
  const dispatch = useDispatch();

  const [isSubmit, setIsSubmit] = useState("");

  const handleSubmit = (event) => {
    // Prevent page reload
    event.preventDefault();

    if (isSubmit < 0) {
      toast.error("Amount should be greater than zero", {
        position: "top-center",
      });
    } else {
      dispatch(addBalance(isSubmit));

      setIsSubmit("");
    }
  };
  return (
    <div className="main">
      <h1>Account</h1>
      <p>count:{history.length}</p>
      <h2 style={{ margin: "auto" }}>Balance</h2>

      <form>
        <input type="number" readOnly value={balance}></input>
      </form>

      <ToastContainer />

      <form onSubmit={handleSubmit} style={{ marginTop: "1rem" }}>
        <input
          type="number"
          placeholder="type your balance"
          name="balance"
          onChange={(e) => setIsSubmit(e.target.value)}
          value={isSubmit}
          style={{ height: "1.5rem", marginRight: "10px" }}
        />
        <button type="submit">Submit</button>
      </form>

      <p>Balance History</p>
      {history.map((v, i) => {
        return (
          <div key={i} className="second">
            <h4>Balance :{v}</h4>
          </div>
        );
      })}
    </div>
  );
}

export default Sidebar;
