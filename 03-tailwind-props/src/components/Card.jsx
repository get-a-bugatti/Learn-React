function Card(props) {
 
    return (
    <div className="max-w-[220px] rounded-md shadow-md bg-black text-gray-100 mt-10">
        <img
        src="https://picsum.photos/301"
        alt=""
        className="object-cover object-center w-full rounded-t-md h-52 bg-gray-500"
        />
        <div className="flex flex-col justify-between p-4 space-y-5">
        <div className="space-y-1">
            <h2 className="text-xl font-semibold tracking-wide">{props.topic}</h2>
            <p className="text-gray-400 text-sm">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            </p>
        </div>
        <button
            type="button"
            className="flex items-center justify-center w-full p-2 text-sm font-semibold tracking-wide rounded-md bg-gray-800 text-gray-200"
        >
            {props.btnText || "Read more"}
        </button>
        </div>
    </div>
    );
}

export default Card