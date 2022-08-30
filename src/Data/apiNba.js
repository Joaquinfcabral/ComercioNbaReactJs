import { collection, getDocs }  from 'firebase/firestore'
import { DB } from './apiFirebase'
const productos = [{
        id: 1,
        name: 'Camiseta Dallas Mavericks',
        description: "Remera de los Dallas Mavericks Swinigman edition 2014",
        stock: 15,
        price: 10000,
        category: 1,
        imagen: "https://basketworld.com/9140-medium_default/luka-doncic-icon-edition-swingman-jersey-dallas-mavericks-junior.jpg"
    },
    {
        id: 2,
        name: 'Camiseta San Antonio Spurs',
        description: "Remera de los San Antonio Spurs Swinigman edition 2016",
        stock: 10,
        price: 10000,
        category: 1,
        imagen: "https://images.footballfanatics.com/san-antonio-spurs/san-antonio-spurs-nike-icon-swingman-jersey-devin-vassell-mens_ss4_p-12049237+u-e5lhe5cc9sb48wbm7fpl+v-1452e0654dfd4a4c8c537ce7cf1e9aae.jpg?_hv=1"
    },
    {
        id: 3,
        name: 'Camiseta Golden State Warrios',
        description: "Remera de los Golden State Warrios Swinigman edition 2020",
        stock: 12,
        price: 10000,
        category: 1,
        imagen: "https://images.footballfanatics.com/golden-state-warriors/golden-state-warriors-jordan-statement-swingman-jersey-custom-mens_ss4_p-12014351+u-63gpq914vdha2mw46ica+v-355f46639a924c029ddd422cbc437b0d.jpg?_hv=1&w=340"
    },
    {
        id: 4,
        name: 'Camiseta Los Angeles Lakers',
        description: "Remera de los Los Angeles Lakers Swinigman edition 2022",
        stock: 5,
        price: 10000,
        category: 1,
        imagen: "https://images.footballfanatics.com/los-angeles-lakers/los-angeles-lakers-nike-classic-edition-swingman-jersey-black-lebron-james-mens_ss4_p-12072427+u-13tyxlhra2dctn79xcgw+v-36abf1b2c3e046aebe0af0d69e934db1.jpg?_hv=1&w=900"
    },
    {
        id: 5,
        name: 'Camiseta Miami Heat',
        description: "Remera de los Miami Heat Swinigman edition 2022",
        stock: 6,
        price: 10000,
        category: 1,
        imagen: "https://images.footballfanatics.com/miami-heat/miami-heat-nike-association-swingman-jersey-custom-youth_ss4_p-11911512+u-i3xjftpq72ot418vjeka+v-fcc8b74bdd3b4be08dc59b7ea9094dde.jpg?_hv=1&w=600"
    },
    {
        id: 6,
        name: 'Cup NBA',
        description: "Gorra de la NBA edition 2022",
        stock: 20,
        price: 5000,
        category: 3,
        imagen: "https://www.newera.mx/medias/?context=bWFzdGVyfHJvb3R8MjMzMzgzfGltYWdlL3BuZ3xoNjQvaGY3LzEwMTA5MDcyMDQ4MTU4fDM1MzM2ODlmMmUyZmJkMzgzMzMyY2M2YTEzM2ExMzU4OTFkODkxNDRmODdmZGFiNDQ3NTIxYTc4NzQ0YjgwZDU"
    },
]




export const customFetch = new Promise((resolve, reject) => {

    const colRef= collection(DB, 'Productos');

    getDocs(colRef).then((snapshot) =>{
      console.log('>> snapshot.docs: ', snapshot.doc)

      const productosConFormato = snapshot.docs.map((rawDoc) => {
        return{
            id: rawDoc.id,
            ...rawDoc.data()
        }
      })
    
      console.log('>> Productos:', productosConFormato)
      resolve(productosConFormato)
    }, (error) =>{
      reject('>> Error al traer los docs: ',error)
    
    });

//    let condition = true
//    setTimeout(() => {
//        if (condition) {
//            resolve(productos)
//        } else {
//            reject('Error en servidor')
//        }
//    }, 3000)
})
