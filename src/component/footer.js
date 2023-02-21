import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import EmailIcon from "@material-ui/icons/Email";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import InstagramIcon from "@material-ui/icons/Instagram";
import Link from "next/link";

const Footer = () => {
    return (
        <footer className="footer-area ">
            <div className="socialMedia">
                <WhatsAppIcon style={{ fontSize: 40, margin: 10 }} />
                <EmailIcon style={{ fontSize: 40, margin: 10}} />
                <TwitterIcon style={{ fontSize: 40, margin: 10 }} />
                <InstagramIcon style={{ fontSize: 40, margin: 10 }} />
            
                <FacebookIcon style={{ fontSize: 40, margin: 10}} />
            </div>
            <div>
                <p>جميع الحقوق محفوظة &copy; 2023</p>
            </div>
        </footer>
    );
};

export default Footer;
