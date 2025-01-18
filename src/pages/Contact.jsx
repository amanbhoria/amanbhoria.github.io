import React from 'react';

const Contact = () => {
    return (
        <section id="contact">
            <div className="bg-black py-24 sm:py-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl lg:mx-0">
                        <h2 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                            Contact Me
                        </h2>
                        <p className="mt-4 text-lg text-gray-400">
                            I’d love to hear from you! Whether you have a question, a project idea, or just want to say hi, feel free to reach out. I’m always open to new opportunities and collaborations.
                        </p>
                    </div>

                    <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
                        <form className="space-y-6">
                            <div className="rounded-md bg-white px-3 pb-1.5 pt-2.5 outline outline-1 -outline-offset-1 outline-gray-300 focus-within:outline focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                                <label htmlFor="name" className="block text-xs font-medium text-gray-900">
                                    Name
                                </label>
                                <input
                                    id="name"
                                    name="name"
                                    type="text"
                                    placeholder="Jane Smith"
                                    className="block w-full text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 sm:text-sm/6"
                                />
                            </div>
                            <div className="rounded-md bg-white px-3 pb-1.5 pt-2.5 outline outline-1 -outline-offset-1 outline-gray-300 focus-within:outline focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                                <label htmlFor="name" className="block text-xs font-medium text-gray-900">
                                    Email
                                </label>
                                <input
                                    id="email"
                                    name="email"
                                    type="text"
                                    placeholder="name@gmail.com"
                                    className="block w-full text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 sm:text-sm/6"
                                />
                            </div>
                            <div>
                                <label htmlFor="comment" className="block text-sm/6 font-medium text-white">
                                    Add your Message
                                </label>
                                <div className="mt-2">
                                    <textarea
                                        id="comment"
                                        name="comment"
                                        rows={4}
                                        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                        defaultValue={''}
                                    />
                                </div>
                            </div>
                            <div>
                                <button
                                    disabled
                                    type="submit"
                                    className="inline-flex items-center justify-center rounded-md bg-gray-500 px-6 py-3 text-white font-medium shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 sm:text-sm"
                                >
                                    Send Message
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
