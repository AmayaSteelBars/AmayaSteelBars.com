const video = document.getElementById("video");
const canvas = document.getElementById("canvas");
const label = document.getElementById("label");
const searchBar = document.getElementById("searchBar");
const passButton = document.getElementById("passButton");

// Load the COCO-SSD model
let model;

// Load the Teachable Machine model
tf.loadGraphModel('model.json').then(loadedModel => {
  model = loadedModel;
  console.log("Custom model loaded!");
  startVideo(); // Start with the rear camera
});
// Function to start the camera feed
function startVideo(facingMode = "environment") {
  navigator.mediaDevices
    .getUserMedia({
      video: {
        facingMode: facingMode, // Rear camera: "environment", Front camera: "user"
      },
    })
    .then(stream => {
      video.srcObject = stream;
    })
    .catch(err => console.error("Error accessing the camera:", err));
}

// Detect objects and draw bounding boxes
video.addEventListener("loadeddata", () => {
  setInterval(() => {
    detectObjects();
  }, 500); // Run detection every 100ms
});

function detectObjects() {
  if (!model) return;

  const context = canvas.getContext("2d");
  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;

  // Draw video frame to canvas
  context.drawImage(video, 0, 0, canvas.width, canvas.height);

  // Detect objects in the canvas
  model.detect(canvas).then(predictions => {
    context.clearRect(0, 0, canvas.width, canvas.height); // Clear previous frame
    context.drawImage(video, 0, 0, canvas.width, canvas.height); // Redraw frame

    predictions.forEach(prediction => {
      const { bbox, class: labelText, score } = prediction;
      const [x, y, width, height] = bbox;

      // Draw the bounding box
      context.strokeStyle = "lime";
      context.lineWidth = 2;
      context.strokeRect(x, y, width, height);

      // Draw the label and confidence score
      context.fillStyle = "lime";
      context.font = "16px Arial";
      context.fillText(
        `${labelText} (${(score * 100).toFixed(2)}%)`,
        x,
        y > 10 ? y - 5 : 10 // Position label above the box
      );
    });

    if (predictions.length > 0) {
      const topPrediction = predictions[0]; // Get the object with the highest confidence
      label.textContent = `Detected: ${topPrediction.class} (Confidence: ${(topPrediction.score * 100).toFixed(2)}%)`;

      // Pass the label to the search bar on button click
      passButton.onclick = () => {
        searchBar.value = topPrediction.class;
      };
    } else {
      label.textContent = "No objects detected.";
    }
  });
}

// Add a button to switch between front and rear cameras
const switchButton = document.createElement("button");
switchButton.textContent = "Switch Camera";
document.body.appendChild(switchButton);

let isFrontCamera = false;
switchButton.addEventListener("click", () => {
  isFrontCamera = !isFrontCamera;
  startVideo(isFrontCamera ? "user" : "environment");
});
