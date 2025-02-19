document.addEventListener("DOMContentLoaded", async () => {
    const connectWalletButton = document.getElementById("connect-wallet");
    const buyTokensButton = document.getElementById("buy-tokens");

    let provider = null;
    let walletAddress = null;

    async function connectWallet() {
        if (window.solana && window.solana.isPhantom) {
            provider = window.solana;
            try {
                const response = await provider.connect();
                walletAddress = response.publicKey.toString();
                console.log("Connected to wallet:", walletAddress);
                connectWalletButton.innerText = "Wallet Connected";
                connectWalletButton.disabled = true;
                buyTokensButton.disabled = false; // Enable buy button after connection
            } catch (err) {
                console.error("Wallet connection failed", err);
            }
        } else {
            alert("Solana wallet not found. Please install Phantom or another compatible wallet.");
        }
    }

    async function buyTokens() {
        if (!walletAddress) {
            alert("Please connect your wallet first.");
            return;
        }

        const transaction = new web3.Transaction();
        // TODO: Implement smart contract interaction for token purchase

        alert("Token purchase function will be implemented when smart contract is live.");
    }

    connectWalletButton.addEventListener("click", connectWallet);
    buyTokensButton.addEventListener("click", buyTokens);
});
