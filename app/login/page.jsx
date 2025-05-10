"use client";
import { auth, provider, signInWithPopup } from "@/firebase/config";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();

  const handleLogin = async () => {
    await signInWithPopup(auth, provider);
    router.push("/dashboard");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-3xl font-bold mb-4">Login</h1>
      <button onClick={handleLogin} className="px-4 py-2 bg-blue-600 text-white rounded">Login with Google</button>
    </div>
  );
}
