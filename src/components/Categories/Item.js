const Item = (props) => {

  return (
    <div className="hover:bg-black/10 cursor-defualt flex flex-row h-[45px] mb-1 pl-3 items-center rounded-xl" >
      <div className="flex-1 select-none">
        {props.name}
      </div>
      <div className="hover:bg-black/10 select-none font-bold flex w-7 h-7 mr-3 justify-center items-center rounded-md align-middle">
        +
      </div>
    </div>
  )
}

export default Item
