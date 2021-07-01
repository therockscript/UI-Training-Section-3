import FormGroup from './FormGroup';

function AddForm(){




return <div className="m-5 border solid 2px border-info p-3">
             <FormGroup label="Description"
               type="text" name="description"
               value=""
               />
               <button className="btn btn-primary">Submit</button>
       </div>
}
export default AddForm;      