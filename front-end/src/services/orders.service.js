import axios from 'axios';

const jwt = window.sessionStorage.getItem('jwt');
const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_DOMAIN,
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${jwt}`
    }
});

export const getOrdersService = async () => {
    try {
        const { data } = await axiosInstance.get('/api/order/list_record');
        return data;
    } catch (error) {
        console.error(error);
        throw new Error(`Couldn't get the orders from the API`);
    }
};

export const getOrderDetailService = async (orderId) => {
    try {
        const { data } = await axiosInstance.post(`/api/order/detail`, { order_id: orderId });
        return data;
    } catch (error) {
        console.error(error);
        throw new Error(`Couldn't get the order details from the API`);
    }
}