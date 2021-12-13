import { VALID_LOADERS } from "next/dist/server/image-config"
import { useEffect } from "react"


// constante para el objeto podcast se puede utilizar para VALID_LOADERS, canciones etc
export const Podcast = ({ episode }) => {
    return (
        <iframe 
        src={`https://open.spotify.com/embed/episode/${episode}`}
        width="100%"
        height="232"
        frameBorder="0"
        allowtransparency="true"
        allow="encrypted-media"
        title="podcast"
        />
    )

}
