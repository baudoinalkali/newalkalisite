import CombinedNavigation from "../components/Navigation/CombinedNavigation";

export default function ThankYou() {
    return (
        <div>
            <div className="bg-alkaligrey-200">
                <CombinedNavigation headerBackground="bg-alkaligrey-200" />
                <div className="py-20 pb-64 flex text-center justify-center z-20">
                    <div className="relative z-20">
                        <h1 className="text-alkaligrey-800 font-bold pt-5 text-5xl lg:text-6xl max-w-6xl">
                            Thank You!
                        </h1>
                        <p className="text-white py-10 text-alkaligrey-800 max-w-2xl m-auto text-xl lg:text-2xl">
                            Get in touch and let us know how we can help.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
