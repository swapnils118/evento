import H1 from "@/components/h1";
import Image from "next/image";

type EventPageProps = {
  params: {
    slug: string;
  };
};

export default async function EventPage({ params }: EventPageProps) {
  const slug = params.slug;
  const response = await fetch(
    `https://bytegrad.com/course-assets/projects/evento/api/events/${slug}`
  );
  const event = await response.json();

  console.log(event);
  return (
    <main>
      <section className="relative h-[361px] overflow-hidden">
        <Image
          src={event.imageUrl}
          className="object-cover blur-3xl z-0"
          alt="eventImage"
          fill
          quality={50}
          sizes="(max-width:1280px) 100vw,1280px"
          priority
        />
        <div className="z-1 relative">
          <Image
            src={event.imageUrl}
            alt={event.name}
            width={300}
            height={201}
          />

          <div>
            <H1>{event.name}</H1>
            <p>
              Organized by <span className="italic">{event.organizerName}</span>
            </p>
          </div>
        </div>
      </section>

      <div></div>
    </main>
  );
}
