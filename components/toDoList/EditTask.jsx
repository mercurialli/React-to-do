
export const EditTask = (title) => {
    
    return (
      <>
        <div className="input-edit">
          <input type="text" placeholder={title} onChange={(e)=>e.target.value} />
          <button onClick={
            () => {
                setOnEdit(false)
            }
          }
            >Save</button>
        </div>
      </>
    );
  };

  //input value={city} onChange={(e)=>setCity(e.target.value)
//   const handleChange = (evt) => {
//     setOnEdit(evt.target.value);
//   };