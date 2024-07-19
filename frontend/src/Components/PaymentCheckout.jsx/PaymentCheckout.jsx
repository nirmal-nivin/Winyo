import React from "react";
import Paymentprocess from "../Assets/process.gif";
import { baseUrl } from "../../urls";

const PaymentCheckout = () =>{
    const amount = 500;
    const currency = "INR";
    const receiptId =  "receipt#1";

    const paymentHandler = async (e) => {
        const response = await fetch(`${baseUrl}/payment`,{
            method: "POST",
            body:JSON.stringify({
                amount,
                currency,
                receipt:receiptId,
            }),
            headers: {
                "Content-Type": "application/json",
            },
        });
        const order = await response.json();
        console.log(order);

        var options = {
            "key": "rzp_test_SrXkvhFM98qSVw", // Enter the Key ID generated from the Dashboard
            amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
            currency,
            "name": "Winyo Corp", //your business name
            "description": "Test Transaction",
            "image": "https://example.com/your_logo",
            "order_id": order.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
            "handler": async function (response){
                const body = {
                    ...response,
                };

                const validateRes = await fetch(`${baseUrl}/payment/validate`,{
                    method: "POST",
                    body:JSON.stringify(body),
                    headers: {
                        "Content-Type": "application/json",
                    },
                });
                const jsonRes = await validateRes.json();
                console.log(jsonRes);
            },
            "prefill": { //We recommend using the prefill parameter to auto-fill customer's contact information, especially their phone number
                "name": "Winyo", //your customer's name
                "email": "winyo24@example.com", 
                "contact": "9000090000"  //Provide the customer's phone number for better conversion rates 
            },
            "notes": {
                "address": "Razorpay Corporate Office"
            },
            "theme": {
                "color": "#3399cc"
            }
        };
        var rzp1 = new window.Razorpay(options);
        rzp1.on('payment.failed', function (response){
                alert(response.error.code);
                alert(response.error.description);
                alert(response.error.source);
                alert(response.error.step);
                alert(response.error.reason);
                alert(response.error.metadata.order_id);
                alert(response.error.metadata.payment_id);
        });
        rzp1.open();
        e.preventDefault();
    };

    return (
        <div className="text-center mt-28 mb-20">
            <img src={Paymentprocess} alt=""  className="w-80 m-auto"/>
            <button 
                onClick={paymentHandler}
                className="bg-blue-700 text-neutral-100 rounded-full w-44 p-2 text-xl font-semibold text-center">
                PAY NOW
            </button>
        </div>
    )
};

export default PaymentCheckout;