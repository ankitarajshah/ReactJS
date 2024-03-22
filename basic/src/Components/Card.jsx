import profile from "../image/profile.jpeg";

export default function Card() {
  return (
    <>
      <div>
        <img src={profile} style={{ borderRadius: 50 }}></img>
        <h1>Jenny</h1>
        <p>Software Developer</p>
      </div>
    </>
  );
}
{
  /* <section>
  <div className="maincard">
    <div className="card">
      <Card />
    </div>
    <div className="card">
      <Card />
    </div>
    <div className="card">
      <Card />
    </div>
  </div>
</section> */
}
