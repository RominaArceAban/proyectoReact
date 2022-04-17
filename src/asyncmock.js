
const productos = [
    {
        id: "1",
        nombre: "Remera Flames",
        precio: 2299,
        img:"https://www.complot.com.ar/media/catalog/product/cache/bec5eb20f6f60b3e85ccc7f50be47a59/c/o/complot_01050147_negro_1_p_2.jpg",
        stock: 10,
        category: "Remera",
        descripcion: "Descripcion de Remera Flames"
    },
    {
        id: "2",
        nombre: "Remera Mapa",
        precio: 2999,
        img:"https://www.complot.com.ar/media/catalog/product/cache/bec5eb20f6f60b3e85ccc7f50be47a59/c/o/complot_01050146_multicolor_1_p_1.jpg",
        stock: 10,
        category: "Remera",
        descripcion: "Descripcion de Remera Mapa"
    },
    {
        id: "3",
        nombre: "Remera Infinity",
        precio: 2299,
        img:"https://www.complot.com.ar/media/catalog/product/cache/bec5eb20f6f60b3e85ccc7f50be47a59/c/o/complot_01050117_negro_1_p_7.jpg",
        stock: 10,
        category: "Remera",
        descripcion: "Descripcion de Remera Infinity"
    },
    {
        id: "4",
        nombre: "Buzo Open",
        precio: 1599,
        img:"https://www.complot.com.ar/media/catalog/product/cache/bec5eb20f6f60b3e85ccc7f50be47a59/c/o/complot_01040508_negro_1_p_1.jpg",
        stock: 10,
        category: "Buzo",
        descripcion: "Descripcion de Buzo Open"
    },
    {
        id: "5",
        nombre: "Buzo Marcus Winter",
        precio: 1699,
        img:"https://www.complot.com.ar/media/catalog/product/cache/bec5eb20f6f60b3e85ccc7f50be47a59/c/o/complot_01050507_grismelange_1_p_1.jpg",
        stock: 10,
        category: "Buzo",
        descripcion: "Descripcion de Buzo Marcus Winter"
    },
    {
        id: "6",
        nombre: "Buzo Chicago",
        precio: 1499,
        img:"https://www.complot.com.ar/media/catalog/product/cache/bec5eb20f6f60b3e85ccc7f50be47a59/c/o/complot_01040506_negro_1_p_6.jpg",
        stock: 10,
        category: "Buzo",
        descripcion: "Descripcion de Buzo Chhicago"
    },
    {
        id: "7",
        nombre: "Camisa Croacia",
        precio: 1699,
        img:"https://www.complot.com.ar/media/catalog/product/cache/bec5eb20f6f60b3e85ccc7f50be47a59/c/o/complot_01053002_azul_1_p.jpg",
        stock: 10,
        category: "Camisa",
        descripcion: "Descripcion de Camisa Croacia"
    },
    {
        id: "8",
        nombre: "Camisa Letonia",
        precio: 1699,
        img:"https://www.complot.com.ar/media/catalog/product/cache/bec5eb20f6f60b3e85ccc7f50be47a59/c/o/complot_01053003_marron_1_p.jpg",
        stock: 10,
        category: "Camisa",
        descripcion: "Descripcion de Camisa Letonia"
    },
    {
        id: "9",
        nombre: "Camisa Pijama Estocolmo",
        precio: 1699,
        img:"https://www.complot.com.ar/media/catalog/product/cache/bec5eb20f6f60b3e85ccc7f50be47a59/c/o/complot_01053004_negro_1_p_5.jpg",
        stock: 10,
        category: "Camisa",
        descripcion: "Descripcion de Camisa Pijama Estocolmo"
    }
]

const categories = [
    {id: "Remera", descripcion: "Remera"},
    {id: "Buzo", descripcion: "Buzo"},
    {id: "Camisa", descripcion: "Camisa"}
]

export const getCategories = () => {
    return new Promise (resolve => {
        setTimeout(() => {
            resolve(categories)
        }, 500)
    })
}

export const getProducts = (categoryId) => {
    return new Promise (resolve => {
        setTimeout(() => {
            resolve(categoryId ? productos.filter(prod => prod.category === categoryId) : productos)
        }, 500)
    })
}

export const getProductsById = (id) => {
    return new Promise (resolve => {
        setTimeout(() => {
            resolve(productos.find(prod => prod.id === id))
        }, 500)
    })
}