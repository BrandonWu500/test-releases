import Logo from "@/components/logo";
import Search from "@/components/search";

type Props = {};
const Navbar = (props: Props) => {
  return (
    <div>
      <Logo />
      <Search />
    </div>
  );
};
export default Navbar;
