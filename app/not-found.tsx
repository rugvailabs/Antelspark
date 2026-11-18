import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="flex min-h-svh items-center">
      <Container className="pt-32 pb-20">
        <p className="eyebrow text-cobalt">Error 404</p>
        <h1 className="mt-6 font-display text-display-lg font-semibold text-ink">
          This page doesn&apos;t exist<span className="text-terracotta">.</span>
        </h1>
        <p className="mt-6 max-w-md text-lg leading-relaxed text-ink-soft">
          The page you&apos;re looking for may have been moved or is still
          under construction.
        </p>
        <div className="mt-10">
          <Button asChild size="lg">
            <Link href="/">
              <ArrowLeft aria-hidden />
              Back to home
            </Link>
          </Button>
        </div>
      </Container>
    </section>
  );
}
