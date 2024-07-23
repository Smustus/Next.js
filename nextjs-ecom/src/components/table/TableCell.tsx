import { ReactNode } from "react"

interface TableCellProps {
  children: ReactNode;
  className?: string;
}

const TableCell = ({children, className}: TableCellProps) => {

  return (
    <div className={className}>
      {children}
    </div>
  )
}

export default TableCell