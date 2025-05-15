import React, { useState } from "react";

const TradeForm = ({ onSubmit }) => {
  const [form, setForm] = useState({
    transactionId: "",
    tradeId: "",
    version: "",
    securityCode: "",
    quantity: "",
    action: "INSERT",
    buySell: "Buy",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({
      transactionId: Number(form.transactionId),
      tradeId: form.tradeId,
      version: Number(form.version),
      securityCode: form.securityCode,
      quantity: Number(form.quantity),
      action: form.action,
      buySell: form.buySell,
    });
    setForm({
      transactionId: "",
      tradeId: "",
      version: "",
      securityCode: "",
      quantity: "",
      action: "INSERT",
      buySell: "Buy",
    });
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      {[
        ["transactionId", "Transaction ID"],
        ["tradeId", "Trade ID"],
        ["version", "Version"],
        ["securityCode", "Security Code"],
        ["quantity", "Quantity"],
      ].map(([name, label]) => (
        <div className="form-group" key={name}>
          <label>{label}</label>
          <input
            name={name}
            value={form[name]}
            onChange={handleChange}
            required
          />
        </div>
      ))}
      <div className="form-group">
        <label>Action</label>
        <select name="action" value={form.action} onChange={handleChange}>
          <option value="INSERT">INSERT</option>
          <option value="UPDATE">UPDATE</option>
          <option value="CANCEL">CANCEL</option>
        </select>
      </div>
      <div className="form-group">
        <label>Buy/Sell</label>
        <select name="buySell" value={form.buySell} onChange={handleChange}>
          <option value="Buy">Buy</option>
          <option value="Sell">Sell</option>
        </select>
      </div>
      <button type="submit" className="submit-btn">Submit</button>
    </form>
  );
};

export default TradeForm;