import waveImage from "../assets/wave.jpg";

export default function Hero() {
  return (
    <>
      <section className="cotain">
        <img
          className="img-context"
          src={waveImage}
          alt="wave"
          style={{ width: "80vw", height: "80vh" }}
        />
      </section>
    </>
  );
}
