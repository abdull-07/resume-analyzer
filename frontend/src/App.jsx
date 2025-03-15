import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";
import './App.css';

function App() {
  return (
    <>
      <header className="flex justify-between items-center p-4 bg-gray-800 text-white">
        <h1 className="text-3xl font-bold">WAres</h1>
        <nav>
          <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </nav>
      </header>

      <main className="p-6">
        <h2 className="text-xl text-blue-500">This is the home page.</h2>
      </main>
    </>
  );
}

export default App;
