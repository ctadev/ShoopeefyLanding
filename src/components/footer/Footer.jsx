const Footer = () => {
  return (
    <footer className={s.footer}>
      <main className={s.wrapper}>
        {/* Top footer */}
        <section className={s.top}>
          <ul className={s.top_menu}>
            <li className={s.menu_title}>Categories</li>
            <li className={s.li}>Women</li>
            <li className={s.li}>Men</li>
            <li className={s.li}>Shoes</li>
            <li className={s.li}>Accessories</li>
            <li className={s.li}>New Arrivals</li>
          </ul>

          <ol className={s.top_menu}>
            <li className={s.menu_title}>Links</li>
            <li className={s.li}>FAQ</li>
            <li className={s.li}>Pages</li>
            <li className={s.li}>Stores</li>
            <li className={s.li}>Compare</li>
            <li className={s.li}>Cookies</li>
          </ol>

          <div className={s.top_menu}>
            <h1 className={s.menu_title}>About</h1>
            <p className={s.li}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum
              odit itaque, odio ullam, rerum nisi magnam fugiat, dicta magni
              laboriosam aspernatur. Tempora quasi cumque similique cum
              consequatur! Quam, iusto tempora.
            </p>
          </div>

          <div className={s.top_menu}>
            <h1 className={s.menu_title}>Contact</h1>
            <p className={s.li}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Temporibus eos, asperiores, ratione ad molestias rem aliquam cum
              nostrum facilis vitae, ipsum ipsam provident nulla! Magni, at?
              Unde quibusdam natus quidem.
            </p>
          </div>
        </section>

        {/* Bottom Footer */}
        <section className={s.bottom}>
          <div className={s.bottom_copyrights}>
            <h1 className={s.bottom_title}>Shopeefy</h1>
            <p className={s.bottom_p}>
              &copy;Copyright 2023. All Rights Reserved
            </p>
          </div>

          <div className={s.services}>
            <img src="/img/payment.png" alt="" />
          </div>
        </section>
      </main>
    </footer>
  );
};

export default Footer;

const s = {
  footer: "flex justify-center items-center mt-16",
  
  wrapper: "max-w-[1200px] p-4 flex flex-col gap-16",
  top: "grid grid-cols-2 gap-8 md:grid-cols-4",
  menu_title: "text-xl font-bold mb-2",
  li: "text-slate-500",

  bottom: "flex flex-col items-center justify-between xl:flex-row",
  bottom_copyrights: "flex gap-2 items-center",
  bottom_title: "text-2xl font-bold text-blue-500",
  bottom_p: "text-[0.7rem] text-slate-500 pt-2",
};
