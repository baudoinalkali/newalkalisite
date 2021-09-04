const FAQContainer = (props) => {
    return (
        <div className="pt-4 pb-24 lg:py-24 max-w-7xl m-auto">
        <h2 className={`text-4xl md:text-5xl pb-7 lg:${props.titleLength} text-center font-bold m-auto leading-normal px-7`}>
          Frequently Asked Questions About Our {props.name} Solutions
        </h2>
        <div className="w-full px-4 pt-0 lg:pt-16">
          <div className="p-2 mx-auto bg-white rounded-2xl">
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-x-10 gap-y-10">
                {props.children}
            </div>
          </div>
        </div>
      </div>
    );
}

export default FAQContainer