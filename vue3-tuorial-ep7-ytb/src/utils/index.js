//debounce: Hàm này được sử dụng để giảm thiểu số lần gọi hàm khi người dùng tương tác với các thành phần trong ứng dụng, giúp tăng hiệu suất của ứng dụng.
export default function debounce(func, wait) {
  let timeout;
  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      func.apply(this, args);
    }, wait);
  };
}

/*throttle: Hàm này giúp giảm thiểu số lần gọi hàm khi 
người dùng tương tác với các thành phần trong ứng dụng, nhưng khác với debounce là nó chỉ gọi hàm ở khoảng thời gian cố định (thường là 100ms).*/

export default function throttle(func, delay) {
  let throttled = false;
  return function(...args) {
    if (!throttled) {
      throttled = true;
      setTimeout(() => {
        func.apply(this, args);
        throttled = false;
      }, delay);
    }
  };
}

//formatCurrency: Hàm này được sử dụng để định dạng số tiền thành chuỗi có định dạng tiền tệ.
export default function formatCurrency(value) {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2
  });
  return formatter.format(value);
}
