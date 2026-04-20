import { useEffect, useState, useRef } from "react";
import axios from "axios";
import { useAuth } from "../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";
import toast from "react-hot-toast";
import ProductModal from "../components/ProductModal";

export default function Home() {
  const [products, setProducts] = useState([]);
  const productsRef = useRef(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(null);

  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/login", { replace: true });
      return;
    }

    const role = user?.user?.role;

    if (role === "admin") {
      navigate("/admin", { replace: true });
    }

    if (role === "vendor") {
      navigate("/vendor", { replace: true });
    }
  }, [user, navigate]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data } = await axios.get(
          `${process.env.REACT_APP_API_URL}/api/products`
        );
        setProducts(data);
      } catch (err) {
        setError("Failed to load products");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const addToCart = async (productId) => {
    if (!user) {
      toast.error("Please login first");
      return;
    }

    try {
      await axios.post(
        `${process.env.REACT_APP_API_URL}/api/cart/add`,
        { productId, quantity: 1 },
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );

      toast.success("Added to cart");
    } catch {
      toast.error("Failed to add to cart");
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        Loading...
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100 text-red-500">
        {error}
      </div>
    );
  }

  return (
    <div className="w-full">


<section className="bg-gradient-to-br from-slate-100 via-white to-orange-50 min-h-screen flex items-center px-6 md:px-10 py-14 overflow-hidden">

  <div className="max-w-[1600px] mx-auto grid md:grid-cols-[.95fr_1.05fr] gap-20 items-center">

    <div className="z-10">

      <h1 className="text-4xl md:text-5xl lg:text-6xl md:text-8xl font-bold leading-[1.05] text-slate-900">
        Discover Your
        <br />
        <span className="text-orange-500">
          Perfect Style
        </span>
      </h1>

      <p className="mt-8 text-xl md:text-2xl text-slate-700 leading-relaxed max-w-2xl">
        Explore our curated collection of premium fashion pieces designed
        for the modern lifestyle. Quality craftsmanship meets contemporary design.
      </p>

      <div className="mt-10">
        <button
  onClick={() =>
    productsRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start"
    })
  }
  className="bg-orange-500 text-white px-10 py-5 rounded-xl font-semibold shadow-lg hover:bg-orange-600 transition text-lg"
>
  Shop Now
</button>
      </div>

    </div>


    <div className="relative flex justify-center">

      <div className="absolute -inset-10 bg-orange-300 blur-3xl opacity-20 rounded-full"></div>

      <div className="relative">
        <img
          src="/images/hero-combined.png"
          alt="Fashion Hero"
          className="w-full max-w-[980px] h-auto object-contain mx-auto"
        />
      </div>

    </div>

  </div>

</section>

      <section className="relative py-24 overflow-hidden">

        <div className="absolute inset-0">
          <img
            src="/images/zbanner1.jpg"
            alt="Category Background"
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        <div className="relative z-10">

          <div className="text-center mb-16 px-10">
            <h2 className="text-3xl font-bold text-white">
              Shop By Category
            </h2>

            <p className="text-gray-200 mt-3">
              Explore our top product categories
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 px-10">
            {[
              {
                title: "Electronics",
                subtitle: "Latest gadgets and tech",
                image:
                  "https://images.unsplash.com/photo-1498049794561-7780e7231661",
              },
              {
                title: "Fashion",
                subtitle: "Trendy styles for everyone",
                image:
                  "https://images.unsplash.com/photo-1490481651871-ab68de25d43d",
              },
              {
                title: "Home & Living",
                subtitle: "Make your home beautiful",
                image:
                  "https://images.unsplash.com/photo-1505691938895-1758d7feb511",
              },
            ].map((cat, index) => (
              <div
                key={index}
                className="relative h-[420px] rounded-2xl overflow-hidden group cursor-pointer shadow-2xl"
              >
                <img
                  src={cat.image}
                  alt={cat.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

                <div className="absolute bottom-8 left-8 text-white">
                  <h3 className="text-3xl font-bold">
                    {cat.title}
                  </h3>

                  <p className="text-lg text-gray-200 mt-2">
                    {cat.subtitle}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

<section
  ref={productsRef}
  className="py-24 bg-gradient-to-b from-orange-50 to-white border-t border-orange-100"
>
  <div className="w-full px-6 md:px-12 xl:px-20">

    <h2 className="text-4xl font-bold text-center mb-16">
      Products
    </h2>

    <div className="grid sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-8">
      {products.map((product, index) => {

console.log(product.image);

return (
        <div
          key={product._id}
          onClick={() => setSelectedProduct(product)}
          className="
            relative
            bg-white
            rounded-3xl
            overflow-hidden
            cursor-pointer

            border border-white/70
            ring-1 ring-orange-100
            shadow-md

            hover:-translate-y-2
            hover:ring-2
            hover:ring-orange-300
            hover:shadow-2xl

            transition-all duration-300
            group
          "
        >

          <div className="absolute top-4 left-4 z-10">
            <span className="bg-orange-500 text-white text-xs px-3 py-1 rounded-full font-medium">
              {
                index % 4 === 0
                  ? "New"
                  : index % 4 === 1
                  ? "Trending"
                  : index % 4 === 2
                  ? "Best Seller"
                  : "Popular"
              }
            </span>
          </div>

          <img
            src={`${process.env.REACT_APP_API_URL}${product.image}`}
            alt={product.name}
            className="
              w-full
              h-60
              object-cover
              group-hover:scale-105
              transition
              duration-500
            "
          />

          <div className="p-6">

            <h3 className="font-semibold text-lg mb-2">
              {product.name}
            </h3>

            <p className="text-sm text-gray-500 mb-3">
              Sold by: {product.vendor?.name}
            </p>

            <p className="text-blue-600 text-xl font-bold mb-5">
              ₹{product.price}
            </p>

            <div className="flex gap-3">

              <Link
                to={`/product/${product._id}`}
                onClick={(e) => e.stopPropagation()}
                className="
                  flex-1
                  bg-gray-100
                  text-center
                  py-2
                  rounded-xl
                  hover:bg-gray-200
                  transition
                "
              >
                Reviews
              </Link>

              {user?.user?.role === "customer" && (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    addToCart(product._id);
                  }}
                  className="
                    flex-1
                    bg-blue-600
                    text-white
                    py-2
                    rounded-xl
                    hover:bg-blue-700
                    transition
                  "
                >
                  Add
                </button>
              )}

            </div>

          </div>

        </div>
      );
})}
    </div>

  </div>
</section>

      <section className="relative py-24 overflow-hidden">

  <div className="absolute inset-0">
    <img
      src="/images/zbanner22.jpg"
      alt="Features Background"
      className="w-full h-full object-cover"
    />

    <div className="absolute inset-0 bg-black/35"></div>
  </div>

  <div className="relative z-10">
    <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-10 grid md:grid-cols-4 gap-8">

      {[
        { title: "Free Shipping", desc: "On orders above ₹1000" },
        { title: "Easy Returns", desc: "30-day return policy" },
        { title: "Secure Payment", desc: "100% secure checkout" },
        { title: "24/7 Support", desc: "Dedicated support team" },
      ].map((item, index) => (
        <div
          key={index}
          className="bg-white/95 backdrop-blur-sm p-10 rounded-2xl shadow-2xl text-center hover:scale-105 transition duration-300"
        >
          <h4 className="font-semibold text-lg mb-3">
            {item.title}
          </h4>

          <p className="text-gray-500 text-sm">
            {item.desc}
          </p>
        </div>
      ))}

    </div>
  </div>

</section>

     <section className="relative py-24 overflow-hidden">

  <div className="absolute inset-0">
    <img
      src="/images/zbanner34.jpg"
      alt="Newsletter Background"
      className="w-full h-full object-cover"
    />

    <div className="absolute inset-0 bg-black/45"></div>
  </div>

  <div className="relative z-10">
    <div className="max-w-4xl mx-auto text-center px-10">

      <h3 className="text-3xl font-bold mb-4 text-white">
        Subscribe to Our Newsletter
      </h3>

      <p className="mb-8 text-gray-200">
        Stay updated with latest products and offers.
      </p>

      <div className="flex flex-col md:flex-row justify-center gap-4 gap-2">
        <input
          type="email"
          placeholder="Enter your email"
          className="px-5 py-3 w-full md:w-80 rounded-l-lg border bg-white"
        />

        <button className="bg-red-500 text-white px-6 py-3 rounded-r-lg hover:bg-red-600 transition">
          Subscribe
        </button>
      </div>

    </div>
  </div>

</section>

      <footer className="bg-gray-900 text-gray-300 py-20 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-10 grid md:grid-cols-4 gap-12">

          <div>
            <h4 className="text-white font-bold mb-4">
              Klutch
            </h4>
            <p className="text-sm">
              Modern multi-vendor marketplace platform.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">
              Quick Links
            </h4>

            <ul className="space-y-2 text-sm">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/cart">Cart</Link></li>
              <li><Link to="/orders">Orders</Link></li>
              <li><Link to="/my-returns">Returns</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">
              Customer Service
            </h4>

            <ul className="space-y-2 text-sm">
              <li><Link to="/faq">FAQ</Link></li>
              <li><Link to="/shipping-policy">Shipping Policy</Link></li>
              <li><Link to="/return-policy">Return Policy</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">
              Contact
            </h4>

            <a href="mailto:support@klutch.com">
              support@klutch.com
            </a>
          </div>

        </div>

        <div className="text-center text-sm mt-12 pt-6 border-t border-gray-700">
          © {new Date().getFullYear()} Klutch. All rights reserved.
        </div>
      </footer>

      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onAddToCart={addToCart}
      />

    </div>
  );
}