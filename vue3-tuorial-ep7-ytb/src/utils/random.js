//randomColor: Hàm này được sử dụng để tạo một màu sắc ngẫu nhiên.
export default function randomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
