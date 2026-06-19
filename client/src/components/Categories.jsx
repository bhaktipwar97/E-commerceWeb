import React from "react";

const categories = [

  {
    name:"All",
    image:"https://cdn-icons-png.flaticon.com/512/3081/3081559.png"
  },

  {
    name:"Mobile",
    image:"https://cdn-icons-png.flaticon.com/512/15/15874.png"
  },

  {
    name:"Shoes",
    image:"https://cdn-icons-png.flaticon.com/512/2589/2589903.png"
  },

  {
    name:"Electronics",
    image:"https://cdn-icons-png.flaticon.com/512/3659/3659899.png"
  },

  {
    name:"Fashion",
    image:"https://cdn-icons-png.flaticon.com/512/892/892458.png"
  },

];

const Categories = ({

  setCategory,

}) => {

  return (

    <div className="mb-12">

      <h1 className="text-3xl font-bold text-slate-800 mb-8">

        Shop By Categories

      </h1>

      <div className="flex flex-wrap gap-8 justify-center">

        {

          categories.map(

            (item,index)=>(

              <div

                key={index}

                onClick={()=>

                  setCategory(

                    item.name

                  )

                }

                className="

                flex

                flex-col

                items-center

                cursor-pointer

                group

                "

              >

                <div

                  className="

                  w-28

                  h-28

                  rounded-full

                  overflow-hidden

                  bg-white

                  shadow-lg

                  border-4

                  border-cyan-100

                  group-hover:scale-110

                  group-hover:shadow-2xl

                  transition-all

                  duration-500

                  "

                >

                  <img

                    src={item.image}

                    alt={item.name}

                    className="

                    w-full

                    h-full

                    object-contain

                    p-4

                    group-hover:scale-125

                    transition-all

                    duration-500

                    "

                  />

                </div>

                <p

                  className="

                  mt-4

                  text-lg

                  font-semibold

                  text-slate-700

                  group-hover:text-cyan-600

                  transition

                  "

                >

                  {item.name}

                </p>

              </div>

            )

          )

        }

      </div>

    </div>

  );

};

export default Categories;