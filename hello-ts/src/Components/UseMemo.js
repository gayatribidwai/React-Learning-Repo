// Use Memo, Use Callback
// Both hooks are used for performance improvement purpose.
// Use Memo - It allows us to remember a perticular value.
// Mostly used for large amount of data or to manage more useState hooks like this.

import { useEffect, useState, useMemo } from "react";

export default function UseMemo() {
  const [data, setData] = useState([]);
  const [theme, setTheme] = useState(false);

  async function fetchAllProducts() {
    try {
      const responce = await fetch("https://dummyjson.com/products");
      const result = await responce.json();
      if (result && result.products) setData(result.products);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    fetchAllProducts();
  }, []);
  console.log(data);

  function filterProductsByPrice(getProducts) {
    console.log('This is getting Called');
    
    return getProducts && getProducts.length > 0
      ? getProducts.filter((item) => item.price > 50)
      : [];
  }

  const memoriseFilterProductsByPrice = useMemo(()=> filterProductsByPrice(data), [data]);

  return (
    <div>
      <h1>Use Memo Ho ok</h1>
      <ul>
        {
            memoriseFilterProductsByPrice(data).map(item=> <li>{item.title}</li>) 
        }
      </ul>
      <button onClick={()=> setTheme(!theme)}>Toggle Theme</button>
      <h3>{theme ? 'Light' : 'Dark'}</h3>
    </div>
  );
}
