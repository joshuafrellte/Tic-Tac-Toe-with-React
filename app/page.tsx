function Square() {
  return (
    <button className='w-9 h-9 font-bold text-2xl border-1 border-gray-500 cursor-pointer hover:bg-gray-100'>1</button>
  )
}

export default function Board() {
  <>
    <div>
      <Square />
      <Square />
      <Square />
    </div>
    <div>
      <Square />
      <Square />
      <Square />
    </div>
    <div>
      <Square />
      <Square />
      <Square />
    </div>
  </>
}