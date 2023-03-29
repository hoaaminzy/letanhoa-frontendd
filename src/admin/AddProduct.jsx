import React, { useState } from "react";
import { ImagetoBase64 } from "../utitlity/ImageToBase64";
const AddProduct = () => {
  const [data, setData] = useState({
    name: "",
    category: "",
    image: "",
    price: "",
    quantity: "",
    description: "",
  });

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setData((preve) => {
      return {
        ...preve,
        [name]: value,
      };
    });
  };

  const uploadImage = async (e) => {
    const data = await ImagetoBase64(e.target.files[0]);
    // console.log(data)

    setData((preve) => {
      return {
        ...preve,
        image: data,
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(data);

    const { name, image, category, price } = data;

    if (name && image && category && price) {
      const fetchData = await fetch("http://localhost:3001/create", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const fetchRes = await fetchData.json();

      console.log(fetchRes);
      alert(fetchRes.message);

      setData(() => {
        return {
          name: "",
          category: "",
          image: "",
          price: "",
          quantity: "",
          description: "",
        };
      });
    } else {
      alert("Enter required Fields");
    }
  };

  return (
    <div style={{ padding: "50px 100px" }}>
      <h3
        style={{
          textAlign: "center",
          fontWeight: "bold",
          fontSize: "2rem",
          displayL: "block",
          padding: "20px 0",
        }}
      >
        Add Product
      </h3>
      <form
        style={{ display: "flex", flexDirection: "column", gap: "20px" }}
        onSubmit={handleSubmit}
      >
        <label htmlFor="name">Name</label>
        <input
          type={"text"}
          name="name"
          className="bg-slate-200 p-1 my-1"
          onChange={handleOnChange}
          value={data.name}
        />

        <label htmlFor="category">Category</label>
        <select
          className="bg-slate-200 p-1 my-1"
          id="category"
          name="category"
          onChange={handleOnChange}
          value={data.category}
        >
          <option value={"other"}>------ Category ------</option>
          <option value={"iphone"}>Iphone</option>
          <option value={"soundç"}>Sound</option>
          <option value={"watch"}>Watch</option>
          <option value={"tablet"}>Tablet</option>
        </select>

        <label htmlFor="image">
          Image
          <div className="h-40 w-full bg-slate-200  rounded flex items-center justify-center cursor-pointer">
            {data.image ? (
              <img
                style={{ width: "200px" }}
                src={data.image}
                className="h-full"
              />
            ) : (
              <span className="text-5xl">Them anh</span>
            )}

            <input
              type={"file"}
              accept="image/*"
              id="image"
              onChange={uploadImage}
              className="hidden"
            />
          </div>
        </label>

        <label htmlFor="price" className="my-1">
          Price
        </label>
        <input
          type={"text"}
          className="bg-slate-200 p-1 my-1"
          name="price"
          onChange={handleOnChange}
          value={data.price}
        />
        <label htmlFor="quantity" className="my-1">
          Quantity
        </label>
        <input
          type={"text"}
          className="bg-slate-200 p-1 my-1"
          name="quantity"
          onChange={handleOnChange}
          value={data.quantity}
        />

        <label htmlFor="description">Description</label>
        <textarea
          rows={2}
          value={data.description}
          className="bg-slate-200 p-1 my-1 resize-none"
          name="description"
          onChange={handleOnChange}
        ></textarea>

        <div className="btn">
          <button className="" type="submit">
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
