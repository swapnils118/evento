import EventsList from "@/components/events-list";
import H1 from "@/components/h1";
import { Suspense } from "react";
import Loading from "../loading";
import { capitalize } from "@/lib/utils";
import { z } from "zod";

type Props = {
  params: {
    city: string;
  };
};
type EventsListProps = Props & {
  searchParams: { [key: string]: string | string[] | undefined };
};

const pageNumberSchema = z.coerce.number().int().positive().optional();

export default async function EventsPage({
  params,
  searchParams,
}: EventsListProps) {
  const city = params.city;
  // const page = searchParams.page || 1;
  // Validation With zod
  const parsedPage = pageNumberSchema.safeParse(searchParams.page);
  if (!parsedPage.success) {
    throw new Error("Invalid page number");
  }

  return (
    <main className="flex flex-col items-center px-[20px] py-24 min-h-[110vh]">
      <H1 className="mb-28">
        {city === "all" && "All Events"}
        {city !== "all" && `Events in ${capitalize(city)}`}
      </H1>
      <Suspense key={city + parsedPage.data} fallback={<Loading />}>
        <EventsList city={city} page={parsedPage.data} />
      </Suspense>
    </main>
  );
}
