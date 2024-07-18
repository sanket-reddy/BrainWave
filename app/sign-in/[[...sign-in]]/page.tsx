import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return <div className="min-h-screen flex items-center w-full justify-center">
      <SignIn />;
  </div>
  
}