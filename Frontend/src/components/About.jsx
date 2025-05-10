import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineArrowRight } from "react-icons/hi";

const About = () => {
  return (
    <>
      <section className="about" id="about">
        <div className="container">
          <div className="banner">
            <div className="top">
              <h1 className="heading">ABOUT US</h1>
              <p>The only thing we're serious about is food.</p>
            </div>
            <p className="mid">
              Welcome to SUDIP , your go-to destination for fast, fresh, and flavorful meals delivered straight to your doorstep. Our platform connects you with a wide variety of local restaurants, allowing you to browse menus, place orders, and enjoy your favorite dishes without leaving the comfort of your home. Whether you're craving a quick snack, a healthy salad, or a full-course dinner, we’ve got you covered. With real-time tracking, secure payments, and customer-friendly support, we make online food ordering simple, convenient, and reliable. Your next meal is just a few clicks away!
            </p>
            <Link to={"/"}>
              Explore Menu{" "}
              <span>
                <HiOutlineArrowRight />
              </span>
            </Link>
          </div>
          <div className="banner">
            <img src="about.png" alt="about" />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
