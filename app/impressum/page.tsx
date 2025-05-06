export default function LegalPage() {
  return (
    <main className="max-w-3xl mx-auto py-16 px-6 space-y-12">
      <section>
        <h1 className="text-3xl font-bold mb-4">Impressum / Legal Notice</h1>

        <div className="space-y-6">
          <div>
            <h2 className="text-xl font-semibold">Angaben gemäß § 5 TMG</h2>
            <p>
              Manuel Fahrenholz
              <br />
              Am Maarhof 28
              <br />
              51145 Köln
              <br />
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold">Kontakt</h2>
            <p>
              Telefon: +49 (0) 1727284635
              <br />
              E-Mail: contact@mrbubbles-src.dev
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold">
              Redaktionell verantwortlich
            </h2>
            <p>
              Manuel Fahrenholz
              <br />
              Am Maarhof 28
              <br />
              51145 Köln
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold">Quelle</h2>
            <p>
              <a
                className="underline"
                href="https://www.e-recht24.de/impressum-generator.html"
                target="_blank"
                rel="noopener noreferrer">
                https://www.e-recht24.de/impressum-generator.html
              </a>
            </p>
          </div>
        </div>
      </section>

      <div className="mt-16 text-center">
        <a
          href="/impressum_www_mrbubbles_src_dev_de.pdf"
          download
          className="inline-block px-6 py-3 bg-primary text-white font-medium rounded hover:bg-primary/90 transition">
          Download des kompletten Impressums (PDF)
        </a>
      </div>

      <section>
        <h2 className="text-2xl font-bold mt-8 mb-4">Legal Notice (English)</h2>
        <p>This website is operated by:</p>
        <p>
          Manuel Fahrenholz
          <br />
          Am Maarhof 28
          <br />
          51145 Cologne, Germany
          <br />
          Email: contact@mrbubbles-src.dev
          <br />
          Phone: +49 (0) 1727284635
        </p>
        <p>
          Responsible for content according to § 55 Abs. 2 RStV: Manuel
          Fahrenholz
        </p>
      </section>
      <div className="mt-16 text-center">
        <a
          href="/impressum_www_mrbubbles_src_dev_de.pdf"
          download
          className="inline-block px-6 py-3 bg-primary text-white font-medium rounded hover:bg-primary/90 transition">
          Download full legal notice (PDF)
        </a>
      </div>
    </main>
  );
}
