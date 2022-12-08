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
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

//VALIDATION FORM WITH YUP FOR PAYMENTS
const schema = yup.object({
  email: yup.string().required("Email is required"),
  phone: yup.string().required("Phone number is required"),
  address: yup.string().required("Address is required"),
  payments: yup
    .string()
    .required("Please choose your payment method")
    .nullable(),

  //VALIDATION FOR CREDIT CARD
  cardNumber: yup
    .string()
    .when("payments", {
      is: "credit card",
      then: yup.string().required("Card number is required"),
    })
    .nullable(),
  cardName: yup
    .string()
    .when("payments", {
      is: "credit card",
      then: yup.string().required("Card name is required"),
    })
    .nullable(),
  cardDate: yup
    .string()
    .when("payments", {
      is: "credit card",
      then: yup.string().required("Card date is required"),
    })
    .nullable(),
  cvv: yup
    .string()
    .when("payments", {
      is: "credit card",
      then: yup.string().required("Card cvv is required"),
    })
    .nullable(),
});

const CheckOutInformation = () => {
  //FORM
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

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
  const subTotal = cartUser.reduce((total, item) => total + item.price, 0);
  //TOTAL PRICE
  const total = subTotal + ship;
  //COUNTINUE TO PAYMENTS
  const [payments, setPayments] = useState(false);
  const navigate = useNavigate();
  //Go to payment
  const handleContinuePayment = () => {
    setPayments(true);
  };
  //Back to contact
  const handleBackToContact = () => {
    setPayments(false);
  };
  //Payment
  const dispatch = useDispatch();

  //HANDLE PAYMENT
  // console.log("errors", errors);
  const handlePayment = (value) => {
    const userInformation = {
      email: value.email,
      phone: value.phone,
      address: value.address,
      payments: value.payments,
    };
    let cardInformation;
    //IF PAYMENTS IS CREDIT CARD THEN ADD CARD INFORMATION TO ORDER ELSE ADD EMPTY STRING
    if (value.payments === "credit card") {
      cardInformation = {
        number: value.cardNumber,
        name: value.cardName,
        date: value.cardDate,
        cvv: value.cardCvv,
      };
    } else {
      cardInformation = {
        number: "",
        name: "",
        date: "",
        cvv: "",
      };
    }
    //ADD ORDER FOR USER
    addOrderForUser(
      dispatch,
      currentUser,
      cartUser,
      total,
      cardInformation,
      userInformation
    );
    //DELETE ALL PRODUCTS IN CART AND REDIRECT TO HOME PAGE
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
  //Appear payments
  const [appearPayments, setAppearPayments] = useState(false);

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
          <form
            onSubmit={handleSubmit(handlePayment)}
            className="flex flex-col gap-2"
          >
            <div className="w-full py-4 tablet:mb-3">
              <div className="w-full flex flex-col gap-7">
                <CheckOutStep
                  register={register}
                  errors={errors}
                  payments={payments}
                  setAppear={setAppearPayments}
                  appear={appearPayments}
                ></CheckOutStep>
              </div>
            </div>
            <div className="flex gap-10">
              <Button
                content={`${payments ? "Back to contact" : "Back to cart "} `}
                className="py-4 px-5 rounded-lg"
                type="button"
                handleClick={
                  payments ? handleBackToContact : () => navigate("/basket")
                }
              ></Button>
              {payments && (
                <Button
                  content="Payment"
                  className="py-4 px-5 rounded-lg !bg-primary"
                  type="submit"
                ></Button>
              )}
              {!payments && (
                <Button
                  content={`Continue to payments`}
                  className="py-4 px-5 rounded-lg !bg-primary"
                  type="button"
                  handleClick={handleContinuePayment}
                ></Button>
              )}
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default CheckOutInformation;
