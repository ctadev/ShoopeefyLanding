import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import GoogleIcon from "@mui/icons-material/Google";
import PinterestIcon from "@mui/icons-material/Pinterest";

const FooterBanner = () => {
  return (
    <main className={s.banner}>
      <section className={s.footer_banner}>
        <div className={s.banner_title}>
          <h1>Be in touch with us:</h1>
        </div>
        <div className={s.banner_inputs}>
          <input type="text" placeholder="Enter your e-mail" />
          <button>Join us</button>
        </div>
        <div className={s.banner_icons}>
          <FacebookIcon className={s.icon} />
          <InstagramIcon className={s.icon} />
          <TwitterIcon className={s.icon} />
          <GoogleIcon className={s.icon} />
          <PinterestIcon className={s.icon} />
        </div>
      </section>
    </main>
  );
};

export default FooterBanner;

const s = {
  banner: "flex items-center  bg-blue-500 mt-16",
  footer_banner:
    "flex justify-between w-full max-w-[800px] mx-auto items-center p-4",
  banner_title: "text-white uppercase text-sm font-semibold",
  banner_inputs:
    "hidden md:flex items-center border [&_input]:px-2 [&_button]:px-2 [&_button]:text-white",
  banner_icons: "text-white flex gap-1",
  icon: "cursor-pointer",
};
