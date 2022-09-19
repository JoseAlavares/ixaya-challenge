import axios from 'axios';
import { isNil } from 'lodash';
import dayjs from 'dayjs';

const jwt = window.sessionStorage.getItem('jwt');
const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_DOMAIN,
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${jwt}`
    }
});

export const getTopProductsService = async () => {
    try {
        const { data } = await axiosInstance.get('/api/product');
        return data;
    } catch (error) {
        console.log(error);
        throw new Error(`Couldn't get the top products`);
    }
};

export const getTopProductsFilterService = async (start = null , end = null) => {

    if (isNil(start)) start = dayjs().subtract(1, 'month');
    if (isNil(end)) end = dayjs();

    try {
        const { data } = await axiosInstance.get(`/api/product/top?start=${start}&end=${end}`);
        return data;
    } catch (error) {
        console.log(error);
        throw new Error(`Couldn't get the top products`);
    }
};