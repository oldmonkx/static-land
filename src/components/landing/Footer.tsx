const Footer = () => {
  return (
    <footer className="py-8 bg-primary border-t border-primary-foreground/10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-primary-foreground/70 text-sm">
          <div className="flex items-center gap-2">
            <span className="font-serif text-lg font-bold text-primary-foreground">Casa Dale</span>
          </div>
          <p>© {new Date().getFullYear()} Casa Dale. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-accent transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-accent transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
