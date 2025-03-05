import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-8">
      <main className="flex flex-col items-center text-center gap-6">
        <h1 className="text-4xl font-bold">🚀 RitaRoo Presale is LIVE! 🚀</h1>
        <p className="text-lg">Join the future of blockchain pet business.</p>

        {/* Countdown Timer */}
        <div className="bg-gray-800 p-4 rounded-xl">
          <p className="text-xl">⏳ Presale Ends In:</p>
          <p className="text-3xl font-bold">TBA</p>
        </div>

        {/* Buy Tokens Section */}
        <div className="bg-gray-800 p-6 rounded-xl shadow-lg">
          <h2 className="text-2xl font-semibold">Buy $RITAROO Tokens</h2>
          <p className="text-sm text-gray-400">Secure your spot in the future of pet blockchain.</p>
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-xl mt-4">
            Connect Wallet
          </button>
        </div>

        {/* Footer */}
        <footer className="mt-8 text-gray-400 text-sm">
          <p>Powered by Vercel & Web3</p>
        </footer>
      </main>
    </div>
  );
}