type contactFormData = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

export const sendContactForm = async (data: contactFormData) => {
  try {
    const response = await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json",
        Accept: "application/json",
      },
    });

    if (!response.ok) {
      const errorMessage = await response.text(); // Capture the error message from the response
      throw new Error(`Failed to send message. Server error: ${errorMessage}`);
    }

    return response.json();
  } catch (error) {
    console.error("Error in sendContactForm:", error);
    throw error;
  }
};
