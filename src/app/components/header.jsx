import LogoH from "../../assets/img/LogoH.png"

const Header = () => {
  return (
    <header className="py-5 top-0 left-0 w-full bg-transparent z-10 ">
      <div className="container mx-auto">
        <div className="flex justify-between items-center px-7">
          <a href="#">
            <img src={LogoH} alt="Logo" className="w-56 h-53" />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;