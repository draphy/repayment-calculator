import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

import { addBalance, deleteBalance } from "@/redux";

import { MdDelete } from "react-icons/md";

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

  const deleteIcon = (index) => {
    let newHistory = history.filter((elem, i) => i != index);
    let newBalance = balance - history[index];
    dispatch(deleteBalance(newHistory, newBalance));
  };
  return (
    <div className="main">
      <h1>Account</h1>
      <p>count:{history.length}</p>
      <h2 style={{ margin: "auto" }}>Balance</h2>

      <form>
        <input type="number" readOnly value={balance}></input>
      </form>

      {/* <ToastContainer /> */}

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
          <div
            key={i}
            className="second"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "1rem",
            }}
          >
            <h4>Balance :{v} </h4>{" "}
            <span>
              <MdDelete
                className="deleteIcon"
                onClick={() => {
                  deleteIcon(i);
                }}
              />
            </span>
          </div>
        );
      })}
    </div>
  );
}

export default Sidebar;
