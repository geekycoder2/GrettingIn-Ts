// Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:
// • If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?

// • Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.

// Make an array of five or more usernames, including the name 'admin'.
const usernames: string[] = ['admin', 'Eric', 'John', 'Alice', 'Bob'];

// Loop through the array, and print a greeting to each user.
for (const username of usernames) {
    // If the username is 'admin', print a special greeting.
    if (username === 'admin') {
        console.log('Hello admin, would you like to see a status report?');
    } else {
        // Otherwise, print a generic greeting.
        console.log(`Hello ${username}, thank you for logging in again.`);
    }
}