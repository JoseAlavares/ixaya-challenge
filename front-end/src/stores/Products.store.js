import { selector } from 'recoil';
import { getTopProductsService, getTopProductsFilterService } from '../services/products.service';

export const getTopProducts = selector({
    key: 'getTopProducts',
    get: async ({ get }) => {
        try {
            return await getTopProductsService();
        } catch (error) {
            throw error;
        }
    }
});

export const getTopProductsFilter = selector({
    key: 'getTopProductsFilter',
    get: async ({ get }) => {
        try {
            return await getTopProductsFilterService();
        } catch (error) {
            throw error;
        }
    }
});