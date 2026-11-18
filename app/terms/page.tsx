import type { Metadata } from "next";

import { LegalPage } from "@/components/legal/legal-page";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "The terms that govern use of the Antelspark website.",
};

export default function TermsPage() {
  return (
    <LegalPage title="Terms of Service" updated="19 November 2026">
      <div>
        <p>
          These terms govern your use of this website, operated by{" "}
          {siteConfig.name}. By using the site you accept them. Work we
          undertake for clients is governed by separate written agreements,
          which take precedence over these terms for that work.
        </p>
      </div>

      <div>
        <h2>Use of this site</h2>
        <p>
          You may browse this site and use the contact facilities for
          legitimate enquiries. You agree not to misuse the site — including
          attempting to breach its security, scraping it at disruptive
          volumes, or submitting unlawful, deceptive or abusive content
          through our forms.
        </p>
      </div>

      <div>
        <h2>Content & intellectual property</h2>
        <p>
          The design, text and original graphics on this site belong to{" "}
          {siteConfig.name}. Client project names and marks referenced on this
          site belong to their respective owners and appear with permission.
          Third-party technology logos remain trademarks of their owners and
          indicate tools we work with, not endorsement.
        </p>
      </div>

      <div>
        <h2>No warranties</h2>
        <p>
          This site and its content are provided for general information. We
          work to keep it accurate and available, but it is provided &quot;as
          is&quot;, without warranties of any kind, and nothing on it
          constitutes a binding offer or professional advice for your
          specific situation.
        </p>
      </div>

      <div>
        <h2>Limitation of liability</h2>
        <p>
          To the fullest extent permitted by law, {siteConfig.name} is not
          liable for indirect or consequential loss arising from use of this
          website. Nothing in these terms limits liability that cannot be
          limited by law.
        </p>
      </div>

      <div>
        <h2>Links</h2>
        <p>
          Where this site links to external sites and services, we are not
          responsible for their content or practices.
        </p>
      </div>

      <div>
        <h2>Governing law</h2>
        <p>
          These terms are governed by the laws of India, and the courts of
          Hyderabad, Telangana have exclusive jurisdiction over disputes
          arising from them.
        </p>
      </div>

      <div>
        <h2>Contact</h2>
        <p>
          Questions about these terms:{" "}
          <a className="text-cobalt hover:underline" href={`mailto:${siteConfig.email}`}>
            {siteConfig.email}
          </a>
          .
        </p>
      </div>
    </LegalPage>
  );
}
