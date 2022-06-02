const DexNumber = ({ number}) => {
  let stringNumber = number + "";

  const addZeros = 3 - stringNumber.length;

  for (let i = 0; i < addZeros; i++) {
    stringNumber = "0" + stringNumber;
  }

  stringNumber = "#" + stringNumber;

  return <>{stringNumber}</>;
};

export default DexNumber;
