import flower from "../assets/flower-testimonial.jpg";

export default function Mission() {
  return (
    <>
      <main className="mission-container">
        <section className="image-wrapper">
          <img src={flower} alt="a white flower" />
          <span className="overlay-text"></span>
        </section>
        <section className="mission-statement">
          <h3>Mission Statement</h3>
          <p>
            {" "}
            I started making healing feels products because I couldn’t find
            anything out there like them. I was using multiple products for an
            effect that I knew I could make one do. All ingredients used are
            ethical and naturally made to ensure the best quality. Extensive
            research has been done to promise quality and transparency to make
            sure each ingredient is clean. None of the ingredients are tested on
            animals.
          </p>
        </section>
      </main>
    </>
  );
}
