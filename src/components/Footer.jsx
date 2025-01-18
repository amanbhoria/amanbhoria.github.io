import { FaLinkedin } from "react-icons/fa6"

const navigation = {
    social: [
        {
            name: 'X',
            href: 'https://x.com/be_creative007',
            icon: (props) => (
                <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
                    <path d="M13.6823 10.6218L20.2391 3H18.6854L12.9921 9.61788L8.44486 3H3.2002L10.0765 13.0074L3.2002 21H4.75404L10.7663 14.0113L15.5685 21H20.8131L13.6819 10.6218H13.6823ZM11.5541 13.0956L10.8574 12.0991L5.31391 4.16971H7.70053L12.1742 10.5689L12.8709 11.5655L18.6861 19.8835H16.2995L11.5541 13.096V13.0956Z" />
                </svg>
            ),
        },
        {
            name: 'GitHub',
            href: 'https://github.com/amanbhoria',
            icon: (props) => (
                <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
                    <path
                        fillRule="evenodd"
                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                        clipRule="evenodd"
                    />
                </svg>
            ),
        },
        {
            name: 'LinkedIn',
            href: 'https://linkedin.com/in/amanbhoria',
            icon: (props) => (
                <FaLinkedin
                    {...props}
                    size={24}
                    className="text-gray-500 hover:text-gray-900 transition-colors duration-300"
                />
            ),
        },
    ],
}

export default function Example() {
    return (
        <footer className="bg-white">
            <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
                {/* <div className="mt-16 border-t border-gray-900/10 pt-8 sm:mt-20 lg:mt-24 lg:flex lg:items-center lg:justify-between">
                    <div>
                        <h3 className="text-sm/6 font-semibold text-gray-900">Subscribe to our newsletter</h3>
                        <p className="mt-2 text-sm/6 text-gray-600">
                            The latest news, articles, and resources, sent to your inbox weekly.
                        </p>
                    </div>
                    <form className="mt-6 sm:flex sm:max-w-md lg:mt-0">
                        <label htmlFor="email-address" className="sr-only">
                            Email address
                        </label>
                        <input
                            id="email-address"
                            name="email-address"
                            type="email"
                            required
                            placeholder="Enter your email"
                            autoComplete="email"
                            className="w-full min-w-0 rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:w-56 sm:text-sm/6"
                        />
                        <div className="mt-4 sm:ml-4 sm:mt-0 sm:shrink-0">
                            <button
                                type="submit"
                                className="flex w-full items-center justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Subscribe
                            </button>
                        </div>
                    </form>
                </div> */}
                <div className="mt-8 border-t border-gray-900/10 pt-8 md:flex md:items-center md:justify-between">
                    <div className="flex gap-x-6 md:order-2">
                        {navigation.social.map((item) => (
                            <a key={item.name} href={item.href} className="text-gray-600 hover:text-gray-800">
                                <span className="sr-only">{item.name}</span>
                                <item.icon aria-hidden="true" className="size-6" />
                            </a>
                        ))}
                    </div>
                    <p className="mt-8 text-sm/6 text-gray-600 md:order-1 md:mt-0">
                        &copy; {new Date().getFullYear()} Made with ❤️ by <b>Aman Bhoria</b>
                    </p>
                </div>
            </div>
        </footer>
    )
}
