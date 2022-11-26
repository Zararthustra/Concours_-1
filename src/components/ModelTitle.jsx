export const ModelTitle = ({ color }) => {
  return (
    <header
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div className="modelTitle">
        <h1>Galaxy</h1>
        <h2 style={{ color }}>S22</h2>
      </div>
    </header>
  );
};
