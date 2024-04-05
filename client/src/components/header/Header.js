import Topbar from "./Topbar";
import Navbar from "./Navbar";

const Header = (props) => {
  return (
    <div className="header w-full min-w-[350px] relative z-10">
      <Topbar />
      <Navbar scrollPosition={props.scrollPosition} />
    </div>
  );
};

export default Header;
