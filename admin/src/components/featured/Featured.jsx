import "./featured.scss";
import axios from "axios";
import React, { useState, useEffect } from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";

const Featured = () => {
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [totalOrders, setTotalOrders] = useState(0);


  useEffect(() => {
    axios
      .get("https://essay-writer-server.onrender.com/api/orders")
      .then((response) => {
        const orders = response.data;
        console.log(orders);
        const numOrders = orders.length;
        setTotalOrders(numOrders);
        const total = orders.reduce((acc, order) => acc + order.price, 0);
        const totalPages = orders.reduce((acc, order) => acc + order.pages, 0);
        setTotalPrice(total);
        setTotalPages(totalPages);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="featured">
      <div className="top">
        <h1 className="title">Total Revenue</h1>
        <MoreVertIcon fontSize="small" />
      </div>
      <div className="bottom">
        <div className="featuredChart">
          <CircularProgressbar value={totalPages} text={totalPages} strokeWidth={5} />
        </div>
        <p className="title">Total sales made today</p>
        <p className="amount">Ksh {totalPrice}</p>

        <div className="summary">
          <div className="item">
            <div className="itemTitle">Target</div>
            <div className="itemResult negative">
              <KeyboardArrowDownIcon fontSize="small"/>
              <div className="resultAmount">ksh 124000</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">Last Week</div>
            <div className="itemResult positive">
              <KeyboardArrowUpOutlinedIcon fontSize="small"/>
              <div className="resultAmount">Ksh 10000</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">Last Month</div>
            <div className="itemResult positive">
              <KeyboardArrowUpOutlinedIcon fontSize="small"/>
              <div className="resultAmount">Ksh 19400</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
