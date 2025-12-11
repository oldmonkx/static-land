import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { GraduationCap, Stethoscope, Building, TreePine, Briefcase } from 'lucide-react';
import SiteVisitForm from './SiteVisitForm';

const locationData = [
  {
    icon: Building,
    title: 'Premium Communities Nearby',
    items: [
      'BTR BY MAK PROJECTS',
      'KAVURI FOREST NEST',
      'VISHAL SANJIVINI',
      'RAMKY DISCOVERY CITY',
      'DSR (SRI SREENIVASA)',
      'MAK',
      'PRANEETH PRANAV REDFERN SQUARE VILLAS',
      'EIPL TREASURE TROVE',
      'FIVE ELEMENT SPACE',
      'VAMSIRAM',
      'SIGNATURE VILLAS',
    ],
  },
  {
    icon: GraduationCap,
    title: 'Schools Nearby',
    items: [
      'Manchester Global School',
      'Bashyam Blooms',
      'Sri Sri Academy',
      'Aga Khan Academy',
      'DPS AeroCity',
    ],
  },
  {
    icon: Stethoscope,
    title: 'Hospitals Nearby',
    items: [
      'Madhavanji Integrated Health City',
      'Sri Vijaya Sai Hospitals',
      'Kondeti Hospital',
      'Prime Care Super Speciality Hospital',
    ],
  },
  {
    icon: TreePine,
    title: 'Recreational Areas',
    items: [
      'RECREATIONAL HUB In future city',
      'GMR INTERCHANGE',
      'Retail outlet mall',
      'High-Street Restaurant',
      'PVR open air theatre',
      'WONDERLA AMUSEMENT PARK',
      'PULLELA GOPICHAND BADMINTON ACADEMY',
    ],
  },
  {
    icon: Briefcase,
    title: 'Employment Centres Nearby',
    items: [
      'E CITY - HFCL LIMITED',
      'E CITY - Radiant company',
      'E CITY - Premier Energies Photovoltaic pvt ltd',
      'Future City - Amazon Data Centre',
      'Future City - Young India skill University',
      'Future City - AI University',
      'Future City - Sports University',
      'Future City - Health University',
      'GMR Business Park',
      'World Trade Centre',
    ],
  },
];

const LocationSection = () => {
  return (
    <section className="py-20 md:py-28 bg-soft-gray relative overflow-hidden">
      {/* Nature SVG Background - Tree Ring Pattern */}
      <svg
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-[0.03]"
        viewBox="0 0 400 400"
        fill="none"
        stroke="hsl(var(--primary))"
        strokeWidth="0.5"
      >
        <circle cx="200" cy="200" r="190" />
        <circle cx="200" cy="200" r="170" />
        <circle cx="200" cy="200" r="150" />
        <circle cx="200" cy="200" r="130" />
        <circle cx="200" cy="200" r="110" />
        <circle cx="200" cy="200" r="90" />
        <circle cx="200" cy="200" r="70" />
        <circle cx="200" cy="200" r="50" />
        <circle cx="200" cy="200" r="30" />
      </svg>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-primary mb-4">
            Connected by Highway,<br />
            <span className="text-accent">Surrounded by Nature</span>
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto mt-4" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
          {/* Map */}
          <div className="rounded-2xl overflow-hidden shadow-lg border border-border/50">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d9703.8879322948!2d78.47855172227283!3d17.068010163807205!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1765361226561!5m2!1sen!2sin"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Casa Dale Location"
              className="grayscale hover:grayscale-0 transition-all duration-500"
            />
          </div>

          {/* Location Lists */}
          <div>
            <Accordion type="single" collapsible className="space-y-3">
              {locationData.map((category, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-card rounded-xl border border-border/50 px-6 overflow-hidden"
                >
                  <AccordionTrigger className="hover:no-underline py-5">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                        <category.icon className="w-5 h-5 text-accent" />
                      </div>
                      <span className="font-semibold text-primary text-left">
                        {category.title}
                      </span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pb-5">
                    <ul className="space-y-2 pl-14">
                      {category.items.map((item, idx) => (
                        <li key={idx} className="text-muted-foreground flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-accent rounded-full" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>

      </div>
      
      {/* Site Visit Form - Full width horizontal strip */}
      <SiteVisitForm source="Location Section" variant="horizontal" className="mt-16" />
    </section>
  );
};

export default LocationSection;
