import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Seo } from "@/components/seo/Seo";
import { SITE_NAME } from "@/lib/seo";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <>
      <Seo
        title={`Stranica nije pronađena | ${SITE_NAME}`}
        description="Tražena stranica ne postoji. Vratite se na početnu stranicu ATLAGIĆ - ARTE LEGNO."
        path={location.pathname}
        robots="noindex, nofollow"
      />
      <div className="flex min-h-screen items-center justify-center bg-muted">
        <div className="text-center">
          <h1 className="mb-4 text-4xl font-bold">404</h1>
          <p className="mb-4 text-xl text-muted-foreground">Tražena stranica nije pronađena</p>
          <a href="/" className="text-primary underline hover:text-primary/90">
            Nazad na početnu
          </a>
        </div>
      </div>
    </>
  );
};

export default NotFound;
