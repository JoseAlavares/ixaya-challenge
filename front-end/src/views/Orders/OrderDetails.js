import React, { Fragment, useEffect, useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import { getOrderDetailService } from '../../services/orders.service';
import {
    MDBCol,
    MDBRow
} from 'mdbreact';

const OrderDetails = (props) => {
    const [orderDetails, setOrderDetails] = useState({});
    const location = props.location.pathname;
    const orderId = props.match.params.order_id;

    useEffect(() => {
        (async function () {
            const data = await getOrderDetailService(orderId);
            setOrderDetails(data);
        })()
    }, [orderId]);

    return (
        <Fragment>
            <Navbar location={location}/>
            <MDBCol col={12}>
                {/* <MDBRow> */}
                    <p>Order id: {orderDetails._id}</p>
                    <p>User id: {orderDetails.user_id}</p>
                    <p>Street name: {orderDetails.street_name}</p>
                    <p>Zip code: {orderDetails.zip_code}</p>
                    <p>Address: {orderDetails.address}</p>
                    <p>State: {orderDetails.state}</p>
                    <p>City: {orderDetails.city}</p>
                    <div>Products:
                        <Fragment>
                            {orderDetails?.product_list && orderDetails?.product_list.map(product => (
                                <div>
                                    <p>--Product id: {product.product_id}</p>
                                    <p>--Quantity: {product.qty}</p>
                                </div>
                            ))}
                        </Fragment>
                    </div>
                {/* </MDBRow> */}
            </MDBCol>
        </Fragment>
    );
};

export default OrderDetails;