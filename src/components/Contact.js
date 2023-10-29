const Contact = () => {
  return (
    <div>
      <h1 className="font-bold text-3xl m-4 p-4">Contact Us Page</h1>
      <form>
        <input
          type="text"
          placeholder="name"
          className="border border-black p-2 m-2"
        />
        <input
          type="message"
          placeholder="message"
          className="border border-black p-2 m-2"
        />
        <button className="border border-black p-2 m-2 bg-gray-100 rounded-lg">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;