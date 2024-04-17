function button(props) {
  return (
    <div className="my-2">
      <button className="bg-red-400 text-white px-5 hover:bg-red-700 py-3 rounded-full">
        {props.name}
      </button>
    </div>
  );
}

export default button;
