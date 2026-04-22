/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", 
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

//form//

// 1. This keeps track of the form status (Sending, Success, or Error)
  const [status, setStatus] = useState("");

  // 2. This function runs when the user clicks "Send Message"
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);

    setStatus("SENDING"); // Visual feedback that the button was clicked

    const response = await fetch("https://formspree.io/f/xzdyrone", {
      method: "POST",
      body: data,
      headers: { 'Accept': 'application/json' }
    });

    if (response.ok) {
      setStatus("SUCCESS");
      form.reset(); // This clears the boxes so they are empty again
    } else {
      setStatus("ERROR");
    }
  };