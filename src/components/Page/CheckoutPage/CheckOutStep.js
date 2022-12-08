import Button from "../../Button";

import React, { useState } from "react";
import { useForm } from "react-hook-form";

const CheckOutStep = ({
  payments,
  register,
  errors,
  appear,
  setAppear = () => {},
}) => {
  console.log(errors);
  return (
    <>
      <div
        className={` w-full flex flex-col gap-2 text-light_grey`}
        data-aos={`${!payments ? "fade-up" : "fade-down"}`}
      >
        <p className="text-h4">Contact information</p>

        <input
          className="w-full p-2 rounded-lg bg-border_dark/50"
          type="email"
          placeholder="Your email"
          {...register("email", { required: true })}
        />
        {errors.email?.message && (
          <p className="text-red-500">{errors.email?.message}</p>
        )}
        <input
          className="w-full p-2 rounded-lg bg-border_dark/50"
          type="phone"
          defaultValue=""
          placeholder="Your phone"
          {...register("phone", { required: true })}
        />
        {errors.phone?.message && (
          <p className="text-red-500">{errors.phone?.message}</p>
        )}
        <input
          className="w-full p-2 rounded-lg bg-border_dark/50"
          type="address"
          placeholder="Your address"
          {...register("address", { required: true })}
        />
        {errors.address?.message && (
          <p className="text-red-500">{errors.address?.message}</p>
        )}
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
          <input
            type="radio"
            className=""
            value="delivery payments"
            {...register("payments")}
          />
          <p className="inline-block">Payments on delivery</p>
        </label>
        <label
          onClick={() => setAppear(true)}
          className="flex gap-2 cursor-pointer p-4 border-border_dark/50 rounded-lg border"
        >
          <input
            type="radio"
            className=""
            value="credit card"
            {...register("payments")}
          />
          <p className="inline-block">Credit card </p>
        </label>
        {appear && (
          <div className="flex flex-col mt-3 gap-3">
            <input
              className="p-2 bg-light_grey/30 text-light_grey border-light_grey/20 block w-full border rounded-lg"
              type="text"
              placeholder="card number"
              {...register("cardNumber")}
            />
            {errors.cardNumber?.message && (
              <p className="text-red-500">{errors.cardNumber?.message}</p>
            )}
            <input
              className="p-2 bg-light_grey/30 text-light_grey border-light_grey/20 block w-full border rounded-lg"
              type="text"
              placeholder="Name on card"
              {...register("cardName")}
            />
            {errors.cardName?.message && (
              <p className="text-red-500">{errors.cardName?.message}</p>
            )}
            <div className="flex gap-2">
              <div className="flex flex-col gap-1">
                <input
                  className="p-2 bg-light_grey/30 text-light_grey border-light_grey/20 block w-full border rounded-lg"
                  type="text"
                  placeholder="Expiration date (MM / YY)"
                  {...register("cardDate")}
                />
                {errors.cardDate?.message && (
                  <p className="text-red-500">{errors.cardDate?.message}</p>
                )}
              </div>
              <div className="flex flex-col gap-1">
                <input
                  className="p-2 bg-light_grey/30 text-light_grey border-light_grey/20 block w-full border rounded-lg"
                  type="text"
                  placeholder="Security code"
                  {...register("cvv")}
                />
                {errors.cvv?.message && (
                  <p className="text-red-500">{errors.cvv?.message}</p>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default CheckOutStep;
