import "./SectionHero.scss";

const SectionHero = ({ imageSrc, title }) => {
  return (
    <section className="section-hero">
      <img
        className="section-hero__img"
        src={imageSrc}
        alt="background image"
      />
      <h2 className="section-hero__title">{title}</h2>
    </section>
  );
};

export default SectionHero;
