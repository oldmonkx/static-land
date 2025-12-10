const Footer = () => {
  return (
    <footer className="py-8 bg-primary border-t border-primary-foreground/10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-primary-foreground/70 text-sm">
          <div className="flex items-center gap-2"></div>
          <p>
            Disclaimer: This content is for informational purposes only and does not constitute an offer. Prices and
            availability are subject to change without notice. Images are for representation only. Personal information
            submitted via forms or email may be used to contact you regarding products and offers. We may retain
            submitted information to respond to inquiries. All Rights Reserved.
          </p>
          <br></br>
          <p>© {new Date().getFullYear()} Casa Dale. All rights reserved.</p>
          <div className="flex gap-6"></div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
