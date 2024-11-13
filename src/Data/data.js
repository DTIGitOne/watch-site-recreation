import Image1 from "../Data/Images/home 1.png";
import featured1 from "../Data/Images/featured1.png";
import featured2 from "../Data/Images/featured2.png";
import featured3 from "../Data/Images/featured3.png";
import product1 from "../Data/Images/product1.png";
import product2 from "../Data/Images/product2.png";
import product3 from "../Data/Images/product3.png";
import product4 from "../Data/Images/product4.png";
import product5 from "../Data/Images/product5.png";
import review1 from  "../Data/Images/testimonial1.png";
import review2 from  "../Data/Images/testimonial2.png";
import review3 from  "../Data/Images/testimonial3.png";
import new1 from "../Data/Images/new1.png";
import new2 from "../Data/Images/new2.png";
import new3 from "../Data/Images/new3.png";
import new4 from "../Data/Images/new4.png";


export const newCollection = [
    {
       id: 1,
       image: Image1,
       Image: product1,
       text: "NEW WATCH COLLECTIONS B720",
       name: "B720",
       desctiption: "Latest arrival of the new imported watches of the B720 series, with a modern and resistant design.",
       price: 1245,
       collection: "new"
    }
]

export const featuredWatches = [
    {
        id: 2,
        Image: featured1,
        name: "Jazzmaster",
        price: 1050,
        collection: "featured"
     },
     {
        id: 3,
        Image: featured2,
        name: "Ingersoll",
        price: 250,
        collection: "featured"
     },
     {
        id: 4,
        Image: featured3,
        name: "Rose Gold",
        price: 890,
        collection: "featured"
     },
]

export const products = [
   {
       id: 5,
       Image: product1,
       name: "Spirit Rose",
       price: 1500,
       product: true,
       collection: "products"
    },
    {
       id: 6,
       Image: product2,
       name: "Khaki Pilot",
       price: 1350,
       product: true,
       collection: "products"
    },
    {
       id: 7,
       Image: product3,
       name: "Jubilee Black",
       price: 870,
       product: true,
       collection: "products"
    },
    {
      id: 8,
      Image: product4,
      name: "Fosil ME3",
      price: 650,
      product: true,
      collection: "products"
   },
   {
      id: 9,
      Image: product5,
      name: "Duchen",
      price: 950,
      product: true,
      collection: "products"
   },
]

export const reviews = [
   {
      id: 1,
      text: "They are the best watches that one acquires, also they are always with the latest news and trends, with a very comfortable price and especially with the attention you receive, they are always attentive to your questions.",
      date: "March 27. 2021",
      name: "Lee Doe",
      title: "Director of a company",
      image: review1
   },
   {
      id: 2,
      text: "They are the best watches that one acquires, also they are always with the latest news and trends, with a very comfortable price and especially with the attention you receive, they are always attentive to your questions.",
      date: "March 27. 2021",
      name: "Samantha Mey",
      title: "Director of a company",
      image: review2
   },
   {
      id: 3,
      text: "They are the best watches that one acquires, also they are always with the latest news and trends, with a very comfortable price and especially with the attention you receive, they are always attentive to your questions.",
      date: "March 27. 2021",
      name: "Raul Zaman",
      title: "Director of a company",
      image: review3
   },
]

export const newWatches = [
   {
       id: 10,
       Image: new1,
       name: "Longines Rose",
       price: 980,
       collection: "new"
    },
    {
       id: 11,
       Image: new2,
       name: "Jazzmaster",
       price: 1150,
       collection: "new"
    },
    {
       id: 12,
       Image: new3,
       name: "Dreyfuss Gold",
       price: 750,
       collection: "new"
    },
    {
      id: 13,
      Image: new4,
      name: "Portuguese Rose",
      price: 1590,
      collection: "new"
   },
]

export const mergedArray = newCollection.concat(featuredWatches, products, newWatches);