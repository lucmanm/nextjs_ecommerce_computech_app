import { Separator } from "@/components/ui/separator";

type ContainerProps = {
    children: React.ReactNode
    title: string
}

const Container: React.FC<ContainerProps> = ({children, title}) => {
    return ( 
        <section className="bg-white shadow-md rounded-md h-full p-2 border-y-2 border-y-blue-950">
            <div className="font-bold text-base">{title}</div>
            <Separator />
            {children}
        </section>
     );
}
 
export default Container;