import React, { useState } from "react";

const CheckOutStep = ({
  payments,
  contactInformation,
  setEmail,
  setPhone,
  setAddress,
  email,
  phone,
  address,
  setCardNumber,
  setCardName,
  setCardDate,
  setCardCvv,
  cardNumber,
  cardName,
  cardDate,
  cardCvv,
}) => {
  const [appear, setAppear] = useState(false);

  return (
    <>
      <div
        className={` w-full flex flex-col gap-2 text-light_grey`}
        data-aos={`${!payments ? "fade-up" : "fade-down"}`}
      >
        <p className="text-h4">Contact information</p>
        <input
          name="email"
          className="w-full p-2 rounded-lg bg-border_dark/50"
          type="email"
          placeholder="Your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          name="phone"
          className="w-full p-2 rounded-lg bg-border_dark/50"
          type="phone"
          placeholder="Your phone"
          onChange={(e) => setPhone(e.target.value)}
          value={phone}
        />
        <input
          name="address"
          className="w-full p-2 rounded-lg bg-border_dark/50"
          type="address"
          placeholder="Your address"
          onChange={(e) => setAddress(e.target.value)}
          value={address}
        />
      </div>
      <div
        className={`${
          !payments ? "opacity-0  h-0 invisible" : "opacity-1"
        }  w-full flex flex-col gap-2 text-light_grey`}
      >
        <p className="text-h4">Payments</p>
        <label
          onClick={() => setAppear(false)}
          className="flex gap-2 cursor-pointer p-4 border-border_dark/50 rounded-lg border"
        >
          <input type="radio" className="" value="asdasdsad" name="payments" />
          <p className="inline-block">Payments on delivery</p>
        </label>
        <label
          onClick={() => setAppear(true)}
          className="flex gap-2 cursor-pointer p-4 border-border_dark/50 rounded-lg border"
        >
          <input type="radio" className="" value="asdasdsad" name="payments" />
          <p className="inline-block">Credit card </p>
        </label>
        {appear && (
          <form action="" className="flex flex-col mt-3 gap-3">
            <input
              className="p-2 bg-light_grey/30 text-light_grey border-light_grey/20 block w-full border rounded-lg"
              type="text"
              placeholder="Cart number"
              onChange={(e) => setCardNumber(e.target.value)}
              value={cardNumber}
            />
            <input
              className="p-2 bg-light_grey/30 text-light_grey border-light_grey/20 block w-full border rounded-lg"
              type="text"
              placeholder="Name on cart"
              onChange={(e) => setCardName(e.target.value)}
              value={cardName}
            />
            <div className="flex gap-2">
              <input
                className="p-2 bg-light_grey/30 text-light_grey border-light_grey/20 block w-full border rounded-lg"
                type="text"
                placeholder="Expiration date (MM / YY)"
                onChange={(e) => setCardDate(e.target.value)}
                value={cardDate}
              />
              <input
                className="p-2 bg-light_grey/30 text-light_grey border-light_grey/20 block w-full border rounded-lg"
                type="text"
                placeholder="Security code"
                onChange={(e) => setCardCvv(e.target.value)}
                value={cardCvv}
              />
            </div>
          </form>
        )}
      </div>
    </>
  );
};

export default CheckOutStep;
