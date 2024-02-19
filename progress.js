function printMessage(message) {
  process.stdout.clearLine();  // Clear the previous message
  process.stdout.cursorTo(0);  // Move the cursor to the beginning of the line
  process.stdout.write(message);  // Write the new message
}

// Example usage:
const messages = ['Message 1', 'Message 2', 'Message 3'];
printMessage(messages[0]);
printMessage(messages[1]);
printMessage(messages[2]);

// messages.forEach((message, index) => {
//   setTimeout(() => {
//     printMessage(message);

//     // If it's the last message, add a new line
//     if (index === messages.length - 1) {
//       process.stdout.write('\n');
//     }
//   }, index * 1000);  // Adjust the timeout based on your requirements
// });
