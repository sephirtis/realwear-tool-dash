# 工具快手 Web/PWA Demo

可離線安裝的 RealWear Navigator 500 遊戲 Demo。首次以 HTTPS 或 `localhost` 開啟、允許相機並載入模型後，即會快取所有資源。

## 操作

- 語音：`開始遊戲`、`檢查工具`、`取消`、`重新開始`。
- RealWear 動作按鈕：按 Enter/Space 可開始或確認。
- 遊戲承接原 Unity 玩法：黑布背景、隨機指定工具、先由 YOLO 鎖定目標，再以鎖定區域前景消失判定拿走完成。

## YOLO 模型

內含 `assets/yolov8n.onnx`（YOLOv8n COCO 通用模型，約 12.8 MB）與 ONNX Runtime Web。本模型主要證明 Web 端 YOLO 推論管線；COCO 並無螺絲起子、尖嘴鉗、扳手三類。

要做實物辨識時，請用 YOLOv8 Detection ONNX 格式的自訓模型替換該檔，並把 `app.js` 中 `TOOL_NAMES` 的標籤改成模型類別。未偵測到自訂工具時，Demo 會使用黑布前景區塊的視覺 Demo 鎖定模式，讓完整遊戲流程可現場展示。

## 部署

以任何 HTTPS 靜態網站主機部署本資料夾。PWA 與相機不支援以 `file://` 直接開啟。Navigator 500 建議使用 Chrome，螢幕橫向、攝影機權限允許。
