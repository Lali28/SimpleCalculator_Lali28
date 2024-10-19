function appendNumber(number) 
{
    document.getElementById('screen').value += number;
}

function appendOperator(operator) 
{
    const screen = document.getElementById('screen');
    if (screen.value !== '') {
        screen.value += operator;
    }
}

function clearScreen() 
{
    document.getElementById('screen').value = '';
}

function deleteLast() 
{
    const screen = document.getElementById('screen');
    screen.value = screen.value.slice(0, -1);
}

function calculate() 
{
    const screen = document.getElementById('screen');
    try 
    {
        screen.value = eval(screen.value);
    } 
    catch 
    {
        screen.value = 'Error';
    }
}
function appendNumber(number) 
{
    document.getElementById('screen').value += number;
}

function appendOperator(operator) 
{
    const screen = document.getElementById('screen');
    if (screen.value !== '') 
    {
        screen.value += operator;
    }
}

function clearScreen() 
{
    document.getElementById('screen').value = '';
}

function deleteLast() 
{
    const screen = document.getElementById('screen');
    screen.value = screen.value.slice(0, -1);
}

function calculate() 
{
    const screen = document.getElementById('screen');
    try {
        screen.value = eval(screen.value);
    } catch {
        screen.value = 'Error';
    }
}

 //keydown event listener to handle keyboard input
    document.addEventListener('keydown', function(event) 
    {
    const key = event.key;

    // Handle number input
    if (!isNaN(key)) 
    {
        appendNumber(key);
    }

    // Handle operators
    if (key === '+' || key === '-' || key === '*' || key === '/') 
    {
        appendOperator(key);
    }

    // Handle Enter for "="
    if (key === 'Enter') 
    {
        calculate();
    }

    // Handle Backspace for deleting
    if (key === 'Backspace') 
    {
        deleteLast();
    }

    // Handle Escape for clearing screen
    if (key === 'Escape') 
    {
        clearScreen();
    }
});
