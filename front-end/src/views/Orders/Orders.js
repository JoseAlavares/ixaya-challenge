import React, { Fragment, useState, useEffect } from 'react';
import {
    MDBBadge,
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardHeader,
    MDBCardBody,
    MDBDataTableV5
} from "mdbreact";
import Navbar from "../../components/Navbar/Navbar";
import { getOrders } from '../../stores/Orders.store';
import { useRecoilValue } from 'recoil';

const Orders = (props) => {
    const orders = useRecoilValue(getOrders);
	const token = window.sessionStorage.getItem("jwt");
    const location = props.location.pathname;

    if(!token)
		props.history.push("/home");

    const [gridStructure, setGridStructure] = useState({});
    const columns = [{
            "label": "#",
            "field": "_id",
            "sort": "asc"
        },
        {
            'label': 'User id',
            'field': 'user_id',
            'sort': 'asc'
        },
        {
            'label': 'Creation date',
            'field': 'created_at',
            'sort': 'asc'
        },
        {
            'label': 'Status',
            'field': 'active'
        },
        {
            'label': 'Actions',
            'field': 'actions'
        }
    ];

    const generateStructure = (data) => {
        data = data.map((item, index) => {
            return {
                "#": ++index,
                "_id": item._id,
                "user_id": item.user_id,
                "created_at": item.created_at ? item.created_at : <MDBBadge pill color="danger">N/A</MDBBadge>,
                "active": <MDBBadge pill color="success">Active</MDBBadge>,
                "actions": <MDBBtn href={`/order-details/${item._id}`} size="sm" color="success">Details</MDBBtn>
            };
        });

        return {
            columns: columns,
            rows: data
        };
    };

    useEffect(() => {
        const data = generateStructure(orders)
        setGridStructure(data)
    }, [orders]);

    return (
        <Fragment>
            <Navbar
                location={location}/>
            <MDBContainer>
                <MDBRow style={{"paddingTop": "10px"}}>
                    <MDBCol md="12">
                        <MDBCard narrow>
                            <MDBCardHeader
                                className="view view-cascade gradient-card-header blue-gradient d-flex justify-content-between align-items-center py-2 mx-4 mb-3">
                                <h3 style={{"color": "white"}}>Orders history</h3>
                            </MDBCardHeader>
                            <MDBCardBody cascade>
                                <MDBDataTableV5
                                    hover
                                    entriesOptions={[5, 20, 25]}
                                    entries={5}
                                    pagesAmount={4}
                                    data={gridStructure}/>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </Fragment>
    )
};

export default Orders;