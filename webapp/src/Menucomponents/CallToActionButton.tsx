function CallToActionButton() {

  const handleClick = () =>{
    console.log("yeah man!");
  }

  return (
    <button 
      className="bg-green-500 text-white font-bold py-2 px-4 rounded hover:bg-red-700"
      onClick = {handleClick}
      >
        Start monitoring
    </button>
  )
}

export default CallToActionButton;