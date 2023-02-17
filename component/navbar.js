import Image from "next/image";
const Navbar = () => {
    return (
        <div id="mainmenu">
            <nav>
                <div className="logo">
                    {" "}
                    <Image src={"/images/logo.png"} width={100} height={100} alt={"Logo"} />
                </div>

                <a href="#"></a>
                <a href="#"></a>
                <a href="#"></a>
            </nav>
        </div>
    );
};
export default Navbar;
