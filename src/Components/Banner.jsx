export default function Banner({ children }){

    return(
        <>
            <section className="flex items-center justify-center flex-col relative
            w-full min-w-80 h-screen 
            bg-black 
            px-4 sm:px-40 sm:py-60
            py-20"> 
                {children}
            </section>
        </>
    );
}