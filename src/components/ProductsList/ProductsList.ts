type TProduct = {
    id: number
    category: string
    image: string
    title: string
    isSale: boolean
    salePrice: string
    price: string
    rating: number
}

const ProductsList:TProduct[] = [
    {
        id: 0,
        category: 'Vegetable',
        image: '/images/catalog/1.png',
        title: 'Calabrese Broccoli',
        isSale: true,
        salePrice: '13.00',
        price: '20.00',
        rating: 5
    },

    {
        id: 1,
        category: 'Fresh',
        image: '/images/catalog/2.png',
        title: 'Fresh Banana Fruites',
        isSale: true,
        salePrice: '14.00',
        price: '20.00',
        rating: 5
    },

    {
        id: 2,
        category: 'Millets',
        image: '/images/catalog/3.png',
        title: 'White Nuts',
        isSale: true,
        salePrice: '15.00',
        price: '20.00',
        rating: 5
    },

    {
        id: 3,
        category: 'Vegetable',
        image: '/images/catalog/4.png',
        title: 'Vegan Red Tomato',
        isSale: true,
        salePrice: '17.00',
        price: '20.00',
        rating: 5
    },

    {
        id: 4,
        category: 'Health',
        image: '/images/catalog/5.png',
        title: 'Mung Bean',
        isSale: true,
        salePrice: '11.00',
        price: '20.00',
        rating: 5
    },

    {
        id: 5,
        category: 'Nuts',
        image: '/images/catalog/6.png',
        title: 'Brown Hazelnut',
        isSale: true,
        salePrice: '12.00',
        price: '20.00',
        rating: 5
    },

    {
        id: 6,
        category: 'Fresh',
        image: '/images/catalog/7.png',
        title: 'Eggs',
        isSale: true,
        salePrice: '17.00',
        price: '20.00',
        rating: 5
    },

    {
        id: 7,
        category: 'Fresh',
        image: '/images/catalog/8.png',
        title: 'Zelco Suji Elaichi Rusk',
        isSale: true,
        salePrice: '18.00',
        price: '20.00',
        rating: 5
    },

    {
        id: 8,
        category: 'Health',
        image: '/images/catalog/9.png',
        title: 'Mung Bean',
        isSale: true,
        salePrice: '11.00',
        price: '20.00',
        rating: 5
    },

    {
        id: 9,
        category: 'Nuts',
        image: '/images/catalog/10.png',
        title: 'White Hazelnut',
        isSale: true,
        salePrice: '12.00',
        price: '20.00',
        rating: 5
    },

    {
        id: 10,
        category: 'Fresh',
        image: '/images/catalog/11.png',
        title: 'Fresh Corn',
        isSale: true,
        salePrice: '17.00',
        price: '20.00',
        rating: 5
    },

    {
        id: 11,
        category: 'Fresh',
        image: '/images/catalog/12.png',
        title: 'Organic Almonds',
        isSale: true,
        salePrice: '15.00',
        price: '20.00',
        rating: 5
    },
    
] 

export default ProductsList