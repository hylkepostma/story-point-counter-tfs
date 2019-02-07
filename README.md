# Story Point counter for TFS

Calculates the total Story Points of all selected User Stories (rows) in the TFS backlog.



## Usage

First, use `CTRL` + `click` or `SHIFT` + `click` to select multiple User Stories (rows):

![selected-rows](images/selected-rows.png)



Now, click the extension's icon ("Count selected Story Points") to see the total amount of Story Points of the selected User Stories:

![counted-story-points](images/counted-story-points.png)



## Requirements

Created for in browser (Chrome) usage of Microsoft Visual Studio Team Foundation Server (Version 15).



## Current limitations

Only works if the Story Points column is your fifth column. 

Also, make sure all User Stories (rows) you want to count are visible, otherwise they might be ignored. When you scroll rows out of sight VS removes the rows from the DOM and are no longer accessible.