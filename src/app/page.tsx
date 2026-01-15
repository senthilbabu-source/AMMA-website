"use client";

import Link from "next/link";
import { ArrowRight, FileText, Users, LogIn } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Sponsors from "@/components/Sponsors";

export default function Home() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Parallax Hero Section - Kerala Backwaters */}
      <section ref={ref} className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <motion.div
          style={{ y, opacity }}
          className="absolute inset-0 z-0"
        >
          <Image
            src="/hero-blend.png"
            alt="Seamless blend of Kerala Backwaters and Atlanta Skyline at night"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/5" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transpose to-transparent" />
        </motion.div>

        <div className="relative z-20 max-w-7xl mx-auto px-6 text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center pb-6"
          >
            <div className="relative w-32 h-32 md:w-40 md:h-40">
              <Image
                src="/images/AMMA_logofinal.png"
                alt="AMMA Logo"
                fill
                className="object-contain drop-shadow-2xl"
                priority
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-4"
          >
            <h2 className="text-lg md:text-xl font-medium tracking-[0.3em] text-primary/90 uppercase drop-shadow-md">Welcome to</h2>
            <h1 className="text-5xl md:text-7xl lg:text-9xl font-bold tracking-tighter text-white drop-shadow-2xl">
              AMMA
            </h1>
            <p className="text-xl md:text-3xl font-light text-white/90 tracking-wide max-w-2xl mx-auto drop-shadow-lg">
              Atlanta Metro Malayalee Association
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8"
          >
            <Link
              href="/membership"
              className="group px-8 py-3 bg-white text-black font-semibold rounded-full hover:bg-white/90 transition-all flex items-center gap-2 shadow-lg hover:shadow-xl"
            >
              Become a Member <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/events"
              className="px-8 py-3 bg-white/10 backdrop-blur-md border border-white/20 text-white font-semibold rounded-full hover:bg-white/20 transition-all shadow-lg"
            >
              View Upcoming Events
            </Link>
          </motion.div>
        </div>
      </section>

      {/* About Teaser - Glassmorphism */}
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none select-none">
          <span className="text-9xl font-bold font-serif">2010</span>
        </div>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60">
                Our Story
              </h2>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Started in 2010 by a group of people from Kerala, India in Atlanta, AMMA shares a definitive concept of what a Malayalee Association should be like.
                </p>
                <p>
                  With a membership of around 450 families, we have diverse patronage, including retired pioneers, working parents, and the young generation carving a new life here in America.
                </p>
              </div>
              <div className="pt-4">
                <Link href="/about" className="text-primary hover:text-primary/80 font-medium inline-flex items-center gap-2 group text-lg">
                  Read full story <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
            <div className="relative aspect-[4/5] md:aspect-auto md:h-[600px] rounded-2xl overflow-hidden shadow-2xl group">
              <Image
                src="/kerala_traditional_houseboat.png"
                alt="Kathakali Dancer"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
              <div className="absolute bottom-6 left-6 text-white">
                <p className="text-sm font-medium tracking-wider uppercase text-white/80">Heritage</p>
                <p className="text-xl font-semibold">Preserving Kerala Culture</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sponsors Section */}
      <Sponsors />

      {/* Features / Quick Links - Glass Cards */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-black/5 opacity-5 mix-blend-overlay pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <h2 className="text-3xl font-bold tracking-tight mb-16 text-center">Community Resources</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Scholarships",
                desc: "Supporting the next generation of students with financial aid and mentorship.",
                icon: FileText,
                href: "/resources"
              },
              {
                title: "Committees",
                desc: "Meet the dedicated executive steam working behind the scenes.",
                icon: Users,
                href: "/about"
              },
              {
                title: "Member Portal",
                desc: "Exclusive access for members to manage subscriptions and view gallery.",
                icon: LogIn,
                href: "#"
              }
            ].map((item, idx) => (
              <Link
                key={idx}
                href={item.href}
                className="group relative p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/5 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="relative z-10">
                  <div className="h-14 w-14 rounded-2xl bg-white/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300 border border-white/10 shadow-inner">
                    <item.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-foreground">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Volunteer CTA */}
      <section className="py-24 bg-neutral-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">Join Our Volunteer Team</h2>
          <p className="text-lg text-neutral-400 mb-8 max-w-2xl mx-auto">
            AMMA is built on the passion and dedication of volunteers. Help us organize events, manage community programs, and keep our traditions alive.
          </p>
          <Link
            href="/contact?subject=Volunteer"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-white/10 border border-white/20 hover:bg-white/20 transition-all text-white font-medium"
          >
            Become a Volunteer <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* Call to Action - Parallax/Fixed Background */}
      <section className="py-32 relative overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1593693397690-362cb9666c74?q=80&w=2574&auto=format&fit=crop"
            alt="Kerala Boat Race"
            fill
            className="object-cover opacity-20"
            quality={60}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background" />
        </div>

        <div className="max-w-4xl mx-auto text-center px-6 relative z-10 space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">Ready to Join the Family?</h2>
          <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Be part of our family, celebrate our traditions, and showcase your talent. Come let&apos;s grow together.
          </p>
          <Link
            href="/membership"
            className="px-10 py-4 bg-primary text-primary-foreground font-bold text-lg rounded-full hover:bg-primary/90 transition-all inline-flex items-center gap-2 shadow-xl shadow-primary/20 hover:shadow-primary/40 transform hover:scale-105"
          >
            View Membership Plans <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
