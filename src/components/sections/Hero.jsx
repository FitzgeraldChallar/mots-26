import { motion } from "framer-motion";

import Button from "../ui/Button";
import flyer from "../../assets/images/flyer.png";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="relative overflow-hidden min-h-[90vh] flex items-center bg-linear-to-br from-purple-950 via-purple-900 to-purple-700 pt-10 md:pt-0">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-96 h-96 rounded-full bg-yellow-400/20 blur-[120px] top-10 left-10"></div>

        <div className="absolute w-125 h-125 rounded-full bg-purple-500/30 blur-[160px] bottom-0 right-0"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT */}

        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-4 py-2 rounded-full bg-yellow-100 text-yellow-800 font-semibold mb-5">
            November 1, 2026
          </span>

          <h1 className="text-6xl font-bold leading-tight text-white">
            Move of the Spirit,
            <span className="text-yellow-500"> 2026</span>
          </h1>

          <h2 className="mt-4 text-3xl text-purple-700 font-semibold">
            The National Sacred Worship
          </h2>

          <p className="mt-8 text-lg leading-8 text-purple-100">
            Join thousands of believers for a life-changing worship encounter.
            Experience Revival.
            Experience Worship.
            Experience Transformation.
          </p>

          <div className="flex gap-5 mt-10">
            <Link to="/captain-register">
              <Button variant="primary">
                Become a Captain
              </Button>
            </Link>

            <Link to="/register">
              <Button variant="secondary">
                Register Now
              </Button>
            </Link>
          </div>
        </motion.div>

        {/* RIGHT */}

        <motion.div
          animate={{
            y: [0, -12, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div className="rounded-3xl overflow-hidden shadow-2xl">
            <img
              src={flyer}
              alt="Move of the Spirit"
              className="w-full"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}