# 工具快手｜RealWear Web/PWA Demo

純 Web/PWA、離線可用、支援 Navigator 500 後鏡頭。按「開始遊戲」才要求攝影機權限；YOLO 先鎖定指定工具，再確認連續三次未偵測到才視為拿走完成。

內含公開 x-not/tool-detector 預訓練模型（MIT），轉為簡化 INT8 ONNX，能辨識螺絲起子、尖嘴鉗、切割鉗等工具。模型與所有 Runtime 資源會由 Service Worker 快取。

請以 HTTPS 靜態網站部署，首次載入並允許相機後可離線遊玩。
