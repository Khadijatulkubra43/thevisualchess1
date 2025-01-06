import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  FaLinkedin,
  FaFacebook,
  FaInstagram,
  FaWhatsapp,
  FaPhoneAlt,
  FaTwitter,
} from "react-icons/fa";
import Logo from "../assets/Visual.png";
import Software from "../assets/Software.gif";
import UI from "../assets/UI.gif";
import Mobile from "../assets/Mobile.gif";
import STAFF from "../assets/STAFF .gif";

import "../styles/Hero.css";
//meet our team slider
const Slider1 = ({ images, width, height, reverse }) => {
  return (
    <div
      className={`slider ${
        reverse ? "reverse" : ""
      } d-flex overflow-hidden position-relative`}
      style={{
        "--width": `${width}px`,
        "--height": `${height}px`,
        "--quantity": images.length,
      }}
    >
      <div
        className="list d-flex position-relative"
        style={{ minWidth: `calc(${width}px * ${images.length})` }}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className="item position-absolute"
            style={{ "--position": index + 1 }}
          >
            <img src={image} alt={`Slide ${index + 1}`} className="w-100" />
          </div>
        ))}
      </div>
    </div>
  );
};
export default function HeroSection() {
  // Review section state and logic
  const [downloads, setDownloads] = useState(0);
  const [subscribers, setSubscribers] = useState(0);
  const [users, setUsers] = useState(0);
  const [cookies, setCookies] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setDownloads((prev) => (prev < 120 ? prev + 1 : 120));
      setSubscribers((prev) => (prev < 340 ? prev + 1 : 340));
      setUsers((prev) => (prev < 25 ? prev + 1 : 25));
      setCookies((prev) => (prev < 222 ? prev + 1 : 222));
    }, 20);

    return () => clearInterval(interval);
  }, []);

  //meet our team
  const slider1Images = [
    "../assets/STAFF .gif",
    "../assets/STAFF .gif",
    "../assets/STAFF .gif",
    "../assets/STAFF .gif",
    "../assets/STAFF .gif",
    "../assets/STAFF .gif",
    "../assets/STAFF .gif",
    "../assets/STAFF .gif",
    "../assets/STAFF .gif",
  ];

  //testinomial
  const testimonials = [
    {
      text: "Veniam quidem animi ea maxime odit fugiat architecto perferendis ipsum perspiciatis iusto, provident qui nam dolorum corporis.",
      author: "Leroy Jenkins",
      title: "Founder, Company",
      image: "https://via.placeholder.com/50", // Replace with the actual image URL
    },
    {
      text: "Veniam quidem animi ea maxime odit fugiat architecto perferendis ipsum perspiciatis iusto, provident qui nam dolorum corporis.",
      author: "Leroy Jenkins",
      title: "Founder, Company",
      image: "https://via.placeholder.com/50", // Replace with the actual image URL
    },
    {
      text: "Veniam quidem animi ea maxime odit fugiat architecto perferendis ipsum perspiciatis iusto, provident qui nam dolorum corporis.",
      author: "Leroy Jenkins",
      title: "Founder, Company",
      image: "https://via.placeholder.com/50", // Replace with the actual image URL
    },
    {
      text: "Veniam quidem animi ea maxime odit fugiat architecto perferendis ipsum perspiciatis iusto, provident qui nam dolorum corporis.",
      author: "Leroy Jenkins",
      title: "Founder, Company",
      image: "https://via.placeholder.com/50", // Replace with the actual image URL
    },
    {
      text: "Veniam quidem animi ea maxime odit fugiat architecto perferendis ipsum perspiciatis iusto, provident qui nam dolorum corporis.",
      author: "Leroy Jenkins",
      title: "Founder, Company",
      image: "https://via.placeholder.com/50", // Replace with the actual image URL
    },
  ];
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };
  // FAQ
  const [visibleIndex, setVisibleIndex] = useState(null);

  const faqs = [
    {
      title: "How To Add A Booking Source",
      content:
        "A Booking Source allows you to track which source provided the reservation. This data can be used to identify which sources are the best-performing ones for your hotel. An essential hotel software feature.",
    },
    {
      title: "Rate Plan Settings",
      content:
        "Rate plans must be set up in order to set up Online Booking Engine, or connection to OTAs (e.g., Booking.com). Also, with the rate plans set up, you won't have to train your staff to remember/look up prices of the rooms.",
    },
    {
      title: "How To Move Rooms For Checked In Guests",
      content:
        "Room Move for Inhouse Guests. Sometimes you have to move guests for a reason. This could be for operational issues, or the guest may have asked for an upgrade to another room. A must-have hotel management system feature.",
    },
    {
      title: "How To Make Reservations For An Existing Group",
      content:
        "Once you have found the group you are looking to make the reservation for, using the Group Search function or if you see the group on the dashboard screen, just click on any reservation. A straightforward feature in our hotel management software.",
    },
    {
      title: "How To Add Another Property To Your Account",
      content:
        "If you have more than one property to manage (e.g., you are an owner of two hotels, or of a hotel chain), you can simply add an extra property by clicking on your email address on the top-right corner of the screen. Roomsy hotel PMS makes this simple.",
    },
    {
      title: "How To Create A Group Booking",
      content:
        "If you get a lot of travelers coming to your hotel as a group, then we recommend using the Group functionality.",
    },
    {
      title: "Setting Up Your Website",
      content:
        "1. First, go to [Settings] > [Company] > [General Information] and ensure that all company information is filled in accurately, as it will be displayed on your website. Roomsy is a hotel PMS with a website for you.",
    },
  ];

  const toggleAnswer = (index) => {
    setVisibleIndex(visibleIndex === index ? null : index);
  };


  const [expanded, setExpanded] = useState(Array(faqs.length).fill(false));

  const toggleExpand = (index) => {
    setExpanded((prev) => prev.map((item, i) => (i === index ? !item : item)));
  };
  return (
    <>
      {/* Hero Section */}
      <section style={{ padding: "4rem 0" }}>
        <Container>
          <Row className="align-items-center justify-content-center text-white">
            <Col lg={6} className="text-center text-lg-start mb-4">
              <div
                style={{
                  background: "#160A33",
                  color: "white",
                  padding: "0.5rem 1rem",
                  display: "inline-block",
                  fontSize: "1.5rem",
                  fontWeight: "bold",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  borderRadius: "0.5rem",
                  whiteSpace: "nowrap",
                  marginLeft: "140px",
                }}
                className="d-none d-lg-inline-block" // Hide on smaller screens
              >
                WELCOME TO
              </div>
              <h2
                className="mt-4 text-white"
                style={{
                  fontSize: "3rem",
                  fontWeight: "bold",
                  marginLeft: "140px",
                }}
                className="d-none d-lg-block" // Hide on smaller screens
              >
                The Visual Chess
              </h2>
              <p
                className="mt-3 text-white"
                style={{ marginLeft: "140px" }}
                className="d-none d-lg-block"
              >
                Ac euismod vel sit maecenas id pellentesque eu sed consectetur.
                Malesuada adipiscing sagittis vel nulla.
              </p>
              <div className="mt-4" style={{ marginLeft: "140px" }}>
                <div className="d-flex justify-content-center justify-content-lg-start gap-3">
                  <a
                    href="#"
                    className="p-3"
                    style={{
                      background: "#160A33",
                      borderRadius: "50%",
                      transition: "box-shadow 0.3s ease",
                    }}
                    title="LinkedIn"
                  >
                    <FaLinkedin
                      style={{ color: "#bebae0", fontSize: "1.5rem" }}
                    />
                  </a>
                  <a
                    href="#"
                    className="p-3"
                    style={{
                      background: "#160A33",
                      borderRadius: "50%",
                      transition: "box-shadow 0.3s ease",
                    }}
                    title="Facebook"
                  >
                    <FaFacebook
                      style={{ color: "#bebae0", fontSize: "1.5rem" }}
                    />
                  </a>
                  <a
                    href="#"
                    className="p-3"
                    style={{
                      background: "#160A33",
                      borderRadius: "50%",
                      transition: "box-shadow 0.3s ease",
                    }}
                    title="Instagram"
                  >
                    <FaInstagram
                      style={{ color: "#bebae0", fontSize: "1.5rem" }}
                    />
                  </a>
                  <a
                    href="#"
                    className="p-3"
                    style={{
                      background: "#160A33",
                      borderRadius: "50%",
                      transition: "box-shadow 0.3s ease",
                    }}
                    title="WhatsApp"
                  >
                    <FaWhatsapp
                      style={{ color: "#bebae0", fontSize: "1.5rem" }}
                    />
                  </a>
                  <a
                    href="#"
                    className="p-3"
                    style={{
                      background: "#160A33",
                      borderRadius: "50%",
                      transition: "box-shadow 0.3s ease",
                    }}
                    title="Contact"
                  >
                    <FaPhoneAlt
                      style={{ color: "#bebae0", fontSize: "1.5rem" }}
                    />
                  </a>
                </div>
              </div>
            </Col>
            <Col lg={6} className="text-center">
              <img
                src={Logo}
                alt="Logo"
                className="img-fluid"
                style={{
                  maxHeight: "400px",
                  borderRadius: "0.5rem",
                }}
              />
            </Col>
          </Row>

          {/* Review Section */}
          <div className="container mt-10">
            <div className="row justify-content-center">
              <div className="col-md-6 col-lg-3 mb-4">
                <div className="about-item text-center">
                  <h2 className="large-text">{downloads}+</h2>
                  <p className="small-text">Downloads</p>
                </div>
              </div>
              <div className="col-md-6 col-lg-3 mb-4">
                <div className="about-item text-center">
                  <h2 className="large-text">{subscribers}+</h2>
                  <p className="small-text">Subscribers</p>
                </div>
              </div>
              <div className="col-md-6 col-lg-3 mb-4">
                <div className="about-item text-center">
                  <h2 className="large-text">{users}+</h2>
                  <p className="small-text">Users</p>
                </div>
              </div>
              <div className="col-md-6 col-lg-3 mb-4">
                <div className="about-item text-center">
                  <h2 className="large-text">{cookies}+</h2>
                  <p className="small-text">Cookies</p>
                </div>
              </div>
            </div>
          </div>

          {/*Service section*/}
          <section className="relative z-10 overflow-hidden justify-center px-4 pb-12 pt-20 lg:pb-90 lg:pt-120">
            <div className="container text-center">
              <div>
                <p className="inline-block px-3 text-white bg-purple-500 py-1 mb-4 text-lg font-semibold tracking-wider text-dark uppercase rounded-full">
                  Services
                </p>
              </div>
              <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-light sm:text-4xl text-center mx-auto">
                <span className="relative inline-block">
                  <svg
                    viewBox="0 0 52 24"
                    fill="#bebae0"
                    className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-[#bebae0] lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                  >
                    <defs>
                      <pattern
                        id="2feffae2-9edf-414e-ab8c-f0e6396a0fc1"
                        x="0"
                        y="0"
                        width=".135"
                        height=".30"
                      >
                        <circle cx="1" cy="1" r=".7" />
                      </pattern>
                    </defs>
                    <rect
                      fill="url(#2feffae2-9edf-414e-ab8c-f0e6396a0fc1)"
                      width="52"
                      height="24"
                    />
                  </svg>
                  <span className="relative text-light">The</span>
                </span>{" "}
                quick, brown fox jumps over a lazy dog
              </h2>

              <p className="text-base text-light md:text-lg">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                <br />
                accusantium doloremque rem aperiam, eaque ipsa quae.
              </p>
            </div>
            <div className="container mt-8">
              <div className="row g-3 justify-content-center">
                {[
                  { title: "Software", img: Software },
                  { title: "UI Design", img: UI },
                  { title: "Staff Augmentation", img: STAFF },
                  { title: "Software", img: Software },
                  { title: "UI Design", img: UI },
                  { title: "Mobile App", img: Mobile },
                ].map((card, index) => (
                  <div
                    className="col-12 col-sm-6 col-md-4 col-lg-4 "
                    key={index}
                  >
                    <div className="latest-card relative overflow-hidden bg-transparent rounded-xl transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                      {/* Glass Effect - Background with Blur */}
                      <div className="glass-effect w-50 h-full absolute top-0 left-0  border-s-2 bg-opacity-30 backdrop-blur-lg border-2 border-transparent hover:border-white rounded-xl transition-all duration-300"></div>

                      {/* Card content */}
                      <div className="relative z-10 p-4">
                        <strong className="text-xl font-semibold text-white">
                          {card.title}
                        </strong>
                        <img
                          src={card.img}
                          alt={card.title}
                          className="rounded-t-xl w-full h-auto"
                        />
                      </div>

                      {/* Inner Shadow Effect on Hover */}
                      <div className="card-overlay absolute top-0 left-0 w-full h-full bg-black opacity-0 transition-opacity hover:opacity-20 shadow-inner shadow-purple-500/50 rounded-xl"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
          {/*Why us */}
          <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
            <div>
              <p className="inline-block px-3 bg-[#bebae0] py-px mb-4 text-lg font-semibold tracking-wider text-[#160a33] uppercase rounded-full">
                Why Us?
              </p>
            </div>
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-[#bebae0] sm:text-4xl md:mx-auto">
              <span className="relative inline-block ">
                <svg
                  viewBox="0 0 52 24"
                  fill="#bebae0"
                  className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                >
                  <defs>
                    <pattern
                      id="2feffae2-9edf-414e-ab8c-f0e6396a0fc1"
                      x="0"
                      y="0"
                      width=".135"
                      height=".30"
                    >
                      <circle cx="1" cy="1" r=".7" />
                    </pattern>
                  </defs>
                  <rect
                    fill="url(#2feffae2-9edf-414e-ab8c-f0e6396a0fc1)"
                    width="52"
                    height="24"
                  />
                </svg>
                <span className="relative text-[#bebae0]">The</span>
              </span>{" "}
              quick, brown fox jumps over a lazy dog
            </h2>
            <p className="text-base text-[#bebae0] md:text-lg">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque rem aperiam, eaque ipsa quae.
            </p>
          </div>
          <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto justify-center">
            <div className="relative p-6 md:p-16">
              {/* Grid */}
              <div className="relative z-10 lg:grid lg:grid-cols-12 lg:gap-16 lg:items-center">
                <div className="mb-10 lg:mb-0 lg:col-span-6 lg:col-start-8 lg:order-2">
                  <h2 className="text-2xl text-white font-bold sm:text-3xl dark:text-white">
                    Fully customizable rules to match your unique needs
                  </h2>

                  {/* Tab Navs */}
                  <nav
                    className="grid gap-4 mt-5 md:mt-10"
                    aria-label="Tabs"
                    role="tablist"
                  >
                    <button
                      type="button"
                      className="hs-tab-active:bg-white hs-tab-active:shadow-md hs-tab-active:hover:border-transparent text-start hover:bg-[#bebae0] p-4 md:p-5 rounded-xl dark:hs-tab-active:bg-neutral-700 dark:hover:bg-neutral-700 active"
                      id="tabs-with-card-item-1"
                      data-hs-tab="#tabs-with-card-1"
                      aria-controls="tabs-with-card-1"
                      role="tab"
                    >
                      <span className="flex">
                        <span className="grow ms-6">
                          <span className="block text-lg font-semibold hs-tab-active:text-[#bebae0] text-white dark:hs-tab-active:text-blue-500 dark:text-white">
                            Advanced tools
                          </span>
                          <span className="block mt-1 text-white dark:hs-tab-active:text-[#bebae0] dark:text-white">
                            Use Preline thoroughly thought and automated
                            libraries to manage your businesses.
                          </span>
                        </span>
                      </span>
                    </button>

                    <button
                      type="button"
                      className="hs-tab-active:bg-white hs-tab-active:shadow-md hs-tab-active:hover:border-transparent text-start hover:bg-[#bebae0] p-4 md:p-5 rounded-xl dark:hs-tab-active:bg-neutral-700 dark:hover:bg-neutral-700"
                      id="tabs-with-card-item-2"
                      data-hs-tab="#tabs-with-card-2"
                      aria-controls="tabs-with-card-2"
                      role="tab"
                    >
                      <span className="flex">
                        <svg
                          className="flex-shrink-0 mt-2 size-6 md:size-7 hs-tab-active:text-[#bebae0] text-white dark:hs-tab-active:text-blue-500 dark:text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          // stroke-width="2"
                          // stroke-linecap="round"
                          // stroke-linejoin="round"
                        >
                          <path d="m12 14 4-4" />
                          <path d="M3.34 19a10 10 0 1 1 17.32 0" />
                        </svg>
                        <span className="grow ms-6">
                          <span className="block text-lg font-semibold hs-tab-active:text-[#bebae0] text-white dark:hs-tab-active:text-blue-500 dark:text-white">
                            Smart dashboards
                          </span>
                          <span className="block mt-1 text-white dark:hs-tab-active:text-[#bebae0] dark:text-white">
                            Quickly Preline sample components, copy-paste codes,
                            and start right off.
                          </span>
                        </span>
                      </span>
                    </button>

                    <button
                      type="button"
                      className="hs-tab-active:bg-white hs-tab-active:shadow-md hs-tab-active:hover:border-transparent text-start hover:bg-[#bebae0] p-4 md:p-5 rounded-xl dark:hs-tab-active:bg-neutral-700 dark:hover:bg-neutral-700"
                      id="tabs-with-card-item-3"
                      data-hs-tab="#tabs-with-card-3"
                      aria-controls="tabs-with-card-3"
                      role="tab"
                    >
                      <span className="flex">
                        <svg
                          className="flex-shrink-0 mt-2 size-6 md:size-7 hs-tab-active:text-[#bebae0] text-white dark:hs-tab-active:text-blue-500 dark:text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
                          <path d="M5 3v4" />
                          <path d="M19 17v4" />
                          <path d="M3 5h4" />
                          <path d="M17 19h4" />
                        </svg>

                        <span className="grow ms-6">
                          <span className="block text-lg font-semibold hs-tab-active:text-[#bebae0] text-white dark:hs-tab-active:text-blue-500 dark:text-white">
                            Powerful features
                          </span>
                          <span className="block mt-1 text-white dark:hs-tab-active:text-[#bebae0] dark:text-white">
                            Reduce time and effort on building modern look
                            design with Preline only.
                          </span>
                        </span>
                      </span>
                    </button>
                  </nav>
                  {/* End Tab Navs */}
                </div>

                {/* Tab Content */}
                <div className="lg:col-span-6">
                  <div className="relative">
                    <div
                      id="tabs-with-card-1"
                      role="tabpanel"
                      aria-labelledby="tabs-with-card-item-1"
                    >
                      <img src={STAFF} alt="" />
                    </div>

                    <div
                      id="tabs-with-card-2"
                      className="hidden"
                      role="tabpanel"
                      aria-labelledby="tabs-with-card-item-2"
                    >
                      <img
                        className="shadow-xl shadow-[#bebae0] rounded-xl dark:shadow-gray-900/20"
                        src="https://images.unsplash.com/photo-1665686306574-1ace09918530?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&h=1220&q=80"
                        alt="Image Description"
                      />
                    </div>

                    <div
                      id="tabs-with-card-3"
                      className="hidden"
                      role="tabpanel"
                      aria-labelledby="tabs-with-card-item-3"
                    >
                      <img
                        className="shadow-xl shadow-[#bebae0] rounded-xl dark:shadow-gray-900/20"
                        src="https://images.unsplash.com/photo-1598929213452-52d72f63e307?crop=entropy&cs=tinysrgb&fit=max&ixid=MXwyMDg3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=400"
                        alt="Image Description"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* History*/}
          <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
            <div>
              <p className="inline-block px-3 bg-[#bebae0] py-px mb-4 text-lg font-semibold tracking-wider text-[#160a33] uppercase rounded-full">
                History?
              </p>
            </div>
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-[#bebae0] sm:text-4xl md:mx-auto">
              <span className="relative inline-block ">
                <svg
                  viewBox="0 0 52 24"
                  fill="#bebae0"
                  className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                >
                  <defs>
                    <pattern
                      id="2feffae2-9edf-414e-ab8c-f0e6396a0fc1"
                      x="0"
                      y="0"
                      width=".135"
                      height=".30"
                    >
                      <circle cx="1" cy="1" r=".7" />
                    </pattern>
                  </defs>
                  <rect
                    fill="url(#2feffae2-9edf-414e-ab8c-f0e6396a0fc1)"
                    width="52"
                    height="24"
                  />
                </svg>
                <span className="relative text-[#bebae0]">The</span>
              </span>{" "}
              quick, brown fox jumps over a lazy dog
            </h2>
            <p className="text-base text-[#bebae0] md:text-lg">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque rem aperiam, eaque ipsa quae.
            </p>
          </div>
          <div className="home-works_component">
            <div
              id="w-node-ee84502a-d016-7d50-a05e-833c0ca5a029-09d0b1db"
              className="home-works_line"
            >
              <div
                className="home-works_scroll"
                style={{ willChange: "width, height", height: "0%" }}
              ></div>
            </div>
            <div className="w-layout-grid home-works_grid">
              <div href="#enriched-data" className="home-works_time"></div>
              <div
                id="w-node-c4fa7419-a618-f317-74f6-289de189c9f9-09d0b1db"
                className="home-works_steps"
              >
                <div className="home-works_dot"></div>
              </div>
              <div
                id="w-node-eb4f531d-68fe-9035-6c66-4c839e6980a4-09d0b1db"
                className="home-works_card odd"
                style={{
                  transform:
                    "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                  transformStyle: "preserve-3d",
                  filter: "blur(0px)",
                  opacity: 1,
                }}
              >
                <div className="margin-bottom margin-small">
                  <div className="text-custom_number text-white">
                    2010 - PRESENT
                  </div>
                  <h3 className="heading-style-h5">WEB DEVELOPER</h3>
                </div>
                <p className="text-size-regular">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </div>
            </div>
            <div className="w-layout-grid home-works_grid">
              <div
                id="w-node-_338164af-d662-40c7-a5d3-1d20fe1926e5-09d0b1db"
                className="home-works_card is-right"
                style={{
                  transform:
                    "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                  transformStyle: "preserve-3d",
                  filter: "blur(0px)",
                  opacity: 1,
                }}
              >
                <div className="margin-bottom margin-small text-right">
                  <div className="text-custom_number text-white">
                    2008 - 2011
                  </div>
                  <h3 className="heading-style-h5">SOFTWARE ENGINEER</h3>
                </div>
                <p className="text-size-regular text-right">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </div>
              <div
                id="w-node-_338164af-d662-40c7-a5d3-1d20fe1926e3-09d0b1db"
                className="home-works_steps"
              >
                <div className="home-works_dot"></div>
              </div>
              <div
                href="#enriched-data"
                id="w-node-_338164af-d662-40c7-a5d3-1d20fe1926df-09d0b1db"
                className="home-works_time"
              ></div>
            </div>
            <div className="w-layout-grid home-works_grid">
              <div href="#enriched-data" className="home-works_time"></div>
              <div
                id="w-node-_00a4eb8f-c2c7-62cd-4349-ffa1563188e5-09d0b1db"
                className="home-works_steps"
              >
                <div className="home-works_dot"></div>
              </div>
              <div
                id="w-node-_00a4eb8f-c2c7-62cd-4349-ffa1563188e7-09d0b1db"
                className="home-works_card"
                style={{
                  transform:
                    "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                  transformStyle: "preserve-3d",
                  filter: "blur(0px)",
                  opacity: 1,
                }}
              >
                <div className="margin-bottom margin-small">
                  <div className="text-custom_number text-white">
                    2016 - 2017
                  </div>
                  <h3 className="heading-style-h5">C++ PROGRAMMER</h3>
                </div>
                <p className="text-size-regular">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </div>
            </div>
            <div className="w-layout-grid home-works_grid">
              <div
                id="w-node-_6cdd7498-29ed-6c4e-12fb-4ec5717d1729-09d0b1db"
                className="home-works_card is-right"
                style={{
                  transform:
                    "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                  transformStyle: "preserve-3d",
                  filter: "blur(0px)",
                  opacity: 1,
                }}
              >
                <div className="margin-bottom margin-small text-right">
                  <div className="text-custom_number text-white">
                    2009 - 2013
                  </div>
                  <h3 className="heading-style-h5">BUSINESS DEGREE</h3>
                </div>
                <p className="text-size-regular text-right">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </div>
              <div
                id="w-node-_6cdd7498-29ed-6c4e-12fb-4ec5717d1731-09d0b1db"
                className="home-works_steps"
              >
                <div className="home-works_dot"></div>
              </div>
              <div
                href="#enriched-data"
                id="w-node-_6cdd7498-29ed-6c4e-12fb-4ec5717d1733-09d0b1db"
                className="home-works_time"
              ></div>
            </div>
            <div className="w-layout-grid home-works_grid">
              <div href="#enriched-data" className="home-works_time"></div>
              <div
                id="w-node-_33a1fbac-ca3e-dc61-db65-b950bbcb13d7-09d0b1db"
                className="home-works_steps"
              >
                <div className="home-works_dot"></div>
              </div>
              <div
                id="w-node-_33a1fbac-ca3e-dc61-db65-b950bbcb13d9-09d0b1db"
                className="home-works_card"
                style={{
                  transform:
                    "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                  transformStyle: "preserve-3d",
                  filter: "blur(0px)",
                  opacity: 1,
                }}
              >
                <div className="margin-bottom margin-small">
                  <div className="text-custom_number text-white">
                    2013 - 2016
                  </div>
                  <h3 className="heading-style-h5">COMPUTER SCIENCE DEGREE</h3>
                </div>
                <p className="text-size-regular">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </div>
            </div>
            <div className="w-layout-grid home-works_grid">
              <div
                id="w-node-b016d507-07a7-b587-bd33-547c917d6a94-09d0b1db"
                className="home-works_card is-right"
                style={{
                  transform:
                    "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                  transformStyle: "preserve-3d",
                  filter: "blur(0px)",
                  opacity: 1,
                }}
              >
                <div className="margin-bottom margin-small text-right">
                  <div className="text-custom_number text-white">
                    2017 - PRESENT
                  </div>
                  <h3 className="heading-style-h5">3D ANIMATION</h3>
                </div>
                <p className="text-size-regular text-right">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </div>
              <div
                id="w-node-b016d507-07a7-b587-bd33-547c917d6a9c-09d0b1db"
                className="home-works_steps"
              >
                <div className="home-works_dot"></div>
              </div>
              <div
                href="#enriched-data"
                id="w-node-b016d507-07a7-b587-bd33-547c917d6a9e-09d0b1db"
                className="home-works_time"
              ></div>
            </div>
          </div>
          {/* pricing plan*/}
          <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12 mt-20">
            <div>
              <p className="inline-block px-3 bg-[#bebae0] py-px mb-4 text-lg font-semibold tracking-wider text-[#160a33] uppercase rounded-full">
                Solution
              </p>
            </div>
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-[#bebae0] sm:text-4xl md:mx-auto">
              <span className="relative inline-block ">
                <svg
                  viewBox="0 0 52 24"
                  fill="#bebae0"
                  className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                >
                  <defs>
                    <pattern
                      id="2feffae2-9edf-414e-ab8c-f0e6396a0fc1"
                      x="0"
                      y="0"
                      width=".135"
                      height=".30"
                    >
                      <circle cx="1" cy="1" r=".7" />
                    </pattern>
                  </defs>
                  <rect
                    fill="url(#2feffae2-9edf-414e-ab8c-f0e6396a0fc1)"
                    width="52"
                    height="24"
                  />
                </svg>
                <span className="relative text-[#bebae0]">The</span>
              </span>{" "}
              quick, brown fox jumps over a lazy dog
            </h2>
            <p className="text-base text-[#bebae0] md:text-lg">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque rem aperiam, eaque ipsa quae.
            </p>
          </div>
          <section className="card container grid bg-transparent">
            <div className="card__container grid">
              <article className="card__content grid">
                <div className="card__pricing">
                  <div className="card__pricing-number">
                    <span className="card__pricing-symbol">$</span>59
                  </div>
                  <span className="card__pricing-month">/year</span>
                </div>

                <header className="card__header">
                  <div className="card__header-circle grid"></div>

                  <h3 className="card__header-subtitle">Personal</h3>
                  <h4 className="card__header-title">
                    Perfect for using in a personal website or a client project.
                  </h4>
                </header>

                <ul className="card__list grid text-white">
                  <li className="card__list-item">
                    <i className="uil uil-check card__list-icon"></i>
                    <p className="card__list-description">1 user </p>
                  </li>
                  <li className="card__list-item">
                    <i className="uil uil-check card__list-icon"></i>
                    <p className="card__list-description">All UI components</p>
                  </li>
                  <li className="card__list-item">
                    <i className="uil uil-check card__list-icon"></i>
                    <p className="card__list-description">Lifetime access</p>
                  </li>
                  <li className="card__list-item">
                    <i className="uil uil-check card__list-icon"></i>
                    <p className="card__list-description">Free updates</p>
                  </li>
                  <li className="card__list-item">
                    <i className="uil uil-check card__list-icon"></i>
                    <p className="card__list-description">
                      Use on 1 (one) project
                    </p>
                  </li>
                  <li className="card__list-item">
                    <i className="uil uil-check card__list-icon"></i>
                    <p className="card__list-description">3 Months support</p>
                  </li>
                </ul>

                <button className="card__button">Choose Personal</button>
              </article>
              <article className="card__content grid">
                <div className="card__pricing">
                  <div className="card__pricing-number">
                    <span className="card__pricing-symbol">$</span>199
                  </div>
                  <span className="card__pricing-month">/year</span>
                </div>

                <header className="card__header">
                  <div className="card__header-circle grid"></div>

                  <span className="card__header-subtitle">Business</span>
                  <h4 className="card__header-title">
                    Perfect for using in a personal website or a client project.
                  </h4>
                </header>

                <ul className="card__list grid text-white">
                  <li className="card__list-item">
                    <i className="uil uil-check card__list-icon"></i>
                    <p className="card__list-description">1 user </p>
                  </li>
                  <li className="card__list-item">
                    <i className="uil uil-check card__list-icon"></i>
                    <p className="card__list-description">All UI components</p>
                  </li>
                  <li className="card__list-item">
                    <i className="uil uil-check card__list-icon"></i>
                    <p className="card__list-description">Lifetime access</p>
                  </li>
                  <li className="card__list-item">
                    <i className="uil uil-check card__list-icon"></i>
                    <p className="card__list-description">Free updates</p>
                  </li>
                  <li className="card__list-item">
                    <i className="uil uil-check card__list-icon"></i>
                    <p className="card__list-description">
                      Use on 31 (three) project
                    </p>
                  </li>
                  <li className="card__list-item">
                    <i className="uil uil-check card__list-icon"></i>
                    <p className="card__list-description">4 Months support</p>
                  </li>
                </ul>

                <button className="card__button">Choose Business</button>
              </article>
              <article className="card__content grid">
                <div className="card__pricing">
                  <div className="card__pricing-number">
                    <span className="card__pricing-symbol">$</span>256
                  </div>
                  <span className="card__pricing-month">/year</span>
                </div>

                <header className="card__header">
                  <div className="card__header-circle grid"></div>

                  <span className="card__header-subtitle">Professional</span>
                  <h4 className="card__header-title">
                    Perfect for using in a personal website or a client project.
                  </h4>
                </header>

                <ul className="card__list grid text-white">
                  <li className="card__list-item">
                    <i className="uil uil-check card__list-icon"></i>
                    <p className="card__list-description">1 user </p>
                  </li>
                  <li className="card__list-item">
                    <i className="uil uil-check card__list-icon"></i>
                    <p className="card__list-description">All UI components</p>
                  </li>
                  <li className="card__list-item">
                    <i className="uil uil-check card__list-icon"></i>
                    <p className="card__list-description">Lifetime access</p>
                  </li>
                  <li className="card__list-item">
                    <i className="uil uil-check card__list-icon"></i>
                    <p className="card__list-description">Free updates</p>
                  </li>
                  <li className="card__list-item">
                    <i className="uil uil-check card__list-icon"></i>
                    <p className="card__list-description">Unlimited project </p>
                  </li>
                  <li className="card__list-item">
                    <i className="uil uil-check card__list-icon"></i>
                    <p className="card__list-description">12 Months support</p>
                  </li>
                </ul>

                <button className="card__button">Choose Professional</button>
              </article>
            </div>
          </section>
          {/* our team*/}
          <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12 mt-20">
            <div>
              <p className="inline-block px-3 bg-[#bebae0] py-px mb-4 text-lg font-semibold tracking-wider text-[#160a33] uppercase rounded-full">
                Meet Our Team
              </p>
            </div>
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-[#bebae0] sm:text-4xl md:mx-auto">
              <span className="relative inline-block ">
                <svg
                  viewBox="0 0 52 24"
                  fill="#bebae0"
                  className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                >
                  <defs>
                    <pattern
                      id="2feffae2-9edf-414e-ab8c-f0e6396a0fc1"
                      x="0"
                      y="0"
                      width=".135"
                      height=".30"
                    >
                      <circle cx="1" cy="1" r=".7" />
                    </pattern>
                  </defs>
                  <rect
                    fill="url(#2feffae2-9edf-414e-ab8c-f0e6396a0fc1)"
                    width="52"
                    height="24"
                  />
                </svg>
                <span className="relative text-[#bebae0]">The</span>
              </span>{" "}
              quick, brown fox jumps over a lazy dog
            </h2>
            <p className="text-base text-[#bebae0] md:text-lg">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque rem aperiam, eaque ipsa quae.
            </p>
          </div>
          <main className="container my-5">
            <Slider1 images={slider1Images} width={100} height={50} />
          </main>
          {/*testinomial*/}
          <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12 mt-20">
            <div>
              <p className="inline-block px-3 bg-[#bebae0] py-px mb-4 text-lg font-semibold tracking-wider text-[#160a33] uppercase rounded-full">
                Testinomail
              </p>
            </div>
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-[#bebae0] sm:text-4xl md:mx-auto">
              <span className="relative inline-block ">
                <svg
                  viewBox="0 0 52 24"
                  fill="#bebae0"
                  className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                >
                  <defs>
                    <pattern
                      id="2feffae2-9edf-414e-ab8c-f0e6396a0fc1"
                      x="0"
                      y="0"
                      width=".135"
                      height=".30"
                    >
                      <circle cx="1" cy="1" r=".7" />
                    </pattern>
                  </defs>
                  <rect
                    fill="url(#2feffae2-9edf-414e-ab8c-f0e6396a0fc1)"
                    width="52"
                    height="24"
                  />
                </svg>
                <span className="relative text-[#bebae0]">The</span>
              </span>{" "}
              quick, brown fox jumps over a lazy dog
            </h2>
            <p className="text-base text-[#bebae0] md:text-lg">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque rem aperiam, eaque ipsa quae.
            </p>
          </div>
          <div
            className="testimonial-slider text-white"
            style={{ padding: "20px", textAlign: "center" }}
          >
            <h2 className="mb-4 ">Hear from our clients</h2>
            <Slider {...settings}>
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="testimonial-item"
                  style={{ padding: "20px" }}
                >
                  <p
                    style={{
                      fontStyle: "italic",
                      maxWidth: "600px",
                      margin: "0 auto",
                    }}
                  >
                    "{testimonial.text}"
                  </p>
                  <div className="testimonial-author mt-3 d-flex align-items-center justify-content-center">
                    <img
                      src={testimonial.image}
                      alt={`${testimonial.name}`}
                      className="rounded-circle"
                      style={{
                        width: "50px",
                        height: "50px",
                        objectFit: "cover",
                        marginRight: "10px",
                      }}
                    />
                    <div>
                      <strong>{testimonial.name}</strong>
                      <p className="mb-0">{testimonial.position}</p>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
          {/* faq*/}
          <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12 mt-20">
            <div>
              <p className="inline-block px-3 bg-[#bebae0] py-px mb-4 text-lg font-semibold tracking-wider text-[#160a33] uppercase rounded-full">
                FAQ
              </p>
            </div>
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-[#bebae0] sm:text-4xl md:mx-auto">
              <span className="relative inline-block ">
                <svg
                  viewBox="0 0 52 24"
                  fill="#bebae0"
                  className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                >
                  <defs>
                    <pattern
                      id="2feffae2-9edf-414e-ab8c-f0e6396a0fc1"
                      x="0"
                      y="0"
                      width=".135"
                      height=".30"
                    >
                      <circle cx="1" cy="1" r=".7" />
                    </pattern>
                  </defs>
                  <rect
                    fill="url(#2feffae2-9edf-414e-ab8c-f0e6396a0fc1)"
                    width="52"
                    height="24"
                  />
                </svg>
                <span className="relative text-[#bebae0]">The</span>
              </span>{" "}
              quick, brown fox jumps over a lazy dog
            </h2>
            <p className="text-base text-[#bebae0] md:text-lg">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque rem aperiam, eaque ipsa quae.
            </p>
          </div>
          <div className="container py-5 text-white">
          <div className="row">
            {faqs.map((faq, index) => (
              <div className="col-md-6 mb-4" key={index}>
                <div className="d-flex align-items-start">
                  <div className="me-3">
                    <span className="icon-target" role="img" aria-label="icon" style={{ fontSize: "1.5rem" }}>
                      🎯
                    </span>
                  </div>
                  <div>
                    <h5>{faq.title}</h5>
                    {visibleIndex === index && <p>{faq.content}</p>}
                    <button
                      className="btn btn-link text-primary p-0"
                      onClick={() => toggleAnswer(index)}
                    >
                      {visibleIndex === index ? "HIDE" : "READ MORE"}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
          {/* newsletter*/}
          <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12 mt-20">
            <div>
              <p className="inline-block px-3 bg-[#bebae0] py-px mb-4 text-lg font-semibold tracking-wider text-[#160a33] uppercase rounded-full">
                NewsLetter
              </p>
            </div>
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-[#bebae0] sm:text-4xl md:mx-auto">
              <span className="relative inline-block ">
                <svg
                  viewBox="0 0 52 24"
                  fill="#bebae0"
                  className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                >
                  <defs>
                    <pattern
                      id="2feffae2-9edf-414e-ab8c-f0e6396a0fc1"
                      x="0"
                      y="0"
                      width=".135"
                      height=".30"
                    >
                      <circle cx="1" cy="1" r=".7" />
                    </pattern>
                  </defs>
                  <rect
                    fill="url(#2feffae2-9edf-414e-ab8c-f0e6396a0fc1)"
                    width="52"
                    height="24"
                  />
                </svg>
                <span className="relative text-[#bebae0]">The</span>
              </span>{" "}
              quick, brown fox jumps over a lazy dog
            </h2>
            <p className="text-base text-[#bebae0] md:text-lg">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque rem aperiam, eaque ipsa quae.
            </p>
          </div>
         {/* Form Section */}
         <div className="px-4 lg:flex lg:flex-row lg:items-center mt-4">
         <div
           className="relative isolate overflow-hidden shadow-2xl sm:rounded-3xl sm:px-8 lg:flex lg:gap-x-10 lg:px-16 border border-gray-600 w-full"
           style={{ background: "#0a0417" }}
         >
           <svg
             viewBox="0 0 1024 1024"
             className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
             aria-hidden="true"
           >
             <circle
               cx={512}
               cy={512}
               r={512}
               fill="url(#759c1415-0410-454c-8f7c-9a820de03641)"
               fillOpacity="0.7"
             />
             <defs>
               <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                 <stop stopColor="#7775D6" />
                 <stop offset={1} stopColor="#E935C1" />
               </radialGradient>
             </defs>
           </svg>
           <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-16 lg:text-left">
             <h2 className="text-3xl font-bold tracking-tight text-[#bebae0] sm:text-4xl">
               Boost your productivity.
               <br />
               Start using our app today.
             </h2>
             <p className="mt-6 text-lg leading-8 text-white">
               Ac euismod vel sit maecenas id pellentesque eu sed consectetur.
               Malesuada adipiscing sagittis vel nulla.
             </p>
 
             <form className="flex flex-col sm:flex-row sm:space-x-4 mt-4">
               <input
                 className="flex-grow h-12 px-4 rounded-md border border-gray-300 focus:outline-none focus:border-gray-500"
                 type="email"
                 placeholder="Enter your email address"
               />
               <button
                 type="submit"
                 className="mt-1 sm:mt-0 h-12 px-6 rounded-md font-semibold transition duration-300 ease-in-out"
                 style={{
                  background: 'rgba(162, 89, 255, 1)'
                 }}
               
               >
                 Subscribe
               </button>
             </form>
           </div>
           <div className="max-w-md flex justify-center lg:mx-0 lg:flex-auto lg:py-16 lg:text-left ">
             <img className="relative w-[22rem] " src={Logo} />
           </div>
         </div>
       </div>
          {/* contact us*/}
        </Container>
      </section>
    </>
  );
}
