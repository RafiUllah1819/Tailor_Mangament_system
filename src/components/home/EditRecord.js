import React , {useState , useEffect} from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const EditRecord = (props) => {
   
    const navigate = useNavigate()
    const [measure , setMeasure] = useState([])
    const [state, setState] = useState({
        name: '', fname: '', address: '', contact: '', height: '',sleev: '',
        shoulder : '', neck : '',width : '', chest : '', paint: '',foot : '',
        front: '', oneside: '', doublesides: '',
        round : '',straight : '', one: '', two: '',  simple: '',
    })

    console.log("props_meas" , props.meas)
    console.log("props_edit" , props.edit)
    console.log("props_edit_Index" , props.editIndex)
    
        const {name, fname, address, contact, height, sleev, shoulder, neck , width , chest, 
        paint, foot, front, oneside, doublesides, round, straight, one, two, simple 
        } = state;

        const onSubmit = () =>{
        const newData = [...measure];

        const myobj = {name, fname, address, contact, height, sleev, shoulder, neck , width , chest, 
            paint, foot, front, oneside, doublesides, round, straight, one, two, simple 
            }

        if(props.editIndex===null) newData.push(myobj)
        else newData.splice(props.editIndex, 1, myobj)
        localStorage.setItem('mydata', JSON.stringify(newData));
        success("Record updated successfully")
        props.rerender();
        props.handleClose()
        

        //     if(name.length>0 && fname.length>0 && address.length>0 &&
        //         contact.length>0 && height.length>0 && sleev.length>0
        //         && shoulder.length>0 && neck.length>0 && width.length>0 &&
        //         chest.length>0 && paint.length>0 && foot.length>0
        //         ){
        //      newData.push(myobj)

        //     success("Record updated successfully")
        //     // console.log("data of measure",newData)
        //     localStorage.setItem('mydata', JSON.stringify(newData))
        //     setMeasure(newData);
        //     setState({ name: '', fname: '', address: '', contact: '', height: '',sleev: '',
        //     shoulder : '', neck : '',width : '', chest : '', paint: '',foot : '',
        //     front: '', oneside: '', doublesides: '',
        //     round : '',straight : '', one: '', two: '',  simple: '',})
        // }else{
        //     error("Please fill the fields")
        // }
    }

  
    // const onChangeName = (e) =>{
    //     setState(
    //         ...state,
    //         state.name=e.target.value
    //     )
    // }
    const onChangeName = (e) =>{
        const copy = {...state}
        copy.name = e.target.value;
        setState(copy)
    }
    const onChangeFname = (e) =>{
        const copy = {...state}
        copy.fname = e.target.value;
        setState(copy)
    }
    const onChangeAddress = (e) =>{
        const copy = {...state}
        copy.address = e.target.value;
        setState(copy)
    }
    const onChangeContact = (e) =>{
        const copy = {...state}
        copy.contact = e.target.value;
        setState(copy)
    }
    const onChangeHeight = (e) =>{
        const copy = {...state}
        copy.height = e.target.value;
        setState(copy)
    }
    const onChangeSleeve = (e) =>{
        const copy = {...state}
        copy.sleev = e.target.value;
        setState(copy)
    }
    const onChangeShoulder = (e) =>{
        const copy = {...state}
        copy.shoulder = e.target.value;
        setState(copy)
    }
    const onChangeNeck = (e) =>{
        const copy = {...state}
        copy.neck = e.target.value;
        setState(copy)
    }
    const onChangeWidth = (e) =>{
        const copy = {...state}
        copy.width = e.target.value;
        setState(copy)
    }
    const onChangeChest = (e) =>{
        const copy = {...state}
        copy.chest = e.target.value;
        setState(copy)
    }
    const onChangePaint = (e) =>{
        const copy = {...state}
        copy.paint = e.target.value;
        setState(copy)
    }
    const onChangeFoot = (e) =>{
        const copy = {...state}
        copy.foot = e.target.value;
        setState(copy)
    }
    const onChangeFront = (e) =>{
        const copy = {...state}
        copy.front = e.target.value;
        setState(copy)
    }
    const onChangeOneSide = (e) =>{
        const copy = {...state}
        copy.oneside = e.target.value;
        setState(copy)
    }
    const onChangeDoubleSides = (e) =>{
        const copy = {...state}
        copy.doublesides = e.target.value;
        setState(copy)
    }
    const onChangeRound = (e) =>{
        const copy = {...state}
        copy.round = e.target.value;
        setState(copy)
    }
    const onChangeStraight = (e) =>{
        const copy = {...state}
        copy.straight = e.target.value;
        setState(copy)
    }
    const onChangeOne = (e) =>{
        const copy = {...state}
        copy.one = e.target.value;
        setState(copy)
    }
    const onChangerTwo = (e) =>{
        const copy = {...state}
        copy.two = e.target.value;
        setState(copy)
    }
    const onChangeSimple = (e) =>{
        const copy = {...state}
        copy.simple = e.target.value;
        setState(copy)
    }
  
    useEffect(()=>{
        const arr = JSON.parse(localStorage.getItem('mydata')) || []
        setMeasure(arr)
        setState(props.meas)
    },[])

    const error = (msg) => {
        toast.error(msg,{
         position: "top-right",
         autoClose: 5000,
         hideProgressBar: false,
         closeOnClick: true,
         pauseOnHover: true,
         draggable: true,
         progress: undefined,
        })
      }
      const success = (msg) => {
        toast.success(msg,{
         position: "top-right",
         autoClose: 5000,
         hideProgressBar: false,
         closeOnClick: true,
         pauseOnHover: true,
         draggable: true,
         progress: undefined,
        })
      }
      
    return (
        <div className="container-fluid myshop">
                 <div className="form-section">
                <div className="row">
                <div className="col-md-4">
                    <div className="form-group mb-3">
                     <input type="text" 
                    placeholder="Name"
                    className="form-control"
                    value = {state.name}
                    onChange={onChangeName}
                     />
                 </div> 
                    <div className="form-group mb-3">
                     <input type="text" 
                    placeholder="Father Name"
                    className="form-control"
                    value= {state.fname}
                    // onChange = {(e)=>setFname(e.target.value)}
                    onChange={onChangeFname}
                     />
                 </div> 
                    <div className="form-group mb-3">
                     <input type="text" 
                    placeholder="Address"
                    className="form-control"
                    value ={state.address}
                    // onChange = {(e)=>setAddress(e.target.value)}
                    onChange={onChangeAddress}
                     />
                 </div> 
                    <div className="form-group mb-3">
                     <input type="text" 
                    placeholder="Contact"
                    className="form-control"
                    value ={state.contact}
                    // onChange = {(e)=>setContact(e.target.value)}
                    onChange={onChangeContact}
                     />
                 </div> 
                  
                 
                </div>
                <div className="col-md-2">
                <div className="form-group mb-3">
                     <input type="text" 
                    placeholder="Height"
                    className="form-control"
                    value={state.height}
                    onChange={onChangeHeight}
                     />
                 </div> 
                <div className="form-group mb-3">
                     <input type="text" 
                    placeholder="Sleeve"
                    className="form-control"
                    value={state.sleev}
                    onChange={onChangeSleeve}
                     />
                 </div> 
                <div className="form-group mb-3">
                     <input type="text" 
                    placeholder="Shoulder"
                    className="form-control"
                    value={state.shoulder}
                    onChange={onChangeShoulder}
                     />
                 </div> 
                <div className="form-group mb-3">
                     <input type="text" 
                    placeholder="Neck"
                    className="form-control"
                    value={state.neck}
                    onChange={onChangeNeck}
                     />
                 </div> 
               
                 
                </div>
                {/* column end here */}
                <div className="col-md-2">
                <div className="form-group mb-3">
                     <input type="text" 
                    placeholder="Width"
                    className="form-control"
                    value={state.width}
                    onChange={onChangeWidth}
                     />
                 </div>
                <div className="form-group mb-3">
                     <input type="text" 
                    placeholder="Chest"
                    className="form-control"
                    value={state.chest}
                    onChange={onChangeChest}
                     />
                 </div>
                <div className="form-group mb-3">
                     <input type="text" 
                    placeholder="Paint Height"
                    className="form-control"
                    value={state.paint}
                    onChange={onChangePaint}
                     />
                 </div> 
                <div className="form-group mb-3">
                     <input type="text" 
                    placeholder="Strip_Size"
                    className="form-control"
                    value={state.foot}
                    onChange={onChangeFoot}
                     />
                 </div> 
             
               
                </div>
                <div className="col-md-2 px-4">
                    <h6>Pocket</h6>
                    <div className="form-check">
                        <label className="form-check-label" for="check1">
                             <input type="checkbox" 
                             className="form-check-input" id="check1"
                              name="front" 
                              value='front'
                              checked={state.front === 'front'}
                              onChange={onChangeFront}
                              />Front
                        </label>
                     </div>
                    <div className="form-check">
                        <label className="form-check-label" for="check2">
                             <input type="checkbox" className="form-check-input" id="check2"
                              name="oneside" 
                              value='oneside'
                              checked={state.oneside === 'oneside'}
                              onChange={onChangeOneSide}
                              />One_Side
                        </label>
                     </div>
                    <div className="form-check">
                        <label className="form-check-label" for="check3">
                             <input type="checkbox"
                              className="form-check-input" id="check3" 
                              name="doublesides"
                              value='doublesides'
                              checked={state.doublesides === 'doublesides'}
                              onChange={onChangeDoubleSides}
                              />Double_Sides
                        </label>
                     </div>
                        <h6 style={{marginTop:"20px"}}>Daman</h6>
                    <div className="form-check">
                    <label className="form-check-label" for="radio1">
                        <input type="radio" className="form-check-input"
                         id="radio1" name="daman"  checked
                         value='round'
                         checked={state.round === 'round'}
                         onChange={onChangeRound}
                         />Round
                    </label>
                    </div>
                    <div className="form-check">
                    <label className="form-check-label" for="radio2">
                        <input type="radio" className="form-check-input"
                         id="radio2" name="daman" 
                         value='straight'
                         checked={state.straight === 'straight'}
                         onChange={onChangeStraight}
                         />Straight
                    </label>
                    </div>
                 
            
                </div> 
                <div className="col-md-2">
                    <h6>Collar</h6>
                    <div className="form-check">
                    <label className="form-check-label" for="radio2">
                        <input type="radio" className="form-check-input"
                         id="radio2" name="collar" 
                         value='one' 
                         checked={state.one === 'one'}
                         onChange={onChangeOne}
                         />One Piece
                    </label>
                    </div>
                    <div className="form-check">
                    <label className="form-check-label" for="radio2">
                        <input type="radio" className="form-check-input"
                         id="radio2" name="collar" 
                         value='two'
                         checked={state.two === 'two'}
                         onChange={onChangerTwo}
                         />Two Pieces
                    </label>
                    </div>
                    <div className="form-check">
                    <label className="form-check-label" for="radio2">
                        <input type="radio" className="form-check-input"
                         id="radio2" name="collar"
                          value='simple'
                          checked={state.simple === 'simple'}
                          onChange={onChangeSimple}
                          />Kurtha
                    </label>
                    </div>
                </div> 
                <div className="form-button">
                <button className="btn btn-success" 
                onClick={onSubmit} 
                >Update</button>
                </div>
            </div>

                </div>
        
        </div>
    )

}
export default EditRecord