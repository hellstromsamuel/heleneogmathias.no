interface Props {
  srcQuery: string;
}

function MapsIframe({ srcQuery }: Props) {
  return (
    <iframe
      width="100%"
      height="300"
      style={{ border: "0", borderRadius: "10px" }}
      loading="lazy"
      src={`https://www.google.com/maps/embed/v1/place?q=${srcQuery}&key=${process.env.GOOGLE_API_KEY}`}
    />
  );
}

export default MapsIframe;
