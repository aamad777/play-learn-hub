import { createFileRoute } from "@tanstack/react-router";
import { Play, Camera, BookOpen, Sparkles } from "lucide-react";
import { KidCard } from "@/components/KidCard";
import { BottomNav } from "@/components/BottomNav";
import heroImage from "@/assets/hero-illustration.jpg";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background pb-28">
      <main className="mx-auto max-w-3xl px-4 pt-6 sm:pt-10">
        {/* Header */}
        <header className="mb-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="grid h-12 w-12 place-items-center rounded-2xl bg-sun">
              <Sparkles className="h-7 w-7 text-foreground" />
            </div>
            <div>
              <h1 className="font-heading text-2xl font-extrabold text-foreground">Little Explorers</h1>
              <p className="text-sm font-medium text-muted-foreground">Watch, look & learn</p>
            </div>
          </div>
        </header>

        {/* Hero */}
        <section className="mb-8 overflow-hidden rounded-[2rem] bg-card soft-shadow">
          <img
            src={heroImage}
            alt="Cute bear and rabbit playing under a smiling sun"
            className="w-full object-cover"
            width={1024}
            height={768}
          />
          <div className="px-6 py-6 text-center">
            <h2 className="font-heading text-3xl font-extrabold text-foreground sm:text-4xl">
              Hello, little explorer!
            </h2>
            <p className="mt-2 text-lg font-medium text-muted-foreground">
              Tap a big card to start the fun.
            </p>
          </div>
        </section>

        {/* Category grid */}
        <section className="grid grid-cols-1 gap-5 sm:grid-cols-3">
          <KidCard to="/videos" icon={Play} title="Watch Videos" color="sky" className="aspect-[4/3]" />
          <KidCard to="/photos" icon={Camera} title="See Photos" color="peach" className="aspect-[4/3]" />
          <KidCard to="/learn" icon={BookOpen} title="Play & Learn" color="mint" className="aspect-[4/3]" />
        </section>

        {/* Quick tip */}
        <div className="mt-8 rounded-3xl bg-sun/40 px-6 py-4 text-center">
          <p className="text-base font-semibold text-foreground">
            Grown-ups: everything here is safe for little ones.
          </p>
        </div>
      </main>

      <BottomNav />
    </div>
  );
}
