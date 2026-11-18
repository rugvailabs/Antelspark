import type { Metadata } from "next";

import { LegalPage } from "@/components/legal/legal-page";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Antelspark collects, uses and protects your information.",
};

export default function PrivacyPage() {
  return (
    <LegalPage title="Privacy Policy" updated="19 November 2026">
      <div>
        <p>
          This policy explains what information {siteConfig.name}
          (&quot;we&quot;, &quot;us&quot;) collects through this website, how
          we use it, and the choices you have. We keep it short because we
          collect little.
        </p>
      </div>

      <div>
        <h2>Information we collect</h2>
        <ul>
          <li>
            <strong className="text-ink">Contact form submissions</strong> —
            your name, email address, optional phone number, the service
            you&apos;re interested in, and your message. You provide these
            voluntarily so we can respond to your enquiry.
          </li>
          <li>
            <strong className="text-ink">Email correspondence</strong> —
            anything you send to {siteConfig.email} is retained as part of our
            normal business correspondence.
          </li>
          <li>
            <strong className="text-ink">Technical logs</strong> — like most
            websites, our hosting infrastructure records basic request data
            (IP address, browser type, pages requested) for security and
            reliability purposes.
          </li>
        </ul>
      </div>

      <div>
        <h2>How we use it</h2>
        <p>
          We use your information solely to respond to your enquiries, to
          provide services you engage us for, and to keep this website secure
          and working. We do not sell your personal information, and we do not
          use it for advertising.
        </p>
      </div>

      <div>
        <h2>Sharing</h2>
        <p>
          We share information only with service providers needed to operate
          this website and our email (such as hosting and email-delivery
          providers), and where the law requires it. Those providers process
          data on our behalf, not for their own purposes.
        </p>
      </div>

      <div>
        <h2>Retention</h2>
        <p>
          We keep enquiry correspondence for as long as needed to handle your
          request and maintain a record of our business relationship, after
          which it is deleted.
        </p>
      </div>

      <div>
        <h2>Your rights</h2>
        <p>
          You may ask us what personal information we hold about you, ask us
          to correct it, or ask us to delete it. Write to{" "}
          <a className="text-cobalt hover:underline" href={`mailto:${siteConfig.email}`}>
            {siteConfig.email}
          </a>{" "}
          and we&apos;ll respond promptly.
        </p>
      </div>

      <div>
        <h2>Changes</h2>
        <p>
          If this policy changes, we&apos;ll update this page and the date
          above. Questions are always welcome at{" "}
          <a className="text-cobalt hover:underline" href={`mailto:${siteConfig.email}`}>
            {siteConfig.email}
          </a>
          .
        </p>
      </div>
    </LegalPage>
  );
}
