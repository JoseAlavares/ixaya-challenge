import React, { Fragment, useEffect, useState } from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import {
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBBtn
} from 'mdbreact';
import Navbar from '../../components/Navbar/Navbar';
import { useRecoilValue } from 'recoil';
import { getTopProducts } from '../../stores/Products.store'

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);


const TopProductsFilter = (props) => {
    const topProducts = useRecoilValue(getTopProducts);
    const rgbColors = [
        { name: 'greenYellow', values: [173, 255, 47] },
        { name: 'steelBlue', values: [70, 130, 180] },
        { name: 'cornBlue', values: [100, 149, 237] },
        { name: 'sandyBrown', values: [244, 164, 96] },
        { name: 'darkMagenta', values: [139, 0, 139] },
        { name: 'maroon', values: [128, 0, 0] },
        { name: 'salmon', values: [250, 128, 114] },
        { name: 'darkOrange', values: [255, 140, 0] },
        { name: 'gold', values: [255, 215, 0] },
        { name: 'lightSeaGreen', values: [255, 215, 0] }
    ];

	const token = window.sessionStorage.getItem("jwt");
    const location = props.location.pathname;

    if(!token)
		props.history.push("/home");

    useEffect(() => {

    }, [topProducts]);

    const ramdom = () => {
        return Math.ceil(Math.random() * 10) - 1;
    }

    const buildRgbString = () => {
        return `rgb(${rgbColors[ramdom()].values.join(',').toString()}`
    }

    const optionsChart = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Top 5 products',
            },
        },
    };

    const labels = topProducts.map(({ product }) => product[0].product_name);
    const quantities = topProducts.map(product => parseInt(product.quantity_sold));
    const data = {
        labels,
        datasets: [{
            label: 'Dataset 1',
            data: quantities,
            backgroundColor: buildRgbString()//'rgba(255, 99, 132, 0.5)',
        }],
    };

    return (
        <Fragment>
            <Navbar
                location={location}/>
            <MDBContainer>
                <MDBRow style={{"paddingTop": "10px"}}>
                    <MDBCol md="12">
                        <Bar options={optionsChart} data={data}/>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </Fragment>
    );
};

export default TopProductsFilter;