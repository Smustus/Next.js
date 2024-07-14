import { ReactNode } from "react"

const PageHeader = ({children}: {children: ReactNode}) => {
  return (
    <h1 className="p-4 text-2xl text-center shadow-lg">{children}</h1>
  )
}

export default PageHeader