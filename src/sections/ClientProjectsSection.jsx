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

const clients = [
    { name: "Bank Coach", image: bankcoaching },
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

export default function ClientProjectsSection() {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-60px" });

    return (
        <section className="bg-white section-pad overflow-hidden">
            <div className="container-xl">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    className="text-center mb-14"
                >
                    <SectionLabel>Our Clients</SectionLabel>
                    <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-ink tracking-[-0.02em]">
                        Trusted By Innovation Leaders
                    </h2>
                    <p className="mt-4 text-[15px] text-slate-500">
                        Companies that put their trust in Least Action.
                    </p>
                </motion.div>

                {/* Marquee */}
                <div className="relative overflow-hidden">
                    <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10" />
                    <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10" />

                    <motion.div
                        className="flex gap-10 w-max"
                        animate={{ x: ["0%", "-50%"] }}
                        transition={{ repeat: Infinity, duration: 28, ease: "linear" }}
                    >
                        {[...clients, ...clients].map((client, i) => (
                            <div key={i} className="flex flex-col items-center gap-3 min-w-[130px] group">
                                <div className="bg-white rounded-xl p-4 w-20 h-20 flex items-center justify-center border border-mist shadow-card group-hover:shadow-glow-sm group-hover:border-cobalt/20 transition-all duration-300">
                                    {/* <img
                                        src={client.image}
                                        alt={client.name}
                                        className="h-12 w-full object-contain filter group-hover:grayscale-0 transition-all duration-300"
                                        loading="lazy"
                                    /> */}
                                    <img
                                        src={client.image}
                                        alt={client.name}
                                        loading="lazy"
                                        className="h-12 w-full object-contain transition-all duration-500 ease-in-out transform group-hover:scale-110 group-hover:-translate-y-1 group-hover:drop-shadow-lg group-hover:grayscale-0"
                                    />
                                </div>
                                <p className="text-xs font-medium text-slate-500 text-center group-hover:text-cobalt transition-colors">
                                    {client.name}
                                </p>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
