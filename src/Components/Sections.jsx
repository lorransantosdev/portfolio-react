export default function Sections({ background, positions, children }){

    return(
        <section className={`w-full min-w-80 sm:px-20 sm:py-40 sm:gap-5 
            px-5 py-20
        ${background} ${positions}`}>
            {children}
        </section>
    )
}