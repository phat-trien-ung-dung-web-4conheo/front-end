import React, { useState } from "react";
import Button from "../../Button";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import CheckOutProductItem from "./CheckOutProductItem";
import CheckOutStep from "./CheckOutStep";
import { Navigate, useNavigate } from "react-router-dom";
import { addOrderForUser, deleteAllCart } from "../../../redux/apiCalls";
import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/src/sweetalert2.scss";

const CheckOutInformation = () => {
  const [appear, setAppear] = useState(false);
  //GET CART PRODUCT
  const cart = useSelector((state) => state.cart);
  const currentUser = useSelector((state) => state.user.login.currentUser);
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
  //COUNTINUE TO PAYMENTS
  const [payments, setPayments] = useState(false);
  const [contactInformation, setContactInformation] = useState(true);
  const navigate = useNavigate();
  //Go to payment
  const handleContinuePayment = () => {
    setPayments(true);
    setContactInformation(false);
  };
  //Back to contact
  const handleBackToContact = () => {
    setPayments(false);
    setContactInformation(true);
  };
  //Payment
  const dispatch = useDispatch();
  //GET INFORMATION USER
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  console.log(phone);
  const userInformation = {
    email: email,
    phone: phone,
    address: address,
  };
  //GET CREDIT CARD
  const [cardNumber, setCardNumber] = useState("");
  const [cardName, setCardName] = useState("");
  const [cardDate, setCardDate] = useState("");
  const [cardCvv, setCardCvv] = useState("");
  const cardInformation = {
    number: cardNumber,
    name: cardName,
    date: cardDate,
    cvv: cardCvv,
  };
  const handlePayment = () => {
    addOrderForUser(
      dispatch,
      currentUser,
      cartUser,
      total,
      cardInformation,
      userInformation
    );
    deleteAllCart(dispatch, currentUser);
    let timerInterval;
    Swal.fire({
      title: "Thanks for your purchase!",
      html: "Directing to home page automatically in <b></b> milliseconds",
      timer: 2000,
      icon: "success",
      didOpen: () => {
        Swal.showLoading();
        const b = Swal.getHtmlContainer().querySelector("b");
        timerInterval = setInterval(() => {
          b.textContent = Swal.getTimerLeft();
        }, 100);
      },
      willClose: () => {
        clearInterval(timerInterval);
      },
    }).then((result) => {
      /* Read more about handling dismissals below */
      navigate("/");
      if (result.dismiss === Swal.DismissReason.timer) {
        console.log("I was closed by the timer");
      }
    });
  };
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
              {total}$
            </p>
          </div>
          <div className="w-full py-4 tablet:mb-3">
            <div className="w-full flex flex-col gap-7">
              <CheckOutStep
                setEmail={setEmail}
                setPhone={setPhone}
                setAddress={setAddress}
                email={email}
                phone={phone}
                address={address}
                setCardNumber={setCardNumber}
                setCardName={setCardName}
                setCardDate={setCardDate}
                setCardCvv={setCardCvv}
                cardNumber={cardNumber}
                cardName={cardName}
                cardDate={cardDate}
                cardCvv={cardCvv}
                payments={payments}
                contactInformation={contactInformation}
              ></CheckOutStep>
            </div>
          </div>
          <div className="flex gap-10">
            <Button
              content={`${payments ? "Back to contact" : "Back to cart "} `}
              className="py-4 px-5 rounded-lg"
              handleClick={
                payments ? handleBackToContact : () => navigate("/basket")
              }
            ></Button>
            <Button
              content={`${payments ? "Payment" : "Continue to payments"} `}
              className="py-4 px-5 rounded-lg !bg-primary"
              handleClick={payments ? handlePayment : handleContinuePayment}
            ></Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default CheckOutInformation;
