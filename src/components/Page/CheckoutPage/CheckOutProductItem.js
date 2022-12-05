import React from "react";

const CheckOutProductItem = ({ data }) => {
  return (
    <div className="w-full max-h-20 flex items-center my-2 justify-between">
      <div className="flex items-center justify-start gap-4">
        <div className="h-full w-16 shrink-0 rounded-lg overflow-hidden">
          <img src={data.img} className="w-full h-full object-cover" alt="" />
        </div>
        <div className="flex flex-col gap-2">
          <div className="text-light_grey h-4 font-[500]">{data.title}</div>
          <div className="text-light_grey h-4 font-[500]">
            Quantity: {data.quantity}
          </div>
        </div>
      </div>
      <p className="text-light_grey h-6">{data.price}</p>
    </div>
  );
};

export default CheckOutProductItem;
