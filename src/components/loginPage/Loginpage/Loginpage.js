const Loginpage = () => {

    const handleOnClick = (event) => {
        event.preventDefault();
        console.log('check');
    }

  return (
    <div >
      <form  style={{color: "grey"}}>
        <div className="mb-3" >
          <label htmlFor="TenNhanVien" className="form-label">
            UserName
          </label>
          <input
            type="email"
            className="form-control"
            id="TenNhanVien"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input type="password" className="form-control" id="exampleInputPassword1" />
        </div>
        <button type="submit" onClick={handleOnClick} className="btn btn-primary" style={{width: '100%'}}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Loginpage;
