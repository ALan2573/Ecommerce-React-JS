
const products = [
    {
        id: '1',
        titulo: 'iPhone',
        price: 100,
        category: 'telefonos',
        img: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
        stock: 10,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, amet. lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, amet.'
    },
    {
        id: '2',
        titulo: 'Samsung',
        price: 300,
        category: 'telefonos',
        img: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
        stock: 15,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, amet. lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, amet.'
    },
    {
        id: '3',
        titulo: 'motorola',
        price: 200,
        category: 'tablets',
        img: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
        stock: 13,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, amet. lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, amet.'
    },
    {
        id: '4',
        titulo: 'Samsung 7',
        price: 200,
        category: 'tablets',
        img: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
        stock: 13,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, amet. lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, amet.'
    },
    {
        id: '5',
        titulo: 'notebook',
        price: 200,
        category: 'computadoras',
        img: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
        stock: 13,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, amet. lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, amet.'
    },
    {
        id: '7',
        titulo: 'Hp',
        price: 200,
        category: 'computadoras',
        img: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
        stock: 13,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, amet. lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, amet.'
    },
    
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}

export const getProductById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
        }, 500)
    })
}

export const getProductByCategory = (ProductsByCategory) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === ProductsByCategory))
        }, 500)
    })
}

