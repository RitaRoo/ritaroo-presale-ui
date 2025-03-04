import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";

const launchTime = new Date("2025-03-05T13:26:00-05:00").getTime();

export default function Presale() {
  const [timeLeft, setTimeLeft] = useState(launchTime - Date.now());
  const [progress, setProgress] = useState(0);
  const totalSupply = 1000000;
  const soldTokens = 275000;

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(launchTime - Date.now());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setProgress((soldTokens / totalSupply) * 100);
  }, [soldTokens]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-4">
      <Card className="max-w-lg w-full p-6 text-center bg-gray-800 rounded-2xl shadow-lg">
        <h1 className="text-3xl font-bold mb-4">RitaRoo Presale</h1>
        <CountdownCircleTimer
          isPlaying
          duration={launchTime - Date.now() > 0 ? (launchTime - Date.now()) / 1000 : 0}
          colors={"#00FF00"}
          size={120}
          strokeWidth={8}
        >
          {({ remainingTime }) => (
            <span className="text-xl font-semibold">
              {remainingTime > 0 ? new Date(remainingTime * 1000).toISOString().substr(11, 8) : "LIVE NOW!"}
            </span>
          )}
        </CountdownCircleTimer>
        <p className="mt-4 text-lg">Join the future of blockchain pet business!</p>
        <div className="my-4">
          <Progress value={progress} className="w-full bg-gray-700 h-3 rounded-lg" />
          <p className="mt-2 text-sm">{soldTokens.toLocaleString()} / {totalSupply.toLocaleString()} Tokens Sold</p>
        </div>
        <WalletMultiButton className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-xl" />
        <Button className="mt-4 bg-green-500 hover:bg-green-600 py-2 px-4 rounded-xl text-lg">Buy Tokens</Button>
      </Card>
    </div>
  );
}
