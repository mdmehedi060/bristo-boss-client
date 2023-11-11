

const SectionTitle = ({heading,subHeading}) => {
    return (
        <div className="mx-auto md:w-4/12 text-center">
            <p className="text-yellow-600 mb-2">---{subHeading}---</p>
            <h3 className="text-4xl border-y-4 py-4 mb-5">{heading}</h3>
        </div>
    );
};

export default SectionTitle;