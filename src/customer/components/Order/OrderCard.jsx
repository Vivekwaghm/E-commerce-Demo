import { Grid } from "@mui/material";
import React from "react";
import AdjustIcon from "@mui/icons-material/Adjust";
import { useNavigate } from "react-router-dom";

const OrderCard = () => {

  const navigate = useNavigate();

  return (
    <div onClick={()=>navigate(`/account/order/${5}`)} className="p-5 shadow-lg hover:shadow-2xl border">
      <Grid container spacing={2} sx={{ justifyContent: "space-between" }}>
        <Grid item xs={6}>
          <div className="flex cursor-pointer">
            <img
              className="w-[5rem] h-[5rem] object-cover object-top"
              src="https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-02.jpg"
              alt=""
            />
            <div className="ml-5 space-y-2">
              <p className=" ">Basic Tee 6-Pack</p>
              <p className="opacity-50 font-semibold text-xs">Size: M</p>
              <p className="opacity-50 font-semibold text-xs">Color: Gray</p>
            </div>
          </div>
        </Grid>
        <Grid item xs={2}>
          <p>₹1,999</p>
        </Grid>
        <Grid item xs={4}>
          {true && (
            <div>
                            <p>
                <AdjustIcon sx={{width:"15px",height:"15px"}} className="text-green-600 mr-2 text-sm"/>
              <span>Delivered on March 03</span>
              
            </p>
            <p className="text-xs">
                <span>Your item has been delivered</span>
            </p>
            </div>
            
            

          )}
          {false && (
            <p>
              <span>Expected delivery on March 03</span>
            </p>
          )}
        </Grid>
      </Grid>
    </div>
  );
};

export default OrderCard;
