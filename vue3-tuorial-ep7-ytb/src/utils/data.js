// formatDate: Hàm này được sử dụng để định dạng ngày thành chuỗi có định dạng nhất định.

export default function formatDate(date) {
  const formatter = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  return formatter.format(new Date(date));
}
