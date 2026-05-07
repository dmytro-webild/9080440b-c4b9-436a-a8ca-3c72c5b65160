"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactText from '@/components/sections/contact/ContactText';
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';
import FooterMedia from '@/components/sections/footer/FooterMedia';
import HeroOverlay from '@/components/sections/hero/HeroOverlay';
import MediaAbout from '@/components/sections/about/MediaAbout';
import MetricCardFourteen from '@/components/sections/metrics/MetricCardFourteen';
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import TestimonialCardSix from '@/components/sections/testimonial/TestimonialCardSix';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="bounce-effect"
        defaultTextAnimation="entrance-slide"
        borderRadius="rounded"
        contentWidth="mediumLarge"
        sizing="mediumLargeSizeMediumTitles"
        background="noiseDiagonalGradient"
        cardStyle="outline"
        primaryButtonStyle="gradient"
        secondaryButtonStyle="glass"
        headingFontWeight="semibold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingInline
      navItems={[
        {
          name: "Home",
          id: "hero",
        },
        {
          name: "About",
          id: "about",
        },
        {
          name: "Properties",
          id: "properties",
        },
        {
          name: "Contact",
          id: "contact",
        },
      ]}
      brandName="US Real Estate & Builders"
      button={{
        text: "WhatsApp",
        href: "https://wa.me/923125074233",
      }}
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroOverlay
      title="Discover Luxury Properties in Islamabad"
      description="Experience the pinnacle of sophisticated living. US Real Estate & Builders offers elite homes for those who refuse to settle for anything less than perfection."
      buttons={[
        {
          text: "Explore Properties",
          href: "#properties",
        },
        {
          text: "Contact Us",
          href: "https://wa.me/923125074233",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/luxury-architecture-exterior-design_23-2151920917.jpg"
      imageAlt="Luxury mansion Islamabad"
      showBlur={true}
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/full-shot-young-woman-stairs_23-2149204468.jpg",
          alt: "Client profile 1",
        },
        {
          src: "http://img.b2bpic.net/free-photo/full-shot-woman-vacation_23-2149204469.jpg",
          alt: "Client profile 2",
        },
        {
          src: "http://img.b2bpic.net/free-photo/young-beautiful-girl-posing-street-dress-with-backpack_1296-805.jpg",
          alt: "Client profile 3",
        },
        {
          src: "http://img.b2bpic.net/free-photo/man-suit-outside-church-waving-welcoming-woman_181624-23201.jpg",
          alt: "Client profile 4",
        },
        {
          src: "http://img.b2bpic.net/free-photo/young-woman-using-phone_23-2148230176.jpg",
          alt: "Client profile 5",
        },
      ]}
      avatarText="Join 500+ satisfied homeowners"
    />
  </div>

  <div id="about" data-section="about">
      <MediaAbout
      useInvertedBackground={false}
      title="A Legacy of Trust and Excellence"
      description="With a vision to redefine urban living, we specialize in curating elite architectural landmarks. Our commitment to transparency, quality, and luxury is the hallmark of our service."
      imageSrc="http://img.b2bpic.net/free-photo/view-modern-futuristic-work-space-with-furniture_23-2151797702.jpg"
      imageAlt="Luxury office interior"
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardFourteen
      useInvertedBackground={false}
      title="Our Track Record"
      tag="Excellence in Numbers"
      metrics={[
        {
          id: "m1",
          value: "15+",
          description: "Years of Excellence",
        },
        {
          id: "m2",
          value: "500+",
          description: "Successful Deals",
        },
        {
          id: "m3",
          value: "98%",
          description: "Client Satisfaction",
        },
        {
          id: "m4",
          value: "20+",
          description: "Expert Consultants",
        },
      ]}
      metricsAnimation="slide-up"
    />
  </div>

  <div id="properties" data-section="properties">
      <ProductCardTwo
      animationType="scale-rotate"
      textboxLayout="split"
      gridVariant="bento-grid"
      useInvertedBackground={false}
      products={[
        {
          id: "p1",
          brand: "US Builders",
          name: "Executive Villa E-7",
          price: "PKR 150M",
          rating: 5,
          reviewCount: "12",
          imageSrc: "http://img.b2bpic.net/free-photo/beautiful-tropical-beach-front-hotel-resort-with-swimming-pool-paradise-destination-vacations-ge_1258-150769.jpg",
        },
        {
          id: "p2",
          brand: "US Builders",
          name: "Modern Penthouse F-6",
          price: "PKR 95M",
          rating: 5,
          reviewCount: "8",
          imageSrc: "http://img.b2bpic.net/free-photo/attractive-woman-standing-with-coffee-near-window_7502-9288.jpg",
        },
        {
          id: "p3",
          brand: "US Builders",
          name: "Heritage Estate Phase 2",
          price: "PKR 210M",
          rating: 5,
          reviewCount: "15",
          imageSrc: "http://img.b2bpic.net/free-photo/romantic-villa-ephrussie-french-riviera-beauty-nature_1268-36319.jpg",
        },
        {
          id: "p4",
          brand: "US Builders",
          name: "Grand Skyline Tower",
          price: "PKR 80M",
          rating: 4,
          reviewCount: "22",
          imageSrc: "http://img.b2bpic.net/free-photo/analog-city-landscape-with-buildings-daylight_23-2149661425.jpg",
        },
        {
          id: "p5",
          brand: "US Builders",
          name: "Garden Retreat H-13",
          price: "PKR 65M",
          rating: 5,
          reviewCount: "9",
          imageSrc: "http://img.b2bpic.net/free-photo/neoclassical-pavilion-parc-del-laberint-de-horta_1398-2204.jpg",
        },
        {
          id: "p6",
          brand: "US Builders",
          name: "Vista Point Mansion",
          price: "PKR 185M",
          rating: 5,
          reviewCount: "11",
          imageSrc: "http://img.b2bpic.net/free-photo/low-angle-house-with-wooden-pieces_23-2148931503.jpg",
        },
      ]}
      title="Featured Luxury Listings"
      description="Explore our hand-picked selection of high-end homes and estates."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardSix
      textboxLayout="split"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "t1",
          name: "Sarah Ahmed",
          handle: "@sarah.a",
          testimonial: "The level of professionalism and the 3D walkthrough experience was absolutely game-changing. Highly recommend.",
          imageSrc: "http://img.b2bpic.net/free-photo/front-view-real-estate-agent-holding-tablet_23-2150225237.jpg",
        },
        {
          id: "t2",
          name: "Omar Khan",
          handle: "@omar.k",
          testimonial: "I have dealt with many property dealers, but US Builders provides an experience that is truly world-class.",
          imageSrc: "http://img.b2bpic.net/free-photo/smiley-business-man-outdoor_23-2148479594.jpg",
        },
        {
          id: "t3",
          name: "Zoya Malik",
          handle: "@zoya.m",
          testimonial: "Found my dream villa within weeks. Their curated selection and virtual tours made the process seamless.",
          imageSrc: "http://img.b2bpic.net/free-photo/serious-male-boss-instructing-female-assistant_1262-20385.jpg",
        },
        {
          id: "t4",
          name: "Imran Butt",
          handle: "@imran.b",
          testimonial: "Sophisticated, modern, and extremely reliable. Their team helped me navigate everything with total ease.",
          imageSrc: "http://img.b2bpic.net/free-photo/side-view-colleagues-chatting-work_23-2149622892.jpg",
        },
        {
          id: "t5",
          name: "Hina Khalid",
          handle: "@hina.k",
          testimonial: "A luxury experience that felt personal. They really understand the needs of high-net-worth clients.",
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-handsome-confident-stylish-hipster-lambersexual-modelmodern-man-dressed-white-shirt-trousers-fashion-male-posing-street-background-europe-city-sunset-sunglasses_158538-22386.jpg",
        },
      ]}
      title="Words of Excellence"
      description="Don't just take our word for it—hear from the elite clients who have experienced our unique approach."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqSplitMedia
      textboxLayout="split"
      useInvertedBackground={false}
      faqs={[
        {
          id: "q1",
          title: "What makes your properties premium?",
          content: "Our properties are curated based on architecture, location prestige, and ultra-modern amenities, ensuring lasting value.",
        },
        {
          id: "q2",
          title: "Do you offer virtual property tours?",
          content: "Yes, our immersive 3D virtual showroom allows you to walk through every property from the comfort of your home.",
        },
        {
          id: "q3",
          title: "Where are your offices located?",
          content: "Our headquarters are at Plaza 85-A, Burj Al Buraq Plaza, Pakistan Town Phase 2 Rd, Islamabad.",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/3d-rendering-loft-luxury-living-room-with-design-chandelier_105762-2226.jpg"
      mediaAnimation="slide-up"
      title="Common Inquiries"
      description="Have questions about our properties or the buying process? We’re here to help."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactText
      useInvertedBackground={false}
      background={{
        variant: "canvas-reveal",
      }}
      text="Ready to experience your next dream home? Connect with our dedicated luxury consultants today."
      buttons={[
        {
          text: "Call +92 312 5074233",
          href: "tel:+923125074233",
        },
        {
          text: "Message on WhatsApp",
          href: "https://wa.me/923125074233",
        },
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterMedia
      imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=02tmp0"
      logoText="US Real Estate & Builders"
      columns={[
        {
          title: "Properties",
          items: [
            {
              label: "Villas",
              href: "#",
            },
            {
              label: "Penthouses",
              href: "#",
            },
            {
              label: "Plots",
              href: "#",
            },
          ],
        },
        {
          title: "Company",
          items: [
            {
              label: "About Us",
              href: "#",
            },
            {
              label: "Careers",
              href: "#",
            },
            {
              label: "Contact",
              href: "#",
            },
          ],
        },
        {
          title: "Legal",
          items: [
            {
              label: "Privacy",
              href: "#",
            },
            {
              label: "Terms",
              href: "#",
            },
          ],
        },
      ]}
      copyrightText="© 2025 US Real Estate & Builders | Islamabad, Pakistan"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
