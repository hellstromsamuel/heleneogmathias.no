interface Props {
  title: string;
  children: React.ReactNode;
}

function PageSection({ title, children }: Props) {
  return (
    <section className="space-y-4">
      <h2 className="font-semibold text-3xl border-b pb-2">{title}</h2>
      <div className="grid md:grid-cols-2 gap-y-4 gap-x-12 pt-2">
        {children}
      </div>
    </section>
  );
}

export default PageSection;
