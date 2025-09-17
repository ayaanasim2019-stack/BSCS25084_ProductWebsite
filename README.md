# BSCS25084_ProductWebsite

My website features a fictional tech brand named TechNova, a company that sells modern electronic gadgets. I designed the website with a modern, sleek theme to match the company's vibe and make the experience feel consistent for users.

I chose to make separate files for HTML, CSS, and JS because it feels smoother and cleaner. It also makes the code easier to read and manage.

I kept my HTML minimalistic to avoid clutter with too many tags, classes, or IDs. This made it easier to focus on styling with CSS and functionality with JS.

For the CSS, my goal was to make everything look clean and polished without being too robotic. I focused on:
- Rounded borders
- Soft shadowing
- Padding for spacing
- Smooth hover animations
- Slightly deepened colors on some buttons

For JavaScript, I prioritized clean, simple logic to avoid syntax errors. For example, in the newsletter form, clicking the submit button initially caused the page to reload. I fixed this by returning false at the end of the validation function, which stops the page from submitting the inputs outside the page.

I used alerts paired with if statements for functionality. Functions like showAvail() check product availability on the Products page and display alerts accordingly.

The chatbot at the end of the "About Us" page also uses if statements. It checks user input for keywords like "hi", "bye", or "how are you" to generate responses. If the input doesn’t match, the chatbot replies with "I don't understand."
