
import React from "react";
import styles from '../../styles/Home.module.css'

const Home: React.FC = () => {
    return (
        <>
            <main className={styles.main}>

                <img
                    src="/me.jpg"
                    className="rounded-lg w-48 mb-8"
                    alt="Avatar"
                />
                <p className="text-base font-sans-pro leading-relaxed mt-0 mb-4 dark:text-white text-neutral-900 ">
                    Hi, I'm Tessa.<br />
                    I currently work as a Front-End Software Engineer at Unity Technologies building an in-house continuous integration system.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer et turpis eget magna sodales commodo. In placerat mi sed lorem tempus rutrum. Proin facilisis turpis lectus, nec aliquet orci aliquet sit amet. Pellentesque orci massa, porta in justo quis, bibendum blandit ex. Proin et fermentum lorem, vitae iaculis elit. Maecenas porttitor, ex nec luctus luctus, arcu metus pretium quam, at sagittis nisi nisl eget quam. Nunc vitae eros arcu. Curabitur nec est vel felis condimentum ultricies. Nullam facilisis tellus sit amet tellus aliquet egestas eu in risus. Suspendisse eleifend neque sed velit finibus ultricies. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aenean vel orci ac tortor placerat iaculis in et felis. Praesent id eleifend lorem, ut commodo felis. Nullam accumsan tincidunt massa, et lacinia felis eleifend nec. Morbi bibendum sodales porttitor..
                </p>
            </main>
        </>
    )
}

export default Home;













