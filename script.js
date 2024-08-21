document.getElementById('addTextButton').addEventListener('click', function() {
    const textBox = document.getElementById('textBox');
    const liveView = document.getElementById('liveView');
    
    // Define the text to be added
    const newText = "New text item\n";

    // Update the main text box
    textBox.value += newText;

    // Simulate live view update with animation
    let index = 0;
    function updateLiveView() {
        if (index < newText.length) {
            liveView.value += newText[index++];
            setTimeout(updateLiveView, 50); // Adjust speed as needed
        } else {
            liveView.value += "\n";
        }
    }
    
    updateLiveView();
});