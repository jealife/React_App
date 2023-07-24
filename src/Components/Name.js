function Name(props){
    return(
        <div>
            <h1>
                Hello <span style={{color: props.color} }> {props.name} </span> 
            </h1>
        </div>
    )
}
export default Name;