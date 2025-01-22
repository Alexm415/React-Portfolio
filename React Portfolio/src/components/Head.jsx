const styles = {
  head: {
    background: "#c2c2d6",
    justifyContent: "center",
    display: "flex",
  },
};

function Head() {
  return (
    <header style={styles.head} className="border-bottom  lh-1 py-2">
      <div className=" center">
        <h1 className="display-4 fw-normal text-body-emphasis">
          Welcome To My Portfolio!
        </h1>
      </div>
    </header>
  );
}
export default Head;
