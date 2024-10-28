import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";

export default function SearchBox() {
  const [searchValue, setSearchValue] = useState<string>("")
  const [isShowClearBtn , setIsShowClearBtn] = useState<boolean>(false)

  const onChangeSearchValue = (event: React.ChangeEvent<HTMLInputElement>):void=>{
    setSearchValue(event.target.value)
  }

  useEffect(()=>{
    if(searchValue !== ""){
       setIsShowClearBtn(true)
    }else{
      setIsShowClearBtn(false)
    }
  },[searchValue])

  const clearSearchValue = ():void=>{
    setSearchValue("")
  }

  return (
    <>
      <div className="w-full h-[14rem]  bg-gradient-to-r from-blue-700 to-teal-400 flex flex-col justify-center items-center">
        <div className="flex flex-col gap-5 justify-center items-center max-w-lg w-full">
          <h1 className="text-4xl lg:text-5xl font-bold text-white">
            Search For products
          </h1>
          <div className="w-full h-12 rounded-full pr-3 flex items-center bg-slate-100 gap-3 ">
            <div className="h-full rounded-l-full bg-blue-700 p-4 flex items-center">
              <FaSearch color="white" />
            </div>
            <input
              type="text"
              className="h-full w-full bg-transparent border-none outline-none text-xl"
              value={searchValue}
              onChange={onChangeSearchValue}
              placeholder="Search products"
            />
             {isShowClearBtn && (
            <button
              onClick={clearSearchValue}
              className="p-2 hover:bg-slate-200 rounded-full transition-all"
              aria-label="Clear search"
            >
              <FaXmark />
            </button>
          )}
          </div>
        </div>
      </div>
    </>
  );
}