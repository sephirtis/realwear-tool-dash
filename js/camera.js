/**
 * 相機讀取。這個應用是後鏡頭朝外拍桌上的工具，不是自拍鏡頭，
 * 所以明確要求 facingMode: 'environment'，而且全程不套用任何鏡像 CSS
 * (不加 transform: scaleX(-1))——很多網路上抄來的 webcam 範例是為前鏡頭寫的，
 * 直接複製會把畫面弄反，這裡刻意避開。
 *
 * 只要不加鏡像變形，<video> 顯示的畫面跟後面用 canvas 擷取給 YOLO 推論的
 * 像素資料就是同一份座標系，框線疊加不會跟畫面對不上。
 */

/**
 * 啟動相機，回傳 { videoElement, stream }。
 * videoElement 已經開始播放，呼叫端可以直接把它加進畫面或用來畫 canvas。
 */
export async function startCamera(videoElement) {
  const constraints = {
    video: {
      facingMode: { ideal: 'environment' },
      width: { ideal: 1280 },
      height: { ideal: 720 },
    },
    audio: false,
  };

  const stream = await navigator.mediaDevices.getUserMedia(constraints);
  videoElement.srcObject = stream;

  // 確保沒有意外被 CSS 鏡像 (保險起見用程式強制設定一次)
  videoElement.style.transform = 'none';

  await new Promise((resolve) => {
    videoElement.onloadedmetadata = () => resolve();
  });
  await videoElement.play();

  return { videoElement, stream };
}

export function stopCamera(stream) {
  if (!stream) return;
  stream.getTracks().forEach((track) => track.stop());
}
