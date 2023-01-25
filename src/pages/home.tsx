
import React from "react";
import Layout from "../components/Layout/layout";

const Home: React.FC = () => {
    return (
        <Layout>
            <div className="m-10">
                {/* <div className="mb-4 md:mb-0"> */}
                <div className="w-52 relative overflow-hidden bg-no-repeat bg-cover  mb-5">
                    <img
                        src="/me.jpg"
                        className="rounded-lg "
                        alt="Avatar"
                        width="208px"
                    />
                    <div className="w-52 rounded h-auto absolute top-0 right-0 bottom-0 left-0 overflow-hidden bg-fixed opacity-0 hover:opacity-40 transition duration-300 ease-in-out bg-white"></div>
                    {/* <div className="text-white absolute top-1/2 left-1/2 origin-center">Cornwall 2022</div> */}
                </div>
                {/* </div> */}
                <p className="text-base font-sans-pro leading-relaxed mt-0 mb-4 dark:text-white text-neutral-900 ">
                    Hi, I'm Tessa.<br />
                    I currently work as a Front-End Software Engineer at <a href="#!" className="underline">Unity Technologies</a> building an in-house continuous integration system.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer et turpis eget magna sodales commodo. In placerat mi sed lorem tempus rutrum. Proin facilisis turpis lectus, nec aliquet orci aliquet sit amet. Pellentesque orci massa, porta in justo quis, bibendum blandit ex. Proin et fermentum lorem, vitae iaculis elit. Maecenas porttitor, ex nec luctus luctus, arcu metus pretium quam, at sagittis nisi nisl eget quam. Nunc vitae eros arcu. Curabitur nec est vel felis condimentum ultricies. Nullam facilisis tellus sit amet tellus aliquet egestas eu in risus. Suspendisse eleifend neque sed velit finibus ultricies. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aenean vel orci ac tortor placerat iaculis in et felis. Praesent id eleifend lorem, ut commodo felis. Nullam accumsan tincidunt massa, et lacinia felis eleifend nec. Morbi bibendum sodales porttitor.
                </p>
            </div>
        </Layout>
    )
}

export default Home;













