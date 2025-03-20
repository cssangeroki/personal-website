import { Component } from "react";

interface ImageComponentProps {
    imageUrl: string;
    altText: string;
}

const RetroFilter: React.FC<ImageComponentProps> = ({ imageUrl, altText }) => {
    return (
        <div className="retro-filter">
            <img src={imageUrl} alt={altText}/>
        </div>
    );
};

export default RetroFilter;
