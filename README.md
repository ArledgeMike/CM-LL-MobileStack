Garden Bed

-REPO
https://github.com/TopiaryCareTaker/gardenbed.git

Simple front end focused web app development stack.

Install all dependencies

-npm install

Run Webpack Dev Server

- npm run dev

Output Topiary (index.html, css file, js file)

- npm run deploy


If you would like to include a simple style and component library:

- npm install gardentools

-REPO for Garden Tools
https://www.github.com/TopiaryCareTaker/gardentools.git


-Github actions

.github/workflow/nodejs.yml
On push to your repo github actions will run the deploy command create a fresh build of the topiary.


-Godaddy Pipeline deploy

.cpaney.yml
Garden bed can be connected to Godaddy repo deploy throught their cpanel. Configure this for deployemnt. The DIST folder that was built in the github actions will be deployed through the cpanel.









