const photos = [
  {
    name: "Coat",
    price: 19,
    sale: 13,
    featured: true,
    img: "https://media.istockphoto.com/id/643268472/es/foto/hermosa-elegante-mujer.jpg?s=612x612&w=0&k=20&c=f0nvU6ynuj3DaJ7znbeunrnBwW562r7sYmPmoy_-3pI=",
  },
  {
    name: "Skirt",
    price: 19,
    sale: 12,
    featured: true,
    img: "https://media.istockphoto.com/id/539953380/es/foto/chica-con-l%C3%A1piz-labial-rojo-y-cabello-corto-en-camiseta-negra.jpg?s=612x612&w=0&k=20&c=HTDRId6dRK9awFSrQQsCdp1hTtMZFGzmYPIDTJOIyWM=",
  },
  {
    name: "Hat",
    price: 19,
    sale: 15,
    featured: false,
    img: "https://media.istockphoto.com/id/1011172576/es/foto/guapo-hombre-afroamericano-en-blanco-permanente-de-camiseta-negra-contra-la-pared-de-ladrillo.jpg?s=612x612&w=0&k=20&c=E_-JNVVeg_jmU2yeF05W1fUj5dzizYM0U909AgtrSIY=",
  },
  {
    name: "Jacket",
    price: 19,
    sale: null,
    featured: false,
    img: "https://media.istockphoto.com/id/896858190/es/foto/guapo-hombre-centro-de-la-ciudad.jpg?s=612x612&w=0&k=20&c=IqtANI9gn_5dnENrtNvR9cLByJQIjUfG09ZteqG66Yg=",
  },
];

const FeatureProducts = () => {
  return (
    <main className={s.feature}>
      <section className={s.header}>
        <h1 className={s.title}>Featured Products</h1>
        <p className={s.description}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod nulla
          ex hic laboriosam porro dolore est modi. Molestias veritatis harum
          eveniet libero odio, aliquam, ab praesentium hic vitae corporis
          dolore?
        </p>
      </section>

      <section className={s.cards}>
        {photos.map((item, index) => (
          <div key={index} className={s.card}>
            <img src={item.img} alt="" className={s.img} />
            {item.featured ? <p className={s.season}>New Season</p> : null}
            <div className={s.info_container}>
              <p className={s.name}>{item.name}</p>
              <p className={s.price}>
                {item.sale ? (
                  <span style={{ textDecoration: "line-through" }}>
                    ${item.price}
                  </span>
                ) : null}
                ${item.sale ? item.sale : item.price}
              </p>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
};

export default FeatureProducts;

const s = {
  feature: "max-w-[1200px] mt-16 mx-auto p-4",
  header: "flex flex-col gap-4 md:flex-row justify-between items-center mb-8",
  title: "flex-[0.4] text-4xl font-bold whitespace-nowrap flex",
  description: "flex-[0.6] text-gray-500",

  cards: "grid grid-cols-2 md:grid-cols-4 gap-4",
  card: "h-[400px] shadow-xl relative cursor-pointer",
  img: "h-[85%] object-cover",
  season:
    "absolute left-[5px] top-[5px] z-10 bg-white px-2 py-1 text-[13px] text-cyan-600",
  info_container: "h-[15%] p-2",
  name: "text-lg font-semibold",
  price: "flex gap-2",
};
