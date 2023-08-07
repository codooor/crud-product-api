import healingFeels from "../assets/healingFeelsOpa.png";

export default function Hero() {
  return (
    <>
      <section>
        <img
          src={healingFeels}
          alt="wave"
          style={{ width: "40vw", height: "80vh", borderRadius: "30px" }}
        />
      </section>
    </>
  );
}
