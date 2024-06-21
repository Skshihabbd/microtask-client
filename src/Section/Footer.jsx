import { Link } from "react-router-dom";
import { IoIosArrowRoundForward } from "react-icons/io";
import { GrMapLocation } from "react-icons/gr";
import { SlEarphonesAlt } from "react-icons/sl";

import { MdOutlineMarkEmailRead } from "react-icons/md";
import { FaCcPaypal } from "react-icons/fa6";

const Footer = () => {
    return (
        <div>
      <footer className="h-[80vh]  w-full bg-[#F3F3F3] hidden lg:block ">
        <ul className="grid grid-cols-5 font gap-5 w-5/6 pt-28 pb-16 mx-auto  ">
          <li className="col-span-2 ">
            <span className="text-xl font-bold">Our Information</span>
            <ul className="space-y-4 my-3 ">
              <li className="flex flex-row items-center gap-2">
                <GrMapLocation className="text-3xl text-[#0c0a0a]" />
                <Link>
                  33 New Montgomery St. Ste 750 San Francisco, CA, USA 94105
                </Link>
              </li>
              <li className="flex flex-row items-center gap-2">
                <SlEarphonesAlt className="text-3xl text-[#0c0a0a]" />
                <Link>(+91)012-345-6789</Link>
              </li>
              <li className="flex flex-row items-center gap-2">
                <MdOutlineMarkEmailRead className="text-3xl text-[#0c0a0a]" />
                <Link>artistic@exampledemo.com</Link>
              </li>

              <li>
                <ul className="flex flex-row">
                  <li>
                   
                    <Link>shihab</Link>
                  </li>
                  <li>
                    <Link>shihab</Link>
                  </li>
                  <li>
                    <Link>shihab</Link>
                  </li>
                  <li>
                    <Link>shihab</Link>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
          
            <span className="text-xl font-bold">Quick Links</span>
            <ul className="my-3 space-y-4">
              <li className="flex flex-row items-center gap-2">
                <IoIosArrowRoundForward />
                <Link>Contact Us</Link>
              </li>
              <li className="flex flex-row items-center gap-2">
                <IoIosArrowRoundForward />
                <Link>Shipping</Link>
              </li>
              <li className="flex flex-row items-center gap-2">
                <IoIosArrowRoundForward />
                <Link>Sitemap</Link>
              </li>
              <li className="flex flex-row items-center gap-2">
                <IoIosArrowRoundForward />
                <Link>FAQs</Link>
              </li>
              <li className="flex flex-row items-center gap-2">
                <IoIosArrowRoundForward />
                <Link>Stores</Link>
              </li>
            </ul>
          </li>
          <li>
            <span className="text-xl font-bold">Services</span>

            <ul className="my-3 space-y-4">
              <li className="flex flex-row items-center gap-2">
                <IoIosArrowRoundForward />
                <Link>Contact Us</Link>
              </li>
              <li className="flex flex-row items-center gap-2">
                <IoIosArrowRoundForward />
                <Link>Shipping</Link>
              </li>
              <li className="flex flex-row items-center gap-2">
                <IoIosArrowRoundForward />
                <Link>Sitemap</Link>
              </li>
              <li className="flex flex-row items-center gap-2">
                <IoIosArrowRoundForward />
                <Link>FAQs</Link>
              </li>
              <li className="flex flex-row items-center gap-2">
                <IoIosArrowRoundForward />
                <Link>Stores</Link>
              </li>
            </ul>
          </li>
          <li>
            <span className="text-xl font-bold">Information</span>
            <ul className="my-3 space-y-4">
              <li className="flex flex-row items-center gap-2">
                <IoIosArrowRoundForward />
                <Link>Contact Us</Link>
              </li>
              <li className="flex flex-row items-center gap-2">
                <IoIosArrowRoundForward />
                <Link>Shipping</Link>
              </li>
              <li className="flex flex-row items-center gap-2">
                <IoIosArrowRoundForward />
                <Link>Sitemap</Link>
              </li>
              <li className="flex flex-row items-center gap-2">
                <IoIosArrowRoundForward />
                <Link>FAQs</Link>
              </li>
              <li className="flex flex-row items-center gap-2">
                <IoIosArrowRoundForward />
                <Link>Stores</Link>
              </li>
            </ul>
          </li>
        </ul>
        <hr className="bg-[#AE9467] h-[2px]" />

        <div className=" grid grid-cols-5 py-2 w-5/6 mx-auto items-center">
          <p className="col-span-4">
            © 2024, Artistic - Art & Craft Store (Password: Demo) Powered By
            Shopify
          </p>
          <ul className="flex flex-row gap-1 ">
            <li>
              <Link to={"https://www.paypal.com/bd/home"} target="_blank">
                <FaCcPaypal className="text-5xl text-[#F79E1B]" />
              </Link>
            </li>
            <li>
              <Link to={"https://www.paypal.com/bd/home"} target="_blank">
                <FaCcPaypal className="text-5xl text-[#F79E1B]" />
              </Link>
            </li>
            <li>
              <Link to={"https://www.paypal.com/bd/home"} target="_blank">
                <FaCcPaypal className="text-5xl text-[#F79E1B]" />
              </Link>
            </li>
            <li>
              <Link to={"https://www.paypal.com/bd/home"} target="_blank">
                <FaCcPaypal className="text-5xl text-[#F79E1B]" />
              </Link>
            </li>
          </ul>
        </div>
      </footer>

      {/* secoend footer */}

      <footer className="lg:hidden ">
        <div className="collapse collapse-arrow bg-base-200">
          <input type="radio" name="my-accordion-2" defaultChecked />
          <div className="collapse-title text-xl font-medium">
          Our Information
           
          </div>
          <div className="collapse-content">
          <li className="col-span-2 ">
             
              <ul className="space-y-4 my-3 ">
                <li className="flex flex-row items-center gap-2">
                  <GrMapLocation className="text-3xl text-[#0c0a0a]" />
                  <Link>
                    33 New Montgomery St. Ste 750 San Francisco, CA, USA 94105
                  </Link>
                </li>
                <li className="flex flex-row items-center gap-2">
                  <SlEarphonesAlt className="text-3xl text-[#0c0a0a]" />
                  <Link>(+91)012-345-6789</Link>
                </li>
                <li className="flex flex-row items-center gap-2">
                  <MdOutlineMarkEmailRead className="text-3xl text-[#0c0a0a]" />
                  <Link>artistic@exampledemo.com</Link>
                </li>

                
              </ul>
            </li>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-base-200">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">
          Quick Links
          </div>
          <div className="collapse-content">
          <li>
          
          
          <ul className="my-3 space-y-4">
            <li className="flex flex-row items-center gap-2">
              <IoIosArrowRoundForward />
              <Link>Contact Us</Link>
            </li>
            <li className="flex flex-row items-center gap-2">
              <IoIosArrowRoundForward />
              <Link>Shipping</Link>
            </li>
            <li className="flex flex-row items-center gap-2">
              <IoIosArrowRoundForward />
              <Link>Sitemap</Link>
            </li>
            <li className="flex flex-row items-center gap-2">
              <IoIosArrowRoundForward />
              <Link>FAQs</Link>
            </li>
            <li className="flex flex-row items-center gap-2">
              <IoIosArrowRoundForward />
              <Link>Stores</Link>
            </li>
          </ul>
        </li>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-base-200">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">
           Services
          </div>
          <div className="collapse-content">
          <li>
            

            <ul className="my-3 space-y-4">
              <li className="flex flex-row items-center gap-2">
                <IoIosArrowRoundForward />
                <Link>Contact Us</Link>
              </li>
              <li className="flex flex-row items-center gap-2">
                <IoIosArrowRoundForward />
                <Link>Shipping</Link>
              </li>
              <li className="flex flex-row items-center gap-2">
                <IoIosArrowRoundForward />
                <Link>Sitemap</Link>
              </li>
              <li className="flex flex-row items-center gap-2">
                <IoIosArrowRoundForward />
                <Link>FAQs</Link>
              </li>
              <li className="flex flex-row items-center gap-2">
                <IoIosArrowRoundForward />
                <Link>Stores</Link>
              </li>
            </ul>
          </li>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-base-200">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">
          Information
          </div>
          <div className="collapse-content">
          <li>
            
            <ul className="my-3 space-y-4">
              <li className="flex flex-row items-center gap-2">
                <IoIosArrowRoundForward />
                <Link>Contact Us</Link>
              </li>
              <li className="flex flex-row items-center gap-2">
                <IoIosArrowRoundForward />
                <Link>Shipping</Link>
              </li>
              <li className="flex flex-row items-center gap-2">
                <IoIosArrowRoundForward />
                <Link>Sitemap</Link>
              </li>
              <li className="flex flex-row items-center gap-2">
                <IoIosArrowRoundForward />
                <Link>FAQs</Link>
              </li>
              <li className="flex flex-row items-center gap-2">
                <IoIosArrowRoundForward />
                <Link>Stores</Link>
              </li>
            </ul>
          </li>
          </div>
        </div>
        <hr className="bg-[#AE9467] h-[2px]" />
        <div className=" grid grid-rows-2 py-2 w-5/6 mx-auto items-center">
          <p className="">
            © 2024, Artistic - Art & Craft Store (Password: Demo) Powered By
            Shopify
          </p>
          <ul className="flex flex-row gap-1 ">
            <li>
              <Link to={"https://www.paypal.com/bd/home"} target="_blank">
                <FaCcPaypal className="text-5xl text-[#F79E1B]" />
              </Link>
            </li>
            <li>
              <Link to={"https://www.paypal.com/bd/home"} target="_blank">
                <FaCcPaypal className="text-5xl text-[#F79E1B]" />
              </Link>
            </li>
            <li>
              <Link to={"https://www.paypal.com/bd/home"} target="_blank">
                <FaCcPaypal className="text-5xl text-[#F79E1B]" />
              </Link>
            </li>
            <li>
              <Link to={"https://www.paypal.com/bd/home"} target="_blank">
                <FaCcPaypal className="text-5xl text-[#F79E1B]" />
              </Link>
            </li>
          </ul>
        </div>
      </footer>
    </div>
    );
};

export default Footer;