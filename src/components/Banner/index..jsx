import './Banner.scss';
function Banner(props) {
    const { title, backgroundUrl } = props;
    const bannerStyle = backgroundUrl ? { backgroundImage : `url(${backgroundUrl})`} : {};
    return (
        <section className="banner" style={bannerStyle}>
            <h1 className="banner_title">{title}</h1>
        </section>
     );
}

export default Banner;