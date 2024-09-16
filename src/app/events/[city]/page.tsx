import EventsList from "@/components/events-list";
import H1 from "@/components/h1";
import { Suspense } from "react";
import Loading from "../loading";
import { capitalize } from "@/lib/utils";
import { Metadata } from "next";

type Props = {
  params: {
    city: string;
  };
};

export function generateMetaData({ params }: Props): Metadata {
  const city = params.city;
  return {
    title: city === "all" ? "All Events" : `Events is ${capitalize(city)}`,
  };
}

export default async function EventsPage({ params }: Props) {
  const city = params.city;

  return (
    <main className="flex flex-col items-center px-[20px] py-24 min-h-[110vh]">
      <H1 className="mb-28">
        {city === "all" && "All Events"}
        {city !== "all" && `Events in ${capitalize(city)}`}
      </H1>
      <Suspense fallback={<Loading />}>
        <EventsList city={city} />
      </Suspense>
    </main>
  );
}
