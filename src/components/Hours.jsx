const HandHours = ({currentTime}) => {
    const hrDegrees = ((currentTime.getHours()/12)*360) + ((currentTime.getMinutes()/60)*30) + 90;
    const handStyle = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        display: 'block',
        height: '6px',
        backgroundColor: '#FFF',
        transformOrigin: 'left center',
        borderRadius: '999px',
        width: 'calc(50% - 80px)',
        transform: `translateY(-50%) rotate(${hrDegrees}deg)`,
        transition: '0.2s ease'
    }
    return (
        <div style={handStyle}></div>
    )
};

export default HandHours;