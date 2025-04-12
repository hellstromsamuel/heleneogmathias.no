interface Props {
  children: React.ReactNode;
}

function PageSectionColumn({ children }: Props) {
  return <div className="space-y-4">{children}</div>;
}

export default PageSectionColumn;
