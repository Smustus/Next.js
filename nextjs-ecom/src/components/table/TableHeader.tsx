import { ReactNode } from "react"

const TableHeader = ({children}: {children?: ReactNode}) => {
  return (
    <h3 className="">
      {children}
    </h3>
  )
}

export default TableHeader