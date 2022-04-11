
const productos = [
    {
        id: 1,
        nombre: "Remera Expert",
        precio: 2299,
        img:"https://statics.glamit.com.ar/media/catalog/product/cache/54/base/300x480/9df78eab33525d08d6e5fb8d27136e95/c/o/complot_01040121_negro_1_p.jpg",
        stock: 10,
        descripcion: "Descripcion de Remera Expert"
    },
    {
        id: 2,
        nombre: "Remera Duchamp",
        precio: 2999,
        img:"https://statics.glamit.com.ar/media/catalog/product/cache/54/base/300x480/9df78eab33525d08d6e5fb8d27136e95/c/o/complot_01030140_negro_1_p.jpg",
        stock: 10,
        descripcion: "Descripcion de Remera Duchamp"
    },
    {
        id: 3,
        nombre: "Remera Godess",
        precio: 2299,
        img:"https://statics.glamit.com.ar/media/catalog/product/cache/54/base/300x480/9df78eab33525d08d6e5fb8d27136e95/c/o/complot_01030139_negro_1_p.jpg",
        stock: 10,
        descripcion: "Descripcion de Remera Godess"
    },
    {
        id: 4,
        nombre: "Remera Magic",
        precio: 1599,
        img:"https://statics.glamit.com.ar/media/catalog/product/cache/54/base/300x480/9df78eab33525d08d6e5fb8d27136e95/c/o/complot_01040103_blanco_1_p.jpg",
        stock: 10,
        descripcion: "Descripcion de Remera Magic"
    },
    {
        id: 5,
        nombre: "Remera Summer",
        precio: 1699,
        img:"https://statics.glamit.com.ar/media/catalog/product/cache/54/base/300x480/9df78eab33525d08d6e5fb8d27136e95/c/o/complot_01040116_negro_1_p.jpg",
        stock: 10,
        descripcion: "Descripcion de Remera Summer"
    },
    {
        id: 6,
        nombre: "Remera Morocco",
        precio: 1499,
        img:"https://statics.glamit.com.ar/media/catalog/product/cache/54/base/300x480/9df78eab33525d08d6e5fb8d27136e95/c/o/complot_01040149_rojo_1_p.jpg",
        stock: 10,
        descripcion: "Descripcion de Remera Morocco"
    }
]

export const getProducts = () => {
    return new Promise (resolve => {
        setTimeout(() => {
            resolve(productos)
        }, 2000)
    })
}

export const getProductsById = (id) => {
    return new Promise (resolve => {
        setTimeout(() => {
            resolve(productos.find(prod => prod.id === id))
        }, 2000)
    })
}