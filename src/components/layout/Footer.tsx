import { Link } from "react-router-dom";
import { Instagram, Facebook, Mail } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="section-padding container-wide">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
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
              Gdje drvo postaje umjetnost. Ručno izrađeno s dušom, stvarano za generacije.
            </p>
          </div>

          <div>
            <h4 className="label-text mb-6 text-primary-foreground/70">Navigacija</h4>
            <ul className="space-y-3">
              {[
                { name: "Početna", path: "/" },
                { name: "O nama", path: "/about" },
                { name: "Blog", path: "/blog" },
                { name: "Kontakt", path: "/contact" },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="body-regular text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-300 link-underline"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="label-text mb-6 text-primary-foreground/70">Povežite se</h4>
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
                href="mailto:hello@atlagic-artelegno.com"
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

        <div className="mt-16 pt-8 border-t border-primary-foreground/20 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-primary-foreground/60">
            © {new Date().getFullYear()} ATLAGIĆ - ARTE LEGNO. Sva prava zadržana.
          </p>
          <p className="text-sm text-primary-foreground/60 italic">
            Izrađeno sa strpljenjem i ljubavlju prema drvetu.
          </p>
        </div>
      </div>
    </footer>
  );
};
