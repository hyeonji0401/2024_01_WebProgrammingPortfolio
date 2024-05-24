document.getElementById('inputForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const userInput = document.getElementById('userInput').value;
    if (userInput.trim() !== '') {
        const li = document.createElement('li');
        li.className="cheer_up";
        li.innerHTML = userInput;
        document.getElementById('inputList').appendChild(li);
        document.getElementById('userInput').value = '';
    }
});