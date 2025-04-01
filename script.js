async function purchase(item, price) {
    const email = prompt("Enter your email:");

    if (!email) {
        alert("Email is required!");
        return;
    }

    const response = await fetch('https://your-replit-server-url.repl.co/purchase', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, item, price })
    });

    const data = await response.json();
    alert(data.message);
}
