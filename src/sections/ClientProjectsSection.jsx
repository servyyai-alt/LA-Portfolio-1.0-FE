import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import SectionLabel from "@/components/ui/SectionLabel";

// Logo imports
import bankcoaching from "@/assets/logo/bankcoaching.png";
import sportsott from "@/assets/logo/sportsott.png";
import stardmcLogo from "@/assets/logo/stardmc-logo.png";
import tvaster from "@/assets/logo/tvaster.png";
import miloLogo from "@/assets/logo/miloLogo.jpg";
import bookmyservices from "@/assets/logo/bookmyservices.png";
import petcare from "@/assets/logo/petcare.png";
import neo from "@/assets/logo/neo.png";
import spectrum from "@/assets/logo/spectrum.png";
import cwlogo from "@/assets/logo/cwlogo.png";
import vallalwebby from "@/assets/webby_logo/vallal.jpeg";
import matrimonywebby from "@/assets/webby_logo/matrimony.jpeg";

const clients = [
  { name: "Smart Bankers Institute", image: bankcoaching },
  { name: "Sports OTT", image: sportsott },
  { name: "Star DMC", image: stardmcLogo },
  { name: "Tvaster Genkalp", image: tvaster },
  { name: "Milo Cabs", image: miloLogo },
  { name: "Book My Service", image: bookmyservices },
  { name: "Pet Care App", image: petcare },
  { name: "Neo Website", image: neo },
  { name: "Spectrum", image: spectrum },
  { name: "City Wash", image: cwlogo },
];

const webbyClients = [
  { name: "Vallal Webby", image: vallalwebby },
  { name: "Matrimony Webby", image: matrimonywebby },
   { name: "Vallal Webby", image: vallalwebby },
  { name: "Matrimony Webby", image: matrimonywebby },
    { name: "Vallal Webby", image: vallalwebby },
  { name: "Matrimony Webby", image: matrimonywebby },
];

export default function ClientProjectsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section className="bg-white section-pad pb-14 overflow-hidden">
      <div className="container-xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-14"
        >
          <SectionLabel>Our Clients</SectionLabel>
          <h2 className="type-section-title text-ink">
            Trusted By Innovation Leaders
          </h2>
          <p className="type-body-copy mt-4 ">
            Companies that put their trust in Least Action.
          </p>
        </motion.div>

        {/* Marquee */}
        <div className="relative overflow-hidden">
          {/* Gradient fade */}
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10" />

          <motion.div
            className="flex gap-12 md:gap-16 w-max items-center"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
          >
            {[...clients, ...clients].map((client, i) => (
              <div
                key={i}
                className="flex flex-col items-center gap-3 min-w-[140px] md:min-w-[180px] group"
              >
                {/* LOGO CARD */}
                <div className="
                  bg-white rounded-2xl 
                  w-28 h-28 md:w-36 md:h-36 lg:w-40 lg:h-40
                  flex items-center justify-center 
                  border border-gray-200 
                  shadow-sm 
                  group-hover:shadow-xl 
                  group-hover:border-cobalt/30
                  transition-all duration-300
                ">
                  <div className="w-full h-full flex items-center justify-center p-4">
                    <img
                      src={client.image}
                      alt={client.name}
                      loading="lazy"
                      className="
                        max-h-16 md:max-h-20 lg:max-h-24 
                        max-w-full object-contain
                        group-hover:grayscale-0 group-hover:opacity-100
                        group-hover:scale-110
                        transition-all duration-300
                      "
                    />
                  </div>
                </div>

                {/* NAME */}
                <p className="
                  text-xs md:text-sm font-medium 
                   text-center
                  group-hover:text-cobalt 
                  transition-colors
                ">
                  {client.name}
                </p>
              </div>
            ))}
          </motion.div>
        </div>

              <div className="container-xl pt-14">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-14"
        >
          <SectionLabel>Our Webby Clients</SectionLabel>
          {/* <h2 className="type-section-title text-ink">
            Trusted By Innovation Leaders
          </h2>
          <p className="type-body-copy mt-4 ">
            Companies that put their trust in Least Action.
          </p> */}
        </motion.div>

                {/* Marquee */}
                <div className="relative overflow-hidden">
                  {/* Gradient fade */}
                  <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10" />
                  <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10" />
        
                  <motion.div
                    className="flex gap-12 md:gap-16 w-max items-center"
                    animate={{ x: ["-50%", "0%"] }}
                    transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
                  >
                    {[...webbyClients, ...webbyClients].map((client, i) => (
                      <div
                        key={i}
                        className="flex flex-col items-center gap-3 min-w-[140px] md:min-w-[180px] group"
                      >
                        {/* LOGO CARD */}
                        <div className="
                          bg-white rounded-2xl 
                          w-28 h-28 md:w-36 md:h-36 lg:w-40 lg:h-40
                          flex items-center justify-center 
                          border border-gray-200 
                          shadow-sm 
                          group-hover:shadow-xl 
                          group-hover:border-cobalt/30
                          transition-all duration-300
                        ">
                          <div className="w-full h-full flex items-center justify-center p-4">
                            <img
                              src={client.image}
                              alt={client.name}
                              loading="lazy"
                              className="
                                max-h-16 md:max-h-20 lg:max-h-24 
                                max-w-full object-contain
                                group-hover:grayscale-0 group-hover:opacity-100
                                group-hover:scale-110
                                transition-all duration-300
                              "
                            />
                          </div>
                        </div>
        
                        {/* NAME */}
                        <p className="
                          text-xs md:text-sm font-medium 
                           text-center
                          group-hover:text-cobalt 
                          transition-colors
                        ">
                          {client.name}
                        </p>
                      </div>
                    ))}
                  </motion.div>
                </div>
                </div>
      </div>
    </section>
  );
}