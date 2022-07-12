import projectDefinitions from '../dummy-data/projectDefinitions.json';

const getProject = project => projectDefinitions[project];

export {
    getProject
};