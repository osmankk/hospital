
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import EmailIcon from '@material-ui/icons/Email';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import Link from 'next/link';
import Image from 'next/image';
const Footer = () => {
    return (
        <footer className="footer-area ">
            <div className='socialMedia'>
            <WhatsAppIcon  style={{ fontSize: 40 ,margin:10 ,color:'#25D366'}}/>
            <EmailIcon style={{ fontSize: 40 ,margin:10 ,color:'#ac2516'}} />
            <TwitterIcon   style={{ fontSize: 40 ,margin:10 ,color:'#f5f8fa'}}/>
            <Link href='#' passHref>
                      <Image src="/images/instagram.jpg" alt="Google Play" width={40} height={40} className= 'InstagramIcon'/>
            </Link>
            <FacebookIcon style={{ fontSize: 40 ,margin:10 ,color:'#d4d8e8'}} />
            </div>
            <div>
            <p>
                جميع الحقوق محفوظة 
                &copy; 
                2023 

            </p>
            </div>
        </footer>
    );
};

export default Footer;
