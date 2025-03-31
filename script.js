const codes = {
    item1: "CODE1234",
    item2: "CODE5678"
};

function purchase(item) {
    const code = codes[item];
    if (code) {
        alert(`You have purchased ${item}!\nYour code: ${code}`);
        sendEmail(code);
    } else {
        alert("Error: Code not available.");
    }
}

function sendEmail(code) {
    // Placeholder function, you’ll integrate email here
    alert(`An email with the code: ${code} has been sent to you.`);
}
