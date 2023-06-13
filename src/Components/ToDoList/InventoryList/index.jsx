export const InventoryList = ({children}) => {
  return (
    <div className="mt-10">
    <h3 className="text-sm font-medium text-gray-500">Added items</h3>
    <ul role="list" className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
        {children}
    </ul>
</div>
  )
}