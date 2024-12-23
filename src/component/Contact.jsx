import React, { useState } from "react";
import axios from "axios";

const Contact = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        companyName: "",
        message: "",
    });

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [id]: value,
        }));
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(22222)
        try {
            console.log(formData)
            const response = await axios.post("http://localhost:5173/server/index.js", formData);
            console.log("Email sent:", response); 
        } catch (error) {
            console.error("Error sending email:", error);
        }
    };

    return (
        <section className="bg-gradient-to-b from-[--bg] to-gray-800 text-white py-20 px-4 sm:px-8">
            <div className="max-w-4xl mx-auto">
                <div className="text-center">
                    <h2 className="text-4xl font-bold mb-4">Let’s Talk</h2>
                    <p className="text-lg text-gray-300 mb-8 sm:px-16">
                        Ready to unlock the power of your data? I’m here to help! Contact me
                        for a free consultation and let’s explore together how we can
                        optimize your customer retention.
                    </p>
                </div>

                <div
                    className="max-w-5xl mx-auto bg-gradient-to-b from-[--form-bg] to-gray-900 p-8 rounded-lg shadow-md border-[0.7px] border-green-900 "
                >
                    <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-medium mb-2" htmlFor="firstName">
                                First name
                            </label>
                            <input
                                type="text"
                                id="firstName"
                                value={formData.firstName}
                                onChange={handleChange}
                                placeholder="Enter First name"
                                className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded text-white focus:outline-none focus:ring-2 focus:ring-green-500"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium mb-2" htmlFor="lastName">
                                Last name
                            </label>
                            <input
                                type="text"
                                id="lastName"
                                value={formData.lastName}
                                onChange={handleChange}
                                placeholder="Enter Last name"
                                className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded text-white focus:outline-none focus:ring-2 focus:ring-green-500"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium mb-2" htmlFor="email">
                                Email address
                            </label>
                            <input
                                type="email"
                                id="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Enter email address"
                                className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded text-white focus:outline-none focus:ring-2 focus:ring-green-500"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium mb-2" htmlFor="companyName">
                                Company name
                            </label>
                            <input
                                type="text"
                                id="companyName"
                                value={formData.companyName}
                                onChange={handleChange}
                                placeholder="Enter Company name"
                                className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded text-white focus:outline-none focus:ring-2 focus:ring-green-500"
                            />
                        </div>

                        <div className="md:col-span-2">
                            <label className="block text-sm font-medium mb-2" htmlFor="message">
                                Message
                            </label>
                            <textarea
                                id="message"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Right here..."
                                className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded text-white focus:outline-none focus:ring-2 focus:ring-green-500 h-32"
                            ></textarea>
                        </div>

                        <div className="md:col-span-2">
                            <button
                                type="submit"
                                className="bg-[--btn-bg] hover:bg-green-600 text-black font-medium px-6 py-3 rounded-lg transition-all"
                            >
                                Schedule a FREE 15-minute consultation call
                            </button>
                        </div>
                    </form>

                    <p className=" text-gray-400 mt-6">
                        <a
                            href="https://app.hubspot.com/signup-hubspot/marketing?"
                            className="underline text-green-600 hover:text-green-500 transition-all"
                        >
                            Create your own free forms
                        </a>{" "}
                        to generate leads from your website.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Contact;
