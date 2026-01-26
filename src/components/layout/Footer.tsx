import { Link } from "react-router-dom";
import { Instagram, Facebook, Mail } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="section-padding container-wide">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex flex-col mb-6">
              <span className="font-serif text-2xl font-medium tracking-wide">
                ATLAGIĆ
              </span>
              <span className="label-text text-primary-foreground/70 text-[10px] tracking-[0.3em]">
                ARTE LEGNO
              </span>
            </div>
            <p className="body-regular text-primary-foreground/80 max-w-sm leading-relaxed">
              Where wood becomes art. Handcrafted with soul, designed for generations.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="label-text mb-6 text-primary-foreground/70">Navigation</h4>
            <ul className="space-y-3">
              {["Home", "About", "Blog", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                    className="body-regular text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-300 link-underline"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="label-text mb-6 text-primary-foreground/70">Connect</h4>
            <div className="flex gap-4 mb-6">
              <a
                href="#"
                className="p-2 border border-primary-foreground/30 hover:border-primary-foreground transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href="#"
                className="p-2 border border-primary-foreground/30 hover:border-primary-foreground transition-colors duration-300"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a
                href="mailto:hello@atlagic.com"
                className="p-2 border border-primary-foreground/30 hover:border-primary-foreground transition-colors duration-300"
                aria-label="Email"
              >
                <Mail size={18} />
              </a>
            </div>
            <p className="body-regular text-primary-foreground/60 text-sm">
              hello@atlagic-artelegno.com
            </p>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-primary-foreground/20 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-primary-foreground/60">
            © {new Date().getFullYear()} ATLAGIĆ — ARTE LEGNO. All rights reserved.
          </p>
          <p className="text-sm text-primary-foreground/60 italic">
            Crafted with patience and love for wood.
          </p>
        </div>
      </div>
    </footer>
  );
};
