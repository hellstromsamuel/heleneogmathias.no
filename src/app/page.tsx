import Link from "next/link";
import PageSection from "./components/ui/PageSection/page-section";
import PageSectionColumn from "./components/ui/PageSection/page-section-column";
import ICalLink from "./components/ICalLink";

export default function Home() {
  return (
    <div className="relative min-h-screen font-[family-name:var(--font-geist-sans)]">
      <header className="bg-white w-full flex items-center justify-center py-2 top-0 z-10 sticky">
        <h1 className="text-[2.2rem] md:text-[3rem] font-great-vibes text-black">
          Helene og Mathias
        </h1>
      </header>

      <main className="flex flex-col items-center space-y-8 px-2 mx-auto max-w-5xl text-xl">
        <img
          src="/forside.webp"
          alt="Helene og Mathias"
          className="w-full rounded-lg object-cover aspect-square md:aspect-video md:object-[0_20%]"
        />

        <div className="space-y-16 pb-8 md:pt-4">
          <PageSection title="VI GIFTER OSS">
            <PageSectionColumn>
              <p>
                <b> Lørdag 2. august 2025</b> gifter vi oss i Asak kirke i
                Halden klokken 14:00. Festen vil være i Gimle misjonshus fra
                klokken 17:00.
              </p>
              <p>Det er mulig å komme før og mingle for dem som ønsker det!</p>
              <div className="hidden md:block">
                <ICalLink />
              </div>
            </PageSectionColumn>
            <PageSectionColumn>
              <p>
                Ellers kan vi anbefale å kjøpe en is eller to på Halden brygge,
                se Fredriksten festning eller ta et bad! Er du god i frisbee,
                (eller tidsoptimist) rekker du kanskje en runde frisbeegolf i
                Østgaardskoen 🥏
              </p>
              <div className="md:hidden">
                <ICalLink />
              </div>
            </PageSectionColumn>
          </PageSection>

          <PageSection title="VIELSE">
            <PageSectionColumn>
              <p>Velkommen til åpen vielse i Asak kirke</p>
              <p>
                <b>Sted:</b> kart?
              </p>
              <p>
                <b>Tid:</b> 14:00
              </p>
            </PageSectionColumn>
            <PageSectionColumn>Kart</PageSectionColumn>
          </PageSection>

          <PageSection title="FEST">
            <PageSectionColumn>
              <p>
                Videre blir det feiring på Gimle misjonshus for familie og nære
              </p>
              <p>
                <b>Sted:</b> Asakveien 31, 1785 Halden
              </p>
              <p>
                <b>Tid:</b> 17:00
              </p>
            </PageSectionColumn>
            <PageSectionColumn>Kart</PageSectionColumn>
          </PageSection>

          <PageSection title="PRAKTISK INFO">
            <PageSectionColumn>
              <p>
                <b>
                  Vennligst si ifra til Helene (90120147) eller Mathias
                  (45136310) om du kommer, innen 01.05.25
                </b>
              </p>
              <p>
                Vil du bidra med tale eller underholdning kan du ta kontakt med
                våre toastmastere <b>Mika Olsen (46798892)</b> og{" "}
                <b>Jon Ole Bagstad (90160302)</b>.
              </p>
            </PageSectionColumn>
            <PageSectionColumn>
              <p>
                <b>Mat:</b> Har du allergier eller lignende kan du ta kontakt
                med <b>Helene (90120147)</b>. Om du ønsker å bake en kake eller
                ta med noe til kaffemat kan du ta kontakt med{" "}
                <b>Maria Neset (48030292)</b>. Det setter vi veldig pris på!
              </p>
              <p>
                <b>Kleskode:</b> Ta på deg noe du føler deg fin i!
              </p>
            </PageSectionColumn>
          </PageSection>

          <PageSection title="OVERNATTING">
            <PageSectionColumn>
              <p>
                Vi skal bo på <b>Thon Hotel Halden</b> (Langbrygga 1, 1767
                Halden)!
              </p>
              <p>
                Koselig om flere vil bo der og spise frokost sammen med oss, og
                kanskje ta et lite morgenbad??
              </p>
            </PageSectionColumn>
            <PageSectionColumn>
              <p>
                Eventuelt er det mulig å sjekke ut leiligheter til leie på
                Airbnb! Vi kjenner flere som leier ut her 🙂
              </p>
            </PageSectionColumn>
          </PageSection>

          <PageSection title="GAVER">
            <PageSectionColumn>
              <p>
                Gavelistene kan du finne her:{" "}
                <Link
                  className="underline text-blue-600"
                  href="https://onskelister.no/liste?id=63VSnHOwrxaagg6N3TvS"
                >
                  https://onskelister.no/liste?id=63VSnHOwrxaagg6N3TvS
                </Link>
              </p>

              <p>Eventuelt spør etter vår liste i en Kitchen-butikk</p>
            </PageSectionColumn>
            <PageSectionColumn>
              <p>
                Vi ønsker oss også gavekort på Kid, Tilbords, Hansen & Co og
                lignende, penger til bryllupsreise!
              </p>
              <p>
                <b>Kontonummer:</b> 1228.63.11480
              </p>
            </PageSectionColumn>
          </PageSection>
        </div>
      </main>
    </div>
  );
}
