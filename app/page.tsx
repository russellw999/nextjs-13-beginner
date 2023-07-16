'use client';
import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const [value, setValue] = useState('');
  const { push } = useRouter();

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    push(`/prediction/${value}`);
  }

 

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="p-4 shadow-md bg-white rounded-md">
        <div>
          <h1>Enter Your Name</h1>
        </div>
        <form>
          <input
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded text-black"
            placeholder="Type something..."
            />
            <button type="submit"
                  className="w-full py-2 px-4 bg-blue-500 hover:bg-blue-600
                     text-white font-semibold rounded-lg shadow-md 
                     focus:outline-none focus:ring-2 focus:ring-blue-400 
                     focus:ring-opacity-75"
            >Predict Data</button>
        </form>
      </div>
    </main>
  )
}
