export type ServicePageData = {
  slug: string;
  seoTitle: string;
  metaDescription: string;
  schemaName: string;
  serviceType: string[];
  areaServed: string[];
  hero: {
    badge: string;
    heading: string;
    headingAccent: string;
    sub: string;
    ctaPrimary: string;
    ctaSecondary: string;
    stats: { num: string; unit: string; label: string }[];
  };
  why: { tag: string; heading: string; desc: string; items: { heading: string; body: string }[] };
  services: { tag: string; heading: string; desc: string; items: { num: string; heading: string; body: string }[] };
  audience: { tag: string; heading: string; desc: string; list: string[] };
  process: { tag: string; heading: string; desc: string; steps: { num: string; heading: string; body: string }[] };
  contact: {
    tag: string;
    heading: string;
    body: string;
    location: string;
    fields: { name: string; label: string; type?: string; required?: boolean; textarea?: boolean }[];
  };
  footer: string;
};

const email = "hello@automationcyprus.com";
const phone = "+357 97 603083";
const phoneHref = "+35797603083";
export const contactBasics = { email, phone, phoneHref };

export const aiAgencyCyprus: ServicePageData = {
  slug: "ai-agency-cyprus",
  seoTitle: "AI Agency Cyprus | AI Solutions, Chatbots & Automation",
  metaDescription: "AI Agency Cyprus helps local businesses use artificial intelligence to save time, win more customers and grow. Free consultation. Nicosia, Limassol, Larnaca, Paphos and across Cyprus.",
  schemaName: "AI Agency Cyprus",
  serviceType: ["AI Strategy & Consulting", "AI Chatbots", "Business Process Automation", "AI Content & Marketing", "Document & Data Intelligence", "Custom AI Tools"],
  areaServed: ["Nicosia", "Limassol", "Larnaca", "Paphos", "Famagusta", "Protaras", "Ayia Napa", "Cyprus"],
  hero: {
    badge: "AI Agency Cyprus",
    heading: "Put AI to Work",
    headingAccent: "in Your Business.",
    sub: "AI Agency Cyprus helps companies across the island turn artificial intelligence into real results: faster service, smarter operations and more time for the work that grows your business. No hype, no jargon. Just practical AI that pays for itself.",
    ctaPrimary: "Book a Free AI Consultation",
    ctaSecondary: "Explore Our Services",
    stats: [
      { num: "100", unit: "+", label: "Hours Saved per Client Each Month" },
      { num: "1", unit: " Week", label: "Typical Time to Launch" },
      { num: "0", unit: "€", label: "Strategy Call" },
    ],
  },
  why: {
    tag: "Why Work With an AI Agency",
    heading: "AI Is Changing How Cyprus Does Business",
    desc: "Your competitors are already using AI to reply to customers faster, cut admin and make better decisions. The right partner helps you catch up, and get ahead, without hiring a tech team.",
    items: [
      { heading: "We Speak Business, Not Code", body: "We start with your goals, not the technology. Every solution we build is tied to a clear result: more leads, lower costs or fewer hours lost to admin." },
      { heading: "Local Team, Real Support", body: "We're based in Cyprus and work with Cyprus businesses. You get a team you can call, meet and rely on, not an overseas ticket system." },
      { heading: "Built Around Your Tools", body: "We work with the software you already use (Google Workspace, Microsoft 365, your CRM, booking system or online shop), so there's nothing new for your team to learn." },
    ],
  },
  services: {
    tag: "What We Do",
    heading: "AI Services for Cyprus Businesses",
    desc: "As a full-service AI agency in Cyprus, we cover everything from strategy to launch and ongoing support.",
    items: [
      { num: "01", heading: "AI Strategy & Consulting", body: "Not sure where AI fits? We review your business, find the biggest opportunities and give you a clear, prioritised roadmap." },
      { num: "02", heading: "AI Chatbots & Customer Assistants", body: "Smart assistants for your website, WhatsApp or Facebook that answer questions, take bookings and capture leads around the clock, in English, Greek, Russian and more." },
      { num: "03", heading: "Business Process Automation", body: "We connect your tools and remove the manual steps: data entry, follow-ups, invoicing and reporting handled without anyone lifting a finger." },
      { num: "04", heading: "AI Content & Marketing", body: "Product descriptions, social posts, email campaigns and SEO content produced faster with AI, always reviewed to match your brand voice." },
      { num: "05", heading: "Document & Data Intelligence", body: "AI that reads invoices, contracts and forms, pulls out the key details and files them in the right place." },
      { num: "06", heading: "Custom AI Tools", body: "Need something specific? We design and build tailored AI tools for your team, from internal knowledge assistants to smart quoting systems." },
    ],
  },
  process: {
    tag: "How We Work",
    heading: "Simple, Clear, Fast",
    desc: "Working with AI Agency Cyprus is straightforward. No long contracts, no surprises.",
    steps: [
      { num: "Step 1", heading: "Free Strategy Call", body: "Tell us about your business and your challenges. We'll show you where AI can make the biggest difference." },
      { num: "Step 2", heading: "Plan & Build", body: "We agree on a clear scope and price, then design, build and test your solution, usually within one to two weeks." },
      { num: "Step 3", heading: "Launch & Support", body: "We launch, train your team and keep improving the system as your business grows." },
    ],
  },
  audience: {
    tag: "Who We Help",
    heading: "Trusted by Businesses Across Cyprus",
    desc: "We work with companies of every size, from local shops to international firms with offices on the island.",
    list: [
      "Real Estate", "Legal & Accounting", "Hospitality & Tourism", "Forex & Financial Services",
      "Shipping & Logistics", "Healthcare & Clinics", "E-Commerce & Retail",
      "Construction & Property Development", "Marketing Agencies", "Education", "Restaurants & Food",
    ],
  },
  contact: {
    tag: "Get In Touch",
    heading: "Ready to See What AI Can Do for You?",
    body: "Talk to AI Agency Cyprus today. We'll give you honest advice on where AI fits your business, free and with no obligation.",
    location: "Nicosia, Limassol, Larnaca, Paphos, Famagusta, Protaras, Ayia Napa and all of Cyprus",
    fields: [
      { name: "name", label: "Your Name", required: true },
      { name: "email", label: "Email Address", type: "email", required: true },
      { name: "business", label: "Company Name" },
      { name: "message", label: "How can AI help your business?", textarea: true },
    ],
  },
  footer: "AI Solutions & Automation for Businesses across Cyprus. All rights reserved.",
};

export const aiHotelsTourism: ServicePageData = {
  slug: "ai-for-hotels-tourism-cyprus",
  seoTitle: "AI for Hotels & Tourism in Cyprus | Chatbots, Bookings & Guest Automation",
  metaDescription: "AI solutions for hotels, villas and tourism businesses in Cyprus. Multilingual guest chatbots, booking automation, review management and more. Free consultation in Limassol, Paphos, Ayia Napa and across Cyprus.",
  schemaName: "AI for Hotels & Tourism in Cyprus",
  serviceType: ["AI Guest Chatbot", "Booking Automation", "Pre-Arrival Messaging", "Review Management", "Pricing Insights", "Housekeeping Automation"],
  areaServed: ["Ayia Napa", "Protaras", "Paphos", "Limassol", "Larnaca", "Nicosia", "Famagusta", "Troodos", "Cyprus"],
  hero: {
    badge: "AI for Hotels & Tourism in Cyprus",
    heading: "More Direct Bookings. Happier Guests.",
    headingAccent: "Less Admin.",
    sub: "Cyprus welcomes millions of visitors every year, and every one of them expects fast answers, smooth bookings and a personal touch. AI Automation Cyprus builds AI solutions for hotels, holiday rentals and tourism businesses that handle guest communication around the clock, so your team can focus on hospitality.",
    ctaPrimary: "Get a Free Hotel AI Consultation",
    ctaSecondary: "See What AI Can Do",
    stats: [
      { num: "24/7", unit: "", label: "Instant Guest Replies" },
      { num: "10", unit: "+", label: "Languages Supported" },
      { num: "0", unit: "€", label: "Consultation Fee" },
    ],
  },
  why: {
    tag: "Why AI for Hospitality",
    heading: "Peak Season Shouldn't Mean Peak Stress",
    desc: "From May to October, your inbox, WhatsApp and booking channels never stop. Missed messages mean lost bookings, and overworked staff mean weaker guest reviews. AI takes the pressure off.",
    items: [
      { heading: "Never Miss a Booking Enquiry", body: "Guests from the UK, Israel, Germany or Poland message at all hours. An AI assistant replies instantly, in their language, and turns questions into confirmed reservations." },
      { heading: "Win More Direct Bookings", body: "Every booking through Booking.com or Expedia costs you commission. A smart website chatbot guides visitors to book direct, protecting your margins." },
      { heading: "Do More With a Seasonal Team", body: "Hiring and training seasonal staff is hard. AI handles the repetitive questions, so your front desk team can give real attention to guests in front of them." },
    ],
  },
  services: {
    tag: "What We Build",
    heading: "AI Solutions for Hotels, Villas & Tourism Businesses",
    desc: "Whether you run a beachfront resort in Ayia Napa, a boutique hotel in Limassol or a few holiday villas in Paphos, we build the right tools for your property.",
    items: [
      { num: "01", heading: "AI Guest Chatbot & Virtual Concierge", body: "A multilingual assistant on your website, WhatsApp and social media. It answers questions about rooms, facilities, transfers and local attractions, and takes bookings 24/7." },
      { num: "02", heading: "Booking & Reservation Automation", body: "Connect your website, PMS and channel manager so availability, confirmations and payment reminders flow automatically, with no double bookings and no manual updates." },
      { num: "03", heading: "Pre-Arrival & Upselling Messages", body: "Automatic welcome emails and WhatsApp messages before check-in, offering airport transfers, room upgrades, spa treatments, excursions and late check-out." },
      { num: "04", heading: "Review & Reputation Management", body: "AI monitors your reviews on Google, TripAdvisor and Booking.com, drafts personalised responses and flags problems before they become patterns." },
      { num: "05", heading: "Smart Pricing & Revenue Insights", body: "Track demand, competitor rates and occupancy trends, and get clear pricing suggestions for high season, low season and local events." },
      { num: "06", heading: "Operations & Housekeeping Automation", body: "Automated housekeeping schedules, maintenance requests and staff notifications triggered by check-ins and check-outs." },
    ],
  },
  audience: {
    tag: "Who We Work With",
    heading: "AI for Every Part of Cyprus Tourism",
    desc: "",
    list: [
      "Hotels & Resorts", "Boutique Hotels", "Holiday Villas & Apartments",
      "Airbnb & Short-Term Rental Managers", "Tour Operators & Excursion Companies", "Travel Agencies",
      "Car Rental Companies", "Restaurants, Beach Bars & Beach Clubs", "Wedding & Event Venues",
      "Diving, Water Sports & Boat Trips",
    ],
  },
  process: {
    tag: "How It Works",
    heading: "Ready Before the Season Starts",
    desc: "",
    steps: [
      { num: "Step 1", heading: "Free Discovery Call", body: "We look at how guests contact you today, where enquiries get lost and which tasks take up your team's time." },
      { num: "Step 2", heading: "We Build & Connect", body: "We set up your AI assistant and connect it to your website, booking engine and messaging channels, trained on your property's own information." },
      { num: "Step 3", heading: "Launch & Improve", body: "Your system goes live. We train your staff, monitor guest conversations and fine-tune everything as the season goes on." },
    ],
  },
  contact: {
    tag: "Get In Touch",
    heading: "Let's Get Your Property Ready for Next Season",
    body: "Tell us about your hotel or tourism business and we'll show you exactly where AI can save time and bring in more bookings. Free, no commitment.",
    location: "Ayia Napa, Protaras, Paphos, Limassol, Larnaca, Nicosia, Famagusta, Troodos and all of Cyprus",
    fields: [
      { name: "name", label: "Your Name", required: true },
      { name: "email", label: "Email Address", type: "email", required: true },
      { name: "business", label: "Property / Business Name" },
      { name: "business_type", label: "Type of Business (Hotel, Villa, Tour Operator…)" },
      { name: "message", label: "What would you like to improve?", textarea: true },
    ],
  },
  footer: "AI Solutions for Hotels & Tourism across Cyprus. All rights reserved.",
};
