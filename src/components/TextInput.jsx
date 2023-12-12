

const TextInput = ({label, placeholder, classname, value, setValue}) => {
  return (
    <div className={`flex flex-col space-y-1 w-full ${classname}`}>  {/* took classname inside and used ` ` to put some custom style */}
        <label for={label} className="font-semibold">{label}</label>
        <input type="text" 
          placeholder={placeholder} 
          className="p-3 border border-gray-400 border-solid rounded placeholder-gray-500" 
          id={label}
          value={value}
          onChange={(e)=>{setValue(e.target.value)}}
        />
    </div>
  )
}

export default TextInput