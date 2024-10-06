export default function TitlePages({ style, text, highlightText }) {
    return (
        <>
            <h1 className={style}>
                {text} <span className="text-purpleCostum">{highlightText}</span>
            </h1>
        </>
    );
}