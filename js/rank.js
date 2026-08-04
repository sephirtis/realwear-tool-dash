// 依完成秒數對應段位名稱，門檻可以直接改這裡的數字調整難度。
export function getRank(seconds) {
  if (seconds <= 5) return '超神';
  if (seconds <= 10) return '修機王者';
  if (seconds <= 15) return '永恆鑽石';
  if (seconds <= 20) return '榮耀黃金';
  if (seconds <= 25) return '秩序白銀';
  if (seconds <= 30) return '倔強青銅';
  return '修機新手';
}
