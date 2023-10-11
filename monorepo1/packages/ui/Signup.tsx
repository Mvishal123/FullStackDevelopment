export const Signup = ({ type }: { type: string }) => {
  return (
    <div style={{border: "1px solid black", width: 400, height:200, display: "flex", justifyContent: "center"}}>
      <div style={{padding: "4px 5px"}}>
        <h1 style={{fontSize: 30, padding: "0 0 20px 0"}}>Signin as {type}</h1>
        <div style={{display: "flex", flexDirection: "column", gap: 20}}>
          <input style={{border: "1px solid black", borderRadius: "5px", padding: "0 5px"}} type="text" placeholder="username" />
          <input style={{border: "1px solid black", borderRadius: "5px", padding: "0 5px"}} type="password" placeholder="password" />
        </div>
      </div>
    </div>
  );
};

