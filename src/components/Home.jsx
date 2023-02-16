import React from "react";
import vg from "../assets/2.webp";
import {
  AiFillGoogleCircle,
  AiFillAmazonCircle,
  AiFillYoutube,
  AiFillInstagram,
} from "react-icons/ai";

const Home = () => {
  return (
    <>
      {/* first section */}
      <div className="home" id="home">
        <main>
          <h1>VJ-solution</h1>
          <p>solution to all your problem</p>
        </main>
      </div>

      {/* second section */}

      <div className="home2">
        <img src={vg} alt="Graphics" />
        <div>
          <p>
            we are your one and only one solution for your tech problems you
            face every day .we are leading tech company whose aim is to increase
            the problem solving ability to childrens
          </p>
        </div>
      </div>

      {/* third section */}
      <div className="home3" id="about">
        <div>
          <h1>who we are?</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, natus.
            Excepturi alias tempore laboriosam quasi dicta et commodi dolor
            accusamus, velit itaque quaerat molestias assumenda, vel animi sint
            explicabo eligendi doloribus consequuntur molestiae id! Molestias
            consequuntur temporibus aliquid cumque, labore odio autem corrupti
            dolore officiis, fuga quidem! Minus veniam ea illum enim velit
            aliquam ducimus voluptas officiis quos assumenda laborum vitae ut
            inventore in expedita labore iste, perspiciatis eius? Corporis ea
            quisquam quos nesciunt quo alias modi quis earum molestias tempore
            doloremque non porro ad, cumque placeat quae dicta, ab illum
            eveniet? Impedit tempore cum consequatur explicabo nihil, blanditiis
            quaerat!
          </p>
        </div>
      </div>

      {/* fourth section */}
      <div className="home4" id="Brands">
        <div>
          <h1>Brands</h1>
          <article>
            <div
              style={{
                animationDelay: "0.3s",
                padding: "1rem",
              }}
            >
              <AiFillGoogleCircle />
              <p>Google</p>
            </div>

            <div
              style={{
                animationDelay: "0.5s",
                padding: "1rem",
              }}
            >
              <AiFillAmazonCircle />
              <p>Amazon</p>
            </div>

            <div
              style={{
                animationDelay: "0.7s",
                padding: "1rem",
              }}
            >
              <AiFillYoutube />
              <p>Youtube</p>
            </div>

            <div
              style={{
                animationDelay: "1s",
                padding: "1rem",
              }}
            >
              <AiFillInstagram />
              <p>Instagram</p>
            </div>
          </article>
        </div>
      </div>
    </>
  );
};

export default Home;
