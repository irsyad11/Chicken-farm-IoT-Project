export default function Button(props) {
  return (
    <>
      <button
        className=" border-2 py-2 px-10 rounded-lg bg-koya text-white hover:bg-amber-400 "
        type="submit"
      >
        {props.text}
      </button>
    </>
  );
}
