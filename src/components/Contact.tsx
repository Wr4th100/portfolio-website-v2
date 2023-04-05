import React, { useRef, useState, lazy, Suspense, useEffect } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import LoadingScreen from "./LoadingScreen";
import SectionWrapper from "../hoc/SectionWrapper";
import { slideIn } from "../utils/motion";

// template_96wp74n
// service_td2xsw9
// K_vyMlipaLdWY4lOX

const LazySpline = lazy(() => import("@splinetool/react-spline"));

type Props = {};

const Contact = (props: Props) => {
  const formRef = useRef<HTMLFormElement>(null);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isMobile, setIsMobile] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // if (window.innerWidth < 500) {
    //   setIsMobile(true);
    // }

    const mediaQuery = window.matchMedia("(max-width: 1000px)");
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event: MediaQueryListEvent) => {
      setIsMobile(event.matches);
    };
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLFormElement | HTMLInputElement | HTMLTextAreaElement>) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Roshan",
          from_email: form.email,
          to_email: "roshan10.rj@gmail.com",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <div
      className={` w-screen font-ikaros sm:min-h-full sm:h-full min-h-full border-b-4 border-[#DEAD4F] mr-6 p-6 pb-10 flex ${isMobile ? "flex-col" : "flex-row"}`}
    >
      <motion.div
        className="text-white sm:w-1/2 w-full"
        variants={slideIn("left", "tween", 0.2, 1)}
      >
        <p className="text-2xl dark:text-white sm:px-32 px-10 pt-10 font-ikaros-light">
          {" "}
          Get in touch{" "}
        </p>
        <h3 className="text-6xl text-[#DEAD4F] sm:px-32 px-10 sm:pb-10 pb-6 mt-1">
          {" "}
          Contact{" "}
        </h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-0 flex flex-col gap-8 sm:px-32 px-10"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your good name?"
              className="dark:bg-black bg-white py-4 px-6  dark:text-white text-black rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email address?"
              className="dark:bg-black bg-white py-4 px-6 dark:text-white text-black rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Message</span>
            <textarea
              rows={7}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What do you want to say?"
              className="dark:bg-black bg-white py-4 px-6 dark:text-white text-black rounded-lg outline-none border-none font-medium"
            />
          </label>

          <button
            type="submit"
            className="bg-[#dead4f] py-2 px-6 rounded-xl outline-none w-fit text-black text-xl font-bold shadow-md "
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>
        {!isMobile ? (
          <motion.div className="h-screen w-1/2"
          variants={slideIn("right", "tween", 0.2, 1)}>
            <Suspense fallback={<LoadingScreen />}>
              <LazySpline scene="https://prod.spline.design/zKWHXgAeefS7PDX5/scene.splinecode" />
            </Suspense>
          </motion.div>
        ) : null}
      {/* <motion.div className="h-screen sm:w-1/2 w-full">
          <Suspense fallback={<LoadingScreen />}>
            <LazySpline scene="https://prod.spline.design/zKWHXgAeefS7PDX5/scene.splinecode" />
          </Suspense>
        </motion.div> */}
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
