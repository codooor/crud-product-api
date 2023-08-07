import waveImage from "../assets/wave.jpg";

export default function Hero() {
  return (
    <>
      <section>
        <img
          src={waveImage}
          alt="wave"
          style={{ width: "80vw", height: "80vh", borderRadius: "30px" }}
        />
      </section>
    </>
  );
}
