export default function About() {

    return (
        <div className="overflow-hidden">
            <div className="mt-10 sm:mt-0">
                <div className="md:grid md:grid-cols-3 md:gap-6">
                    <div className="md:col-span-1">
                        <div className="px-4 sm:px-0">
                            <h3 className="text-lg font-medium leading-6 text-gray-900">Personal Information</h3>
                            <p className="mt-1 text-sm text-gray-600">
                                Use a permanent address where you can receive mail.
                            </p>
                        </div>
                    </div>
                    <div className="mt-5 md:mt-0 md:col-span-2">
                        <form method="post" id="test-form">
                            <div className="col-span-6 sm:col-span-4">
                                <label htmlFor="email-address" className="block text-sm font-medium text-gray-700">Email address</label>
                                <input type="text" name="email-address" id="email-address" autoComplete="email" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"/>
                            </div>
                            <button className="trial-button btn form-btn item-block" type="submit">Call Me</button>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    );

}
