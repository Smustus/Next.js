import { ReactNode } from "react"

interface TableHeaderProps {
  children?: ReactNode;
  className?: string;
}

const TableHeader = ({children, className}: TableHeaderProps) => {
  return (
    <h3 className={`text-base mx-1 ${className}`}>
      {children}
    </h3>
  )
}

export default TableHeader