const About = (props) => {
  return (
    <section>
      <h1>This is my About Page</h1>
      <h2 style={{textAlign:"center"}}>Learning Props</h2>
      {/* eslint-disable-next-line react/prop-types */}
      <h2>I am studying in {props.college} College</h2>
      <h3>Other Colleges: {props.clg1},{props.clg2}</h3>
    </section>
  );
};

export default About;