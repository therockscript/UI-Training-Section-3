function FormGroup(props){
	const{ label, type, name, value, onInputChange ,disabled }=props;

	return <div className="form-group">
	         <label>{label}</label>
	         <input type={type}
	          className="form-control"
	          name={name} 
	          value={value}
	           disabled={disabled} onChange={onInputChange}/>

	      </div>
}
export default FormGroup;