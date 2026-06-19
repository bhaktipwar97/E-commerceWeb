import React, {
  useEffect,
  useState,
} from "react";

import API from "../services/api";

import ProductCard from "../components/ProductCard";

import Categories from "../components/Categories";

const Home = () => {

  const [products, setProducts] =
    useState([]);

  const [search, setSearch] =
    useState("");

  const [category, setCategory] =
    useState("All");

  const [darkMode, setDarkMode] =
    useState(false);

  const fetchProducts =
    async () => {

      try {

        const { data } =
          await API.get(
            "/products"
          );

        setProducts(data);

      }

      catch (error) {

        console.log(
          error
        );

      }

    };

  useEffect(() => {

    fetchProducts();

  }, []);

  const filteredProducts =

    products.filter(

      (product) => {

        const matchesSearch =

          product.name

          .toLowerCase()

          .includes(

            search.toLowerCase()

          );

        const matchesCategory =

          category === "All"

          ||

          product.category

          ===

          category;

        return (

          matchesSearch

          &&

          matchesCategory

        );

      }

    );

  return (

    <div

      className={`

      min-h-screen

      px-6

      py-8

      transition-all

      duration-500

      ${

      darkMode

      ?

      "bg-slate-900 text-white"

      :

      "bg-gradient-to-b from-slate-50 via-blue-50 to-cyan-50 text-slate-900"

      }

      `}

    >

      {/* DARK MODE BUTTON */}

      <div className="flex justify-end mb-5">

        <button

          onClick={()=>

            setDarkMode(

              !darkMode

            )

          }

          className="

          px-5

          py-2

          rounded-full

          bg-cyan-500

          text-white

          font-semibold

          hover:scale-105

          transition

          "

        >

          {

            darkMode

            ?

            "☀ Light"

            :

            "🌙 Dark"

          }

        </button>

      </div>

      {/* HERO */}

      <div className="text-center mb-10 animate-fade">

        <h1

          className="

          text-5xl

          font-extrabold

          bg-gradient-to-r

          from-cyan-500

          via-blue-600

          to-indigo-600

          bg-clip-text

          text-transparent

          "

        >

          Discover Amazing Products

        </h1>

        <p

          className={`

          mt-4

          text-lg

          ${

          darkMode

          ?

          "text-gray-300"

          :

          "text-gray-600"

          }

          `}

        >

          Shop premium quality products with fast delivery & secure payments.

        </p>

      </div>

      {/* SEARCH */}

      <div

        className={`

        rounded-3xl

        shadow-xl

        p-6

        mb-8

        flex

        flex-col

        md:flex-row

        gap-5

        transition-all

        duration-500

        ${

        darkMode

        ?

        "bg-slate-800"

        :

        "bg-white"

        }

        `}

      >

        <input

          type="text"

          placeholder="🔍 Search Products..."

          value={search}

          onChange={(e)=>

            setSearch(

              e.target.value

            )

          }

          className={`

          w-full

          p-4

          rounded-2xl

          outline-none

          border

          transition-all

          ${

          darkMode

          ?

          "bg-slate-700 border-slate-600 text-white"

          :

          "bg-white border-gray-200"

          }

          `}

        />

      </div>

      {/* CATEGORIES */}

      <Categories

        setCategory={

          setCategory

        }

      />

      {/* TOTAL */}

      <div className="mb-8">

        <span

          className="

          bg-gradient-to-r

          from-cyan-500

          to-blue-600

          text-white

          px-5

          py-3

          rounded-full

          shadow-lg

          font-semibold

          "

        >

          Total Products :

          {" "}

          {

            filteredProducts.length

          }

        </span>

      </div>

      {/* PRODUCTS */}

      <div

        className="

        grid

        grid-cols-1

        sm:grid-cols-2

        lg:grid-cols-3

        gap-8

        "

      >

        {

          filteredProducts.length > 0

          ?

          (

            filteredProducts.map(

              (product)=>

              (

                <div

                  key={

                    product._id

                  }

                  className="animate-card"

                >

                  <ProductCard

                    product={

                      product

                    }

                  />

                </div>

              )

            )

          )

          :

          (

            <div className="col-span-full text-center py-24">

              <h2

                className={`

                text-4xl

                font-bold

                ${

                darkMode

                ?

                "text-white"

                :

                "text-gray-700"

                }

                `}

              >

                No Products Found

              </h2>

              <p

                className={`

                mt-4

                ${

                darkMode

                ?

                "text-gray-400"

                :

                "text-gray-500"

                }

                `}

              >

                Try another search keyword.

              </p>

            </div>

          )

        }

      </div>

      <style>

        {`

        .animate-fade{

          animation:fadeUp 1s ease;

        }

        .animate-card{

          animation:zoomIn .8s ease;

        }

        @keyframes fadeUp{

          from{

            opacity:0;

            transform:translateY(40px);

          }

          to{

            opacity:1;

            transform:translateY(0);

          }

        }

        @keyframes zoomIn{

          from{

            opacity:0;

            transform:scale(.9);

          }

          to{

            opacity:1;

            transform:scale(1);

          }

        }

        `}

      </style>

    </div>

  );

};

export default Home;