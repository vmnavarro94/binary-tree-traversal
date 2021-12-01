## Tree Traversal
### Problem 1 `parseArrayToTree`
I created a file input in which the user can attach a file with the Array Definition of the tree, then I parse the string to obtain an object, I validate that it is an array so I can alert the user in case they upload an unwanted document.
Then once I have my array I iterate it recursively in order to parse it to a Binary tree data structure.
### Problem 2 `visual representation`
For this part, I created a recursive component structure in which I will continue rednering child nodes as long as I found the in the Binary tree.
I used flexbox to position the nodes so they resize or fill if there are 1 or 2 childs respectively.
I used a json linter to let the user know if there is a syntax error on the json
There is a validation to verify that all nodes have ids
### Problem 3 `find the smalles subtree`
For this part first I created a function that iterates the tree to find the depth.
Then to find the smallest node, I iterate the tree and for each node, I calculate the depth of the left and right child, then I choose the greater to continue looking inside recursively until the depths of left and right childs are equals, that is the deepest sub tree.

I store the reference to that node and if the node Im rendering is the same as the deepest, then I set the `border: 2px solid green`

### Little enhancements
 - Validate the input to be a file with an array inside, otherwise let the user know
 - Add a prettify button and prettify also on textarea blur
 - Add a field error message for syntax and structure error on the json (missing id field)
 - I refactorized the TreeInput component to a functional component and use react hooks

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.


