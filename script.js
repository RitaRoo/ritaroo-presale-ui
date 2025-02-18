function updateCountdown() {
    const endTime = new Date("2025-12-31T23:59:59Z").getTime();
    const now = new Date().getTime();
    const timeLeft = endTime - now;

    if (timeLeft < 0) {
        document.getElementById("countdown-timer").innerText = "Presale Ended";
        return;
    }
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
    document.getElementById("countdown-timer").innerText = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}
setInterval(updateCountdown, 1000);
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("buy-tokens").addEventListener("click", function() {
        alert("Redirecting to token purchase page...");
        window.location.href = "https://your-token-purchase-page.com";
    });
});
