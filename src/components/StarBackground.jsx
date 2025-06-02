import { useEffect, useState } from "react"


export const StarBackground = () => {
    const [stars, setStars] = useState(null) // Inicializa con null para evitar un render inicial con 'undefined'
    const [meteors, setMeteors] = useState(null) // Inicializa con null

    useEffect( ()=>{
        generateStars();
        generateMeteors();
    }, [] ) // Este efecto se ejecuta solo una vez al montar el componente

    // Función para generar las propiedades de las estrellas
    const generateStars = () => {
        // Calcula el número de estrellas en función del tamaño de la ventana.
        // Asegura que siempre haya al menos una estrella para evitar 0.
        const numberOfStars = Math.max(1, Math.floor(window.innerWidth * window.innerHeight / 10000));

        const newStars =[]
        for (let i = 0; i<numberOfStars; i++){
            newStars.push({
                id:i, // Un ID único para la estrella
                size: Math.random() * 3 + 1, // Tamaño aleatorio entre 1px y 4px
                x: Math.random() * 100, // Posición horizontal aleatoria (0% a 100% del ancho de la ventana)
                y: Math.random() * 100, // Posición vertical aleatoria (0% a 100% de la altura de la ventana)
                opacity: Math.random() * 0.5 + 0.5, // Opacidad aleatoria (entre 0.5 y 1.0)
                animationDuration: Math.random() * 4 + 2, // Duración de la animación aleatoria (entre 2s y 6s)
            })
        }
        setStars(newStars) // Actualiza el estado 'stars'
    };

    // Función para generar las propiedades de los meteoros
    const generateMeteors = () => {
        const numberOfMeteors = 4 // Número fijo de meteoros
        const newMeteors =[]

        for (let i = 0; i<numberOfMeteors; i++){
            newMeteors.push({
                id:i, // Un ID único para el meteoro
                size: Math.random() * 2 + 1, // Tamaño aleatorio entre 1px y 3px
                x: Math.random() * 100, // Posición horizontal aleatoria (0% a 100%)
                y: Math.random() * 20, // Posición vertical aleatoria (0% a 20% superior de la pantalla)
                delay: Math.random() * 3, // Retraso de la animación (entre 0s y 3s). Usado para `animationDelay`.
                animationDuration: Math.random() * 3 + 3, // Duración de la animación (entre 3s y 6s)
            })
        }
        setMeteors(newMeteors) // Actualiza el estado 'meteors'
    };

    return (
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0"> {/* z-0 o z-[-10] si quieres que esté muy al fondo */}
            {/* Renderizado de estrellas */}
            {/* Condicionalmente renderiza solo si 'stars' no es null/undefined para evitar errores en el primer render */}
            {stars && stars.map((star)=>(
                <div key={star.id} className="star animate-pulse-subtle" style={
                    {
                        width:star.size + "px",
                        height:star.size + "px",
                        left:star.x + "%",
                        top:star.y + "%",
                        opacity:star.opacity,
                        animationDuration:star.animationDuration + "s", // Usar animationDuration directamente
                    }
                } />
            ))}

            {/* Renderizado de meteoros */}
            {/* Condicionalmente renderiza solo si 'meteors' no es null/undefined */}
            {meteors && meteors.map((meteor)=>(
                <div key={meteor.id} className="meteor animate-meteor" style={
                    {
                        width:meteor.size + "px",
                        height:meteor.size + "px",
                        left:meteor.x + "%",
                        top:meteor.y + "%",
                        animationDelay:meteor.delay + "s", // Usar 'delay' para animationDelay
                        animationDuration:meteor.animationDuration + "s", // Usar animationDuration directamente
                    }
                } />
            ))}
        </div>
    );
};