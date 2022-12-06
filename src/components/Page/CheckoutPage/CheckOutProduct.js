import React from "react";
import { useSelector } from "react-redux";
import CheckOutProductItem from "./CheckOutProductItem";

const CheckOutProduct = () => {
  //GET CART PRODUCT
  const cart = useSelector((state) => state.cart);
  const currentUser = useSelector((state) => state.user.currentUser);
  const cartUser = cart.products.filter(
    (item) => item.userId === currentUser._id
  );
  //FEE SHIPPING
  const ship = 5;
  //SUBTOTAL PRICE
  const subTotal = cartUser.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  //TOTAL PRICE
  const total = subTotal + ship;
  return (
    <section className="flex-1 w-full hidden laptop:flex pl-10 ">
      <div className="max-w-[450px] w-full">
        <div className="w-full flex max-h-[400px] overflow-y-auto flex-col gap-4">
          {cartUser.map((item) => (
            <CheckOutProductItem data={item}></CheckOutProductItem>
          ))}
        </div>
        <hr className="w-full border-t border-t-light_grey/40 my-4" />
        <div className="w-full flex flex-col gap-4">
          <div className="w-full flex justify-between text-light_grey">
            <p className="text-h4">Subtotal</p>
            <p className="font-[500]">{subTotal}</p>
          </div>
          <div className="w-full flex justify-between text-light_grey">
            <p className="text-h4">Ship</p>
            <p className="font-[500]">${ship}</p>
          </div>
          <hr className="w-full border-t border-t-light_grey/30" />
          <div className="w-full flex justify-between text-light_grey">
            <p className="text-h3 font-[600]">Total</p>
            <p className="text-h3 font-[600]">{total}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CheckOutProduct;
