import Image from "next/image";
import Link from "next/link";
const AppDownload = () => {
    return (
        <>
            <section className="app-download-area bg-main-color">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-12 col-md-6 ">
                            <div className="app-download-content">
                                <h1>Obeid Specialized Hospital </h1>
                                <h1> Riyadh مستشفى عبيد التخصصي - الرياض</h1>
                                <p className="align-items-center">Open 24 hours</p>
                                <div className="row download-icon">
                                    <div className="col-3 px-1 ">
                                        <Link href="#" passHref>
                                            <Image src="/images/app-store.svg" alt="Google Play" width={200} height={50} />
                                        </Link>
                                    </div>
                                    <Link href="#" passHref>
                                        <Image src="/images/google-play.svg" alt="App Store" width={200} height={50} />
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-md-6">
                            <div className="app-download-image ">
                                <img src="/images/mobile.png" alt="App" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default AppDownload;
