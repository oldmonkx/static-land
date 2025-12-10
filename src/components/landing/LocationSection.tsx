import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { GraduationCap, Stethoscope, ShoppingBag, Building, MapPin } from 'lucide-react';

const locationData = [
  {
    icon: GraduationCap,
    title: 'Education Hubs',
    items: ['Coming soon...'],
  },
  {
    icon: Stethoscope,
    title: 'Healthcare',
    items: ['Coming soon...'],
  },
  {
    icon: ShoppingBag,
    title: 'Entertainment & Retail Hubs',
    items: ['Coming soon...'],
  },
  {
    icon: Building,
    title: 'Business, Tech & Industrial Hubs',
    items: ['Coming soon...'],
  },
  {
    icon: MapPin,
    title: 'Other Landmarks',
    items: ['Coming soon...'],
  },
];

const LocationSection = () => {
  return (
    <section className="py-20 md:py-28 bg-soft-gray">
      <div className="container mx-auto px-4">
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
    </section>
  );
};

export default LocationSection;
