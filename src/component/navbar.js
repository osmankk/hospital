import Image from "next/image";
const Navbar = () => {
    return (
        <div id="mainmenu">
            <nav>
                <div className="logo">
                    <Image src={"/images/logo.png"} width={80} alt={"Logo"} height={80}/>
                </div>

            </nav>
        </div>
    );
};
export default Navbar;
