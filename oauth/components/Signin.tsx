import { useSession, signIn, signOut } from "next-auth/react";

const Signin = () => {
  const session = useSession();

  if (session.status === "loading") return <div></div>;

  if (session.data) {
    return (
      <>
        Signed in as {session.data.user?.email} <br />
        <button
          className="px-2 py-1 bg-slate-200 text-black rounded-lg"
          onClick={() => signOut()}
        >
          Sign out
        </button>
      </>
    );
  }
  return (
    <>
      Not signed in <br />
      <button
        className="px-2 py-1 bg-slate-200 text-black rounded-lg"
        onClick={() => signIn()}
      >
        Sign in
      </button>
    </>
  );
};
export default Signin;
