import SectionProductCards from "../../../../widgets/sections/SectionProductCards/SectionProductCards";

import "./SectionOurBest.scss";

const SectionOurBest = ({ cardsLimit }) => {
  return (
    <section className="section-our-best">
      <h2 className="section-our-best__title">Our best</h2>
      <SectionProductCards cardsLimit={cardsLimit} />
    </section>
  );
};

export default SectionOurBest;
