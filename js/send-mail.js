const sendEmail = (event) => {
	event.preventDefault();
  
	var myHeaders = new Headers();
	myHeaders.append("Content-Type", "application/json");
  
	var formData = {
		name: document.getElementById("name").value,
		email: document.getElementById("email").value,
		subject: document.getElementById("subject").value,
		message: document.getElementById("message").value
	};
  
	var requestOptions = {
		method: 'POST',
		headers: myHeaders,
		body: JSON.stringify(formData),
		redirect: 'follow'
	};
  
	fetch("https://bloody002.pythonanywhere.com/send-emailx/", requestOptions)
		.then(response => response.text())
		.then(result => {
			console.log(result);
			alert("Your message has been sent successfully!");
			window.location.href = "thank-you.html";
		})
		.catch(error => {
			console.log('error', error);
			// Display an error message if there's an issue with sending the email
			alert("An error occurred while sending your message. Please try again later.");
		});
  }
  
  document.getElementById("contactForm").addEventListener("submit", sendEmail);


  const makeRequest = () => {
	const myHeaders = new Headers();
	myHeaders.append("Cookie", "csrftoken=EFiv6Hfov5Ked27bFpZWhjbHl78lXGZy");

	const requestOptions = {
	method: "GET",
	headers: myHeaders,
	redirect: "follow"
	};

	fetch("https://smartdoctor.onrender.com", requestOptions)
	.then((response) => response.text())
	.then((result) => console.log(result))
	.catch((error) => console.error(error));
  }

  