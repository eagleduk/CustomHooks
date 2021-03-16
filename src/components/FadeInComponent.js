import useFadeIn from "../customHooks/useFadeIn";

const FadeInComponent = () => {
  const elementP = useFadeIn(1, 5);
  const elementH3 = useFadeIn(2, 10);
  return (
    <div>
      <h4>Fade In</h4>
      <p {...elementP}>Fade In P tag content</p>
      <h3 {...elementH3}>Fade In H3 tag content</h3>
    </div>
  );
};

export default FadeInComponent;
