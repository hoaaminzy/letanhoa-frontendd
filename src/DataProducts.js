import product1 from "../src/images/product-3.webp";
import product2 from "../src/images/product-4.webp";
import product3 from "../src/images/product-5.webp";
import product4 from "../src/images/product-6.webp";
import product5 from "../src/images/product-7.webp";
import product6 from "../src/images/product-8.webp";

import { v4 as uuidv4 } from "uuid";
const products = [
  {
    id: uuidv4(),
    image: product1,
    name: "AirPod Air",
    price: "$299.00",
    category:'headphone',
    desc:"Eget egestas purus viverra accumsan in nisl. Dignissim diam quis enim lobortis scelerisque fermentum dui. Sed adipiscing diam donec adipiscing tristique. Aliquet enim tortor at auctor urna nunc id cursus metus. Amet commodo nulla facilisi nullam vehicula ipsum a arcu cursus. Id cursus metus aliquam eleifend mi in nulla posuere."
  },
  {
    id: uuidv4(),
    image: product2,
    name: "Air Tag",
    price: "$29.00",
    category:'mobile',
    desc:"Eget egestas purus viverra accumsan in nisl. Dignissim diam quis enim lobortis scelerisque fermentum dui. Sed adipiscing diam donec adipiscing tristique. Aliquet enim tortor at auctor urna nunc id cursus metus. Amet commodo nulla facilisi nullam vehicula ipsum a arcu cursus. Id cursus metus aliquam eleifend mi in nulla posuere."
  },
  {
    id: uuidv4(),
    image: product3,
    name: "Apple Watch Series 6",
    price: "$399.00",
    category:'loundspeaker',
    desc:"Eget egestas purus viverra accumsan in nisl. Dignissim diam quis enim lobortis scelerisque fermentum dui. Sed adipiscing diam donec adipiscing tristique. Aliquet enim tortor at auctor urna nunc id cursus metus. Amet commodo nulla facilisi nullam vehicula ipsum a arcu cursus. Id cursus metus aliquam eleifend mi in nulla posuere."
  },
  {
    id: uuidv4(),
    image: product4,
    name: "HTV Vivo Pro2",
    price: "$499.00",
    category:'loundspeaker',
    desc:"Pellentesque nec nam aliquam sem et tortor. Varius sit amet mattis vulputate enim nulla. Ipsum dolor sit amet consectetur."
  },
  {
    id: uuidv4(),
    image: product5,
    name: "Razer Blackshark",
    price: "$199.00",
    category:'headphone',
    desc:"Lobortis scelerisque fermentum dui faucibus in ornare quam viverra orci. Proin sagittis nisl rhoncus mattis. Imperdiet sed euismod nisi porta lorem mollis aliquam ut porttitor. Amet aliquam id diam maecenas ultricies mi eget."
  },
  {
    id: uuidv4(),
    image: product6,
    name: "Samsung Galaxy S11",
    price: "$999.00",
    category:'mobile',
    desc:"Lobortis scelerisque fermentum dui faucibus in ornare quam viverra orci. Proin sagittis nisl rhoncus mattis. Imperdiet sed euismod nisi porta lorem mollis aliquam ut porttitor. Amet aliquam id diam maecenas ultricies mi eget."
  },
];
export default products;
