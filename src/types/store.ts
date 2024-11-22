export type Observer = { render: () => void } & HTMLElement;

export type AppState = {
	screen: string;
	products: any[];
	currentProduct: {  
        id: string | null;
        albumname: string;
        author: string;
        price: number;
        stock: number;
        image: string;
    } | null;
	
	
	
};

export enum Screens {
	'ADD' = 'ADD',
	'EDIT' = 'EDIT',
	'HOME' = 'HOME',
	'MODIFICAR' = 'MODIFICAR'
}

export enum Actions {
	'NAVIGATE' = 'NAVIGATE',
	'GETPRODUCTS' = 'GETPRODUCTS',
}