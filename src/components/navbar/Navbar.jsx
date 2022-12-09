import { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import CategoryIcon from "@mui/icons-material/Category";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [toggleLeft, setToggleLeft] = useState(false);
  const [toggleRight, setToggleRight] = useState(false);

  return (
    <nav className={s.navbar}>
      <main className={s.wrapper}>
        <section className={s.left}>
          <ul
            className={
              toggleLeft ? `${s.left_menu} ${s.left_menu_open}` : s.left_menu
            }
          >
            <li className={`${s.li} ${s.double}`}>
              <img src="/img/en.png" alt="" />
              <span>
                <KeyboardArrowDownIcon />
              </span>
            </li>
            <li className={`${s.li} ${s.double}`}>
              <p>USD</p>
              <span>
                <KeyboardArrowDownIcon />
              </span>
            </li>
            <Link to="/products/1" className={s.li}>
              <li>
                <p>Women</p>
              </li>
            </Link>
            <Link to="/products/2" className={s.li}>
              <li>
                <p>Men</p>
              </li>
            </Link>
            <Link to="/products/3" className={s.li}>
              <li>
                <p>Children</p>
              </li>
            </Link>

            <div className={s.close} onClick={() => setToggleLeft(false)}>
              <CloseIcon style={{ fontSize: "2rem" }} />
            </div>
          </ul>

          <div
            className={s.left_mobile_icon}
            onClick={() => setToggleLeft(true)}
          >
            <CategoryIcon style={{ fontSize: "2rem" }} />
          </div>
        </section>

        <section>
          <Link to="/">
            <h1 className="cursor-pointer text-xl text-cyan-600 font-bold">
              Shopeefy
            </h1>
          </Link>
        </section>

        <section className={s.right}>
          <ul
            className={
              toggleRight
                ? `${s.right_menu} ${s.right_menu_open}`
                : s.right_menu
            }
          >
            <li className={s.li2}>Home</li>
            <li className={s.li2}>About</li>
            <li className={s.li2}>Contact</li>
            <li className={s.li2}>Stores</li>

            <div className={s.close} onClick={() => setToggleRight(false)}>
              <CloseIcon style={{ fontSize: "2rem" }} />
            </div>
          </ul>

          <div
            className={s.right_menu_icon}
            onClick={() => setToggleRight(true)}
          >
            <MenuIcon />
          </div>

          <ol className={s.right_user_menu}>
            <li className={s.li3}>
              <SearchIcon />
            </li>
            <li className={s.li3}>
              <AccountCircleIcon />
            </li>
            <li className={s.li3}>
              <FavoriteIcon />
            </li>
            <li className={s.li3}>
              <ShoppingCartIcon />
            </li>
          </ol>
        </section>
      </main>
    </nav>
  );
};

export default Navbar;

const s = {
  navbar: "overflow-hidden",
  wrapper: "max-w-[1200px] mx-auto flex items-center justify-between p-4",
  left: "",
  left_menu:
    "fixed z-30 top-[0px] left-[-100%] transition-all h-full w-full bg-slate-600 text-white flex flex-col items-center md:flex-row md:h-auto md:w-auto md:gap-3 md:bg-transparent md:static",
  left_menu_open: "left-0",
  li: "border-b border-white w-full flex items-center justify-center py-8 text-xl cursor-pointer hover:bg-blue-300 md:text-black md:py-0 md:text-[1rem] md:p-2 md:hover:bg-transparent relative md:after:absolute md:after:bg-black md:after:h-1 md:after:inset-x-0 md:after:scale-x-0 md:after:top-6 md:after:transform md:after:origin-center md:after:transition-all md:after:duration-300 md:hover:after:scale-x-100",
  double: "flex",
  close:
    "absolute z-20 right-4 top-4 cursor-pointer hover:text-red-600 md:hidden",
  left_mobile_icon: "md:hidden cursor-pointer",

  right: "flex gap-4",
  right_menu:
    "fixed z-30 bg-slate-600 h-full w-full left-[100%] top-[0px] transition-all md:h-auto md:w-auto md:static md:bg-transparent md:flex md:gap-4",
  right_menu_open: "left-[-0%]",
  li2: "cursor-pointer border-b border-white w-full flex items-center justify-center py-8 text-xl hover:bg-blue-300 relative md:py-0 md:text-sm md:hover:bg-transparent md:after:absolute md:after:bg-black md:after:h-1 md:after:inset-x-0 md:after:scale-x-0 md:after:top-6 md:after:transform md:after:origin-center md:after:transition-all md:after:duration-300 md:hover:after:scale-x-100",
  right_menu_icon: "cursor-pointer lg:hidden",
  right_user_menu: "flex gap-4",
  li3: "cursor-pointer hover:text-pink-500",
};
