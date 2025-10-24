"use client";
import { useState } from 'react';
import emailjs from 'emailjs-com';
import { PlaceholdersAndVanishInput } from "@/components/ui/placeholders-and-vanish-input";

export function PlaceholdersAndVanishInputDemo() {
   const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const placeholders = [
    "Do you like this website",
    "lets make a project",
    "Feedback for me ??",
    "Who is Tyler Durden",
  ];

 const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  // Handle message input change
  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();

    // Check if message is not empty
    if (!message.trim()) {
      console.log("Message is empty");
      return;
    }

    const templateParams = {
      from_name: 'Website Visitor', // You can change this or make it dynamic
      to_name: 'Aryan Pachandi',
      message: message, // Use the actual message from state
      reply_to: 'pacchandiaryan@gmail.com', // Consider adding an email input field
    };

    // Replace with your actual EmailJS credentials
    emailjs.send(
      'service_uu2xqnr', // Replace with your EmailJS service ID
      'template_11dyi1s', // Replace with your EmailJS template ID
      templateParams,
      'T7qh_J_kRJSqmy1AvYjtf' // Replace with your EmailJS public key
    )
    .then((response) => {
      console.log('Email sent successfully:', response);
      setMessage(''); // Clear the input after successful send
      alert('Message sent successfully!');
    })
    .catch((error) => {
      console.error('Failed to send email:', error);
      alert('Failed to send message. Please try again.');
    });

    console.log("submitted:", message);
  };
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      onSubmit(e); // Trigger the form submission
    }
  };

  return (
    <div className="h-[60rem] flex flex-col justify-center items-center px-6">
      {/* <h2 className="mb-10 sm:mb-20 text-3xl sm:text-5xl font-bold text-center text-white">
        Share Your Thoughts with Me
      </h2> */}
      <h1>Share you Thoughts</h1>
      <form onSubmit={onSubmit} className="w-full max-w-xl space-y-6">
        {/* Email Input */}
        <input
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={handleEmailChange}
          onKeyDown={handleKeyDown} // Listen for Enter key press
          className="border border-gray-400 rounded-lg p-4 text-lg w-full focus:ring-2 focus:ring-blue-500"
        />
        {/* Message Input */}
        <textarea
          placeholder="Your Message"
          value={message}
          onChange={handleMessageChange}
          onKeyDown={handleKeyDown} // Listen for Enter key press
          className="border border-gray-400 rounded-lg p-4 text-lg w-full h-32 resize-none focus:ring-2 focus:ring-blue-500"
        />
      </form>
    </div>
  );
}
