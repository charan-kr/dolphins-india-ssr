import React, { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import myLoader from "lib/myLoader";

import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import { Button } from "primereact/button";
import { Toast } from "primereact/toast";

// import Sidebar from "../../components/Sidebar";

// import ImportScript from "../../lib/utils/importScript";

// import EnquiryService from "../../service/EnquiryService";
const initialForm = {
  name: "",
  email: "",
  subject: "",
  message: "",
};
const LandingPage = () => {
  const features = [
    {
      imageUrl: "/images/features-icon-1.svg",
      title: "Shop With AI",
    },
    {
      imageUrl: "/images/features-icon-2.svg",
      title: "Latest Trends",
    },
    {
      imageUrl: "/images/features-icon-3.svg",
      title: "Searchandising",
    },
    {
      imageUrl: "/images/features-icon-4.svg",
      title: "Multi Language Support",
    },
    {
      imageUrl: "/images/features-icon-5.svg",
      title: "Shopping With Rewards",
    },
    {
      imageUrl: "/images/features-icon-6.svg",
      title: "Buy Local Sell Local",
    },
  ];
  const partnersContent = [
    {
      title: "Partners",
      content: [
        "Optimized services to provide a better selling experience",
        "All sellers are treated as partners",
        "Enhanced customer reach with DolphinsIndia",
        "Enhanced support for sellers",
      ],
      imageUrl: "/images/partner.jpg",
    },
  ];
  const customerContent = [
    {
      title: "Customers",
      content: [
        "Shopping with ease and experience",
        "Wide range of products to shop",
        "Better Prices",
        "Easy Returns",
        "Better customer support",
        "Efficient and secured delivery",
      ],
      imageUrl: "/images/customer.jpg",
    },
  ];
  const socialLinks = [
    {
      label: "Facebook",
      icon: "fa fa-facebook-square fa-2x",
      color: "#4267B2",
      link: "http://www.facebook.com/dolphinsindia",
    },

    {
      label: "Twitter",
      icon: "fa fa-twitter fa-2x",
      color: "#00acee",
      link: "https://twitter.com/Dolphinsindia",
    },
    {
      label: "Linkedin",
      icon: "fa fa-linkedin-square fa-2x",
      color: "#0077b5",
      link: "http://www.linkedin.com/in/dolphinsindia",
    },
  ];
  const toast = useRef(null);
  const [form, setForm] = useState(initialForm);
  const handleSubmit = () => {
    const { name, email, subject, message } = form;
    if (!name || !email || !subject || !message) {
      toast.current.show({
        severity: "warn",
        summary: "Please enter all fields",
        detail: "We need this to contact you back.",
      });
      return;
    }

    // const enquiryService = new EnquiryService();
    // enquiryService
    //   .sendEnquiry(form)
    //   .then(() => {
    //     toast.current.show({
    //       severity: "success",
    //       summary: "Thanks for your interest in DolphinsIndia!",
    //       detail: "Our team will get back to sooner",
    //       life: 6000,
    //     });
    //     setForm(initialForm);
    //   })
    //   .catch((error) => {
    //     toast.current.show({
    //       severity: "info",
    //       summary: error,
    //     });
    //   });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const assignColor = (color = "#222") => {
    return {
      color,
    };
  };
  return (
    <>
      <Toast ref={toast} />

      {/* <Sidebar /> */}
      <div className="bg">
        <section id="home" className="home">
          <div className="p-grid">
            <div className="p-col-12 p-mx-auto p-p-0">
              <div className="p-grid">
                <div className="p-col-12 p-md-5" style={{ height: "100%" }}>
                  <div className="p-m-3 p-m-md-6 p-d-flex p-flex-column p-jc-between text-container">
                    <h1 className="brand">
                      <div className="logo">
                        <Image
                          width={872}
                          height={256}
                          layout="intrinsic"
                          loader={myLoader}
                          objectFit
                          // style={{ height: "100%", width: "100%" }}
                          src={"/images/logo_5_wo_bg.png"}
                          alt="Dolphins India PS Pvt Ltd"
                        />
                      </div>
                      <p className="sub-heading p-text-center p-p-0 p-mr-md-5">
                        Relive shopping experience
                      </p>
                    </h1>
                    <div>
                      <h1 className="heading">Where brand meets customer</h1>
                    </div>
                  </div>
                </div>
                <div
                  className="p-col-12 p-md-7 p-p-0"
                  style={{ minHeight: "250px" }}
                >
                  <div
                    style={{
                      width: "100%",
                      height: "100%",
                      position: "relative",
                    }}
                  >
                    <Image
                      loader={myLoader}
                      layout="fill"
                      className="image-container"
                      src={"/images/hero_original.jpg"}
                      alt="A minature cart carrier moving minature blocks"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="selection">
          <div className="p-grid">
            <div className="p-col-12p-p-0">
              <h1 className="quote title">
                Online shopping experience doesn't get better than what Dolphins
                India provides
              </h1>
            </div>
          </div>
        </section>

        <section id="features" className="whatwedo">
          <div className="p-grid">
            {features.map((feature, i) => (
              <div
                key={i}
                className="p-col-12 p-md-6 p-xl-4 p-mx-auto p-py-2 p-px-3"
              >
                <div className="card">
                  <div className="card-image">
                    <Image
                      layout="intrinsic"
                      loader={myLoader}
                      width={100}
                      height={100}
                      className="img-fluid"
                      src={feature.imageUrl}
                      alt={feature.title}
                    />
                  </div>
                  <div className="content">
                    <p className="title p-m-0">{feature.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="cards">
          <div id="partners">
            {partnersContent.map((card, i) => (
              <div key={i} className="p-grid" style={{ height: "100%" }}>
                <div className="p-col-12 p-mx-auto p-p-0">
                  <div
                    className={`p-grid ${i % 2 === 0 ? "" : "p-dir-rev"}`}
                    style={{ height: "100%" }}
                  >
                    <div className={`p-col-12 p-md-${i % 2 === 0 ? "6" : "6"}`}>
                      <div className="p-m-4 p-m-md-6 p-d-flex p-flex-column p-jc-between paragh">
                        {/* <h4 className="sub-heading">WEEKLY FISH BOXES</h4> */}
                        <h1 className="heading ">{card.title}</h1>
                        {card.content.map((text, idx) => (
                          <p key={idx} className="content">
                            {text}
                          </p>
                        ))}
                      </div>
                    </div>
                    <div
                      className={`p-col-12 p-p-0 p-md-${
                        i % 2 === 0 ? "6" : "6"
                      }`}
                      style={{ minHeight: "250px" }}
                    >
                      <div
                        style={{
                          width: "100%",
                          height: "100%",
                          position: "relative",
                        }}
                      >
                        <Image
                          layout="fill"
                          loader={myLoader}
                          src={card.imageUrl}
                          alt="Partner witha stack full of bills in hand"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div id="customers" className="cards">
            {customerContent.map((card, i) => (
              <div key={i} className="p-grid" style={{ height: "100%" }}>
                <div className="p-col-12 p-mx-auto p-p-0">
                  <div
                    className={`p-grid ${i % 2 !== 0 ? "" : "p-dir-rev"}`}
                    style={{ height: "100%" }}
                  >
                    <div className={`p-col-12 p-md-${i % 2 === 0 ? "6" : "6"}`}>
                      <div className="p-m-4 p-m-md-6 p-d-flex p-flex-column p-jc-between paragh">
                        {/* <h4 className="sub-heading">WEEKLY FISH BOXES</h4> */}
                        <h1 className="heading ">{card.title}</h1>
                        {card.content.map((text, idx) => (
                          <p key={idx} className="content">
                            {text}
                          </p>
                        ))}
                      </div>
                    </div>
                    <div
                      className={`p-col-12 p-p-0 p-md-${
                        i % 2 === 0 ? "6" : "6"
                      }`}
                      style={{ minHeight: "250px" }}
                    >
                      <div
                        style={{
                          width: "100%",
                          height: "100%",
                          position: "relative",
                        }}
                      >
                        <Image
                          layout="fill"
                          loader={myLoader}
                          src={card.imageUrl}
                          alt="Happy customer making her online purchase"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="whatwedo" className="news-letter">
          <div className="p-grid">
            <div className="p-col-12 p-mx-auto p-p-0">
              <h1 className="p-text-center">What We Do @ DolphinsIndia</h1>
              <div className="p-grid">
                <div
                  className="p-col-12 p-md-8 p-xl-5 p-ml-auto p-p-0 "
                  style={{ minHeight: "250px" }}
                >
                  <div
                    style={{
                      border: "2px solid #eee",
                      borderRadius: "5px",
                      padding: "4px",
                      position: "relative",
                      height: "100%",
                      width: "100%",
                    }}
                  >
                    {/* <video
                      width="100%"
                      height="100%"
                      autoPlay
                      loop
                      controls
                      muted
                    >
                      <source src={animate} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video> */}

                    <Image
                      layout="fill"
                      loader={myLoader}
                      src={"/images/whatwedo_original.jpg"}
                      alt="E-commerce work flow from customer purchase to delivery"
                    />
                  </div>
                </div>
                <div className="p-col-12 p-md-12 p-xl-6 p-px-md-4 p-py-md-0 p-text-justify">
                  <p
                    className="p-m-0 p-pb-4 p-pb-md-5"
                    style={{ color: "#fff" }}
                  >
                    Online shopping with DolphinsIndia is quick, convenient, and
                    trouble-free. You can shop for the desired products right
                    from the comfort of your home and get them delivered
                    straight to your doorstep.
                  </p>

                  <p
                    className="p-m-0 p-pb-4 p-pb-md-5"
                    style={{ color: "#fff" }}
                  >
                    Browse DolphinsIndia.in and get access to a wide range of
                    products ranging from smartphones, tablets to laptops,
                    sarees, kurtas & Kurtis to t-shirts, sneakers, sports shoes
                    to sandals, earrings, watches to fitness bands, cookware to
                    gas stoves, dairy products, baby products to makeup kits and
                    many more.
                  </p>

                  <p
                    className="p-m-0 p-pb-4 p-pb-md-5"
                    style={{ color: "#fff" }}
                  >
                    DolphinsIndia strives hard to make your online shopping a
                    more pleasant and cost-effective experience by providing
                    top-quality products at the best price rates in India.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="contact-us">
          <div className="p-text-center">
            <h1>Sign up to our newsletter</h1>
            <p>
              If you'd like to stay in touch and be the first to know about our
              news and events, please sign-up to our newsletter. We will only
              contact you when there's something to say, so we promise not to
              bombard you. You can opt out at any time by clicking unsubscribe
              on the newsletter.
            </p>
          </div>
          <div>
            <div className="p-grid">
              <div className="p-col-12 p-md-10 p-xl-8 p-mx-auto">
                <div className="p-grid">
                  <div className="p-col-12 p-md-6 p-px-0 p-px-md-2">
                    <div className="p-inputgroup">
                      <InputText
                        placeholder="Name"
                        value={form.name}
                        name="name"
                        onChange={(e) => handleInputChange(e)}
                        className="p-inputgroup"
                        id="name"
                      />
                    </div>
                  </div>
                  <div className="p-col-12 p-md-6 p-px-0 p-px-md-2">
                    <div className="p-inputgroup">
                      <InputText
                        placeholder="Email Address"
                        value={form.email}
                        name="email"
                        onChange={(e) => handleInputChange(e)}
                        className="p-inputgroup"
                        id="email"
                      />
                    </div>
                  </div>
                  <div className="p-col-12 p-px-0 p-px-md-2">
                    <div className="p-inputgroup">
                      <InputText
                        placeholder="Subject"
                        value={form.subject}
                        name="subject"
                        onChange={(e) => handleInputChange(e)}
                        className="p-inputgroup"
                        id="subject"
                      />
                    </div>
                  </div>
                  <div className="p-col-12 p-px-0 p-px-md-2">
                    <div className="p-inputgroup">
                      <InputTextarea
                        rows={5}
                        placeholder="message"
                        value={form.message}
                        name="message"
                        onChange={(e) => handleInputChange(e)}
                        className="p-inputgroup"
                        id="message"
                      />
                    </div>
                  </div>
                  <div className="p-col-12 p-px-0 p-px-md-2">
                    <Button
                      onClick={() => handleSubmit()}
                      className="p-button-success p-py-2 p-px-4 p-button-rounded"
                      label="Submit"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="links">
          <div className="p-d-flex p-flex-column p-jc-between p-flex-md-row">
            <div className="nav-links">
              <Link href="/#home">
                <a>Home</a>
              </Link>
              <Link href="/#partners">
                <a>Partners</a>
              </Link>
              <Link href="/#customers">
                <a>Customers</a>
              </Link>
              <Link href="/#whatwedo">
                <a>What We Do</a>
              </Link>
              <Link href="/terms">
                <a>Terms of Use</a>
              </Link>
              <Link href="/careers">
                <a>Careers</a>
              </Link>
            </div>

            <div className="social-links">
              {socialLinks.map((social, i) => (
                <a
                  key={i}
                  rel="noreferrer"
                  target="_blank"
                  referrerPolicy="no-referrer"
                  href={social.link}
                  aria-label={social.label}
                >
                  <i
                    aria-hidden="true"
                    className={social.icon}
                    style={assignColor(social.color)}
                  ></i>
                </a>
              ))}
            </div>
          </div>
        </section>

        <div className="footer">
          <span className="p-my-auto">© DOLPHINS INDIA PS PVT LTD</span>
          {/* <span id="siteseal">
            {ImportScript(
              "https://seal.godaddy.com/getSeal?sealID=UJTe8vfJp4taN4SbyfLMSaHMMMvnCpflW5HwYMs84BE7QiC4D39F5DDjgZmc"
            )}
          </span> */}
        </div>
      </div>
    </>
  );
};

export default LandingPage;
