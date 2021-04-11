const HandMinutes = ({currentTime}) => {
    const minDegrees = ((currentTime.getMinutes()/60)*360) + ((currentTime.getSeconds()/60)*6) + 90;
    const handStyle = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        display: 'block',
        width: 'calc(50% - 40px)',
        height: '6px',
        backgroundColor: '#FFF',
        transformOrigin: 'left center',
        borderRadius: '999px',
        transform: `translateY(-50%) rotate(${minDegrees}deg)`,
        transition: '0.2s ease'
    }
    return (
        <div style={handStyle}></div>
    )
}
export default HandMinutes;