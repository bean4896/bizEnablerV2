const Video = ({ video }) => {

    const { id, snippet } = video;
    const { title, description, thumbnails } = snippet;

    return (
        <div className="video">
            <div className="video__thumbnail">
                <img src={thumbnails.medium.url} alt={title} />
            </div>
            <div className="video__info">
                <h3 className="video__title">{title}</h3>
                <p className="video__description">{description}</p>
            </div>
        </div>
    );
};
export default Video;