import { works } from "@/app/data/works";

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function WorkPage({ params }: Props) {
  const { slug } = await params;

  const work = works.find((work) => work.slug === slug);

  if (!work) {
    return (
      <main className="container">
        <h1>Oops! Page does not exist.</h1>
      </main>
    );
  }

  return (
    <main className="container">
      <h1>{work.title}</h1>
    </main>
  );
}
