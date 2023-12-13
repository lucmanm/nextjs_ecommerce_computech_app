const Container = ({children}:{children: React.ReactNode}) => {
    return ( 
        <section className="bg-white shadow-md rounded-md h-full p-2 border-x-2 border-x-blue-950">
            {children}
        </section>
     );
}
 
export default Container;