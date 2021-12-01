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

I stored the reference to that node on the App state and if the node Im rendering is the same as the deepest, then I set the `border: 2px solid green`

### Little enhancements
 - Validate the input to be a file with an array inside, otherwise let the user know
 - Add a prettify button and prettify also on textarea blur
 - Add a field error message for syntax and structure error on the json (missing id field)
 - I refactorized the TreeInput component to a functional component and use react hooks

## Screenshots

### Example 1
<img width="1593" alt="Screen Shot 2021-11-30 at 22 07 12" src="https://user-images.githubusercontent.com/12765417/144170435-68e99f37-81b5-4b95-85d4-1f4cf3d429b2.png">

### Example 2
<img width="1596" alt="Screen Shot 2021-11-30 at 22 07 34" src="https://user-images.githubusercontent.com/12765417/144170461-abb23ca3-7fb5-4050-8919-543dc8a462e4.png">

### Example 3
<img width="1595" alt="Screen Shot 2021-11-30 at 22 07 48" src="https://user-images.githubusercontent.com/12765417/144170475-b4f20a65-1f96-441a-bbc6-03383633193c.png">

### Wrong file message
<img width="722" alt="Screen Shot 2021-11-30 at 22 08 00" src="https://user-images.githubusercontent.com/12765417/144170516-7a942e87-599e-41c1-a7dc-e04c1282e895.png">

### Wrong structure message
<img width="767" alt="Screen Shot 2021-11-30 at 22 08 14" src="https://user-images.githubusercontent.com/12765417/144170544-50469fa2-5303-40ba-9cdd-f65ba846a51c.png">

### Syntax error message
![image](https://user-images.githubusercontent.com/12765417/144170620-6d9b3e78-7cda-488a-b03d-6decfdd6f4e3.png)


## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.


