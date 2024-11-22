import { Actions, Screens } from '../types/store';
import { getSongs } from '../utils/firebase';
// import { getProducts } from '../utils/firebase';

export const navigate = (screen: Screens) => {
	return {
		action: Actions.NAVIGATE,
		payload: screen,
	};
};

export const getProductsAction = async () => {
	const products = await getSongs(); //Firestore
	return {
		action: Actions.GETPRODUCTS,
		payload: products,
	};
};


