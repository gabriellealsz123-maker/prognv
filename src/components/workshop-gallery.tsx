import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";

const workshopPhotos = [
  {
    file: "07-fachada",
    caption: "Fachada da Pro GNV",
    alt: "Fachada da oficina Pro GNV com três veículos estacionados",
  },
  {
    file: "01-instalacao-porta-malas",
    caption: "Cilindro no porta-malas",
    alt: "Cilindro amarelo de GNV no porta-malas de um carro prata",
  },
  {
    file: "03-motor-instalacao",
    caption: "Componentes no motor",
    alt: "Compartimento do motor com componentes e mangueiras do kit GNV",
  },
  {
    file: "02-painel-comutador",
    caption: "Comutador no painel",
    alt: "Luzes verdes do comutador de GNV no console do carro",
  },
  {
    file: "04-peca-reparo",
    caption: "Detalhe de uma válvula",
    alt: "Válvula metálica com tampa vermelha na mão de um técnico",
  },
  {
    file: "05-instalacao-multiplos-cilindros",
    caption: "Instalação com três cilindros",
    alt: "Três cilindros amarelos montados no compartimento traseiro de um veículo",
  },
  {
    file: "06-tela-regulagem",
    caption: "Tela de regulagem",
    alt: "Computador mostrando o mapa de regulagem do sistema de GNV",
  },
  {
    file: "08-cilindro-cacamba",
    caption: "Cilindro na caçamba",
    alt: "Cilindro amarelo montado na caçamba de uma picape com a capota levantada",
  },
  {
    file: "09-instalacao-inferior",
    caption: "Instalação sob o veículo",
    alt: "Cilindros amarelos e suas cintas vistos por baixo do veículo",
  },
  {
    file: "10-cilindros-embalados",
    caption: "Cilindros na oficina",
    alt: "Cilindros amarelos protegidos por plástico bolha",
  },
  {
    file: "11-cilindro-picape",
    caption: "Detalhe na picape",
    alt: "Cilindro amarelo visto de perto na caçamba de uma picape",
  },
  {
    file: "12-instalacao-em-andamento",
    caption: "Instalação em andamento",
    alt: "Cilindro no porta-malas com ferramentas de instalação por perto",
  },
  {
    file: "13-porta-malas-reserva",
    caption: "Cilindro junto ao banco traseiro",
    alt: "Cilindro amarelo fixado no fundo de um porta-malas",
  },
];

export function WorkshopGallery() {
  const [api, setApi] = useState<CarouselApi>();
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (!api) return;

    const updateActive = () => setActive(api.selectedScrollSnap());
    updateActive();
    api.on("select", updateActive).on("reInit", updateActive);
    return () => {
      api.off("select", updateActive).off("reInit", updateActive);
    };
  }, [api]);

  return (
    <section id="galeria" className="scroll-mt-[72px] border-t border-pg-line bg-pg-surface py-16">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <h2 id="galeria-titulo" className="pg-h2 mb-6 sm:mb-8">
          Fotos da oficina
        </h2>
        <Carousel
          aria-labelledby="galeria-titulo"
          aria-roledescription="carrossel"
          opts={{
            loop: true,
            breakpoints: { "(prefers-reduced-motion: reduce)": { duration: 0 } },
          }}
          setApi={setApi}
        >
          <CarouselContent className="workshop-gallery-track ml-0">
            {workshopPhotos.map(({ file, alt }, index) => (
              <CarouselItem
                key={file}
                aria-hidden={active !== index}
                aria-label={`${index + 1} de ${workshopPhotos.length}`}
                aria-roledescription="foto"
                className="pl-0"
              >
                <div className="workshop-gallery-frame">
                  <img
                    src={`/oficina/${file}.jpg`}
                    srcSet={
                      file === "02-painel-comutador" || file === "04-peca-reparo"
                        ? undefined
                        : `/oficina/${file}-640.jpg 640w, /oficina/${file}.jpg 1152w`
                    }
                    sizes="(max-width: 639px) calc(100vw - 32px), (max-width: 1023px) calc(100vw - 48px), 960px"
                    alt={alt}
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="mt-4 flex items-center justify-between gap-4">
            <p
              aria-live="polite"
              aria-atomic="true"
              className="min-w-0 text-sm font-semibold text-zinc-100"
            >
              <span className="mb-1 block text-xs font-bold tabular-nums text-pg">
                {active + 1} de {workshopPhotos.length}
              </span>
              {workshopPhotos[active].caption}
            </p>
            <div className="flex shrink-0 gap-2">
              <CarouselPrevious
                aria-label="Foto anterior"
                className="pg-focus static size-11 translate-y-0 rounded-[12px] border-pg-line bg-pg-ink text-zinc-100 hover:border-pg hover:bg-pg-ink hover:text-pg"
              />
              <CarouselNext
                aria-label="Próxima foto"
                className="pg-focus static size-11 translate-y-0 rounded-[12px] border-pg-line bg-pg-ink text-zinc-100 hover:border-pg hover:bg-pg-ink hover:text-pg"
              />
            </div>
          </div>
        </Carousel>
      </div>
    </section>
  );
}
