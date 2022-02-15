export default function Button(props) {
  return (
    <>
      <button className=" border-2 py-2 px-10 rounded-lg hover:bg-white hover:text-amber-700 ">
        {props.text}
      </button>
    </>
  );
}
