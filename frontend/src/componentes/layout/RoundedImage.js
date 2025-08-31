import Styles from './RoundedImage.module.css'

function RoundedImage({src,alt,width}){
    return(
        <img 
            className={`${Styles.rounded_image} ${Styles[width]}`}
            src={src}
            alt={alt}
        />
    )
}

export default RoundedImage
