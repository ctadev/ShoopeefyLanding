const data = [
  {
    title: "Men",
    img: "https://images.pexels.com/photos/1192609/pexels-photo-1192609.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
  {
    title: "Women",
    img: "https://images.pexels.com/photos/2036646/pexels-photo-2036646.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
  {
    title: "Children",
    img: "https://images.pexels.com/photos/818992/pexels-photo-818992.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
  {
    title: "Sales",
    img: "https://images.pexels.com/photos/1813947/pexels-photo-1813947.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
  {
    title: "Gifts",
    img: "https://images.pexels.com/photos/2703202/pexels-photo-2703202.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
  {
    title: "Seasons",
    img: "https://images.pexels.com/photos/1159670/pexels-photo-1159670.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
];

const GridLayout = () => {
  return (
    <main className={s.grid}>
      {data.map((item, index) => (
        <div key={index} className={s.cards}>
          <img className={s.img} src={item.img} alt="" />
          <p className={s.info}>{item.title}</p>
        </div>
      ))}
    </main>
  );
};

export default GridLayout;

const s = {
  grid: "grid grid-flow-dense grid-cols-2 md:grid-cols-3 xl:grid-cols-gridLayoutColumn auto-rows-autoRow300 max-w-[1200px] gap-2 mx-auto mt-16 shadow-lg",
  cards:
    "relative [&:nth-child(2)]:row-span-2 [&:nth-child(4)]:col-span-2 md:[&:nth-child(4)]:col-span-1 md:last:row-span-2 xl:last:col-span-1 xl:last:row-span-1",
  img: "w-full h-full object-cover",
  info: "absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] bg-sky-200 py-2 px-4 cursor-pointer",
};
