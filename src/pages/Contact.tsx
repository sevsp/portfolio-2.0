import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FaCheck } from "react-icons/fa";

function Contact() {
    const form = useRef<HTMLFormElement>(null);
    const [isSending, setIsSending] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!form.current) return;

        setIsSending(true);
        emailjs
            .sendForm(
                "service_qe0q1yj",
                "template_q3de50s",
                form.current,
                "08PenjQKzCiK23aas"
            )
            .then(() => {
                setIsSending(false);
                setIsSuccess(true);
                form.current?.reset();


                setTimeout(() => {
                    setIsSuccess(false);
                }, 3000);
            })
            .catch((error) => {
                setIsSending(false);
                console.error("Failed to send:", error);
                alert("Something went wrong, please try again.");
            });
    };

    return (
        <section id="contact" className="flex flex-col items-center mt-20 px-4">
            <h2 className="text-secundary mb-10 text-3xl font-bold">Get in Touch</h2>

            <div className="bg-card w-full max-w-md p-6 rounded-lg border border-borderGrey">
                <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-4">
                    {/* Name */}
                    <div className="flex flex-col">
                        <label htmlFor="name" className="text-white mb-1">Name</label>
                        <input
                            name="user_name"
                            type="text"
                            id="name"
                            placeholder="Your name"
                            required
                            className="bg-black border border-borderGrey rounded px-4 py-2 text-white outline-none focus:ring-2 focus:ring-white/20"
                        />
                    </div>

                    {/* Email */}
                    <div className="flex flex-col">
                        <label htmlFor="email" className="text-white mb-1">Email</label>
                        <input
                            name="user_email"
                            type="email"
                            id="email"
                            placeholder="your@email.com"
                            required
                            className="bg-black border border-borderGrey rounded px-4 py-2 text-white outline-none focus:ring-2 focus:ring-white/20"
                        />
                    </div>

                    {/* Message */}
                    <div className="flex flex-col">
                        <label htmlFor="message" className="text-white mb-1">Message</label>
                        <textarea
                            name="message"
                            id="message"
                            rows={5}
                            placeholder="Write your message here..."
                            required
                            className="bg-black border border-borderGrey rounded px-4 py-2 text-white outline-none resize-none focus:ring-2 focus:ring-white/20"
                        />
                    </div>

                    {/* Button */}
                    <button
                        type="submit"
                        disabled={isSending}
                        className={`py-2 rounded flex justify-center items-center gap-2 font-semibold transition-all duration-1500 ease-in-out
                        ${isSuccess
                                ? "bg-green-600 text-white"
                                : "bg-white text-black hover:bg-gray-200"}
                        ${isSending ? "opacity-50 cursor-not-allowed" : ""}
                        `}
                    >
                        {isSuccess ? (
                            <>
                                <FaCheck /> Sent!
                            </>
                        ) : (
                            "Send Message"
                        )}
                    </button>
                </form>
            </div>
        </section>
    );
}

export default Contact;
