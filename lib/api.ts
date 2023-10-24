type contactFormData = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

export const sendContactForm = async (data: contactFormData) =>
  fetch("/api/contact", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-type": "application/json",
      Accept: "application/json",
    },
  }).then((res) => {
    if (!res.ok) throw new Error("Failed to send message");
    return res.json();
  });
