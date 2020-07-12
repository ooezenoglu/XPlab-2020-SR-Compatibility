# S-R Compatibility Task

This repository contains a replication study of experiment 1 by Wühr & Seegelke (2018).

Wühr, P., & Seegelke, C. (2018). Compatibility between Physical Stimulus Size and Left-right Responses: Small is Left and Large is Right. *Journal of Cognition*, 1(1): 17, pp. 1-11. DOI: http://doi.org/10.5334/joc.19

We created the stimuli by ourselves. They are available [here](https://github.com/ooezenoglu/XPlab-2020-SR-Compatibility/tree/master/experiment/02_main/materials)

## Experiment

The study is a 2 (S-R mapping: compatible, incompatible) x 2 (correct response location: left, right) within-subjects design.

In each trial, participants either see a small square (2 x 2 cm) or a large square (4 x 4 cm) at screen center. Their task is to judge whether the square is the smaller or the larger one (forced binary choice).
In the *compatible* mapping condition, participants should respond to the small square by pressing the "q" key, and should respond to the large square by pressing the "p" key. 
In the *incompatible* mapping condition, it is the other way around: Participants should press the "q" key if they see the large square and the "p" key if they see the small square.

The experiment consists of six parts:

I.	introduction & instructions <br />
II.	practice phase (first S-R mapping) <br />
III.	main test phase (first S-R mapping) <br />
	----------optional pause---------- <br />
IV.	practice phase (second S-R mapping) <br />
V.	main test phase (second S-R mapping) <br />
VI.	post-experiment questionnaire <br />

In the first practice phase (II), participants complete 10 trials with the first S-R mapping (2 stimuli x 5 repetitions). 
In the second practice phase (IV), there are twenty trials to complete with the second S-R mapping (2 Stimuli x 10 repetitions). 
Both main phases (III and V) consist of 60 trials each (2 stimuli x 30 repetitions). 
The order of mapping conditions (compatible - incompatible vs. incompatible - compatible) will be counterbalanced across participants. 

Please refer to the [experimental design document](https://github.com/ooezenoglu/XPlab-2020-SR-Compatibility/blob/master/writing/01-experimental-design-SR-Compatibility-Task.pdf) for a more extensive explanation.

## _magpie

This experiment was built using [_magpie](https://magpie-ea.github.io/magpie-site/index.html).

## Running the experiment

1. Online Link: TBA
2. Offline: Clone the repository, run `npm install` and open `index.html`.
