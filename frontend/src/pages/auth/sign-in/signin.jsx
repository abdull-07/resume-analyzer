import { SignIn } from "@clerk/clerk-react";

function SignInPage() {
  return (
    <div className="flex justify-center items-center h-screen m-10">
      <SignIn />
    </div>
  );
}

export default SignInPage;
