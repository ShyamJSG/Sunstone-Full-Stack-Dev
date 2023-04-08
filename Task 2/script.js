function transferMoney() {
	var sender = document.getElementById("sender").value;
	var receiver = document.getElementById("receiver").value;
	var amount = document.getElementById("amount").value;

	if(sender === '' || receiver === '' || amount === '') {
		alert("Please fill in all fields");
	} else {
		alert("Transfer of " + amount + " has been successfully made from " + sender + " to " + receiver);
	}
}
