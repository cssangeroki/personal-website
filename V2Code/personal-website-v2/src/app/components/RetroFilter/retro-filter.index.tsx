import './retro-filter.style.scss';

interface ImageComponentProps {
    imageUrl: string;
    altText: string;
}

const RetroFilter: React.FC<ImageComponentProps> = ({ imageUrl, altText }) => {
    return (
        <>
            <div className="size blend blend-yellow vignette">
                <img src={imageUrl} alt={altText} className="size"/>
            </div>
            <div className="size">
                <img src={imageUrl} alt={altText} className="size"/>
            </div>
        </>
    );
};

export default RetroFilter;
