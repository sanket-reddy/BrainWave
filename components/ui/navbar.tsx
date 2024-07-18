import {
  ClerkProvider,
  SignIn,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import Image from "next/image";

export default function NavBar() {
  return (
    <div className="w-full p-2 flex justify-between items-center ">
      {/* <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
      <h1>Navbar</h1> */}
      <div className="flex gap-2 text-2xl font-extrabold">
        <Image
          src="https://img.freepik.com/free-photo/colorful-design-with-spiral-design_188544-9588.jpg"
          height="1000"
          width="50"
          // className=" object-cover rounded-xl group-hover/card:shadow-xl"
          alt="thumbnail"
        />
        <h1>BrainWave</h1>
      </div>
      <div>
        <SignedOut>
          <button className="bg-white text-black rounded-md font-bold text-sm w-[100px] hover:bg-slate-200 p-2">
            <SignInButton />
          </button>
        </SignedOut>
        <SignedIn>
          <UserButton ></UserButton>
        </SignedIn>
      </div>
    </div>
  );
}
