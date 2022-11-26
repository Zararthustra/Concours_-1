export const ModelTitle = ({ color, selectedStorage }) => {
  return (
    <div className="modelTitle">
      <div
        style={{
          width: "7px",
          height: "4rem",
          backgroundColor: color,
          marginTop: ".4rem",
          transition: "all .5s",
        }}
      />
      <div>
        <h1>Galaxy S22</h1>
        <p>{selectedStorage === 128 ? "599.00 €" : "649.00 €"}</p>
      </div>
    </div>
  );
};
