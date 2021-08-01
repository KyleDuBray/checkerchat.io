export default function Button(props) {
  const getButtonStyle = () => {
    switch (props.kind) {
      case 'primary':
        return 'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring focus:border-blue-300 focus:shadow-outline';
      case 'secondary':
        return 'bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring focus:border-gray-300 focus:shadow-outline';
    }
  };

  return (
    <>
      <button className={getButtonStyle()} onClick={props.handleClick}>
        <span tabIndex="-1">{props.content}</span>
      </button>
    </>
  );
}
