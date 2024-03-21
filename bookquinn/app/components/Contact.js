import Link from 'next/link';

const Contact = () => {
    return (
        <section id="contact" class="relative w-full bg-black text-red-500 p-3 bg-gradient-to-r from-fuchsia-500 to-cyan-500 h-screen">
            
            <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-red-800 h-32 w-full"></div>

            <div class="relative p-5 lg:px-20 flex flex-col md:flex-row items-center justify-center">
                <form action="#" class="w-full md:w-1/2 border border-red-500 p-6 bg-gray-900">
                    <h2 class="text-2xl pb-3 font-semibold">
                        Send Message
                    </h2>
                    <div>
                        <div class="flex flex-col mb-3">
                            <label for="name">Prénom et Nom</label>
                            <input
                                type="text" id="name"
                                class="px-3 py-2 bg-gray-800 border border-gray-900 focus:border-red-500 focus:outline-none focus:bg-gray-800 focus:text-red-500"
                                autocomplete="off"
                            ></input>
                        </div>
                        <div class="flex flex-col mb-3">
                            <label for="email">Email</label>
                            <input
                                type="text" id="email"
                                class="px-3 py-2 bg-gray-800 border border-gray-900 focus:border-red-500 focus:outline-none focus:bg-gray-800 focus:text-red-500"
                                autocomplete="off"
                            ></input>
                        </div>
                        <div class="flex flex-col mb-3">
                            <label for="message">Message</label>
                            <textarea
                                rows="4" id="message"
                                class="px-3 py-2 bg-gray-800 border border-gray-900 focus:border-red-500 focus:outline-none focus:bg-gray-800 focus:text-red-500"
                            ></textarea>
                        </div>
                    </div>
                    <div class="w-full pt-3">
                        <button type="submit" class="w-full bg-gray-900 border border-red-500 px-4 py-2 transition duration-50 focus:outline-none font-semibold hover:bg-red-500 hover:text-white text-xl cursor-pointer">
                            Envoyer
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default Contact;