export function Banner({title, subtitle, type}) {
    return (
        <div className={`${setBackground(type)} h-[330px] bg-cover text-center flex justify-center items-center`}>
            <div>
                <h1 className="font-bold text-5xl">{title}</h1>
                <p className="max-w-96">{subtitle}</p>

            </div>
        </div>
    );
    }

function setBackground(type) {
    switch (type) {
        case "home":
            return "bg-home";
        case "series":
            return "bg-series";
        case "filmes":
            return "bg-filmes";
        default:
            return "bg-home";
    }
}