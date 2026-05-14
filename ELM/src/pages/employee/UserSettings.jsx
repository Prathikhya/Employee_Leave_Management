const UserSettings = () => {
  return (
    <div>

      <h2>Settings</h2>

      <div className="card p-4 shadow">

        <div className="mb-3">
          <label>Name</label>
          <input className="form-control" />
        </div>

        <div className="mb-3">
          <label>Email</label>
          <input className="form-control" />
        </div>

        <button className="btn btn-primary">
          Update Profile
        </button>

      </div>
    </div>
  );
};

export default UserSettings;