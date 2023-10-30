import inquirer from "inquirer"

async function calculateWordCount() {
    const userInput = await inquirer.prompt([
      {
        type: 'input',
        name: 'text',
        message: 'Enter the text you want to calculate the word count for:',
      },
    ]);
  
    const text = userInput.text;
  
    // Split the input text into words and count them
    const wordCount = text.split(/\s+/).filter((word) => word.length > 0).length;
  
    console.log(`Word count: ${wordCount}`);
  }
  
  calculateWordCount();
