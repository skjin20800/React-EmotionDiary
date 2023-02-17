export const getStringDate = date => {
  return date.toISOString().slice(0, 10); //toISOString은 Date객체를 받아 YYYY-MM-DD...형태로 변환시켜줌
};
