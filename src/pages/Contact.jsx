import { BiPhoneCall } from 'react-icons/bi';
import { FaBuilding, FaPhone, FaEnvelope } from 'react-icons/fa';

export default function Contact() {
    return (
        <section id='contact'>
            <div className="relative isolate bg-black">
                <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
                    <div className="px-6 pb-20 pt-24 sm:pt-32 lg:px-8 lg:py-48 lg:order-2">
                        <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
                            <h2 className="text-pretty text-4xl font-semibold tracking-tight text-white sm:text-5xl">Get in touch</h2>
                            <p className="mt-6 text-lg/8 text-gray-300">
                                I’d love to hear from you! Whether you have a question, an exciting project idea, or just want to chat and say hello, feel free to reach out. I’m always open to new opportunities, collaborations, and creative ventures. If you’re working on something interesting or have a challenge you'd like to solve, don’t hesitate to share it with me. I'm eager to connect, exchange ideas, and explore ways we can work together to bring something amazing to life. Your thoughts and feedback are always welcome, and I look forward to connecting with like-minded individuals who are passionate about making an impact.
                            </p>
                            <dl className="mt-10 space-y-4 text-base/7 text-gray-300">
                                <div className="flex gap-x-4">
                                    <dt className="flex-none">
                                        <span className="sr-only">Address</span>
                                        <FaBuilding className="h-7 w-6 text-gray-400" />
                                    </dt>
                                    <dd>
                                        New Delhi, 110089
                                        <br />
                                        India
                                    </dd>
                                </div>
                                <div className="flex gap-x-4">
                                    <dt className="flex-none">
                                        <span className="sr-only">Telephone</span>
                                        <BiPhoneCall className="h-7 w-6 text-gray-400" />
                                    </dt>
                                    <dd>
                                        <a href="tel:+91-7678413123" className="hover:text-white">
                                            +91-7678413123
                                        </a>
                                    </dd>
                                </div>
                                <div className="flex gap-x-4">
                                    <dt className="flex-none">
                                        <span className="sr-only">Email</span>
                                        <FaEnvelope className="h-7 w-6 text-gray-400" />
                                    </dt>
                                    <dd>
                                        <a className="hover:text-white">
                                            dev.aman.bhoria@gmail.com
                                        </a>
                                    </dd>
                                </div>
                            </dl>
                            <div className="mt-8">
                                <a
                                    href='https://tally.so/r/31DQ1p'
                                    target='_blank'
                                    type="button"
                                    className="rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                                >
                                    Contact Me
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
