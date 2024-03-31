import Script from "next/script";
import { FAQPage, WithContext } from "schema-dts";

const jsonLd: WithContext<FAQPage> = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Why should I get the best weather?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Because you can.",
      },
    }
  ],
  headline: "Strong Random Secrets and Password Generator",
  description:
    "Free online tool to generate random strings and passwords in various formats.",
  author: {
    "@type": "Person",
    name: "Daniel Weiner",
    url: "https://lucarestagno.com",
  },
  image: "",
  datePublished: "2023-12-10",
  dateModified: "2023-12-28",
};

export default function PasswordGeneratorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd),
        }}
      />
      {children}
    </>
  );
}