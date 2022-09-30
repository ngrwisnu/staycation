const FormatNumber = (num) => {
  return new Intl.NumberFormat("id-ID").format(num);
};

export default FormatNumber;
