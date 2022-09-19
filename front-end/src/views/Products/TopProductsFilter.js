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
import { getTopProductsFilterService } from '../../services/products.service';
import DatePicker from 'react-datepicker';
import dayjs from 'dayjs';

import "react-datepicker/dist/react-datepicker.css";

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);


const TopProductsFilter = (props) => {
    const [startDateFilter, setStartDateFilter] = useState(new Date());
    const [endDateFilter, setEndDateFilter] = useState(new Date());
    const [topProducts, setTopProducts] = useState([]);
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
    const quantities = topProducts.map(product => parseInt(product.quantity));
    const data = {
        labels,
        datasets: [{
            label: 'Dataset 1',
            data: quantities,
            backgroundColor: buildRgbString()//'rgba(255, 99, 132, 0.5)',
        }],
    };

    const handleQueryProducts = async () => {
        try {
            const _products = await getTopProductsFilterService(dayjs(startDateFilter).format('YYYY-MM-DDT00:00:00'), dayjs(endDateFilter).format('YYYY-MM-DDT23:59:59'));
            setTopProducts(_products);
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <Fragment>
            <Navbar
                location={location}/>
            <MDBContainer>
                <MDBRow>
                    Start date:
                    <DatePicker selected={startDateFilter} onChange={(date) => setStartDateFilter(date) } />
                    End date:
                    <DatePicker selected={endDateFilter} onChange={(date) => setEndDateFilter(date) } />
                    <MDBBtn onClick={handleQueryProducts}>Query products</MDBBtn>
                </MDBRow>
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