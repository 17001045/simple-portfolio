export default (arr: any[], key: string) => {
  const stringArr: string[] = [];

  arr.forEach((item: any) => {
    stringArr.push(item[key]);
  });

  return stringArr;
};
