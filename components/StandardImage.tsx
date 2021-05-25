import Image from 'next/image'

const StandardImage = (props) => {

    const imageAngle2 = () => {
        return `${props.imageAngle === 'left' ? 'portfolio-image--left m-auto rounded-md shadow-2xl' : props.imageAngle === 'right rounded-md shadow-2xl' ? 'portfolio-image--right rounded-md shadow-2xl' : props.imageAngle === 'none'} m-auto`
    }

    const imageAngle = () => {
        return `${
            props.imageAngle === 'left' 
            ? 'portfolio-image--left m-auto rounded-md shadow-2xl' 
            : (props.imageAngle === 'right' 
            ? 'portfolio-image--right rounded-md shadow-2xl' 
            : '')} m-auto`
    }

    const imageContainerAngle = () => {
            return `${
            props.imageAngle === 'left'
            ? 'portfolio-image-container'
            : props.imageAngle === 'right'
            ? 'portfolio-image-container' 
            : ' '}`
    }
    
    return (
        <div>
            <div className={imageContainerAngle()} style={{fontSize: '0'}}>
            <Image 
            className={imageAngle()}
            src={props.image}
            alt={props.altText}
            width={600}
            height={450}
            quality={100}
            />
            </div>
        </div>
    )
}

export default StandardImage