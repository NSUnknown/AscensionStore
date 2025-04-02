function generateCode() {
    return Math.random().toString(36).substring(2, 10).toUpperCase();
}

async function purchase(itemName, price) {
    let code = generateCode();

    // Save the code in the backend (Replit server)
    await fetch('https://replit.com/@dbberty/ascension-store-backend', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ item: itemName, code: code })
    });

    // Display the code
    document.getElementById('code-display').innerHTML = `<p>Your Code: <b>${code}</b></p><p>Open a Discord ticket to claim your reward.</p>`;

    // PayPal payment handling
    paypal.Buttons({
        createOrder: function(data, actions) {
            return actions.order.create({
                purchase_units: [{ amount: { value: price } }]
            });
        },
        onApprove: function(data, actions) {
            return actions.order.capture().then(function(details) {
                alert('Payment successful, check your code below.');
            });
        }
    }).render('body');
}
