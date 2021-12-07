export const Podcast = ({ episode }) => {
    return (
        <iframe 
        src={`https://open.spotify.com/embed/episode/${episode}`}
        width="100%"
        height="80"
        frameBorder="0"
        allowtransparency="true"
        allow="encrypted-media"
        title="podcast"
        />
    )

}
