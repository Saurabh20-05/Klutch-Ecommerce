import { useEffect, useState, useCallback } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export default function VendorProducts() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);




  const fetchProducts = useCallback(async () => {
    try {
      const { data } = await axios.get(
 `${process.env.REACT_APP_API_URL}/api/products/vendor/my`,
 {
   headers:{
      Authorization:`Bearer ${user.token}`
   }
 }
);

      setProducts(data);
    } catch (error) {
      toast.error("Failed to load products");
    }
  }, [user?.token]);

  useEffect(() => {
 fetchProducts();
}, [fetchProducts]);

  

  const deleteProduct = async (id) => {
    if (!window.confirm("Delete this product?")) return;

    try {
      await axios.delete(
        `http://localhost:5000/api/products/${id}`,
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );

      toast.success("Product deleted");
      fetchProducts();

    } catch (error) {
      toast.error("Delete failed");
    }
  };

  return (
    <div>
      <h2 className="text-2xl md:text-3xl font-bold mb-8">
        Manage Products
      </h2>

      <div className="grid grid-cols-1
sm:grid-cols-2
lg:grid-cols-3
xl:grid-cols-4 gap-8">
        {products.map((product) => (
          <div
            key={product._id}
            className="bg-white rounded-xl shadow p-6"
          >
            <img
  src={`${process.env.REACT_APP_API_URL}${product.image}`}
  alt={product.name}
  className="w-full h-56 object-cover"
/>

            <h3 className="text-xl font-semibold">
              {product.name}
            </h3>

            <p className="text-blue-600 font-bold">
              ₹{product.price}
            </p>

            <p className="text-gray-600 mb-4">
              {product.description}
            </p>

            <div className="flex gap-4">
              <button
                onClick={() =>
                  navigate(`/vendor/edit/${product._id}`)
                }
                className="flex-1 bg-blue-600 text-white py-2 rounded"
              >
                Edit
              </button>

              <button
                onClick={() =>
                  deleteProduct(product._id)
                }
                className="flex-1 bg-red-500 text-white py-2 rounded"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}