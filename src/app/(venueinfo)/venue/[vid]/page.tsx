import Image from "next/image";
import Link from "next/link";

type VenueDetail = {
  name: string;
  image: string;
  description: string;
};

const venueDetails = new Map<string, VenueDetail>([
  [
    "001",
    {
      name: "The Bloom Pavilion",
      image: "/assets/bloom.jpg",
      description:
        "A light-filled garden hall surrounded by seasonal flowers, ideal for weddings and receptions.",
    },
  ],
  [
    "002",
    {
      name: "Spark Space",
      image: "/assets/sparkspace.jpg",
      description:
        "A flexible creative studio built for launches, workshops and conferences.",
    },
  ],
  [
    "003",
    {
      name: "The Grand Table",
      image: "/assets/grandtable.jpg",
      description:
        "An elegant banquet hall with a long communal table for memorable private dinners.",
    },
  ],
]);

export default async function VenueDetailPage({
  params,
}: {
  params: Promise<{ vid: string }>;
}) {
  const { vid } = await params;
  const venue = venueDetails.get(vid);

  if (!venue) {
    return (
      <main className="min-h-screen bg-slate-50 px-6 py-10">
        <h1 className="text-3xl font-semibold text-slate-900">Venue not found</h1>
        <p className="mt-2 text-slate-600">No venue matches the id {vid}.</p>
        <Link href="/venue" className="mt-6 inline-block text-blue-700 underline">
          Back to all venues
        </Link>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-50 px-6 py-10">
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-8 rounded-xl bg-white p-8 shadow-lg md:flex-row md:items-start">
        <Image
          src={venue.image}
          alt={venue.name}
          width={320}
          height={240}
          className="rounded-lg object-cover"
        />
        <div>
          <h1 className="text-3xl font-semibold text-slate-900">{venue.name}</h1>
          <p className="mt-4 text-slate-600">{venue.description}</p>
          <Link href="/venue" className="mt-6 inline-block text-blue-700 underline">
            Back to all venues
          </Link>
        </div>
      </div>
    </main>
  );
}
