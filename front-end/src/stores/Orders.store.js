import { selector } from 'recoil';
import { getOrdersService } from '../services/orders.service';

export const getOrders = selector({
    key: 'getOrders',
    get: async ({ get }) => {
        try {
            return await getOrdersService();
        } catch (error) {
            throw error;
        }
    }
})