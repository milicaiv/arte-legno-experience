import slika1 from "@/assets/portfolio/slika1-atl.png";
import slika2 from "@/assets/portfolio/slika2-atl.png";
import slika3 from "@/assets/portfolio/slika3-atl.png";
import slika4 from "@/assets/portfolio/slika4-atl.png";
import slika5 from "@/assets/portfolio/slika5-atl.png";
import slika6 from "@/assets/portfolio/slika6-atl.png";
import slika7 from "@/assets/portfolio/slika7-atl.png";
import slika8 from "@/assets/portfolio/slika8-atl.png";
import slika9 from "@/assets/portfolio/slika9-atl.png";

type PortfolioImage = {
  src: string;
  alt: string;
  title: string;
  category: string;
  objectPosition?: string;
};

export const brandSignature: PortfolioImage = {
  src: slika1,
  alt: "Ručno rezbarena drvena tabla sa logotipom Arte Legno",
  title: "Potpis brenda",
  category: "Identitet",
  objectPosition: "center center",
};

export const executiveWorkspace: PortfolioImage = {
  src: slika2,
  alt: "Radni sto i enterijer kancelarije izrađen od punog drveta",
  title: "Radni prostor po mjeri",
  category: "Enterijer",
  objectPosition: "center center",
};

export const kitchenBoard: PortfolioImage = {
  src: slika3,
  alt: "Ručno izrađena daska za serviranje i drveni nož blok u kuhinji",
  title: "Kuhinjski detalji",
  category: "Unikatni predmeti",
  objectPosition: "center center",
};

export const gardenBench: PortfolioImage = {
  src: slika4,
  alt: "Drvena klupa za baštu i stol na otvorenom",
  title: "Baštenski komad",
  category: "Eksterijer",
  objectPosition: "center center",
};

export const livingRoomInterior: PortfolioImage = {
  src: slika5,
  alt: "Dnevni boravak sa tamnim sofama i drvenim klub stolovima",
  title: "Toplina doma",
  category: "Ambijent",
  objectPosition: "center center",
};

export const kitchenShelving: PortfolioImage = {
  src: slika6,
  alt: "Kuhinjski enterijer sa drvenim policama i ostrvom",
  title: "Savremena kuhinja",
  category: "Namještaj po mjeri",
  objectPosition: "center center",
};

export const mediaConsole: PortfolioImage = {
  src: slika7,
  alt: "Drveni TV element u savremenom stanu",
  title: "TV konzola",
  category: "Dnevni prostor",
  objectPosition: "center center",
};

export const houseBed: PortfolioImage = {
  src: slika8,
  alt: "Bijeli dječiji krevet u obliku kuće sa fiokama",
  title: "Dječiji krevet",
  category: "Po mjeri",
  objectPosition: "center center",
};

export const carvedIcon: PortfolioImage = {
  src: slika9,
  alt: "Duborez ikone svetitelja u toplom ambijentu",
  title: "Duborez",
  category: "Sakralna umjetnost",
  objectPosition: "center center",
};

export const portfolioImages: PortfolioImage[] = [
  brandSignature,
  executiveWorkspace,
  kitchenBoard,
  gardenBench,
  livingRoomInterior,
  kitchenShelving,
  mediaConsole,
  houseBed,
  carvedIcon,
];
