import React from "react";
import { MapPin, Phone, Calendar } from "lucide-react";
import FloralDivider from "./FloralDivider";

const InvitationCard = () => {
  return (
    <div className="min-h-screen bg-gradient-elegant relative overflow-hidden">
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-5 bg-repeat"
        style={{
          backgroundImage: "url('/src/assets/pattern-bg.jpg')",
          backgroundSize: "400px 400px",
        }}
      ></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-8 md:py-12">
        <div className="max-w-4xl mx-auto">
          {/* Main Card */}
          <div className="bg-card/95 backdrop-blur-sm rounded-2xl shadow-elegant border-4 border-primary/20 overflow-hidden animate-scale-in">
            {/* Arabic Calligraphy Header */}
            <div className="bg-gradient-warm py-6 px-4 text-center">
              <div className="text-xl sm:text-2xl md:text-4xl text-primary-foreground font-serif mb-2 animate-fade-in">
                بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ
              </div>
              <p
                className="text-xs sm:text-sm md:text-base text-primary-foreground/90 italic animate-fade-in"
                style={{ animationDelay: "0.2s" }}
              >
                "In the name of Allah, the Beneficent, the Merciful!"
              </p>
            </div>

            {/* Blessing Text */}
            <div
              className="px-6 md:px-12 pt-6 md:pt-8 pb-2 md:pb-4 animate-fade-in-up"
              style={{ animationDelay: "0.3s" }}
            >
              <p className="text-center text-muted-foreground text-sm sm:text-base md:text-lg mb-4 leading-relaxed">
                May <span className="font-semibold">Allah</span> (SWT) guide
                these hearts towards a blessed future.
              </p>
            </div>

            {/* Guardianship */}
            <div
              className="px-6 md:px-12 animate-fade-in-up"
              style={{ animationDelay: "0.4s" }}
            >
              <div className="bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5 rounded-xl p-4 md:p-6 border-l-4 border-r-4 border-primary/30">
                <h3 className="text-center font-bold text-foreground text-sm sm:text-base md:text-xl mb-3 tracking-wide">
                  Under the Guardianship of
                </h3>
                <div className="text-center space-y-1">
                  <p className="text-primary font-bold text-sm sm:text-base md:text-lg">
                    Mr. & Mrs. Late Syed Basheeruddin Quadri
                  </p>
                  <p className="text-primary font-bold text-sm sm:text-base md:text-lg">
                    Mr. & Mrs. Late Mohammed Babu Patel
                  </p>
                </div>
              </div>
            </div>

            <FloralDivider />

            {/* Formal Invitation Header */}
            <div
              className="px-6 md:px-8 py-6 animate-fade-in-up"
              style={{ animationDelay: "0.5s" }}
            >
              <div className="bg-gradient-to-br from-card/70 to-card/30 backdrop-blur-lg rounded-3xl border border-primary/40 shadow-lg py-6 md:py-8 text-center">
                <h2 className="font-playfair text-xl sm:text-2xl md:text-3xl font-bold text-primary mb-2 tracking-wide">
                  Mrs. & Mr. Syed Sharfuddin Quadri
                </h2>
                <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto my-4"></div>
                <p className="font-cormorant text-md sm:text-lg md:text-xl text-muted-foreground italic">
                  Retd. TGRTC Department, SRD
                </p>
              </div>
            </div>
            {/* Centered Content Below Card */}
            <div className="max-w-2xl sm:max-w-3xl mx-auto text-center px-4">
              <div className=" bg-gradient-to-b from-muted/20 via-accent/5 to-transparent backdrop-blur-sm rounded-t-lg px-6 pt-6 sm:px-8 sm:pt-8 md:px-10 md:pt-10 relative overflow-hidden">
                {/* Heading */}
                <h3 className="text-xl sm:text-2xl md:text-4xl font-playfair font-bold text-foreground mb-3 sm:mb-4 md:mb-6">
                  Solicit your gracious presence
                </h3>
                <p className="text-sm sm:text-base md:text-xl font-cormorant text-muted-foreground italic mb-3 sm:mb-4">
                  on the auspicious occasion of the
                </p>
                <h2 className="text-2xl sm:text-3xl md:text-5xl font-cinzel font-bold text-primary tracking-wide mb-3 sm:mb-4 md:mb-6">
                  ENGAGEMENT CEREMONY
                </h2>
                <p className="text-xs sm:text-base md:text-xl font-cormorant text-foreground mb-2 sm:mb-4">
                  of our beloved son
                </p>
              </div>

              <div className="flex items-center justify-center">
                <div className="h-px w-16 bg-gradient-to-r from-transparent to-accent"></div>
                <div className="mx-4">
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    className="text-accent"
                  >
                    <path
                      d="M20 10 L22 18 L30 18 L24 23 L26 31 L20 26 L14 31 L16 23 L10 18 L18 18 Z"
                      fill="currentColor"
                      opacity="0.6"
                    ></path>
                  </svg>
                </div>
                <div className="h-px w-16 bg-gradient-to-l from-transparent to-accent"></div>
              </div>

              {/* Groom and Bride Section */}
              <div className="px-4 py-6 md:py-10 bg-gradient-to-b from-muted/20 via-accent/10 to-transparent animate-fade-in-up">
                <div className="inline-block relative">
                  <h1 className="font-great-vibes text-4xl sm:text-5xl md:text-7xl text-transparent bg-clip-text bg-gradient-warm px-4 py-4 animate-scale-in">
                    Syed Sultan Uddin Quadri
                  </h1>
                </div>

                <div className="flex items-center justify-center gap-4 my-6 md:my-10">
                  <div className="w-12 h-px bg-gradient-to-r from-transparent via-primary to-transparent"></div>
                  <p className="font-italiana text-lg sm:text-xl md:text-4xl text-accent">
                    with
                  </p>
                  <div className="w-12 h-px bg-gradient-to-l from-transparent via-primary to-transparent"></div>
                </div>

                {/* Bride */}
                <div className="bg-gradient-to-br from-accent/10 to-primary/10 backdrop-blur-sm px-6 md:px-12 py-4 md:py-6 rounded-2xl border border-primary/30 shadow-elegant inline-block">
                  <p className="font-cormorant text-lg md:text-xl text-foreground font-semibold mb-2 italic">
                    Daughter of
                  </p>
                  <p className="font-playfair text-xl md:text-3xl font-bold text-primary">
                    Mrs & Mr. Mohd Fayaq Patel
                  </p>
                </div>
              </div>
            </div>

            <FloralDivider />

            {/* Event Details */}
            <div className="px-6 md:px-12 pb-6 md:pb-8 animate-fade-in-up">
              {/* Date & Time */}
              <div className="bg-gradient-warm text-primary-foreground rounded-2xl p-6 md:p-8 mb-6 shadow-elegant text-center border-4 border-accent/30">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <Calendar className="w-6 h-6" />
                  <span className="font-cormorant text-base md:text-xl italic font-semibold">
                    Insha'Allah, on
                  </span>
                </div>

                <p className="font-cinzel text-xl sm:text-2xl md:text-4xl font-bold mb-2">
                  Sunday
                </p>
                <p className="font-playfair text-lg sm:text-xl md:text-3xl font-semibold">
                  November 23, 2025
                </p>
                <p className="font-cormorant text-md md:text-xl font-medium italic p-1">
                  2nd Jamadi-us-Sani 1447 Hijri
                </p>

                <p className="mt-4 bg-primary-foreground/20 rounded-full px-6 py-2 inline-block font-playfair text-lg md:text-2xl font-bold">
                  9:00 PM
                </p>
              </div>
              <div className="flex items-center justify-center mb-6">
                <div className="h-px w-16 bg-gradient-to-r from-transparent to-accent"></div>
                <div className="mx-4">
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    className="text-accent"
                  >
                    <circle cx="20" cy="20" r="3" fill="currentColor"></circle>
                    <circle
                      cx="20"
                      cy="20"
                      r="8"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="1"
                    ></circle>
                    <circle
                      cx="20"
                      cy="20"
                      r="15"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="0.5"
                      opacity="0.5"
                    ></circle>
                  </svg>
                </div>
                <div className="h-px w-16 bg-gradient-to-l from-transparent to-accent"></div>
              </div>

              {/* Venue */}
              <div className="bg-gradient-to-br from-card to-secondary/5 border border-secondary/40 rounded-2xl p-6 md:p-8 mb-6 shadow-elegant">
                <div className="flex flex-col md:flex-row items-center gap-4">
                  <MapPin className="w-8 h-8 md:w-10 md:h-10 text-secondary" />
                  <div className="text-center md:text-left">
                    <h3 className="font-cinzel text-lg md:text-3xl font-bold text-secondary tracking-wide">
                      SS Function Hall
                    </h3>
                    <p className="font-cormorant text-sm md:text-lg text-foreground leading-relaxed">
                      Near Al-Noor Complex, Opp. Salar-E-Millat Water Plant,
                      Tolichowki, Hyderabad
                    </p>
                  </div>
                </div>
              </div>

              {/* Contact */}
              <div className="text-center">
                <a
                  href="tel:9959540591"
                  className="bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 rounded-full px-6 py-3 inline-flex items-center gap-2 shadow-soft hover:shadow-elegant transition-all"
                >
                  <Phone className="w-5 h-5" />
                  <span className="font-bold text-base md:text-lg">
                    9959540591
                  </span>
                </a>
              </div>
            </div>

            {/* Footer Quote */}
            <div className="bg-gradient-to-r from-secondary/5 via-accent/5 to-secondary/5 py-4 md:py-8 text-center border-t-2 border-primary/20">
              <p className="font-cormorant text-sm md:text-lg italic">
                ✦ Your presence will add joy to our celebration ✦
              </p>
            </div>

            {/* Map Button */}
            <div className="mt-6 mb-6 text-center">
              <a
                href="https://maps.google.com/?q=SS+Function+Hall+Tolichowki+Hyderabad"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-gradient-warm text-primary-foreground px-6 md:px-10 py-3 md:py-5 rounded-full font-cinzel font-bold shadow-elegant hover:scale-105 transition"
              >
                <MapPin className="w-5 h-5 md:w-6 md:h-6" />
                Location
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvitationCard;
