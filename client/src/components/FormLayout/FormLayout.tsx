import type { ReactNode } from "react"

export interface FormLayoutProps {
  children?: ReactNode
}

const FormLayout = ({ children }: FormLayoutProps) => {
  return <div className="h-screen w-screen flex flex-col justify-center items-center p-8">
    <form className="flex flex-col items-center justify-center p-8 size-fit gap-y-4 bg-[#292929] rounded-md">
      {children}
    </form>
  </div>
}

export default FormLayout