// import React, { useState, useEffect } from "react";

// import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
// import axios from "axios";
// import InsertData from "./InsertData";

// const FetchData = () => {
//   const [data, setData] = useState([]);
//   const [editData, setEditData] = useState([]);

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = () => {
//     axios
//       .get("http://localhost:2000/data/fetch")
//       .then((response) => {
//         setData(response.data);
//         setEditData(response.data);
//       })
//       .catch((error) => {
//         console.error("Error fetching data:", error);
//       });
//   };

//   const handleEditChange = (e, index) => {
//     const { name, value } = e.target;
//     setEditData((prevData) => {
//       const newData = [...prevData];
//       newData[index][name] = value;
//       return newData;
//     });
//   };

//   const handleImageUpload = (e, index) => {
//     const file = e.target.files[0];
//     setEditData((prevData) => {
//       const newData = [...prevData];
//       newData[index].img = file;
//       return newData;
//     });
//   };

//   const handleUpdate = (id, index) => {
//     const updatedData = editData[index];
//     const formData = new FormData();
//     formData.append("title", updatedData.title);
//     formData.append("category", updatedData.category);
//     formData.append("price", updatedData.price);
//     formData.append("img", updatedData.img);
//     formData.append("desc", updatedData.desc);

//     axios
//       .put(`http://localhost:2000/data/update/${id}`, formData)
//       .then((response) => {
//         console.log("Data updated successfully!");
//         fetchData();
//       })
//       .catch((error) => {
//         console.error("Error updating data:", error);
//       });
//   };

//   return (
//     <>
//       <div className="section-center">
//         <table>
//           <thead>
//             <tr>
//               <th>Title</th>
//               <th>Category</th>
//               <th>Price</th>
//               <th>Image</th>
//               <th>Description</th>
//               <th>Action</th>
//             </tr>
//           </thead>
//           <tbody>
//             {data.map((item, index) => (
//               <tr key={item.id}>
//                 <td>
//                   <input
//                     type="text"
//                     name="title"
//                     value={editData[index].title}
//                     onChange={(e) => handleEditChange(e, index)}
//                   />
//                 </td>
//                 <td>
//                   <input
//                     type="text"
//                     name="category"
//                     value={editData[index].category}
//                     onChange={(e) => handleEditChange(e, index)}
//                   />
//                 </td>
//                 <td>
//                   <input
//                     type="number"
//                     name="price"
//                     value={editData[index].price}
//                     onChange={(e) => handleEditChange(e, index)}
//                   />
//                 </td>
//                 <td>
//                   <input
//                     type="file"
//                     name="img"
//                     accept="image/*"
//                     onChange={(e) => handleImageUpload(e, index)}
//                   />
//                 </td>
//                 <td>
//                   <textarea
//                     name="desc"
//                     value={editData[index].desc}
//                     onChange={(e) => handleEditChange(e, index)}
//                   />
//                 </td>
//                 <td>
//                   <button onClick={() => handleUpdate(item.id, index)}>
//                     Update
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       <>

//       </>
//     </>
//   );
// };

// export default FetchData;
// update with out delete
// FetchData.js;

// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const FetchData = () => {
//   const [data, setData] = useState([]);
//   const [editData, setEditData] = useState([]);

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = () => {
//     axios
//       .get("http://localhost:2000/data/fetch")
//       .then((response) => {
//         setData(response.data);
//         setEditData(response.data);
//       })
//       .catch((error) => {
//         console.error("Error fetching data:", error);
//       });
//   };

//   const handleEditChange = (e, index) => {
//     const { name, value } = e.target;
//     setEditData((prevData) => {
//       const newData = [...prevData];
//       newData[index][name] = value;
//       return newData;
//     });
//   };

//   const handleImageUpload = (e, index) => {
//     const file = e.target.files[0];
//     setEditData((prevData) => {
//       const newData = [...prevData];
//       newData[index].img = file;
//       return newData;
//     });
//   };

//   const handleUpdate = (id, index) => {
//     const updatedData = editData[index];
//     const formData = new FormData();
//     formData.append("title", updatedData.title);
//     formData.append("category", updatedData.category);
//     formData.append("price", updatedData.price);
//     formData.append("img", updatedData.img);
//     formData.append("desc", updatedData.desc);

//     axios
//       .put(`http://localhost:2000/data/update/${id}`, formData)
//       .then((response) => {
//         console.log("Data updated successfully!");
//         fetchData();
//       })
//       .catch((error) => {
//         console.error("Error updating data:", error);
//       });
//   };

//   const handleDelete = (id) => {
//     axios
//       .delete(`http://localhost:2000/data/delete/${id}`)
//       .then((response) => {
//         console.log("Data deleted successfully!");
//         fetchData();
//       })
//       .catch((error) => {
//         console.error("Error deleting data:", error);
//       });
//   };

//   return (
//     <div className="section-center">
//       <table>
//         <thead>
//           <tr>
//             <th>Title</th>
//             <th>Category</th>
//             <th>Price</th>
//             <th>Image</th>
//             <th>Description</th>
//             <th>Action</th>
//           </tr>
//         </thead>
//         <tbody>
//           {data.map((item, index) => (
//             <tr key={item.id}>
//               <td>
//                 <input
//                   type="text"
//                   name="title"
//                   value={editData[index].title}
//                   onChange={(e) => handleEditChange(e, index)}
//                 />
//               </td>
//               <td>
//                 <input
//                   type="text"
//                   name="category"
//                   value={editData[index].category}
//                   onChange={(e) => handleEditChange(e, index)}
//                 />
//               </td>
//               <td>
//                 <input
//                   type="number"
//                   name="price"
//                   value={editData[index].price}
//                   onChange={(e) => handleEditChange(e, index)}
//                 />
//               </td>
//               <td>
//                 <input
//                   type="file"
//                   name="img"
//                   accept="image/*"
//                   onChange={(e) => handleImageUpload(e, index)}
//                 />
//               </td>
//               <td>
//                 <textarea
//                   name="desc"
//                   value={editData[index].desc}
//                   onChange={(e) => handleEditChange(e, index)}
//                 />
//               </td>
//               <td>
//                 <button onClick={() => handleUpdate(item.id, index)}>
//                   Update
//                 </button>
//                 <button onClick={() => handleDelete(item.id)}>Delete</button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default FetchData;
// update and delete

// FetchData.js

// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const FetchData = () => {
//   const [data, setData] = useState([]);
//   const [editData, setEditData] = useState([]);
//   const [showAddForm, setShowAddForm] = useState(false);
//   const [formData, setFormData] = useState({
//     title: "",
//     category: "",
//     price: "",
//     img: null,
//     desc: "",
//   });

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = () => {
//     axios
//       .get("http://localhost:2000/data/fetch")
//       .then((response) => {
//         setData(response.data);
//         setEditData(response.data);
//       })
//       .catch((error) => {
//         console.error("Error fetching data:", error);
//       });
//   };

//   const handleEditChange = (e, index) => {
//     const { name, value } = e.target;
//     setEditData((prevData) => {
//       const newData = [...prevData];
//       newData[index][name] = value;
//       return newData;
//     });
//   };

//   const handleImageUpload = (e, index) => {
//     const file = e.target.files[0];
//     setEditData((prevData) => {
//       const newData = [...prevData];
//       newData[index].img = file;
//       return newData;
//     });
//   };

//   const handleUpdate = (id, index) => {
//     const updatedData = editData[index];
//     const formData = new FormData();
//     formData.append("title", updatedData.title);
//     formData.append("category", updatedData.category);
//     formData.append("price", updatedData.price);
//     formData.append("img", updatedData.img);
//     formData.append("desc", updatedData.desc);

//     axios
//       .put(`http://localhost:2000/data/update/${id}`, formData)
//       .then((response) => {
//         console.log("Data updated successfully!");
//         fetchData();
//       })
//       .catch((error) => {
//         console.error("Error updating data:", error);
//       });
//   };

//   const handleDelete = (id) => {
//     axios
//       .delete(`http://localhost:2000/data/delete/${id}`)
//       .then((response) => {
//         console.log("Data deleted successfully!");
//         fetchData();
//       })
//       .catch((error) => {
//         console.error("Error deleting data:", error);
//       });
//   };

//   const handleAddFormToggle = () => {
//     setShowAddForm(!showAddForm);
//   };

//   const handleAddFormChange = (e) => {
//     if (e.target.name === "img") {
//       setFormData({ ...formData, img: e.target.files[0] });
//     } else {
//       setFormData({ ...formData, [e.target.name]: e.target.value });
//     }
//   };

//   const handleAddFormSubmit = (e) => {
//     e.preventDefault();

//     const insertData = new FormData();
//     insertData.append("title", formData.title);
//     insertData.append("category", formData.category);
//     insertData.append("price", formData.price);
//     insertData.append("img", formData.img);
//     insertData.append("desc", formData.desc);

//     axios
//       .post("http://localhost:2000/data/insert", insertData)
//       .then((response) => {
//         console.log("Data inserted successfully!");
//         setShowAddForm(false);
//         setFormData({
//           title: "",
//           category: "",
//           price: "",
//           img: null,
//           desc: "",
//         });
//         fetchData();
//       })
//       .catch((error) => {
//         console.error("Error inserting data:", error);
//       });
//   };
//   return (
//     <div className="section-center">
//       <table>
//         <thead>
//           <tr>
//             <th>Title</th>
//             <th>Category</th>
//             <th>Price</th>
//             <th>Image</th>
//             <th>Description</th>
//             <th>Action</th>
//           </tr>
//         </thead>
//         <tbody>
//           {data.map((item, index) => (
//             <tr key={item.id}>
//               <td>
//                 <input
//                   type="text"
//                   name="title"
//                   value={editData[index].title}
//                   onChange={(e) => handleEditChange(e, index)}
//                 />
//               </td>
//               <td>
//                 <input
//                   type="text"
//                   name="category"
//                   value={editData[index].category}
//                   onChange={(e) => handleEditChange(e, index)}
//                 />
//               </td>
//               <td>
//                 <input
//                   type="number"
//                   name="price"
//                   value={editData[index].price}
//                   onChange={(e) => handleEditChange(e, index)}
//                 />
//               </td>
//               <td>
//                 <input
//                   type="file"
//                   name="img"
//                   accept="image/*"
//                   onChange={(e) => handleImageUpload(e, index)}
//                 />
//               </td>
//               <td>
//                 <textarea
//                   name="desc"
//                   value={editData[index].desc}
//                   onChange={(e) => handleEditChange(e, index)}
//                 />
//               </td>
//               <td>
//                 <div className="button-container">
//                   <button onClick={() => handleUpdate(item.id, index)}>
//                     Update
//                   </button>
//                 </div>
//               </td>
//               <td>
//                 <div className="button-container">
//                   <button onClick={() => handleDelete(item.id)}>Delete</button>
//                 </div>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default FetchData;
// //  night 1
// // // work for delete   update
import React, { useState, useEffect } from "react";
import axios from "axios";
import InsertData from "./InsertData";

const FetchData = () => {
  const [data, setData] = useState([]);
  const [editData, setEditData] = useState([]);
  const [showAddForm, setShowAddForm] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    price: "",
    img: null,
    desc: "",
  });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios
      .get("http://localhost:2000/data/fetch")
      .then((response) => {
        setData(response.data);
        setEditData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  const handleEditChange = (e, index) => {
    const { name, value } = e.target;
    setEditData((prevData) => {
      const newData = [...prevData];
      newData[index][name] = value;
      return newData;
    });
  };

  const handleImageUpload = (e, index) => {
    const file = e.target.files[0];
    setEditData((prevData) => {
      const newData = [...prevData];
      newData[index].img = file;
      return newData;
    });
  };

  const handleUpdate = (id, index) => {
    const updatedData = editData[index];
    const formData = new FormData();
    formData.append("title", updatedData.title);
    formData.append("category", updatedData.category);
    formData.append("price", updatedData.price);
    formData.append("img", updatedData.img);
    formData.append("desc", updatedData.desc);

    axios
      .put(`http://localhost:2000/data/update/${id}`, formData)
      .then((response) => {
        console.log("Data updated successfully!");
        fetchData();
      })
      .catch((error) => {
        console.error("Error updating data:", error);
      });
  };

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:2000/data/delete/${id}`)
      .then((response) => {
        console.log("Data deleted successfully!");
        fetchData();
      })
      .catch((error) => {
        console.error("Error deleting data:", error);
      });
  };

  const handleAddFormToggle = () => {
    setShowAddForm(!showAddForm);
  };

  const handleAddFormChange = (e) => {
    if (e.target.name === "img") {
      setFormData({ ...formData, img: e.target.files[0] });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const handleAddFormSubmit = (e) => {
    e.preventDefault();

    const insertData = new FormData();
    insertData.append("title", formData.title);
    insertData.append("category", formData.category);
    insertData.append("price", formData.price);
    insertData.append("img", formData.img);
    insertData.append("desc", formData.desc);

    axios
      .post("http://localhost:2000/data/insert", insertData)
      .then((response) => {
        console.log("Data inserted successfully!");
        setShowAddForm(false);
        setFormData({
          title: "",
          category: "",
          price: "",
          img: null,
          desc: "",
        });
        fetchData();
      })
      .catch((error) => {
        console.error("Error inserting data:", error);
      });
  };

  return (
    <>
      <button onClick={handleAddFormToggle}>Add Item</button>
      {showAddForm && (
        <InsertData
          formData={formData}
          handleChange={handleAddFormChange}
          handleSubmit={handleAddFormSubmit}
        />
      )}
      <div className="section-center">
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Category</th>
              <th>Price</th>
              <th>Image</th>
              <th>Description</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={item.id}>
                <td>
                  <input
                    type="text"
                    name="title"
                    value={editData[index].title}
                    onChange={(e) => handleEditChange(e, index)}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    name="category"
                    value={editData[index].category}
                    onChange={(e) => handleEditChange(e, index)}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    name="price"
                    value={editData[index].price}
                    onChange={(e) => handleEditChange(e, index)}
                  />
                </td>
                <td>
                  <input
                    type="file"
                    name="img"
                    onChange={(e) => handleImageUpload(e, index)}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    name="desc"
                    value={editData[index].desc}
                    onChange={(e) => handleEditChange(e, index)}
                  />
                </td>
                <td>
                  <button onClick={() => handleUpdate(item.id, index)}>
                    Update
                  </button>
                </td>
                <td>
                  <button onClick={() => handleDelete(item.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default FetchData;
