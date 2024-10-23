import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import { SectionTitle } from "@/components/SectionTitle";
import { Benefits } from "@/components/Benefits";
import { Video } from "@/components/Video";
import { Testimonials } from "@/components/Testimonials";
import { Faq } from "@/components/Faq";

import { benefitOne, benefitTwo } from "@/components/data";

export default function Home() {
  return (
    <Container>
      <Hero />

      <SectionTitle
        preTitle="FinTrail Benefits"
        title="Why should you choose FinTrail?"
      >
        FinTrail simplifies financial management by automatically tracking expenses, seamlessly splitting bills, and providing real-time portfolio tracking for stocks and crypto—all in one secure, easy-to-use platform.
      </SectionTitle>

      <Benefits data={benefitOne} />
      <Benefits imgPos="right" data={benefitTwo} />

      {/* <SectionTitle
        preTitle="Watch a video"
        title="Discover how FinTrail works"
      >
        Learn how FinTrail can transform the way you manage your finances. A quick demo can show you how easy it is to stay on top of your expenses, investments, and more.
      </SectionTitle>

      <Video videoId="fZ0D0cnR88E" /> */}

      <SectionTitle
        preTitle="Testimonials"
        title="What our users are saying"
      >
        Hear from satisfied users who have improved their financial lives with FinTrail. Their experiences can help you understand the value we bring.
      </SectionTitle>

      <Testimonials />

      <SectionTitle preTitle="FAQ" title="Frequently Asked Questions">
        Have questions? Check out our FAQ section to learn more about how FinTrail works and how it can help you achieve financial clarity.
      </SectionTitle>

      <Faq />
      {/* <Cta /> */}
    </Container>
  );
}
