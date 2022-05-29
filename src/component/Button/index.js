function CustomButton({type, text, onClick}) {
    return (
        <button type={type}
                onClick={() => onClick()}
                className="text-white bg-purple-800 hover:bg-purple-900 focus:ring-4
                    font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3">{text}</button>
    )
}

export default CustomButton