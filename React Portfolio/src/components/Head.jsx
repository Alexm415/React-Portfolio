import img4 from "../../../images/Front-images/3.jpeg";
const styles = {
  head: {
    backgroundImage: `url(${img4})`,
    justifyContent: "center",

    height: 150,
  },
  text: {
    justifyContent: "center",
    display: "flex",
  },
};

function Head() {
  return (
    <header style={styles.head} className="border-bottom  lh-1 py-2">
      <div style={styles.text} className=" center">
        <h1 className="display-4 fw-normal text-body-emphasis">Welcome</h1>
      </div>
    </header>
  );
}
export default Head;
