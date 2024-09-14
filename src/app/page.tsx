import H1 from "@/components/h1";
import SearchForm from "@/components/search-form";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center px- 3 pt-36 ">
      <H1>Find events around you</H1>
      <p className=" mb-12 mt-7 text-2xl lg:text-3xl opacity-75">
        Browse more than{" "}
        <span className="font-bold text-accent italic underline">
          10,000 events
        </span>{" "}
        around you
      </p>

      {/* <form onSubmit={handleSubmit} className="w-full sm:w-[580px]">
        <input
          className="w-full h-16 rounded-lg bg-white/[7%] px-6 outline-none ring-accent/50 focus:ring-2 focus:bg-white/10 transition"
          placeholder="Search events in any city..."
          spellCheck={false}
        />
      </form> */}
      <SearchForm />

      <section className="mt-4 flex gap-x-4 text-sm text-white/50 ">
        <p className="">Popular:</p>

        <div className="space-x-2 font-semibold">
          <Link href="/events/austin">Austin</Link>
          <Link href="/events/seattle">Seattle</Link>
        </div>
      </section>
    </main>
  );
}
