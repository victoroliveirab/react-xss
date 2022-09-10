# Direct Insertion

## Scenario

Given a page where there is a colaborative TODO List (could also be a comment section), there is a text field (`<input type="text" />`) where a visitor can input data and publish. Also, when the page loads, all the data published is shown.

## Server

Before sending the requested data to the frontend, the server iterates through the collection of entries and creates (sort of) a stripped list, ie HTML is sent in text format. An example of a payload is shown below.

(INSERT IMAGE)

## Execution

After visiting the page receiving the payload shown above, this is what happens:

(INSERT IMAGE)

Observing the image, it turns out that the code was inserted as text into the page instead of being interpreted as _markup_, which indicates that the attack failed.

## React Code Analysis

