<p align="center"><a href="https://www.datamaran.com/" target="_blank"><img src="https://www.datamaran.com/wp-content/uploads/2020/10/datamaran-logo.png" width="400"></a></p>

# Datamaran Javascript Assessment

This is a simple script written to fulfil the brief outlined below.

## Brief

Convert score for each source in ranks based on their values. So highest score should be 1 and lowest
one should get the highest rank. final_score_rank column will be calculated by taking average of source
scores for each category and then calculating rank similar to how we did for the sources
Examples for rank calculations:
`10,30,20,40` -> `4,2,3,1`
`0,10,90,40` -> `4,3,1,2`
`10,20,20,50` -> `4,2,2,1` (Note here we have same rank 2 for the 2 scores but that means that next one gets rank 4)

Valid Inputs and outputs example in Json:
Example1:
Input->

`
[
  {
		"category": "Red",
		"source1": 20,
		"source2": 30,
		"source3": 40,
		"source4": 50
	},
	{
		"category": "Yellow",
		"source1": 30,
		"source2": 10,
		"source3": 40,
		"source4": 50
	}
]
`
Output->

`
[
  {
		"category": "Red",
		"source1": 4,
		"source2": 3,
		"source3": 2,
		"source4": 1,
		"final_rank": 1
	},
	{
		"category": "Yellow",
		"source1": 3,
		"source2": 4,
		"source3": 2,
		"source4": 1,
		"final_rank": 2
	}
]
`
Example2:
Input->

`
[
  {
		"category": "cat1",
		"src1": 20,
		"src2": 30,
		"src3": 40,
		"src4": 50,
		"src5": 50
	},
	{
		"category": "cat1",
		"src1": 10,
		"src2": 0,
		"src3": 20,
		"src4": 20,
		"src5": 100
	}
]
`

Output->

`
[
  {
		"category": "cat1",
		"src1": 5,
		"src2": 4,
		"src3": 3,
		"src4": 1,
		"src5": 1,
		"final_rank": 1
	},
	{
		"category": "cat1",
		"src1": 4,
		"src2": 5,
		"src3": 2,
		"src4": 2,
		"src5": 1,
		"final_rank": 2
	}
]
`

# Getting started

## Installation

Please check the official Node JS installation guide for server requirements before you start.  [Official documentation](https://nodejs.org/en/download/).

Clone the repository

    `git clone https://github.com/mikeydoesit/datamaran.git`

Switch to the repo folder

    `cd datamaran`

Run the script!

    `node main.js`

You can now view the output in your terminal
