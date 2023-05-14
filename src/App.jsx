import "./App.css";

function App() {
  const handleAddUser = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const user = { name, email };
    console.log(name, email);
    console.log(user);
    fetch("http://localhost:5000/users", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(user),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          alert('user added successfully')
          form.reset();
        }
      });
  };

  return (
    <>
      <h1>Simple Crud </h1>
      <form onSubmit={handleAddUser}>
        <input type="text" name="name" /> <br />
        <input type="email" name="email" /> <br />
        <input type="submit" name="submit" /> <br />
      </form>
    </>
  );
}

export default App;