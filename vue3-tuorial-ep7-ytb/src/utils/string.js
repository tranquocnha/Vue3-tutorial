//capitalize: Hàm này được sử dụng để viết hoa chữ cái đầu tiên của một chuỗi.
//capitalize('hello world'); // Output: 'Hello world'
export default function capitalize(string) {
  if (typeof string !== "string") return "";
  return string.charAt(0).toUpperCase() + string.slice(1);
}

//truncate: Hàm này giúp cắt ngắn chuỗi với độ dài nhất định và thêm ký tự "..." vào cuối chuỗi.
//truncate('Lorem ipsum dolor sit amet, consectetur adipiscing elit.', 20); // Output: 'Lorem ipsum dolor si...'
export default function truncate(string, length) {
  if (typeof string !== "string") return "";
  return string.length > length ? string.slice(0, length) + "..." : string;
}

//formatPhoneNumber: Hàm này được sử dụng để định dạng số điện thoại thành chuỗi có định dạng.
//formatPhoneNumber('1234567890'); // Output: '(123) 456-7890'
export default function formatPhoneNumber(phoneNumberString) {
  const cleaned = ("" + phoneNumberString).replace(/\D/g, "");
  const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
  if (match) {
    return "(" + match[1] + ") " + match[2] + "-" + match[3];
  }
  return null;
}

//slugify: Hàm này giúp tạo ra một chuỗi slug từ một chuỗi được cung cấp.
//slugify('This is a test string.'); // Output: 'this-is-a-test-string'
export default function slugify(string) {
  return string
    .toLowerCase()
    .replace(/[^a-z0-9 -]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

//reverse: Hàm này được sử dụng để đảo ngược một chuỗi.
//reverse('Hello World!'); // Output: '!dlroW olleH'
export default function reverse(string) {
  if (typeof string !== "string") return "";
  return string.split("").reverse().join("");
}

//trim: Hàm này giúp loại bỏ khoảng trắng ở đầu và cuối chuỗi.
//trim('   Hello World!    '); // Output: 'Hello World!'
export default function trim(string) {
  if (typeof string !== 'string') return '';
  return string.trim();
}


//replaceAll: Hàm này được sử dụng để thay thế tất cả các ký tự hoặc chuỗi con trong chuỗi được cung cấp.
//replaceAll('Hello World!', 'l', 'p'); // Output: 'Heppo Worpd!'
export default function replaceAll(string, search, replace) {
  if (typeof string !== 'string') return '';
  return string.split(search).join(replace);
}

//countOccurrences: Hàm này được sử dụng để đếm số lần xuất hiện của một ký tự hoặc chuỗi con trong chuỗi.
//countOccurrences('Hello World!', 'l'); // Output: 3
export default function countOccurrences(string, subString) {
  if (typeof string !== 'string') return 0;
  let count = 0;
  let position = 0;
  while (true) {
    position = string.indexOf(subString, position);
    if (position === -1) break;
    count++;
    position += subString.length;
  }
  return count;
}

//removeDuplicates: Hàm này được sử dụng để loại bỏ các phần tử trùng lặp trong một mảng.
//removeDuplicates(['apple', 'banana', 'cherry', 'apple', 'banana']); // Output: ['apple', 'banana', 'cherry']
export default function removeDuplicates(array) {
  return [...new Set(array)];
}

//titleCase: Hàm này được sử dụng để viết hoa chữ cái đầu tiên của từ trong chuỗi.
//titleCase('hello world'); // Output: 'Hello World'
export default function titleCase(string) {
  if (typeof string !== 'string') return '';
  return string.replace(/\w\S*/g, function(txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
}

//wordCount: Hàm này được sử dụng để đếm số từ trong một chuỗi.
//wordCount('Hello World!'); // Output: 2
export default function wordCount(string) {
  if (typeof string !== 'string') return 0;
  return string.trim().split(/\s+/).length;
}
