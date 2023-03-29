import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios'
const AllProduct = () => {
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);
  // const [updatedPost, setUpdatedPost] = useState({
  //   id: "",
  //   title: "",
  //   description: "",
  //   img: "",
  // });
  useEffect(() => {
    // (async () => {
    //   const res = await fetch("http://localhost:3001/products");
    //   const resData = await res.json();
    //   setPosts(resData);
    //   console.log(resData);
    // })();

    axios
      .get("http://localhost:3001/products")
      .then((res) => {
        console.log(res);
        setPosts(res.data);
      })
      .catch((err) => console.log(err));
  }, []);


  const deletePost = async (id) => {
    const res = await fetch(`http://localhost:3001/delete/${id}`, {
      method: "DELETE",
    });
    // axios
    //   .delete(`/delete/${id}`)
    //   .then((res) => console.log(res))
    //   .catch((err) => console.log(err));
  };

  // const updatePost = (id, title, description, img) => {
  //   setUpdatedPost((prev) => {
  //     return {
  //       ...prev,
  //       id: id,
  //       title: title,
  //       description: description,
  //       img: img,
  //     };
  //   });
  // };

  // const handleChange = (e) => {
  //   const { name, value } = e.target;

  //   setUpdatedPost((prev) => {
  //     return {
  //       ...prev,
  //       [name]: value,
  //     };
  //   });
  // };
  // const savehandleUpdate = () => {
  //   axios
  //     .put(`/update/${updatedPost.id}`, updatedPost)
  //     .then((res) => console.log(res))
  //     .catch((err) => console.log(err));
  // };
  //   useEffect(()=>{
  //     window.scrollTo(0,0)
  //   },[])
  return (
    <div style={{ padding: " 100px 100px" }}>
      <div>
        {" "}
        <div
          style={{
            textAlign: "center",
            padding: "50px 0",
            display: "block",
            fontSize: "2rem",
            fontWeight: "blod",
          }}
        >
          All Product
        </div>
        <div>
          <table border={1} width="100%">
            <thead>
              <tr>
                <th>STT</th>
                <th>Id</th>
                <th>Name</th>
                <th>Image</th>
                <th>Category</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Description</th>
                <th colSpan={2}>Action</th>
              </tr>
            </thead>
            <tbody>
              {posts.map((post, index) => {
                return (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>
                      <span>{post._id}</span>
                    </td>
                    <td>
                      <img style={{ width: "150px" }} src={post.image} alt="" />
                    </td>
                    <td>
                      <h4>{post.name}</h4>
                    </td>
                    <td>
                      <h3>{post.category}</h3>
                    </td>
                    <td>
                      <span>{post.price}</span>
                    </td>
                    <td>
                      <span>{post.quantity}</span>
                    </td>
                    <td>
                      <p>{post.description}</p>
                    </td>
                    <div>
                      <button
                      // onClick={() =>
                      //   updatePost(post._id, post.title, post.description)
                      // }
                      >
                        Update
                      </button>
                      <button onClick={() => deletePost(post._id)}>
                        Delete
                      </button>
                    </div>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <button onClick={() => navigate(-1)}>back</button>
      </div>
      {/* <div>
          <h3>Update</h3>
          <form style={{ display: "flex", flexDirection: "column" }}>
            <input
              type="text"
              placeholder="title"
              name="title"
              value={updatedPost.title ? updatedPost.title : ""}
              onChange={handleChange}
            />
            <input
              type="text"
              placeholder="desc"
              name="description"
              value={updatedPost.description ? updatedPost.description : ""}
              onChange={handleChange}
            />
            <input
              type="file"
              name="img"
              value={updatedPost.img ? updatedPost.img : ""}
              onChange={handleChange}
            />
            <button onClick={savehandleUpdate}>SAVE</button>
          </form>
        </div> */}
    </div>
  );
};

export default AllProduct;
