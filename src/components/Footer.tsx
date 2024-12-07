
const Footer = () => {

    const platforms=[
        {
            name:"facebook",
            icon:"https://cdn.10minuteschool.com/images/facebook_1695730910971.png"
        },
        {
            name:"Instagram",
            icon:"https://cdn.10minuteschool.com/images/instagram_1695731442397.png"
        },
        {
            name:"LinkedIn",
            icon:"https://cdn.10minuteschool.com/images/linkedin_1695731507042.png"
        },
        {
            name:"Youtube",
            icon:"https://cdn.10minuteschool.com/images/youtube_1695731538726.png"
        },
        {
            name:"Tik tok",
            icon:"https://cdn.10minuteschool.com/images/Tiktok_1695731564895.png"
        }
    ]
    return (
        <footer id="footer" className="bg-white border-t border-gray-200 py-8 px-8">
            <div className="container mx-auto px-4 lg:px-8">
                {/* Footer Top */}
                <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start space-y-8 lg:space-y-0 lg:space-x-8">
                    {/* Logo and App Links */}
                    <div className="w-full lg:w-1/4 text-center lg:text-left space-y-4">
                        <img
                            src="https://cdn.10minuteschool.com/images/svg/10mslogo-svg.svg"
                            alt="10 Minute School"
                            className="w-40 mx-auto lg:mx-0"
                        />
                        <p className="text-gray-700 font-medium">
                            ডাউনলোড করুন আমাদের মোবাইল অ্যাপ
                        </p>
                        <div className="flex justify-center lg:justify-start space-x-4">
                            <a href="#">
                                <img
                                    src="https://cdn.10minuteschool.com/images/google-play-icon_1695731678094.png"
                                    alt="Google Play"
                                    className="h-10"
                                />
                            </a>
                            <a href="#">
                                <img src="https://cdn.10minuteschool.com/images/ios-store-icon_1695731704002.png?w=156&h=49" alt="App Store" className="h-10" />
                            </a>
                        </div>
                    </div>

                    {/* Company Links */}
                    <div className="w-full lg:w-1/4 text-center lg:text-left space-y-4">
                        <h4 className="text-gray-900 font-semibold">কোম্পানি</h4>
                        <ul className="text-gray-600 space-y-2">
                            {[
                                "ক্যারিয়ার / নিয়োগ বিজ্ঞপ্তি",
                                "শিক্ষক হিসাবে যোগ দিন",
                                "অ্যাফিলিয়েট হিসাবে যোগ দিন",
                                "প্রাইভেসি পলিসি",
                                "রিফান্ড পলিসি",
                                "ব্যবহারকারীর শর্তাবলি",
                            ].map((item, index) => (
                                <li key={index}>
                                    <a href="#" className="hover:text-gray-900">
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Other Links */}
                    <div className="w-full lg:w-1/4 text-center lg:text-left space-y-4">
                        <h4 className="text-gray-900 font-semibold">অন্যান্য</h4>
                        <ul className="text-gray-600 space-y-2">
                            {[
                                "ব্লগ",
                                "বুক স্টোর",
                                "ফ্রি নোটস ও গাইড",
                                "চাকরি প্রস্তুতি কোর্সসমূহ",
                                "সার্টিফিকেট যাচাই করুন",
                                "ফ্রি ডাউনলোড",
                            ].map((item, index) => (
                                <li key={index}>
                                    <a href="#" className="hover:text-gray-900">
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="w-full lg:w-1/4 text-center lg:text-left space-y-4">
                        <h4 className="text-gray-900 font-semibold">
                            আমাদের যোগাযোগ মাধ্যম
                        </h4>
                        <p className="text-gray-600">
                            কল করুন: <span className="text-green-600 font-bold">16910</span>{" "}
                            (24x7)
                        </p>
                        <p className="text-gray-600">
                            হোয়াটসঅ্যাপ:{" "}
                            <span className="font-bold">+8801896016252</span> (24x7)
                        </p>
                        <p className="text-gray-600">
                            দেশের বাইরে থেকে:{" "}
                            <span className="font-bold">+880 9610916910</span>
                        </p>
                        <p className="text-gray-600">
                            ইমেইল:{" "}
                            <span className="font-bold">support@10minuteschool.com</span>
                        </p>
                        <div className="flex justify-center lg:justify-start space-x-4">
                            {platforms.map(
                (platform, index) => (
                            <a key={index} href="#">
                                <img
                                    src={platform.icon}
                                    alt={platform.name}
                                    className="h-6"
                                />
                            </a>
                            )
              )}
                        </div>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="mt-8 text-center text-gray-500 text-sm">
                    স্বত্ব © ২০১৫ - ২০২৪ টেন মিনিট স্কুল সর্বস্বত্ব সংরক্ষিত
                </div>
            </div>
        </footer>
    );
};

export default Footer;
