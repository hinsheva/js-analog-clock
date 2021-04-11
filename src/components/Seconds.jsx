const HandSeconds = ({currentTime}) => { 
    const secDegrees = ((currentTime.getSeconds()/60)*360) + 90;

    const handStyle = {
        height: '3px',
        position: 'absolute',
        top: '50%',
        left: '50%',
        display: 'block',
        width: 'calc(50% - 20px)',
        backgroundColor: '#1BBC9B',
        transformOrigin: 'left center',
        borderRadius: '999px',
        transform: `translateY(-50%) rotate(${secDegrees}deg)`,
        transition: '0.1s cubic-bezier(0, 0, 0.6, 1.25)'
    }
    return (
        <div style={handStyle}></div>
    )
};

export default HandSeconds