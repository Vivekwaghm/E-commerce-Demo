import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useSearchParams } from 'react-router-dom';
import { getOrderById } from '../../../State/Order/Action';
import { updatePayment } from '../../../State/Payment/Action';
import OrderTracker from '../Order/OrderTracker';
import { AlertTitle } from '@mui/material';
import Alert from '@mui/material/Alert';
import { Grid } from '@mui/material';
import AddressCard from '../AddressCard/AddressCard';


const PaymentSuccess = () => {
    const [paymentId, setPaymentId] = useState();
    const [referenceId, setReferenceId] = useState();
    const [paymentStatus, setPaymentStatus] = useState();
    const orderId = useParams();

    console.log("orderId ", orderId.orderid)

    const dispatch = useDispatch();
    const {order} = useSelector(store=>store)

    useEffect(()=>{
        const urlParams = new URLSearchParams(window.location.search)

        setPaymentId(urlParams.get("razorpay_payment_id"));
        setPaymentStatus(urlParams.get("razorpay_payment_link_status"));
    },[])

    useEffect(()=>{
        if(paymentId){
        const data = {
            orderId,paymentId
        }
        dispatch(getOrderById(orderId))
        dispatch(updatePayment(data))
    }
    },[orderId, paymentId])
  return (
    <div className='px-2 lg:px-36'>
        <div className='flex flex-col justify-center items-center'>
            <Alert
            
            severity='success'
            sx={{mb:6,width:'fit-content'}}
            >
                <AlertTitle>Payment Success</AlertTitle>
                Congratulations! Your Order Get Placed.
            </Alert>

        </div>
        <OrderTracker activeStep={1}/>

        <Grid container className="space-y-5 py-5 pt-20">
           { [1,2,3,4].map((item)=><Grid container item className="shadow-xl rounded-md p-5" sx={{alignItems:"center", justifyContnt:"space-between"}}>
                <Grid item xs={9}>
                    <div className='flex items-center'>
                        <img className='w-[5rem] h-[5rem] object-cover object-top' src='https://rukminim1.flixcart.com/image/612/612/xif0q/kurta/g/6/k/m-sksh-dt1105-pcbl-fubar-original-imafux247zhqym2z-bb.jpeg?q=70' alt=''></img>

                        <div className='ml-5 space-y-2'>
                            <p>item.product.title</p>
                            <div className='opacity-50 text-xs font-semibold space-x-5'>
                                <span>color:item.color</span>
                                <span>size:item.size</span>
                            </div>
                            <p>seller:item.product.brand</p>
                            <p>₹item.price</p>
                        </div>
                    </div>
                </Grid>
                <Grid item>
                    <AddressCard address={''}/>
                </Grid>
            </Grid>) }
        </Grid>
    </div>
  )
}

export default PaymentSuccess