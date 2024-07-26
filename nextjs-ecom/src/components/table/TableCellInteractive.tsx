"use client"
import { ReactNode } from "react"

interface TableCellProps {
  children: ReactNode;
  className?: string;
}

const TableCellInteractive = ({children, className}: TableCellProps) => {

  return (
    <div className={`text-xl mx-1 ${className}`}>
      {children}
    </div>
  )
}

export default TableCellInteractive;