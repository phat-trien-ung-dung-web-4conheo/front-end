import React, { useState } from "react";
import Button from "../../Button";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import CheckOutProductItem from "./CheckOutProductItem";

const CheckOutInformation = () => {
  const [appear, setAppear] = useState(false);
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
    <>
      <section className="flex-[1.3] w-full flex justify-center laptop:pr-8 border-r-border_dark/30 border-r laptop:justify-end">
        <div className="flex-1 max-w-[600px] px-4">
          <a href="/">
            <div className="w-full py-4 border-b border-b-border_dark/20">
              <p className="text-h2 text-light_grey font-[600]">OVION</p>
            </div>
          </a>
          <div className="w-full py-4 border-b border-b-border_dark/20 flex justify-between items-start">
            <div className="laptop:hidden flex-1 w-full">
              <div className="flex-1 w-full">
                <motion.nav
                  className="flex-1 w-full"
                  initial={false}
                  animate={appear ? "open" : "closed"}
                >
                  <motion.button
                    className="text-light_grey/70 hover:text-light_grey bg-primary/70 py-1 px-3 rounded-lg"
                    onClick={() => setAppear(!appear)}
                  >
                    Products
                  </motion.button>
                  <motion.ul
                    className="w-[200%] flex flex-col gap-2 mt-2"
                    variants={{
                      open: {
                        opacity: 1,
                        height: "fit-content",
                        transition: {
                          type: "spring",
                          bounce: 0,
                          duration: 0.7,
                          delayChildren: 0.3,
                          staggerChildren: 0.05,
                        },
                      },
                      closed: {
                        opacity: 0,
                        height: 0,
                        transition: {
                          type: "spring",
                          bounce: 0,
                          duration: 0.3,
                        },
                      },
                    }}
                  >
                    {cartUser.map((item) => {
                      console.log(item);
                      return (
                        <motion.li
                          key={item._id}
                          variants={{
                            open: {
                              opacity: 1,
                              y: 0,
                              transition: {
                                type: "spring",
                                stiffness: 300,
                                damping: 24,
                              },
                            },
                            closed: {
                              opacity: 0,
                              y: 20,
                              transition: { duration: 0.2 },
                            },
                          }}
                        >
                          <CheckOutProductItem
                            data={item}
                          ></CheckOutProductItem>
                        </motion.li>
                      );
                    })}
                  </motion.ul>
                </motion.nav>
              </div>
            </div>
            <p className="text-h4 flex-1 font-[500] text-light_grey text-end">
              total
            </p>
          </div>
          <div className="w-full py-4 tablet:mb-3">
            <div className="w-full flex flex-col gap-7">
              <div className="w-full flex flex-col gap-2 text-light_grey">
                <p className="text-h4">Contact information</p>
                <input
                  name="email"
                  className="w-full p-2 rounded-lg bg-border_dark/50"
                  type="email"
                  placeholder="your email"
                  // value={}
                />
                <input
                  name="phone"
                  className="w-full p-2 rounded-lg bg-border_dark/50"
                  type="phone"
                  placeholder="your phone"
                  // value={}
                />
                <input
                  name="address"
                  className="w-full p-2 rounded-lg bg-border_dark/50"
                  type="address"
                  placeholder="your address"
                  // value={}
                />
              </div>
            </div>
          </div>
          <div className="flex gap-10">
            <Button
              content="Back to cart"
              className="py-4 px-5 rounded-lg"
            ></Button>
            <Button
              content="Continue shipping"
              className="py-4 px-5 rounded-lg !bg-primary"
            ></Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default CheckOutInformation;
